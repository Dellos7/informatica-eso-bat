const DEFAULT_BASE_URL = "http://localhost:5678";
const DEFAULT_PATH = "prueba";
const STORAGE_KEY = "n8n_pokedex_config_v1";

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

const FALLBACK_IMAGE =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><circle cx="48" cy="48" r="40" fill="#1e293b" stroke="#475569" stroke-width="4"/><path d="M8 48h80" stroke="#475569" stroke-width="4"/><circle cx="48" cy="48" r="10" fill="#0f172a" stroke="#475569" stroke-width="4"/></svg>'
  );

const elements = {
  form: document.getElementById("pokemon-form"),
  baseUrl: document.getElementById("base-url"),
  webhookMode: document.getElementById("webhook-mode"),
  webhookPath: document.getElementById("webhook-path"),
  modePill: document.getElementById("mode-pill"),
  fullUrlPreview: document.getElementById("full-url-preview"),
  resetLocalBtn: document.getElementById("reset-local-btn"),
  pokemonInput: document.getElementById("pokemon-input"),
  submitBtn: document.getElementById("submit-btn"),
  statusBadge: document.getElementById("status-badge"),
  emptyState: document.getElementById("empty-state"),
  errorState: document.getElementById("error-state"),
  errorTitle: document.getElementById("error-title"),
  errorMessage: document.getElementById("error-message"),
  errorHint: document.getElementById("error-hint"),
  pokemonResult: document.getElementById("pokemon-result"),
  pokeImage: document.getElementById("poke-image"),
  pokeFicha: document.getElementById("poke-ficha"),
  pokeType: document.getElementById("poke-type"),
  pokeAltura: document.getElementById("poke-altura"),
  pokePeso: document.getElementById("poke-peso"),
  historySection: document.getElementById("history-section"),
  historyList: document.getElementById("history-list"),
  clearHistoryBtn: document.getElementById("clear-history-btn"),
  rawResponse: document.getElementById("raw-response"),
  curlPreview: document.getElementById("curl-preview"),
  copyCurlBtn: document.getElementById("copy-curl-btn"),
  tabButtons: document.querySelectorAll(".tab-btn"),
  tabResponse: document.getElementById("tab-response"),
  tabRequest: document.getElementById("tab-request"),
  chips: document.querySelectorAll(".chip"),
};

const sessionHistory = [];

function loadSavedConfig() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw);
    if (saved.baseUrl) elements.baseUrl.value = saved.baseUrl;
    if (saved.mode === "webhook" || saved.mode === "webhook-test") {
      elements.webhookMode.value = saved.mode;
    }
    if (saved.path) elements.webhookPath.value = saved.path;
  } catch {
    // Ignorar errores de almacenamiento local
  }
}

function saveConfig() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        baseUrl: elements.baseUrl.value.trim(),
        mode: elements.webhookMode.value,
        path: elements.webhookPath.value.trim(),
      })
    );
  } catch {
    // Ignorar errores de almacenamiento local
  }
}

function buildWebhookUrl() {
  const rawBase = elements.baseUrl.value.trim() || DEFAULT_BASE_URL;
  const cleanBase = rawBase.replace(/\/+$/, "");
  const mode = elements.webhookMode.value || "webhook-test";
  const cleanPath = (elements.webhookPath.value.trim() || DEFAULT_PATH).replace(/^\/+/, "");
  return `${cleanBase}/${mode}/${cleanPath}`;
}

