// ==========================================================================
// CONTROLADOR PRINCIPAL DE LA SPA - TECH PASSPORT (EDICIÓN MEJORADA)
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
      avatarEmoji: '💻',
      avatarName: 'Programador/a',
      dispositivosCasa: [], // Selección múltiple
      soCasa: ''
    },
    challenges: {
      currentIndex: 0,
      results: [] // { id, type, selectedAnswer, textResponse, usedHint, isCorrect }
    },
    interests: {
      selectedSkills: [],
      estiloAprendizaje: [], // Selección múltiple
      aficionesDiaADia: '',
      planesFuturo: '',
      ideaProyecto: ''
    },
    completedAt: null
  };

  // Catálogo ampliado de avatares tecnológicos
  const AVATARS = [
    { emoji: '💻', name: 'Programador/a' },
    { emoji: '🎮', name: 'Dev Videojuegos' },
    { emoji: '🔧', name: 'Maker / Hardware' },
    { emoji: '📊', name: 'Data Scientist' },
    { emoji: '🌐', name: 'SysAdmin / Redes' },
    { emoji: '🎧', name: 'Creador/a Digital' },
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
    document.getElementById('screen-passport'),
    document.getElementById('screen-stats')
  ];

  const progressLine = document.getElementById('progress-line-fill');
  const courseBadgeIndicator = document.getElementById('header-course-badge');

  // Inicialización
  init();

  function init() {
    renderCourseGrid();
    renderAvatarGrid();
    setupOptionGroups();
    setupWelcomeButtons();
    setupInterestsValidation();
    checkUrlParams();
    updateProgressUI();
  }

  // 1. Detectar parámetros en la URL (?curso=, ?view=stats, ?stats=, ?radar=, #stats...)
  function checkUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const hash = window.location.hash.toLowerCase();

    // Detectar si el usuario pide ver el radar de estadísticas directamente
    const isDirectStatsRequested = (
      params.has('stats') ||
      params.has('radar') ||
      params.get('view') === 'stats' ||
      params.get('view') === 'radar' ||
      params.get('pantalla') === 'stats' ||
      params.get('pantalla') === 'radar' ||
      hash === '#stats' ||
      hash === '#radar'
    );

    // Extraer identificador de curso
    let cursoKey = (params.get('curso') || params.get('c') || '').toLowerCase();

    // Comprobar si el valor del parámetro stats o radar o view es la clave de un curso (?stats=piari, etc.)
    const directCourseParam = (params.get('stats') || params.get('radar') || params.get('view') || '').toLowerCase();
    if (!cursoKey && directCourseParam && COURSES_DATA[directCourseParam]) {
      cursoKey = directCourseParam;
    }

    // Si pidieron ver estadísticas directamente pero no especificaron curso, asignar el primero ('piari') por defecto
    if (!cursoKey && isDirectStatsRequested) {
      cursoKey = Object.keys(COURSES_DATA)[0] || 'piari';
    }

    if (cursoKey && COURSES_DATA[cursoKey]) {
      selectCourse(cursoKey);
    }

    // Si se pidió ver estadísticas directamente, saltar de inmediato a la Pantalla 5 (Radar del Aula)
    if (isDirectStatsRequested) {
      goToScreen(5);
    }
  }

  // Configurar botones de la pantalla de bienvenida
  function setupWelcomeButtons() {
    const startBtn = document.getElementById('btn-start-course');
    if (startBtn) {
      startBtn.addEventListener('click', () => {
        if (!state.course) return;
        goToScreen(1); // Salta a la Pantalla 1 (Perfil)
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

    // Inicializar seguimiento diagnóstico de retos
    state.challenges.currentIndex = 0;
    state.challenges.results = state.course.challenges.map(c => ({
      id: c.id,
      type: c.type || 'choice',
      selectedAnswer: null,
      textResponse: '',
      usedHint: false,
      isCorrect: false
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

  // 5. Configurar grupos de opciones (simples y múltiples)
  function setupOptionGroups() {
    // Dispositivos: selección múltiple
    setupMultiSelectGroup('dispositivos-group', (selectedArr) => {
      state.profile.dispositivosCasa = selectedArr;
    });

    // Sistema Operativo: selección simple
    setupSingleSelectGroup('so-group', (val) => {
      state.profile.soCasa = val;
    });

    // Estilo de Aprendizaje: selección múltiple
    setupMultiSelectGroup('learning-style-group', (selectedArr) => {
      state.interests.estiloAprendizaje = selectedArr;
    });
  }

  function setupSingleSelectGroup(containerId, onSelect) {
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

  function setupMultiSelectGroup(containerId, onUpdate) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const cards = container.querySelectorAll('.radio-card.multi');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        card.classList.toggle('selected');
        const selectedValues = Array.from(container.querySelectorAll('.radio-card.multi.selected'))
          .map(c => c.getAttribute('data-value'));
        onUpdate(selectedValues);
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

    // Detener polling de estadísticas si sale de la pantalla 5
    if (index !== 5) {
      stopStatsPolling();
    }

    // Pantalla 4 (Acreditación): emitir carnet y enviar datos
    if (index === 4) {
      state.completedAt = new Date().toISOString();
      renderPassportBadge();
      sendDataToTeacher();
    }

    // Pantalla 5 (Radar del Aula): cargar estadísticas de clase e iniciar polling
    if (index === 5) {
      updateStatsBackButton();
      renderStatsCourseTabs();
      loadClassStats(false);
      startStatsPolling();
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

  // 7. Lógica de Minirretos Diagnósticos (Pantalla 2)
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

    // Renderizado dinámico de imagen de apoyo si el reto la incluye
    const imgContainer = document.getElementById('challenge-image-container');
    if (currentChallenge.image) {
      imgContainer.style.display = 'block';
      imgContainer.innerHTML = `<img src="${currentChallenge.image}" class="challenge-img" alt="${currentChallenge.title}">`;
    } else {
      imgContainer.style.display = 'none';
      imgContainer.innerHTML = '';
    }

    // Pista explicativa reflexiva
    const hintContent = document.getElementById('hint-content');
    hintContent.textContent = currentChallenge.hint;
    hintContent.classList.remove('visible');

    // Mensaje de feedback neutro
    const feedbackBox = document.getElementById('challenge-feedback');
    feedbackBox.className = 'feedback-box';
    feedbackBox.style.display = 'none';

    // Botón siguiente reto
    const nextBtn = document.getElementById('btn-next-challenge');

    const optionsContainer = document.getElementById('challenge-options-container');
    const textContainer = document.getElementById('challenge-text-container');
    const textInput = document.getElementById('challenge-text-input');
    const textStatus = document.getElementById('challenge-text-status');

    if (currentChallenge.type === 'text') {
      // Reto de respuesta en texto
      optionsContainer.style.display = 'none';
      optionsContainer.innerHTML = '';
      textContainer.style.display = 'block';

      textInput.value = challengeState.textResponse || '';
      textInput.placeholder = currentChallenge.placeholder || 'Escribe tu respuesta o razonamiento aquí...';
      
      const hasText = challengeState.textResponse && challengeState.textResponse.trim().length > 0;
      nextBtn.disabled = !hasText;
      textStatus.textContent = hasText ? 'Respuesta guardada 💾' : '';

      textInput.oninput = () => {
        const val = textInput.value.trim();
        challengeState.textResponse = val;
        challengeState.selectedAnswer = val;
        challengeState.isCorrect = val.length > 2; // Criterio diagnóstico de completitud
        if (val.length > 0) {
          textStatus.textContent = 'Respuesta guardada 💾';
          nextBtn.disabled = false;
        } else {
          textStatus.textContent = '';
          nextBtn.disabled = true;
        }
      };
    } else {
      // Reto de selección (tipo choice)
      textContainer.style.display = 'none';
      optionsContainer.style.display = 'flex';
      optionsContainer.innerHTML = '';

      const hasAnswer = challengeState.selectedAnswer !== null;
      nextBtn.disabled = !hasAnswer;

      if (hasAnswer) {
        feedbackBox.className = 'feedback-box recorded visible';
        feedbackBox.style.display = 'flex';
        feedbackBox.innerHTML = `<span>💾</span> <div><strong>Respuesta registrada.</strong> Puedes continuar al siguiente reto cuando quieras.</div>`;
      }

      currentChallenge.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `option-btn ${challengeState.selectedAnswer === opt.text ? 'selected' : ''}`;
        btn.innerHTML = `<span>🔹</span> <span>${opt.text}</span>`;
        btn.addEventListener('click', () => {
          handleOptionClick(opt, btn, currentChallenge, challengeState);
        });
        optionsContainer.appendChild(btn);
      });
    }
  }

  // Manejo de clic en opción diagnóstica (sin revelar acierto/fallo al alumno)
  function handleOptionClick(option, btnElement, challenge, challengeState) {
    const optionsContainer = document.getElementById('challenge-options-container');
    const allBtns = optionsContainer.querySelectorAll('.option-btn');
    const feedbackBox = document.getElementById('challenge-feedback');
    const nextBtn = document.getElementById('btn-next-challenge');

    allBtns.forEach(b => b.classList.remove('selected'));
    btnElement.classList.add('selected');

    // Registrar respuesta del alumno internamente para la evaluación diagnóstica
    challengeState.selectedAnswer = option.text;
    challengeState.isCorrect = !!option.correct;

    // Mensaje neutro de confirmación
    feedbackBox.className = 'feedback-box recorded visible';
    feedbackBox.style.display = 'flex';
    feedbackBox.innerHTML = `<span>💾</span> <div><strong>Respuesta registrada.</strong> Puedes pulsar en <em>Siguiente Reto</em> para continuar.</div>`;

    // Se permite avanzar inmediatamente con cualquier respuesta
    nextBtn.disabled = false;
  }

  // Toggle de pista reflexiva
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
        // Fin de los 8 retos -> pasar a intereses
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

  // 9. Validación obligatoria de todos los campos en Pantalla 3
  function setupInterestsValidation() {
    const completeBtn = document.getElementById('btn-complete-interests');
    if (completeBtn) {
      completeBtn.addEventListener('click', () => {
        validateAndLaunchCaptcha();
      });
    }
  }

  function validateAndLaunchCaptcha() {
    const alertBox = document.getElementById('interests-alert');
    const alertText = document.getElementById('interests-alert-text');
    if (alertBox) alertBox.style.display = 'none';

    // Limpiar marcas de error previas
    document.querySelectorAll('.field-error').forEach(el => el.classList.remove('field-error'));

    const errors = [];

    // Validar destrezas (debe elegir al menos 1)
    if (!state.interests.selectedSkills || state.interests.selectedSkills.length === 0) {
      errors.push('Selecciona al menos 1 destreza a desbloquear este curso');
      const gSkills = document.getElementById('group-skills');
      if (gSkills) gSkills.classList.add('field-error');
    }

    // Validar aficiones
    const aficionesInput = document.getElementById('input-aficiones');
    const aficiones = aficionesInput ? aficionesInput.value.trim() : '';
    if (!aficiones) {
      errors.push('Indica tus aficiones y actividades en tu tiempo libre');
      if (aficionesInput) aficionesInput.classList.add('field-error');
    }

    // Validar planes de futuro
    const futuroInput = document.getElementById('input-futuro');
    const futuro = futuroInput ? futuroInput.value.trim() : '';
    if (!futuro) {
      errors.push('Indica tus planes de futuro o vocación formativa');
      if (futuroInput) futuroInput.classList.add('field-error');
    }

    // Validar estilo de aprendizaje (al menos 1)
    if (!state.interests.estiloAprendizaje || state.interests.estiloAprendizaje.length === 0) {
      errors.push('Selecciona al menos un estilo de aprendizaje cómodo en el aula');
      const gStyle = document.getElementById('group-learning-style');
      if (gStyle) gStyle.classList.add('field-error');
    }

    // Validar propuesta de aplicación
    const ideaInput = document.getElementById('input-idea');
    const idea = ideaInput ? ideaInput.value.trim() : '';
    if (!idea) {
      errors.push('Describe tu propuesta o idea de aplicación informática');
      if (ideaInput) ideaInput.classList.add('field-error');
    }

    // Si falta algún campo obligatorio, mostrar aviso
    if (errors.length > 0) {
      if (alertBox && alertText) {
        alertText.innerHTML = `<strong>Faltan campos por completar para finalizar la misión:</strong><br>• ${errors.join('<br>• ')}`;
        alertBox.style.display = 'flex';
        alertBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    // Guardar datos validados en el estado
    state.interests.aficionesDiaADia = aficiones;
    state.interests.planesFuturo = futuro;
    state.interests.ideaProyecto = idea;

    // Lanzar el minijuego Cyber-Captcha final
    openCaptchaModal();
  }

  // 10. Minijuego Cyber-Captcha interactivo
  let selectedCaptchaTokens = new Set();

  function openCaptchaModal() {
    const modal = document.getElementById('captcha-modal');
    if (!modal || !state.course) return;

    selectedCaptchaTokens.clear();

    const captchaConfig = state.course.captcha || {
      title: 'Verificación de Seguridad Informática',
      instruction: 'Selecciona los 3 elementos de Hardware físico:',
      items: [
        { id: 'c1', text: 'Teclado y Ratón', icon: '⌨️', correct: true },
        { id: 'c2', text: 'Navegador Web', icon: '🌐', correct: false },
        { id: 'c3', text: 'Pantalla Monitor', icon: '🖥️', correct: true },
        { id: 'c4', text: 'Sistema LliureX', icon: '🐧', correct: false },
        { id: 'c5', text: 'Disco Duro SSD', icon: '💾', correct: true },
        { id: 'c6', text: 'Videojuego', icon: '🎮', correct: false }
      ]
    };

    document.getElementById('captcha-modal-title').textContent = captchaConfig.title;
    document.getElementById('captcha-instruction').textContent = captchaConfig.instruction;

    const feedbackMsg = document.getElementById('captcha-feedback');
    feedbackMsg.style.display = 'none';
    feedbackMsg.className = 'captcha-feedback-msg';

    const container = document.getElementById('captcha-grid-container');
    container.innerHTML = '';

    captchaConfig.items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'captcha-item';
      card.innerHTML = `
        <span class="captcha-icon">${item.icon}</span>
        <span class="captcha-text">${item.text}</span>
      `;
      card.addEventListener('click', () => {
        if (selectedCaptchaTokens.has(item.id)) {
          selectedCaptchaTokens.delete(item.id);
          card.classList.remove('selected');
        } else {
          selectedCaptchaTokens.add(item.id);
          card.classList.add('selected');
        }
      });
      container.appendChild(card);
    });

    modal.style.display = 'flex';

    // Botón cancelar
    const cancelBtn = document.getElementById('btn-cancel-captcha');
    cancelBtn.onclick = () => {
      modal.style.display = 'none';
    };

    // Botón verificar agente humano
    const verifyBtn = document.getElementById('btn-submit-captcha');
    verifyBtn.onclick = () => {
      const correctItems = captchaConfig.items.filter(i => i.correct).map(i => i.id);
      const isComplete = correctItems.length === selectedCaptchaTokens.size &&
                         correctItems.every(id => selectedCaptchaTokens.has(id));

      if (isComplete) {
        feedbackMsg.className = 'captcha-feedback-msg success';
        feedbackMsg.innerHTML = '<span>✅</span> ¡Agente Humano Verificado! Desbloqueando Tech Passport...';
        feedbackMsg.style.display = 'block';

        setTimeout(() => {
          modal.style.display = 'none';
          goToScreen(4); // Pasar a Pantalla 4 (Acreditación)
        }, 850);
      } else {
        feedbackMsg.className = 'captcha-feedback-msg error';
        feedbackMsg.innerHTML = '<span>⚠️</span> Calibración inexacta: revisa los elementos seleccionados (debes elegir exactamente los 3 correctos).';
        feedbackMsg.style.display = 'block';
      }
    };
  }

  // 11. Generador del Carnet Digital en Canvas (Pantalla 4)
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
    ctx.fillText('ALIAS:', 240, 210);
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
    const totalAnswered = state.challenges.results.filter(r => r.selectedAnswer || r.textResponse).length;

    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.fillRect(48, 340, 704, 75);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.strokeRect(48, 340, 704, 75);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px "Fira Code", monospace';
    ctx.fillText('CALIBRACIÓN DIAGNÓSTICA:', 70, 365);
    ctx.fillText('METAS A DESBLOQUEAR:', 330, 365);
    ctx.fillText('ESTADO DEL SISTEMA:', 590, 365);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 16px Outfit, sans-serif';
    ctx.fillText(`${totalAnswered}/${state.challenges.results.length} Retos Completados`, 70, 395);

    const skillsSummary = state.interests.selectedSkills.length > 0 
      ? state.interests.selectedSkills.length + ' metas seleccionadas'
      : 'Exploración global';
    ctx.fillText(skillsSummary, 330, 395);

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

  // 12. Envío de datos al Webhook de Google Sheets (Apps Script)
  async function sendDataToTeacher() {
    const statusBox = document.getElementById('sync-status-box');
    if (!statusBox) return;

    statusBox.classList.remove('success', 'fallback');
    statusBox.classList.add('visible');

    const solvedCount = state.challenges.results.filter(r => r.isCorrect).length;
    const hintsCount = state.challenges.results.filter(r => r.usedHint).length;

    // Resumen de respuestas diagnósticas de los 8 retos (con indicación [OK] o [ERR] para el agregado del docente)
    const detalleRespuestas = state.challenges.results
      .map((r, i) => `R${i + 1}: ${r.isCorrect ? '[OK]' : '[ERR]'} ${r.selectedAnswer || r.textResponse || '-'}`)
      .join(' | ');

    // Payload plano estructurado para Google Sheets
    const payload = {
      Timestamp: new Date().toLocaleString('es-ES'),
      Curso: state.course ? state.course.shortName : 'No especificado',
      Nombre: state.profile.nombre,
      Apellidos: state.profile.apellidos,
      Email: state.profile.email,
      Alias: state.profile.alias,
      Avatar: `${state.profile.avatarEmoji} ${state.profile.avatarName}`,
      Dispositivos_Casa: state.profile.dispositivosCasa.join('; ') || 'No especificado',
      SO_Casa: state.profile.soCasa || 'No especificado',
      Retos_Superados: `${solvedCount}/${state.challenges.results.length}`,
      Pistas_Utilizadas: hintsCount,
      Metas_Seleccionadas: state.interests.selectedSkills.join('; '),
      Estilo_Aprendizaje: state.interests.estiloAprendizaje.join('; ') || 'No especificado',
      Aficiones_Dia_A_Dia: state.interests.aficionesDiaADia || 'No especificado',
      Planes_Futuro: state.interests.planesFuturo || 'No especificado',
      Idea_Proyecto: state.interests.ideaProyecto || 'Sin propuesta',
      Detalle_Respuestas: detalleRespuestas,
      Captcha_Verificado: 'Sí (Superado)'
    };

    // Si no hay Webhook configurado aún, informar al alumno amigablemente
    if (!APP_CONFIG.EXCEL_WEBHOOK_URL || APP_CONFIG.EXCEL_WEBHOOK_URL.trim() === '') {
      statusBox.classList.add('fallback');
      statusBox.innerHTML = `
        <span>💾</span>
        <div>
          <strong>¡Misión completada con éxito!</strong><br>
          Descarga tu acreditación con el botón verde inferior y súbela a la tarea de bienvenida en <strong>Aules</strong>.
        </div>
      `;
      return;
    }

    // Si hay Webhook de Apps Script, intentar la llamada HTTP POST
    try {
      statusBox.innerHTML = `<span>⏳</span> Conectando con la base de datos del curso...`;
      // Enviar como text/plain para evitar preflight OPTIONS de CORS con Google Apps Script
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

  // 13. Carga y renderizado de Estadísticas Globales del Aula (Pantalla 5)
  let statsPollTimer = null;
  let countdownSeconds = 10;
  const POLL_INTERVAL_SECONDS = 10;

  function startStatsPolling() {
    stopStatsPolling();
    countdownSeconds = POLL_INTERVAL_SECONDS;
    updateCountdownUI();

    statsPollTimer = setInterval(() => {
      countdownSeconds--;
      updateCountdownUI();
      if (countdownSeconds <= 0) {
        countdownSeconds = POLL_INTERVAL_SECONDS;
        loadClassStats(true); // auto-refresh periódico sin bloquear la UI
      }
    }, 1000);
  }

  function stopStatsPolling() {
    if (statsPollTimer) {
      clearInterval(statsPollTimer);
      statsPollTimer = null;
    }
  }

  function updateCountdownUI() {
    const el = document.getElementById('stats-countdown');
    if (el) el.textContent = countdownSeconds;
  }

  // Petición con fallback JSONP para evitar bloqueos de CORS en localhost / navegadores
  function fetchStatsData(url) {
    return new Promise((resolve, reject) => {
      // 1. Intentar primero con fetch simple (sin headers personalizados para evitar OPTIONS)
      fetch(url, { method: 'GET' })
        .then(res => {
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          return res.json();
        })
        .then(data => resolve(data))
        .catch(fetchErr => {
          // 2. Fallback JSONP automático si fetch falla por CORS o políticas de redirección
          const callbackName = 'gasCallback_' + Math.round(100000 * Math.random());
          const script = document.createElement('script');
          let finished = false;

          const timer = setTimeout(() => {
            if (finished) return;
            finished = true;
            cleanup();
            reject(fetchErr);
          }, 6000);

          function cleanup() {
            if (script.parentNode) script.parentNode.removeChild(script);
            delete window[callbackName];
            clearTimeout(timer);
          }

          window[callbackName] = function(data) {
            if (finished) return;
            finished = true;
            cleanup();
            resolve(data);
          };

          script.onerror = function() {
            if (finished) return;
            finished = true;
            cleanup();
            reject(new Error('No se pudo conectar con Google Sheets (CORS/Red)'));
          };

          const separator = url.indexOf('?') > -1 ? '&' : '?';
          script.src = `${url}${separator}callback=${callbackName}`;
          document.head.appendChild(script);
        });
    });
  }

  async function loadClassStats(isAutoRefresh = false) {
    const loadingBox = document.getElementById('stats-loading');
    const contentBox = document.getElementById('stats-content');
    const emptyBox = document.getElementById('stats-empty');
    const badgeEl = document.getElementById('stats-course-badge');

    if (badgeEl && state.course) {
      badgeEl.textContent = state.course.shortName;
      badgeEl.style.color = state.course.themeColor;
      badgeEl.style.borderColor = state.course.themeColor;
    }

    if (!isAutoRefresh) {
      if (loadingBox) loadingBox.style.display = 'flex';
      if (contentBox) contentBox.style.display = 'none';
      if (emptyBox) emptyBox.style.display = 'none';
    }

    if (!APP_CONFIG.EXCEL_WEBHOOK_URL || APP_CONFIG.EXCEL_WEBHOOK_URL.trim() === '') {
      showEmptyWaitingState('El webhook de Google Sheets no está configurado en config.js.');
      return;
    }

    try {
      const fetchUrl = `${APP_CONFIG.EXCEL_WEBHOOK_URL}?curso=${encodeURIComponent(state.courseId || '')}&t=${Date.now()}`;
      const data = await fetchStatsData(fetchUrl);

      if (data && data.status === 'success' && data.totalAlumnos > 0) {
        if (loadingBox) loadingBox.style.display = 'none';
        if (emptyBox) emptyBox.style.display = 'none';
        if (contentBox) contentBox.style.display = 'block';
        renderClassStats(data);
      } else {
        showEmptyWaitingState('Aún no se han recibido registros para esta asignatura en la hoja de cálculo.');
      }
    } catch (err) {
      console.warn('Conexión con Google Sheets en espera (CORS o pendiente de publicar doGet):', err);
      showEmptyWaitingState('Esperando respuesta de Google Sheets. Si acabas de actualizar Apps Script, asegúrate de publicar una "Nueva versión" con acceso "Cualquier usuario".');
    }
  }

  function showEmptyWaitingState(reason) {
    const loadingBox = document.getElementById('stats-loading');
    const contentBox = document.getElementById('stats-content');
    const emptyBox = document.getElementById('stats-empty');
    const descEl = document.getElementById('stats-empty-desc');

    if (loadingBox) loadingBox.style.display = 'none';
    if (contentBox) contentBox.style.display = 'none';
    if (emptyBox) emptyBox.style.display = 'block';

    if (descEl && reason) {
      descEl.textContent = reason;
    }

    const totalEl = document.getElementById('stat-total-alumnos');
    const dificilEl = document.getElementById('stat-reto-dificil');
    const metaEl = document.getElementById('stat-meta-top');
    if (totalEl) totalEl.textContent = '0 agentes';
    if (dificilEl) dificilEl.textContent = '--';
    if (metaEl) metaEl.textContent = 'En espera...';
  }

  function renderClassStats(data) {
    const total = data.totalAlumnos || 0;
    const totalEl = document.getElementById('stat-total-alumnos');
    if (totalEl) totalEl.textContent = total > 0 ? `${total} agentes` : '1 agente';

    if (total === 0) {
      showEmptyWaitingState('Aún no se han registrado alumnos para esta asignatura en la hoja de cálculo.');
      return;
    }

    // 1. Gráfico de Retos (1 a 8)
    const retosContainer = document.getElementById('chart-retos-container');
    if (retosContainer && state.course) {
      retosContainer.innerHTML = '';
      const retosAciertos = data.retos || [];
      let minPct = 101;
      let hardestRetoNum = 1;

      state.course.challenges.forEach((ch, idx) => {
        const count = retosAciertos[idx] !== undefined ? retosAciertos[idx] : 0;
        const pct = Math.min(100, Math.round((count / total) * 100));

        if (pct < minPct) {
          minPct = pct;
          hardestRetoNum = idx + 1;
        }

        const isHardest = (pct <= 50);

        const row = document.createElement('div');
        row.className = 'retos-bar-row';
        row.innerHTML = `
          <div class="reto-label" title="${ch.title}">Reto ${idx + 1}: ${ch.title.split(':')[1] || ch.title}</div>
          <div class="bar-track">
            <div class="bar-fill ${isHardest ? 'challenging' : ''}" style="width: ${Math.max(6, pct)}%;"></div>
          </div>
          <div class="bar-pct">${pct}% <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: normal;">(${count}/${total})</span></div>
        `;
        retosContainer.appendChild(row);
      });

      const dificilEl = document.getElementById('stat-reto-dificil');
      if (dificilEl) dificilEl.textContent = `Reto ${hardestRetoNum} (${minPct}%)`;
    }

    // 2. Ranking de Metas / Destrezas más deseadas
    const metasContainer = document.getElementById('chart-metas-container');
    if (metasContainer) {
      metasContainer.innerHTML = '';
      const metasObj = data.metas || {};
      const sortedMetas = Object.entries(metasObj).sort((a, b) => b[1] - a[1]);

      const topMetaEl = document.getElementById('stat-meta-top');
      if (topMetaEl) {
        topMetaEl.textContent = sortedMetas.length > 0 ? sortedMetas[0][0].substring(0, 20) + '...' : 'En calibración';
      }

      if (sortedMetas.length === 0) {
        metasContainer.innerHTML = '<div style="color: var(--text-muted); font-size: 0.85rem;">Esperando más selecciones...</div>';
      } else {
        sortedMetas.slice(0, 5).forEach(([meta, count], idx) => {
          const pct = Math.round((count / total) * 100);
          const item = document.createElement('div');
          item.className = 'ranking-item';
          item.innerHTML = `
            <div class="ranking-info">
              <span class="ranking-rank">#${idx + 1}</span>
              <span class="ranking-text" title="${meta}">${meta}</span>
            </div>
            <span class="ranking-count">${pct}% <span style="font-size: 0.75rem; color: var(--text-dim);">(${count})</span></span>
          `;
          metasContainer.appendChild(item);
        });
      }
    }

    // 3. Ranking de Estilos de Aprendizaje
    const estilosContainer = document.getElementById('chart-estilos-container');
    if (estilosContainer) {
      estilosContainer.innerHTML = '';
      const estilosObj = data.estilos || {};
      const sortedEstilos = Object.entries(estilosObj).sort((a, b) => b[1] - a[1]);

      if (sortedEstilos.length === 0) {
        estilosContainer.innerHTML = '<div style="color: var(--text-muted); font-size: 0.85rem;">Esperando más respuestas...</div>';
      } else {
        sortedEstilos.forEach(([estilo, count], idx) => {
          const pct = Math.round((count / total) * 100);
          const item = document.createElement('div');
          item.className = 'ranking-item';
          item.innerHTML = `
            <div class="ranking-info">
              <span class="ranking-rank">#${idx + 1}</span>
              <span class="ranking-text">${estilo}</span>
            </div>
            <span class="ranking-count">${pct}%</span>
          `;
          estilosContainer.appendChild(item);
        });
      }
    }

    // 4. Dispositivos en Casa
    const dispContainer = document.getElementById('chart-dispositivos-container');
    if (dispContainer) {
      dispContainer.innerHTML = '';
      const dispObj = data.dispositivos || {};
      const sortedDisp = Object.entries(dispObj).sort((a, b) => b[1] - a[1]);

      if (sortedDisp.length === 0) {
        dispContainer.innerHTML = '<div style="color: var(--text-muted); font-size: 0.85rem;">Esperando registros...</div>';
      } else {
        sortedDisp.forEach(([disp, count]) => {
          const pct = Math.round((count / total) * 100);
          const chip = document.createElement('div');
          chip.className = 'device-chip';
          chip.innerHTML = `
            <span class="device-chip-name">${disp}</span>
            <span class="device-chip-stat">${pct}%</span>
            <span class="device-chip-pct">${count} de ${total} alumnos</span>
          `;
          dispContainer.appendChild(chip);
        });
      }
    }
  }

  // 14. Pestañas de selector de asignaturas en el radar y botón volver
  function updateStatsBackButton() {
    const backBtn = document.getElementById('btn-back-from-stats');
    if (!backBtn) return;
    if (state.completedAt) {
      backBtn.textContent = '← Volver a mi Carnet';
      backBtn.setAttribute('data-goto-screen', '4');
    } else {
      backBtn.textContent = '← Ir a la Misión del Alumnado';
      backBtn.setAttribute('data-goto-screen', state.course ? '1' : '0');
    }
  }

  function renderStatsCourseTabs() {
    const tabsContainer = document.getElementById('stats-course-tabs');
    if (!tabsContainer) return;
    tabsContainer.innerHTML = '';

    Object.keys(COURSES_DATA).forEach(courseKey => {
      const course = COURSES_DATA[courseKey];
      const tabBtn = document.createElement('button');
      tabBtn.type = 'button';
      const isActive = state.courseId === courseKey;
      tabBtn.className = `stats-tab-btn ${isActive ? 'active' : ''}`;
      tabBtn.innerHTML = `<span>${course.code}</span> <small>${course.shortName}</small>`;

      if (isActive) {
        tabBtn.style.borderColor = course.themeColor;
        tabBtn.style.color = course.themeColor;
      }

      tabBtn.addEventListener('click', () => {
        if (state.courseId === courseKey) return;
        selectCourse(courseKey);
        // Actualizar URL sin recargar la página para reflejar el curso actual
        const newUrl = `${window.location.pathname}?curso=${courseKey}&view=radar`;
        window.history.replaceState({}, '', newUrl);
        renderStatsCourseTabs();
        countdownSeconds = POLL_INTERVAL_SECONDS;
        loadClassStats(false);
      });

      tabsContainer.appendChild(tabBtn);
    });
  }

  // 15. Botones de refresco y comprobación forzada
  const refreshBtn = document.getElementById('btn-refresh-stats');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', () => {
      countdownSeconds = POLL_INTERVAL_SECONDS;
      loadClassStats(false);
    });
  }

  const forceCheckBtn = document.getElementById('btn-force-check');
  if (forceCheckBtn) {
    forceCheckBtn.addEventListener('click', () => {
      countdownSeconds = POLL_INTERVAL_SECONDS;
      loadClassStats(false);
    });
  }

  // 16. Enlaces entre botones estándar
  document.querySelectorAll('[data-goto-screen]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = parseInt(btn.getAttribute('data-goto-screen'), 10);
      goToScreen(target);
    });
  });

  // 17. Permitir clic directo en el nodo 6 (Radar Aula) del stepper superior
  const radarStepItem = document.getElementById('step-item-5');
  if (radarStepItem) {
    radarStepItem.style.cursor = 'pointer';
    radarStepItem.title = 'Ver Radar del Aula';
    radarStepItem.addEventListener('click', () => {
      goToScreen(5);
    });
  }

  // 18. Escuchar cambios de hash para acceso directo (#stats o #radar)
  window.addEventListener('hashchange', () => {
    checkUrlParams();
  });
});
