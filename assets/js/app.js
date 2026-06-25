const root = document.documentElement;
const progress = document.querySelector('.scroll-progress span');
const cursor = document.querySelector('.cursor-glow');

const translations = {
  ru: {
    lang: 'ru',
    title: 'Yulia Komarova — Best Sound',
    description: 'Юлия Комарова — организатор концертов и представитель агентства Best Sound. Премиальная минималистичная личная страница на русском, английском и итальянском.',
    navAria: 'Основная навигация',
    closeLabel: 'Закрыть',
    brandRole: 'Best Sound',
    navProfile: 'Профиль',
    navEvents: 'События',
    eyebrow: 'Concerts · Best Sound · Premium profile',
    heroTitle: 'Концерты, собранные как <em>точная система</em>.',
    heroLead: 'Юлия Комарова — организатор концертов и представитель агентства Best Sound. Премиальный минималистичный профиль о сцене, команде, коммуникации и спокойной уверенности, с которой создаются сильные события.',
    primaryCta: 'Организация мероприятия',
    systemLabel: 'PROFILE SYSTEM',
    flowText: 'Concept → coordination → backstage → audience → result.',
    metricLanguages: 'языка: RU, EN, IT',
    metricFields: 'сферы: сцена и спорт',
    metricProfile: 'премиальный профиль',
    aboutKicker: 'Personal profile',
    aboutTitle: 'Организатор концертов с дисциплиной и вниманием к деталям.',
    aboutText: 'Главный язык страницы — русский. Английская и итальянская версии дополняют профиль для международных артистов, партнёров и европейского контекста. В центре — сдержанный образ человека, который умеет держать процесс, сцену и коммуникацию.',
    cardAgencyTag: '01 / Best Sound',
    cardAgencyTitle: 'Представитель агентства Best Sound',
    cardAgencyText: 'Best Sound задаёт профессиональный контекст и усиливает доверие к профилю. Эта страница работает как персональная витрина Юлии: её роль, стиль коммуникации и связь с концертной индустрией.',
    cardConcertsTag: '02 / concerts',
    cardConcertsTitle: 'Концерты',
    cardConcertsText: 'Организация концертных событий, гастрольная логика, работа с площадкой, командой и backstage-процессами.',
    cardProjectsTag: '03 / projects',
    cardProjectsTitle: 'Россия и СНГ',
    cardProjectsText: 'В профессиональном контексте Best Sound — Alessandro Safina, Joe Lynn Turner и концертные направления по России и странам СНГ.',
    cardSportTag: '04 / sport discipline',
    cardSportTitle: 'Спортивная дисциплина',
    cardSportText: 'Юлия неоднократно участвовала в соревнованиях по плаванию в России и Италии, становилась призёром разных стартов, а в 2024 году выступила на международном SwimCup и вошла в топ-5.',
    turnkeyKicker: 'Turnkey event organization',
    turnkeyTitle: 'Организация мероприятия',
    turnkeyText: 'Чистая структура работы: от идеи и подготовки до координации команды, backstage и финального впечатления.',
    serviceOneTitle: 'Концепция',
    serviceOneText: 'Формат, аудитория, настроение, масштаб и структура события.',
    serviceTwoTitle: 'Координация',
    serviceTwoText: 'Команда, тайминг, площадка, участники и порядок действий.',
    serviceThreeText: 'Невидимая часть мероприятия: коммуникация, контроль деталей и спокойное управление процессом.',
    serviceFourTitle: 'Результат',
    serviceFourText: 'Цельное событие: сцена, публика, атмосфера и ощущение профессионального уровня.',
    languagesTitle: 'Три версии смысла',
    languagesText: 'Русский остаётся главным. Английский и итальянский усиливают международный характер страницы.',
    contactTitle: 'Контакт',
    contactText: 'Связь — через Instagram и официальный сайт Best Sound.',
    finalEyebrow: 'Premium minimal profile',
    finalTitle: 'Сцена, движение и личный стиль — в одной спокойной системе.',
    dialogTitle: 'Quick actions',
    dialogAgency: 'Best Sound profile',
    dialogEvent: 'Организация мероприятия',
    rotator: ['Concert flow', 'Backstage map', 'Guest rhythm', 'Stage energy']
  },
  en: {
    lang: 'en',
    title: 'Yulia Komarova — Best Sound',
    description: 'Yulia Komarova is a concert organizer and Best Sound representative. A premium minimalist personal profile in Russian, English and Italian.',
    navAria: 'Main navigation',
    closeLabel: 'Close',
    brandRole: 'Best Sound',
    navProfile: 'Profile',
    navEvents: 'Events',
    eyebrow: 'Concerts · Best Sound · Premium profile',
    heroTitle: 'Concerts built as a <em>precise system</em>.',
    heroLead: 'Yulia Komarova is a concert organizer and Best Sound representative. This premium minimalist profile presents stage work, team coordination, communication and the quiet confidence behind strong events.',
    primaryCta: 'Event organization',
    systemLabel: 'PROFILE SYSTEM',
    flowText: 'Concept → coordination → backstage → audience → result.',
    metricLanguages: 'languages: RU, EN, IT',
    metricFields: 'fields: stage and sport',
    metricProfile: 'premium profile',
    aboutKicker: 'Personal profile',
    aboutTitle: 'A concert organizer with discipline and attention to detail.',
    aboutText: 'Russian is the main language of the page. English and Italian extend the profile for international artists, partners and a European context. The focus is a composed professional image: someone who can manage the process, the stage and communication.',
    cardAgencyTag: '01 / Best Sound',
    cardAgencyTitle: 'Best Sound representative',
    cardAgencyText: 'Best Sound provides the professional context and strengthens the profile. This page works as Yulia’s personal showcase: her role, communication style and connection to the concert industry.',
    cardConcertsTag: '02 / concerts',
    cardConcertsTitle: 'Concerts',
    cardConcertsText: 'Concert event organization, touring logic, venue coordination, team work and backstage processes.',
    cardProjectsTag: '03 / projects',
    cardProjectsTitle: 'Russia and CIS',
    cardProjectsText: 'Within the Best Sound professional context: Alessandro Safina, Joe Lynn Turner and concert projects across Russia and CIS countries.',
    cardSportTag: '04 / sport discipline',
    cardSportTitle: 'Sport discipline',
    cardSportText: 'Yulia has repeatedly taken part in swimming competitions in Russia and Italy, reached podium placements at different events, and in 2024 competed at the international SwimCup, finishing in the top 5.',
    turnkeyKicker: 'Turnkey event organization',
    turnkeyTitle: 'Event organization',
    turnkeyText: 'A clear working structure: from idea and preparation to team coordination, backstage management and the final impression.',
    serviceOneTitle: 'Concept',
    serviceOneText: 'Format, audience, mood, scale and event structure.',
    serviceTwoTitle: 'Coordination',
    serviceTwoText: 'Team, timing, venue, participants and order of operations.',
    serviceThreeText: 'The invisible part of the event: communication, detail control and calm process management.',
    serviceFourTitle: 'Result',
    serviceFourText: 'A complete event: stage, audience, atmosphere and a professional-level impression.',
    languagesTitle: 'Three versions of one profile',
    languagesText: 'Russian remains the main language. English and Italian strengthen the page’s international character.',
    contactTitle: 'Contact',
    contactText: 'Contact via Instagram and the official Best Sound website.',
    finalEyebrow: 'Premium minimal profile',
    finalTitle: 'Stage, movement and personal style in one composed system.',
    dialogTitle: 'Quick actions',
    dialogAgency: 'Best Sound profile',
    dialogEvent: 'Event organization',
    rotator: ['Concert flow', 'Backstage map', 'Guest rhythm', 'Stage energy']
  },
  it: {
    lang: 'it',
    title: 'Yulia Komarova — Best Sound',
    description: 'Yulia Komarova è organizzatrice di concerti e rappresentante di Best Sound. Un profilo personale premium e minimalista in russo, inglese e italiano.',
    navAria: 'Navigazione principale',
    closeLabel: 'Chiudi',
    brandRole: 'Best Sound',
    navProfile: 'Profilo',
    navEvents: 'Eventi',
    eyebrow: 'Concerti · Best Sound · Profilo premium',
    heroTitle: 'Concerti costruiti come un <em>sistema preciso</em>.',
    heroLead: 'Yulia Komarova è organizzatrice di concerti e rappresentante di Best Sound. Questo profilo premium e minimalista presenta il lavoro sul palco, il coordinamento del team, la comunicazione e la sicurezza calma con cui nascono eventi forti.',
    primaryCta: 'Organizzazione eventi',
    systemLabel: 'PROFILE SYSTEM',
    flowText: 'Concept → coordinamento → backstage → pubblico → risultato.',
    metricLanguages: 'lingue: RU, EN, IT',
    metricFields: 'ambiti: palco e sport',
    metricProfile: 'profilo premium',
    aboutKicker: 'Profilo personale',
    aboutTitle: 'Un’organizzatrice di concerti con disciplina e attenzione ai dettagli.',
    aboutText: 'Il russo è la lingua principale della pagina. L’inglese e l’italiano estendono il profilo per artisti internazionali, partner e contesto europeo. Al centro c’è un’immagine professionale sobria: una persona capace di gestire processo, palco e comunicazione.',
    cardAgencyTag: '01 / Best Sound',
    cardAgencyTitle: 'Rappresentante di Best Sound',
    cardAgencyText: 'Best Sound crea il contesto professionale e rafforza il profilo. Questa pagina funziona come una vetrina personale di Yulia: il suo ruolo, il suo stile di comunicazione e il suo legame con l’industria dei concerti.',
    cardConcertsTag: '02 / concerti',
    cardConcertsTitle: 'Concerti',
    cardConcertsText: 'Organizzazione di eventi concertistici, logica dei tour, coordinamento con la location, lavoro con il team e processi di backstage.',
    cardProjectsTag: '03 / progetti',
    cardProjectsTitle: 'Russia e CSI',
    cardProjectsText: 'Nel contesto professionale di Best Sound: Alessandro Safina, Joe Lynn Turner e progetti concertistici in Russia e nei paesi della CSI.',
    cardSportTag: '04 / disciplina sportiva',
    cardSportTitle: 'Disciplina sportiva',
    cardSportText: 'Yulia ha partecipato più volte a competizioni di nuoto in Russia e in Italia, ottenendo piazzamenti sul podio in diverse gare; nel 2024 ha partecipato allo SwimCup internazionale, entrando nella top 5.',
    turnkeyKicker: 'Organizzazione eventi chiavi in mano',
    turnkeyTitle: 'Organizzazione eventi',
    turnkeyText: 'Una struttura di lavoro chiara: dall’idea e dalla preparazione al coordinamento del team, alla gestione del backstage e all’impressione finale.',
    serviceOneTitle: 'Concept',
    serviceOneText: 'Formato, pubblico, atmosfera, scala e struttura dell’evento.',
    serviceTwoTitle: 'Coordinamento',
    serviceTwoText: 'Team, timing, location, partecipanti e ordine operativo.',
    serviceThreeText: 'La parte invisibile dell’evento: comunicazione, controllo dei dettagli e gestione calma del processo.',
    serviceFourTitle: 'Risultato',
    serviceFourText: 'Un evento completo: palco, pubblico, atmosfera e una percezione di livello professionale.',
    languagesTitle: 'Tre versioni dello stesso profilo',
    languagesText: 'Il russo rimane la lingua principale. Inglese e italiano rafforzano il carattere internazionale della pagina.',
    contactTitle: 'Contatto',
    contactText: 'Contatto tramite Instagram e il sito ufficiale di Best Sound.',
    finalEyebrow: 'Profilo premium minimal',
    finalTitle: 'Palco, movimento e stile personale in un sistema sobrio.',
    dialogTitle: 'Azioni rapide',
    dialogAgency: 'Profilo Best Sound',
    dialogEvent: 'Organizzazione eventi',
    rotator: ['Flusso concerto', 'Mappa backstage', 'Ritmo ospiti', 'Energia palco']
  }
};