function buildCurlCommand(url, pokemonName) {
  const safePokemon = (pokemonName || "snorlax").replace(/'/g, "");
  return `curl -s -X POST ${url} \\\n  -H "Content-Type: application/json" \\\n  -d '{"pokemon": "${safePokemon}"}'`;
}

function updatePreviews() {
  const url = buildWebhookUrl();
  const isProd = elements.webhookMode.value === "webhook";

  elements.fullUrlPreview.textContent = url;
  elements.modePill.textContent = isProd ? "Modo Producción" : "Modo Test";
  elements.modePill.className = `pill ${isProd ? "pill-prod" : "pill-test"}`;

  const currentPokemon = elements.pokemonInput.value.trim() || "snorlax";
  elements.curlPreview.textContent = buildCurlCommand(url, currentPokemon);
  saveConfig();
}

function setStatus(type, text) {
  elements.statusBadge.className = `status-badge status-${type}`;
  elements.statusBadge.textContent = text;
}

function setLoading(isLoading) {
  elements.submitBtn.disabled = isLoading;
  elements.submitBtn.classList.toggle("loading", isLoading);
}

function showError(title, message, hint) {
  elements.emptyState.classList.add("hidden");
  elements.pokemonResult.classList.add("hidden");
  elements.errorState.classList.remove("hidden");

  elements.errorTitle.textContent = title;
  elements.errorMessage.textContent = message;
  elements.errorHint.textContent = hint || "";
  elements.errorHint.classList.toggle("hidden", !hint);
}

function renderPokemonCard(data) {
  elements.emptyState.classList.add("hidden");
  elements.errorState.classList.add("hidden");
  elements.pokemonResult.classList.remove("hidden");

  const ficha = data.ficha || "Pokémon desconocido";
  const altura = data.altura || "—";
  const peso = data.peso || "—";
  const tipo = (data.tipo_principal || "desconocido").toString().toLowerCase();
  const imagen = data.imagen || FALLBACK_IMAGE;

  elements.pokeFicha.textContent = ficha;
  elements.pokeAltura.textContent = altura;
  elements.pokePeso.textContent = peso;
  elements.pokeType.textContent = tipo;
  elements.pokeType.style.backgroundColor = TYPE_COLORS[tipo] || "#64748b";

  elements.pokeImage.src = imagen;
  elements.pokeImage.alt = `Sprite de ${ficha}`;
  elements.pokeImage.onerror = () => {
    elements.pokeImage.src = FALLBACK_IMAGE;
  };
}

function addToHistory(query, data) {
  const normalizedQuery = query.toLowerCase();
  const existingIndex = sessionHistory.findIndex((item) => item.query === normalizedQuery);
  if (existingIndex !== -1) {
    sessionHistory.splice(existingIndex, 1);
  }
  sessionHistory.unshift({ query: normalizedQuery, data });
  if (sessionHistory.length > 6) {
    sessionHistory.pop();
  }
  renderHistory();
}

function renderHistory() {
  if (sessionHistory.length === 0) {
    elements.historySection.classList.add("hidden");
    elements.historyList.innerHTML = "";
    return;
  }

  elements.historySection.classList.remove("hidden");
  elements.historyList.innerHTML = "";

  sessionHistory.forEach((entry) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "history-item";
    btn.textContent = entry.data.ficha || entry.query;
    btn.addEventListener("click", () => {
      elements.pokemonInput.value = entry.query;
      updatePreviews();
      renderPokemonCard(entry.data);
      elements.rawResponse.textContent = JSON.stringify(entry.data, null, 2);
      setStatus("ok", "Desde historial");
    });
    elements.historyList.appendChild(btn);
  });
}

function getHttpErrorHint(status, mode) {
  if (status === 404) {
    return mode === "webhook-test"
      ? "Error 404: En n8n recuerda pulsar «Listen for test event» dentro del nodo Webhook antes de enviar la petición, o cambia a Modo Producción si el flujo ya está activo."
      : "Error 404: Comprueba que el workflow «Primera práctica» esté activo en n8n y que el path sea exactamente «prueba».";
  }
  if (status === 500) {
    return "Error 500: El flujo de n8n falló al consultar la PokéAPI. Verifica que el nombre del Pokémon existe y está bien escrito (en inglés o número de Pokédex).";
  }
  if (status === 502 || status === 503) {
    return "Error de puerta de enlace: n8n no responde detrás del túnel de Pinggy. Revisa que el contenedor «n8n» esté arrancado.";
  }
  return "Revisa la pestaña «Respuesta JSON» y la ejecución del flujo en n8n para ver el detalle.";
}

