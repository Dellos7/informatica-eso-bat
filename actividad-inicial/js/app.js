// ==========================================================================
// CONTROLADOR PRINCIPAL DE LA SPA - TECH PASSPORT
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Estado global de la aplicación
  const state = {
    currentScreen: 0,
    courseId: null,
    course: null,
    profile: {
      nombre: '',
      apellidos: '',
      email: '',
      alias: '',
      avatarEmoji: '⚡',
      avatarName: 'Constructor/a',
      dispositivosCasa: '',
      soCasa: ''
    },
    challenges: {
      currentIndex: 0,
      results: [] // { id, attempts, usedHint, solved }
    },
    interests: {
      selectedSkills: [],
      estiloAprendizaje: '',
      aficionesDiaADia: '',
      planesFuturo: '',
      ideaProyecto: ''
    },
    completedAt: null
  };

  // Avatares disponibles
  const AVATARS = [
    { emoji: '⚡', name: 'Constructor/a' },
    { emoji: '🛡️', name: 'Ciberguardián/a' },
    { emoji: '🤖', name: 'Domador/a de IA' },
    { emoji: '🕵️', name: 'Detective Digital' },
    { emoji: '🚀', name: 'Explorador/a' },
    { emoji: '🎨', name: 'Diseñador/a Tech' }
  ];

  // Elementos DOM principales
  const screens = [
    document.getElementById('screen-course'),
    document.getElementById('screen-profile'),
    document.getElementById('screen-challenges'),
    document.getElementById('screen-interests'),
    document.getElementById('screen-passport')
  ];

  const progressLine = document.getElementById('progress-line-fill');
  const stepNodes = document.querySelectorAll('.step-node');
  const courseBadgeIndicator = document.getElementById('header-course-badge');

  // Inicialización
  init();

  function init() {
    renderCourseGrid();
    renderAvatarGrid();
    setupRadioCards();
    setupWelcomeButtons();
    checkUrlParams();
    updateProgressUI();
  }

  // 1. Detectar parámetro ?curso= en la URL
  function checkUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const cursoParam = params.get('curso') || params.get('c');
    if (cursoParam && COURSES_DATA[cursoParam.toLowerCase()]) {
      selectCourse(cursoParam.toLowerCase());
      // No salta a la pantalla 1: se queda en la pantalla de bienvenida con el botón "Empezar"
    }
  }

  // Configurar botones de la pantalla de bienvenida
  function setupWelcomeButtons() {
    const startBtn = document.getElementById('btn-start-course');
    if (startBtn) {
      startBtn.addEventListener('click', () => {
        if (!state.course) return;
        goToScreen(1); // Ahora sí salta a la Pantalla 1 (Perfil)
      });
    }
  }

  function resetToCourseSelector() {
    state.courseId = null;
    state.course = null;

    if (courseBadgeIndicator) {
      courseBadgeIndicator.style.display = 'none';
    }

    const selectorView = document.getElementById('course-selector-view');
    const welcomeView = document.getElementById('course-welcome-view');
    if (selectorView) selectorView.style.display = 'block';
    if (welcomeView) welcomeView.style.display = 'none';
  }

  // 2. Renderizar selector de cursos (Pantalla 0)
  function renderCourseGrid() {
    const container = document.getElementById('course-grid-container');
    if (!container) return;
    container.innerHTML = '';

    Object.values(COURSES_DATA).forEach(course => {
      const card = document.createElement('div');
      card.className = 'course-card';
      card.style.setProperty('--course-color', course.themeColor);
      card.innerHTML = `
        <span class="course-card-badge">${course.code}</span>
        <h3>${course.name}</h3>
        <p>${course.tagline}</p>
      `;
      card.addEventListener('click', () => {
        selectCourse(course.id);
      });
      container.appendChild(card);
    });
  }

  // 3. Selección y presentación de bienvenida de la asignatura
  function selectCourse(courseId) {
    state.courseId = courseId;
    state.course = COURSES_DATA[courseId];

    // Actualizar indicador en la cabecera
    if (courseBadgeIndicator) {
      courseBadgeIndicator.textContent = state.course.shortName;
      courseBadgeIndicator.style.display = 'inline-flex';
      courseBadgeIndicator.style.borderColor = state.course.themeColor;
      courseBadgeIndicator.style.color = state.course.themeColor;
    }

    // Inicializar seguimiento de retos
    state.challenges.currentIndex = 0;
    state.challenges.results = state.course.challenges.map(c => ({
      id: c.id,
      attempts: 0,
      usedHint: false,
      solved: false
    }));

    // Renderizar contenidos dependientes del curso
    renderSkillsGrid();

    // Actualizar y mostrar la vista de bienvenida exclusiva con el botón "Empezar"
    const selectorView = document.getElementById('course-selector-view');
    const welcomeView = document.getElementById('course-welcome-view');
    const badgeEl = document.getElementById('welcome-badge');
    const titleEl = document.getElementById('welcome-title');
    const descEl = document.getElementById('welcome-description');

    if (badgeEl) {
      badgeEl.textContent = state.course.code;
      badgeEl.style.color = state.course.themeColor;
      badgeEl.style.borderColor = state.course.themeColor;
    }
    if (titleEl) {
      titleEl.textContent = state.course.name;
    }
    if (descEl) {
      descEl.textContent = state.course.description || state.course.tagline;
    }

    if (selectorView) selectorView.style.display = 'none';
    if (welcomeView) welcomeView.style.display = 'block';
  }

  // 4. Renderizar avatares (Pantalla 1)
  function renderAvatarGrid() {
    const container = document.getElementById('avatar-grid-container');
    if (!container) return;
    container.innerHTML = '';

    AVATARS.forEach((av, idx) => {
      const card = document.createElement('div');
      card.className = `avatar-card ${idx === 0 ? 'selected' : ''}`;
      card.innerHTML = `
        <span class="avatar-emoji">${av.emoji}</span>
        <span class="avatar-name">${av.name}</span>
      `;
      card.addEventListener('click', () => {
        container.querySelectorAll('.avatar-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        state.profile.avatarEmoji = av.emoji;
        state.profile.avatarName = av.name;
      });
      container.appendChild(card);
    });
  }

  // 5. Configurar radio cards (Dispositivos, SO, Estilo aprendizaje)
  function setupRadioCards() {
    setupGroup('dispositivos-group', (val) => state.profile.dispositivosCasa = val);
    setupGroup('so-group', (val) => state.profile.soCasa = val);
    setupGroup('learning-style-group', (val) => state.interests.estiloAprendizaje = val);
  }

  function setupGroup(containerId, onSelect) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const cards = container.querySelectorAll('.radio-card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        cards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        const val = card.getAttribute('data-value');
        onSelect(val);
      });
    });
  }

  // 6. Navegación entre pantallas
  function goToScreen(index) {
    if (index < 0 || index >= screens.length) return;

    if (index === 0) {
      resetToCourseSelector();
    }

    // Validación de avance desde Pantalla 1 (Perfil)
    if (state.currentScreen === 1 && index > 1) {
      const nombre = document.getElementById('input-nombre').value.trim();
      const apellidos = document.getElementById('input-apellidos').value.trim();
      const email = document.getElementById('input-email').value.trim();
      const alias = document.getElementById('input-alias').value.trim() || nombre;

      if (!nombre || !apellidos) {
        alert('Por favor, indica tu nombre y apellidos para generar tu acreditación oficial.');
        return;
      }

      state.profile.nombre = nombre;
      state.profile.apellidos = apellidos;
      state.profile.email = email;
      state.profile.alias = alias;

      // Cargar el primer reto antes de mostrar pantalla 2
      loadCurrentChallenge();
    }

    // Validación de avance desde Pantalla 3 (Intereses)
    if (state.currentScreen === 3 && index > 3) {
      state.interests.aficionesDiaADia = document.getElementById('input-aficiones').value.trim();
      state.interests.planesFuturo = document.getElementById('input-futuro').value.trim();
      state.interests.ideaProyecto = document.getElementById('input-idea').value.trim();

      // Al entrar a pantalla final, generar el pasaporte y transmitir datos
      state.completedAt = new Date().toISOString();
      renderPassportBadge();
      sendDataToTeacher();
    }

    screens.forEach((s, idx) => {
      s.classList.toggle('active', idx === index);
    });

    state.currentScreen = index;
    updateProgressUI();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Actualizar barra de progreso visual
  function updateProgressUI() {
    const percentage = (state.currentScreen / (screens.length - 1)) * 100;
    if (progressLine) progressLine.style.width = `${percentage}%`;

    const stepItems = document.querySelectorAll('.step-item');
    stepItems.forEach((item, idx) => {
      item.classList.remove('active', 'completed');
      const node = item.querySelector('.step-node');
      if (idx === state.currentScreen) {
        item.classList.add('active');
        if (node) {
          node.classList.remove('completed');
          node.classList.add('active');
          node.textContent = idx + 1;
        }
      } else if (idx < state.currentScreen) {
        item.classList.add('completed');
        if (node) {
          node.classList.remove('active');
          node.classList.add('completed');
          node.innerHTML = '✓';
        }
      } else {
        if (node) {
          node.classList.remove('active', 'completed');
          node.textContent = idx + 1;
        }
      }
    });
  }

  // 7. Lógica de Minirretos (Pantalla 2)
  function loadCurrentChallenge() {
    if (!state.course) return;

    const challenges = state.course.challenges;
    const currentChallenge = challenges[state.challenges.currentIndex];
    const challengeState = state.challenges.results[state.challenges.currentIndex];

    document.getElementById('challenge-counter').textContent = 
      `Reto ${state.challenges.currentIndex + 1} de ${challenges.length} (${state.course.code})`;
    document.getElementById('challenge-title').textContent = currentChallenge.title;
    document.getElementById('challenge-context').textContent = currentChallenge.context;
    document.getElementById('challenge-instruction').textContent = currentChallenge.instruction;

    // Pista
    const hintContent = document.getElementById('hint-content');
    hintContent.textContent = currentChallenge.hint;
    hintContent.classList.remove('visible');

    // Feedback
    const feedbackBox = document.getElementById('challenge-feedback');
    feedbackBox.className = 'feedback-box';
    feedbackBox.style.display = 'none';

    // Botón siguiente reto
    const nextBtn = document.getElementById('btn-next-challenge');
    nextBtn.disabled = true;

    // Opciones
    const optionsContainer = document.getElementById('challenge-options-container');
    optionsContainer.innerHTML = '';

    currentChallenge.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'option-btn';
      btn.innerHTML = `<span>🔹</span> <span>${opt.text}</span>`;
      btn.addEventListener('click', () => {
        handleOptionClick(opt, btn, currentChallenge, challengeState);
      });
      optionsContainer.appendChild(btn);
    });
  }

  function handleOptionClick(option, btnElement, challenge, challengeState) {
    challengeState.attempts++;
    const optionsContainer = document.getElementById('challenge-options-container');
    const allBtns = optionsContainer.querySelectorAll('.option-btn');
    const feedbackBox = document.getElementById('challenge-feedback');
    const nextBtn = document.getElementById('btn-next-challenge');

    if (option.correct) {
      challengeState.solved = true;
      allBtns.forEach(b => b.classList.add('locked'));
      btnElement.classList.add('correct');

      feedbackBox.className = 'feedback-box correct visible';
      feedbackBox.style.display = 'flex';
      feedbackBox.innerHTML = `<span>🌟</span> <div><strong>¡Excelente deducción!</strong> ${challenge.explanation}</div>`;

      nextBtn.disabled = false;
    } else {
      btnElement.classList.add('incorrect');
      feedbackBox.className = 'feedback-box retrying visible';
      feedbackBox.style.display = 'flex';
      feedbackBox.innerHTML = `<span>💡</span> <div>¡Casi! No es la opción óptima. Revisa el enunciado o pulsa en <strong>"¿Necesitas una pista?"</strong> para volver a intentarlo.</div>`;
    }
  }

  // Toggle de pista
  const hintBtn = document.getElementById('btn-toggle-hint');
  if (hintBtn) {
    hintBtn.addEventListener('click', () => {
      const hintContent = document.getElementById('hint-content');
      hintContent.classList.toggle('visible');
      if (hintContent.classList.contains('visible')) {
        state.challenges.results[state.challenges.currentIndex].usedHint = true;
      }
    });
  }

  // Botón Siguiente Reto
  const nextChallengeBtn = document.getElementById('btn-next-challenge');
  if (nextChallengeBtn) {
    nextChallengeBtn.addEventListener('click', () => {
      if (state.challenges.currentIndex < state.course.challenges.length - 1) {
        state.challenges.currentIndex++;
        loadCurrentChallenge();
      } else {
        // Fin de los retos -> pasar a intereses
        goToScreen(3);
      }
    });
  }

  // 8. Renderizar habilidades para desbloquear (Pantalla 3)
  function renderSkillsGrid() {
    const container = document.getElementById('skills-grid-container');
    if (!container || !state.course) return;
    container.innerHTML = '';
    state.interests.selectedSkills = [];

    state.course.skillsToUnlock.forEach(skill => {
      const card = document.createElement('div');
      card.className = 'skill-card';
      card.innerHTML = `
        <span class="skill-icon">${skill.icon}</span>
        <span class="skill-text">${skill.label}</span>
      `;
      card.addEventListener('click', () => {
        const idx = state.interests.selectedSkills.indexOf(skill.label);
        if (idx > -1) {
          state.interests.selectedSkills.splice(idx, 1);
          card.classList.remove('selected');
        } else {
          if (state.interests.selectedSkills.length >= 3) {
            alert('Puedes seleccionar un máximo de 3 habilidades principales.');
            return;
          }
          state.interests.selectedSkills.push(skill.label);
          card.classList.add('selected');
        }
      });
      container.appendChild(card);
    });
  }

  // 9. Generador del Carnet Digital en Canvas (Pantalla 4)
  function renderPassportBadge() {
    const canvas = document.getElementById('passportCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Dimensiones HD (800 x 480 px)
    canvas.width = 800;
    canvas.height = 480;

    // Fondo degradado tecnológico oscuro
    const bgGrad = ctx.createLinearGradient(0, 0, 800, 480);
    bgGrad.addColorStop(0, '#0a0f1d');
    bgGrad.addColorStop(1, '#111827');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 800, 480);

    // Malla decorativa de fondo
    ctx.strokeStyle = 'rgba(58, 134, 255, 0.08)';
    ctx.lineWidth = 1;
    for (let x = 0; x < 800; x += 32) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 480);
      ctx.stroke();
    }
    for (let y = 0; y < 480; y += 32) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(800, y);
      ctx.stroke();
    }

    // Borde brillante de tarjeta
    ctx.strokeStyle = state.course ? state.course.themeColor : '#00f5d4';
    ctx.lineWidth = 3;
    ctx.strokeRect(16, 16, 768, 448);

    // Esquinas cibernéticas
    const cornerSize = 20;
    ctx.fillStyle = state.course ? state.course.themeColor : '#00f5d4';
    ctx.fillRect(16, 16, cornerSize, 4);
    ctx.fillRect(16, 16, 4, cornerSize);
    ctx.fillRect(784 - cornerSize, 16, cornerSize, 4);
    ctx.fillRect(780, 16, 4, cornerSize);
    ctx.fillRect(16, 460, 4, cornerSize);
    ctx.fillRect(16, 460 + cornerSize - 4, cornerSize, 4);
    ctx.fillRect(780, 460, 4, cornerSize);
    ctx.fillRect(784 - cornerSize, 460 + cornerSize - 4, cornerSize, 4);

    // Cabecera de la credencial
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 22px Outfit, sans-serif';
    ctx.fillText('CREDENTIAL // TECH PASSPORT 2026-27', 48, 60);

    ctx.fillStyle = state.course ? state.course.themeColor : '#00f5d4';
    ctx.font = 'bold 16px "Fira Code", monospace';
    ctx.fillText(`MISIÓN NIVEL 0: ${state.course ? state.course.name.toUpperCase() : ''}`, 48, 88);

    // Línea separadora
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.beginPath();
    ctx.moveTo(48, 105);
    ctx.lineTo(752, 105);
    ctx.stroke();

    // Recuadro del Avatar (Izquierda)
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.fillRect(48, 130, 160, 190);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.strokeRect(48, 130, 160, 190);

    // Emoji del Avatar
    ctx.font = '72px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(state.profile.avatarEmoji, 128, 225);

    // Rol del avatar
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 14px Outfit, sans-serif';
    ctx.fillText(state.profile.avatarName.toUpperCase(), 128, 265);

    ctx.fillStyle = state.course ? state.course.themeColor : '#00f5d4';
    ctx.font = '12px "Fira Code", monospace';
    ctx.fillText(state.course ? state.course.badgeName : 'AGENTE TECH', 128, 290);
    ctx.textAlign = 'left';

    // Datos del Alumno (Centro)
    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px "Fira Code", monospace';
    ctx.fillText('AGENTE / ALUMNO/A:', 240, 145);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 24px Outfit, sans-serif';
    ctx.fillText(`${state.profile.nombre} ${state.profile.apellidos}`, 240, 175);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px "Fira Code", monospace';
    ctx.fillText('ALIAS EN EL AULA:', 240, 210);
    ctx.fillStyle = state.course ? state.course.themeColor : '#00f5d4';
    ctx.font = 'bold 18px "Fira Code", monospace';
    ctx.fillText(`"${state.profile.alias}"`, 240, 235);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px "Fira Code", monospace';
    ctx.fillText('CORREO CORPORATIVO:', 240, 268);
    ctx.fillStyle = '#cbd5e1';
    ctx.font = '15px Outfit, sans-serif';
    ctx.fillText(state.profile.email || 'No especificado (@alu.edu.gva.es)', 240, 290);

    // Métricas diagnósticas
    const solvedCount = state.challenges.results.filter(r => r.solved).length;
    const hintsCount = state.challenges.results.filter(r => r.usedHint).length;

    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.fillRect(48, 340, 704, 75);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.strokeRect(48, 340, 704, 75);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px "Fira Code", monospace';
    ctx.fillText('CALIBRACIÓN:', 70, 365);
    ctx.fillText('DESTREZAS A DESBLOQUEAR:', 300, 365);
    ctx.fillText('ESTADO DEL SISTEMA:', 590, 365);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 16px Outfit, sans-serif';
    ctx.fillText(`${solvedCount}/${state.challenges.results.length} Retos Superados`, 70, 395);

    const skillsSummary = state.interests.selectedSkills.length > 0 
      ? state.interests.selectedSkills.length + ' metas seleccionadas'
      : 'Exploración global';
    ctx.fillText(skillsSummary, 300, 395);

    ctx.fillStyle = '#06d6a0';
    ctx.fillText('AUTORIZADO ✓', 590, 395);

    // Pie de la tarjeta
    ctx.fillStyle = '#64748b';
    ctx.font = '11px "Fira Code", monospace';
    const dateStr = new Date().toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
    ctx.fillText(`EMITIDO: ${dateStr} | DPTO. INFORMÁTICA | GENERALITAT VALENCIANA`, 48, 442);
  }

  // Descarga del carnet en PNG
  const downloadBtn = document.getElementById('btn-download-passport');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      const canvas = document.getElementById('passportCanvas');
      if (!canvas) return;
      const link = document.createElement('a');
      const cleanAlias = (state.profile.alias || 'agente').replace(/[^a-zA-Z0-9]/g, '_');
      link.download = `Tech_Passport_${cleanAlias}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  }

  // 10. Envío de datos al Webhook de Microsoft Excel Online
  async function sendDataToTeacher() {
    const statusBox = document.getElementById('sync-status-box');
    if (!statusBox) return;

    statusBox.classList.remove('success', 'fallback');
    statusBox.classList.add('visible');

    const solvedCount = state.challenges.results.filter(r => r.solved).length;
    const hintsCount = state.challenges.results.filter(r => r.usedHint).length;

    // Payload plano estructurado para Excel
    const payload = {
      Timestamp: new Date().toLocaleString('es-ES'),
      Curso: state.course ? state.course.shortName : 'No especificado',
      Nombre: state.profile.nombre,
      Apellidos: state.profile.apellidos,
      Email: state.profile.email,
      Alias: state.profile.alias,
      Avatar: `${state.profile.avatarEmoji} ${state.profile.avatarName}`,
      Dispositivos_Casa: state.profile.dispositivosCasa || 'No especificado',
      SO_Casa: state.profile.soCasa || 'No especificado',
      Retos_Superados: `${solvedCount}/${state.challenges.results.length}`,
      Pistas_Utilizadas: hintsCount,
      Metas_Seleccionadas: state.interests.selectedSkills.join('; '),
      Estilo_Aprendizaje: state.interests.estiloAprendizaje || 'No especificado',
      Aficiones_Dia_A_Dia: state.interests.aficionesDiaADia || 'No especificado',
      Planes_Futuro: state.interests.planesFuturo || 'No especificado',
      Idea_Proyecto: state.interests.ideaProyecto || 'Sin propuesta'
    };

    // Si no hay Webhook configurado aún, informar al alumno amigablemente
    if (!APP_CONFIG.EXCEL_WEBHOOK_URL || APP_CONFIG.EXCEL_WEBHOOK_URL.trim() === '') {
      statusBox.classList.add('fallback');
      statusBox.innerHTML = `
        <span>💾</span>
        <div>
          <strong>¡Misión completada con éxito!</strong><br>
          Descarga tu acreditación con el botón inferior y súbela a la tarea de bienvenida en <strong>Aules</strong>.
        </div>
      `;
      return;
    }

    // Si hay Webhook, intentar la llamada HTTP POST
    try {
      statusBox.innerHTML = `<span>⏳</span> Conectando con la base de datos del curso...`;
      // Enviar como text/plain para evitar preflight OPTIONS de CORS (compatible con Google Apps Script y webhooks)
      const response = await fetch(APP_CONFIG.EXCEL_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok || response.status === 202) {
        statusBox.classList.add('success');
        statusBox.innerHTML = `
          <span>✅</span>
          <div>
            <strong>¡Acreditación y datos registrados correctamente!</strong><br>
            Tu profesor ya tiene tu ficha en el registro del aula. Ahora descarga tu carnet y súbelo a Aules.
          </div>
        `;
      } else {
        throw new Error(`HTTP ${response.status}`);
      }
    } catch (err) {
      console.warn('Fallo en sincronización con webhook:', err);
      statusBox.classList.add('fallback');
      statusBox.innerHTML = `
        <span>📁</span>
        <div>
          <strong>¡Ficha generada localmente!</strong><br>
          Descarga la imagen de tu credencial a continuación y entrégala en la tarea de <strong>Aules</strong>.
        </div>
      `;
    }
  }

  // 11. Enlaces entre botones estándar
  document.querySelectorAll('[data-goto-screen]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = parseInt(btn.getAttribute('data-goto-screen'), 10);
      goToScreen(target);
    });
  });
});
