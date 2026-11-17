const STORAGE_KEY = "pokedex_n8n_settings_v1";
const DEFAULT_SETTINGS = {
  baseUrl: "http://localhost:5678",
  mode: "webhook-test",
  path: "prueba",
};

const TYPE_COLORS = {
  normal: "#94a3b8",
  fire: "#f97316",
  water: "#3b82f6",
  electric: "#eab308",
  grass: "#22c55e",
  ice: "#06b6d4",
  fighting: "#dc2626",
  poison: "#a855f7",
  ground: "#ca8a04",
  flying: "#6366f1",
  psychic: "#ec4899",
  bug: "#84cc16",
  rock: "#78716c",
  ghost: "#7c3aed",
  dragon: "#4f46e5",
  dark: "#334155",
  steel: "#64748b",
  fairy: "#f472b6",
};

const FALLBACK_SPRITE =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><circle cx="48" cy="48" r="40" fill="#e2e8f0" stroke="#475569" stroke-width="4"/><path d="M8 48h80" stroke="#475569" stroke-width="4"/><circle cx="48" cy="48" r="10" fill="#ffffff" stroke="#475569" stroke-width="4"/></svg>'
  );

const elements = {
  searchForm: document.getElementById("search-form"),
  pokemonInput: document.getElementById("pokemon-input"),
  searchBtn: document.getElementById("search-btn"),
  pickChips: document.querySelectorAll(".pick-chip"),

  stateIdle: document.getElementById("state-idle"),
  stateLoading: document.getElementById("state-loading"),
  loadingText: document.getElementById("loading-text"),
  stateError: document.getElementById("state-error"),
  errorTitle: document.getElementById("error-title"),
  errorDesc: document.getElementById("error-desc"),
  stateResult: document.getElementById("state-result"),

  pokeImage: document.getElementById("poke-image"),
  pokeFicha: document.getElementById("poke-ficha"),
  pokeType: document.getElementById("poke-type"),
  pokeAltura: document.getElementById("poke-altura"),
  pokePeso: document.getElementById("poke-peso"),

  historyBar: document.getElementById("history-bar"),
  historyList: document.getElementById("history-list"),

  settingsBtn: document.getElementById("settings-btn"),
  settingsDialog: document.getElementById("settings-dialog"),
  settingsForm: document.getElementById("settings-form"),
  closeSettingsBtn: document.getElementById("close-settings-btn"),
  resetSettingsBtn: document.getElementById("reset-settings-btn"),
  baseUrlInput: document.getElementById("base-url"),
  modeSelect: document.getElementById("webhook-mode"),
  pathInput: document.getElementById("webhook-path"),
  endpointPreview: document.getElementById("endpoint-preview"),
};

let settings = loadSettings();
const recentPokemon = [];

function loadSettings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_SETTINGS };
    const parsed = JSON.parse(raw);
    return {
      baseUrl: parsed.baseUrl || DEFAULT_SETTINGS.baseUrl,
      mode: parsed.mode === "webhook" ? "webhook" : "webhook-test",
      path: parsed.path || DEFAULT_SETTINGS.path,
    };
  } catch {
    return { ...DEFAULT_SETTINGS };
  }
}

function saveSettings(nextSettings) {
  settings = nextSettings;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch {
    // Ignorar errores de almacenamiento local
  }
}

function getWebhookUrl(current = settings) {
  const cleanBase = (current.baseUrl || DEFAULT_SETTINGS.baseUrl).trim().replace(/\/+$/, "");
  const cleanPath = (current.path || DEFAULT_SETTINGS.path).trim().replace(/^\/+/, "");
  return `${cleanBase}/${current.mode}/${cleanPath}`;
}

function showScreenState(activeName) {
  elements.stateIdle.classList.toggle("hidden", activeName !== "idle");
  elements.stateLoading.classList.toggle("hidden", activeName !== "loading");
  elements.stateError.classList.toggle("hidden", activeName !== "error");
  elements.stateResult.classList.toggle("hidden", activeName !== "result");
}

function setLoading(isLoading, pokemonName = "") {
  elements.searchBtn.disabled = isLoading;
  elements.searchBtn.classList.toggle("loading", isLoading);
  if (isLoading) {
    elements.loadingText.textContent = `Buscando a «${pokemonName}»...`;
    showScreenState("loading");
  }
}

function showError(title, description) {
  elements.errorTitle.textContent = title;
  elements.errorDesc.textContent = description;
  showScreenState("error");
}

function renderPokemon(data) {
  const ficha = data.ficha || "Pokémon desconocido";
  const tipo = (data.tipo_principal || "normal").toString().toLowerCase();
  const imagen = data.imagen || FALLBACK_SPRITE;

  elements.pokeFicha.textContent = ficha;
  elements.pokeAltura.textContent = data.altura || "—";
  elements.pokePeso.textContent = data.peso || "—";
  elements.pokeType.textContent = tipo;
  elements.pokeType.style.backgroundColor = TYPE_COLORS[tipo] || "#64748b";

  elements.pokeImage.src = imagen;
  elements.pokeImage.alt = `Sprite de ${ficha}`;
  elements.pokeImage.onerror = () => {
    elements.pokeImage.src = FALLBACK_SPRITE;
  };

  showScreenState("result");
}