let activeLanguage = localStorage.getItem('yk-language') || 'ru';
let rotatorWords = translations[activeLanguage].rotator;
let rotatorIndex = 0;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function applyLanguage(language) {
  const dictionary = translations[language] || translations.ru;
  activeLanguage = language;
  rotatorWords = dictionary.rotator;
  document.documentElement.lang = dictionary.lang;
  document.title = dictionary.title;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.setAttribute('content', dictionary.description);

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) element.textContent = dictionary[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const key = element.dataset.i18nHtml;
    if (dictionary[key]) element.innerHTML = dictionary[key];
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((element) => {
    element.dataset.i18nAttr.split(',').forEach((pair) => {
      const [attribute, key] = pair.split(':').map((item) => item.trim());
      if (attribute && key && dictionary[key]) element.setAttribute(attribute, dictionary[key]);
    });
  });

  document.querySelectorAll('[data-lang-switch]').forEach((button) => {
    const isActive = button.dataset.langSwitch === language;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  if (rotator) rotator.textContent = rotatorWords[rotatorIndex % rotatorWords.length];
  localStorage.setItem('yk-language', language);
}

window.addEventListener('pointermove', (event) => {
  root.style.setProperty('--mx', `${event.clientX}px`);
  root.style.setProperty('--my', `${event.clientY}px`);
  if (cursor) {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  }
});

window.addEventListener('scroll', () => {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  const value = total > 0 ? window.scrollY / total : 0;
  if (progress) progress.style.width = `${value * 100}%`;
}, { passive: true });

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    if (entry.target.hasAttribute('data-count')) runCounter(entry.target);
    entry.target.querySelectorAll('[data-count]').forEach(runCounter);
  });
}, { threshold: 0.18 });