async function queryPokemon(pokemonRaw) {
  const pokemon = pokemonRaw.trim();
  if (!pokemon) {
    elements.pokemonInput.focus();
    return;
  }

  const url = buildWebhookUrl();
  const mode = elements.webhookMode.value;
  updatePreviews();

  setLoading(true);
  setStatus("loading", "Consultando n8n...");
  const startTime = performance.now();

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pokemon }),
    });

    const elapsedMs = Math.round(performance.now() - startTime);
    const rawText = await response.text();

    let parsedBody = null;
    try {
      parsedBody = rawText ? JSON.parse(rawText) : null;
    } catch {
      parsedBody = null;
    }

    if (!response.ok) {
      elements.rawResponse.textContent = parsedBody
        ? JSON.stringify(parsedBody, null, 2)
        : rawText || `(Sin cuerpo de respuesta, HTTP ${response.status})`;
      setStatus("err", `HTTP ${response.status} · ${elapsedMs} ms`);
      showError(
        `n8n devolvió el código HTTP ${response.status}`,
        `No se pudo obtener la ficha para «${pokemon}».`,
        getHttpErrorHint(response.status, mode)
      );
      return;
    }

    if (!parsedBody) {
      elements.rawResponse.textContent = rawText || "(Respuesta vacía)";
      setStatus("err", `Respuesta no JSON · ${elapsedMs} ms`);
      showError(
        "La respuesta recibida no es JSON válido",
        "El servidor respondió con HTML o texto plano en lugar del JSON del nodo «Respond to Webhook».",
        "Si usas Pinggy, abre primero la URL del túnel una vez en el navegador o revisa que el nodo «Respond to Webhook» esté configurado con «First Incoming Item»."
      );
      return;
    }

    const item = Array.isArray(parsedBody) ? parsedBody[0] : parsedBody;
    elements.rawResponse.textContent = JSON.stringify(parsedBody, null, 2);

    if (!item || (!item.ficha && !item.imagen)) {
      setStatus("err", `Formato inesperado · ${elapsedMs} ms`);
      showError(
        "El JSON no contiene los campos esperados",
        "Se esperaban los campos ficha, altura, peso, tipo_principal e imagen.",
        "Comprueba el nodo «Edit Fields» de tu workflow en n8n."
      );
      return;
    }

    setStatus("ok", `HTTP ${response.status} · ${elapsedMs} ms`);
    renderPokemonCard(item);
    addToHistory(pokemon, item);
  } catch (err) {
    const elapsedMs = Math.round(performance.now() - startTime);
    elements.rawResponse.textContent = `// Error de red o CORS:\n${err.message}`;
    setStatus("err", `Error de conexión · ${elapsedMs} ms`);
    showError(
      "No se pudo conectar con el Webhook de n8n",
      `Detalle técnico: ${err.message}`,
      "Comprueba que n8n está encendido, que la URL (localhost o Pinggy) es correcta y que el nodo Webhook de n8n permite CORS (Options → Allowed Origins (CORS) → *)."
    );
  } finally {
    setLoading(false);
  }
}

function initEvents() {
  elements.baseUrl.addEventListener("input", updatePreviews);
  elements.webhookMode.addEventListener("change", updatePreviews);
  elements.webhookPath.addEventListener("input", updatePreviews);
  elements.pokemonInput.addEventListener("input", updatePreviews);

  elements.resetLocalBtn.addEventListener("click", () => {
    elements.baseUrl.value = DEFAULT_BASE_URL;
    updatePreviews();
  });

  elements.form.addEventListener("submit", (event) => {
    event.preventDefault();
    queryPokemon(elements.pokemonInput.value);
  });

  elements.chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const value = chip.dataset.pokemon || "";
      elements.pokemonInput.value = value;
      updatePreviews();
      queryPokemon(value);
    });
  });

  elements.clearHistoryBtn.addEventListener("click", () => {
    sessionHistory.length = 0;
    renderHistory();
  });

  elements.tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.tab;
      elements.tabButtons.forEach((b) => {
        const active = b === btn;
        b.classList.toggle("active", active);
        b.setAttribute("aria-selected", String(active));
      });
      elements.tabResponse.classList.toggle("hidden", target !== "response");
      elements.tabRequest.classList.toggle("hidden", target !== "request");
    });
  });

  elements.copyCurlBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(elements.curlPreview.textContent);
      elements.copyCurlBtn.textContent = "¡Copiado!";
      setTimeout(() => {
        elements.copyCurlBtn.textContent = "Copiar cURL";
      }, 1600);
    } catch {
      elements.copyCurlBtn.textContent = "No disponible";
    }
  });
}

loadSavedConfig();
initEvents();
updatePreviews();