function addRecent(query, data) {
  const key = query.toLowerCase();
  const existingIdx = recentPokemon.findIndex((item) => item.key === key);
  if (existingIdx !== -1) {
    recentPokemon.splice(existingIdx, 1);
  }
  recentPokemon.unshift({ key, data });
  if (recentPokemon.length > 5) {
    recentPokemon.pop();
  }
  renderRecent();
}

function renderRecent() {
  if (recentPokemon.length === 0) {
    elements.historyBar.classList.add("hidden");
    elements.historyList.innerHTML = "";
    return;
  }

  elements.historyBar.classList.remove("hidden");
  elements.historyList.innerHTML = "";

  recentPokemon.forEach((entry) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "history-chip";

    const img = document.createElement("img");
    img.src = entry.data.imagen || FALLBACK_SPRITE;
    img.alt = "";

    const span = document.createElement("span");
    span.textContent = entry.data.ficha || entry.key;

    btn.append(img, span);
    btn.addEventListener("click", () => {
      elements.pokemonInput.value = entry.key;
      renderPokemon(entry.data);
    });
    elements.historyList.appendChild(btn);
  });
}

async function searchPokemon(rawName) {
  const pokemon = rawName.trim();
  if (!pokemon) {
    elements.pokemonInput.focus();
    return;
  }

  const webhookUrl = getWebhookUrl();
  setLoading(true, pokemon);

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pokemon }),
    });

    const rawText = await response.text();
    let payload = null;
    try {
      payload = rawText ? JSON.parse(rawText) : null;
    } catch {
      payload = null;
    }

    if (!response.ok) {
      if (response.status === 404) {
        showError(
          "Webhook no disponible (404)",
          "En modo Test recuerda pulsar «Listen for test event» en n8n, o activa el flujo y selecciona Producción en ⚙️."
        );
      } else {
        showError(
          "Pokémon no encontrado",
          `No se encontraron datos para «${pokemon}». Revisa el nombre o el número de Pokédex.`
        );
      }
      return;
    }

    const item = Array.isArray(payload) ? payload[0] : payload;
    if (!item || (!item.ficha && !item.imagen)) {
      showError(
        "Pokémon no encontrado",
        `La respuesta para «${pokemon}» no contiene datos válidos.`
      );
      return;
    }

    renderPokemon(item);
    addRecent(pokemon, item);
  } catch {
    showError(
      "Sin conexión con la Pokédex",
      "No se pudo conectar con n8n. Comprueba que está en marcha y revisa la URL en ⚙️ (y CORS en el nodo Webhook si aplica)."
    );
  } finally {
    setLoading(false);
  }
}

function syncSettingsForm() {
  elements.baseUrlInput.value = settings.baseUrl;
  elements.modeSelect.value = settings.mode;
  elements.pathInput.value = settings.path;
  updateEndpointPreview();
}

function updateEndpointPreview() {
  elements.endpointPreview.textContent = getWebhookUrl({
    baseUrl: elements.baseUrlInput.value,
    mode: elements.modeSelect.value,
    path: elements.pathInput.value,
  });
}

elements.searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  searchPokemon(elements.pokemonInput.value);
});

elements.pickChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    const pokemon = chip.dataset.pokemon || "";
    elements.pokemonInput.value = pokemon;
    searchPokemon(pokemon);
  });
});

elements.settingsBtn.addEventListener("click", () => {
  syncSettingsForm();
  elements.settingsDialog.showModal();
});

elements.closeSettingsBtn.addEventListener("click", () => {
  elements.settingsDialog.close();
});

elements.baseUrlInput.addEventListener("input", updateEndpointPreview);
elements.modeSelect.addEventListener("change", updateEndpointPreview);
elements.pathInput.addEventListener("input", updateEndpointPreview);

elements.resetSettingsBtn.addEventListener("click", () => {
  elements.baseUrlInput.value = DEFAULT_SETTINGS.baseUrl;
  elements.modeSelect.value = DEFAULT_SETTINGS.mode;
  elements.pathInput.value = DEFAULT_SETTINGS.path;
  updateEndpointPreview();
});

elements.settingsForm.addEventListener("submit", () => {
  saveSettings({
    baseUrl: elements.baseUrlInput.value.trim() || DEFAULT_SETTINGS.baseUrl,
    mode: elements.modeSelect.value === "webhook" ? "webhook" : "webhook-test",
    path: elements.pathInput.value.trim() || DEFAULT_SETTINGS.path,
  });
});