document.querySelectorAll('.reveal, [data-count]').forEach((element) => revealObserver.observe(element));

function runCounter(element) {
  if (element.dataset.done) return;
  element.dataset.done = 'true';
  const target = Number(element.dataset.count || 0);
  const duration = 900;
  const start = performance.now();

  function frame(now) {
    const progressValue = clamp((now - start) / duration, 0, 1);
    const eased = 1 - Math.pow(1 - progressValue, 3);
    element.textContent = Math.round(target * eased).toLocaleString(activeLanguage === 'ru' ? 'ru-RU' : activeLanguage === 'it' ? 'it-IT' : 'en-US');
    if (progressValue < 1) requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}

document.querySelectorAll('[data-lang-switch]').forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.dataset.langSwitch));
});

document.querySelectorAll('[data-spotlight]').forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--spot-x', `${event.clientX - rect.left}px`);
    card.style.setProperty('--spot-y', `${event.clientY - rect.top}px`);
  });
});

document.querySelectorAll('[data-tilt]').forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `rotateY(${x * 7}deg) rotateX(${-y * 7}deg)`;
  });
  card.addEventListener('pointerleave', () => {
    card.style.transform = '';
  });
});

document.querySelectorAll('.magnetic').forEach((element) => {
  element.addEventListener('pointermove', (event) => {
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    element.style.transform = `translate(${x * 0.16}px, ${y * 0.16}px)`;
    if (cursor) {
      cursor.style.width = '48px';
      cursor.style.height = '48px';
      cursor.style.borderColor = 'rgba(255,91,158,.8)';
    }
  });
  element.addEventListener('pointerleave', () => {
    element.style.transform = '';
    if (cursor) {
      cursor.style.width = '28px';
      cursor.style.height = '28px';
      cursor.style.borderColor = 'rgba(17,17,24,.55)';
    }
  });
});

const rotator = document.querySelector('[data-rotator]');
setInterval(() => {
  if (!rotator) return;
  rotatorIndex = (rotatorIndex + 1) % rotatorWords.length;
  rotator.animate([{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(-8px)' }], { duration: 160, fill: 'forwards' }).onfinish = () => {
    rotator.textContent = rotatorWords[rotatorIndex];
    rotator.animate([{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 240, fill: 'forwards' });
  };
}, 2600);

const dialog = document.querySelector('[data-command-dialog]');
const commandOpen = document.querySelector('[data-command-open]');
commandOpen?.addEventListener('click', () => dialog?.showModal());
window.addEventListener('keydown', (event) => {
  const isCommand = event.metaKey || event.ctrlKey;
  if (isCommand && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    dialog?.showModal();
  }
  if (event.key === 'Escape' && dialog?.open) dialog.close();
});

const canvas = document.getElementById('auroraCanvas');
const ctx = canvas?.getContext('2d');
let width = 0;
let height = 0;
let particles = [];

function resizeCanvas() {
  if (!canvas || !ctx) return;
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * ratio);
  canvas.height = Math.floor(height * ratio);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  particles = Array.from({ length: Math.min(70, Math.floor((width * height) / 18000)) }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: 80 + Math.random() * 160,
    vx: (Math.random() - 0.5) * 0.18,
    vy: (Math.random() - 0.5) * 0.18,
    hue: 270 + Math.random() * 95,
    alpha: 0.06 + Math.random() * 0.07
  }));
}

function drawAurora() {
  if (!ctx) return;
  ctx.clearRect(0, 0, width, height);
  particles.forEach((p) => {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < -p.r) p.x = width + p.r;
    if (p.x > width + p.r) p.x = -p.r;
    if (p.y < -p.r) p.y = height + p.r;
    if (p.y > height + p.r) p.y = -p.r;
    const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
    gradient.addColorStop(0, `hsla(${p.hue}, 92%, 70%, ${p.alpha})`);
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(drawAurora);
}

applyLanguage(activeLanguage);

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  drawAurora();
}
