const root = document.documentElement;
const progress = document.querySelector('.scroll-progress span');
const cursor = document.querySelector('.cursor-glow');

const translations = {
  ru: {
    lang: 'ru',
    title: 'Yulia Komarova — Best Sound',
    description: 'Юлия Комарова — организатор концертов и представитель агентства Best Sound. Личная биографическая визитка на русском, английском и итальянском.',
    navAria: 'Основная навигация',
    closeLabel: 'Закрыть',
    languageSelector: 'Выбор языка',
    commandLabel: 'Открыть меню',
    commandButton: 'Меню',
    brandRole: 'Best Sound',
    navProfile: 'Биография',
    navSignature: 'Подход',
    navEvents: 'События',
    eyebrow: 'Концерты · Best Sound · Биография',
    heroTitle: 'Юлия Комарова. <em>Сцена, организация, точность.</em>',
    heroLead: 'Юлия Комарова — организатор концертов и представитель агентства Best Sound. Её работа связана с подготовкой концертных событий, где важны точная координация, спокойная коммуникация и внимание к деталям, которые зритель обычно не видит.',
    primaryCta: 'Организация мероприятия',
    systemLabel: 'БИОГРАФИЯ',
    flowText: 'Организация концертов · Best Sound · спортивная дисциплина · международный контекст.',
    metricLanguages: 'языка: RU, EN, IT',
    metricFields: 'сцена и спорт',
    metricProfile: 'топ-5 SwimCup 2024',
    aboutKicker: 'Биография',
    aboutTitle: 'Биография в ритме сцены и спорта.',
    aboutText: 'Юлия работает в концертной индустрии как человек, для которого событие начинается задолго до выхода артиста на сцену. В её профессиональном фокусе — подготовка, координация, коммуникация с участниками процесса и контроль деталей, от которых зависит общее впечатление от мероприятия.',
    signatureKicker: 'Почерк',
    signatureTitle: 'Её профессиональный почерк.',
    signatureLead: 'Юлия не работает через громкость и случайность. Её стиль — спокойная собранность, быстрый контакт с людьми и точное внимание к тому, что должно сработать вовремя.',
    signatureOneTitle: 'Спокойный контроль',
    signatureOneText: 'Она держит процесс без лишнего шума: задачи, люди, сроки и бэкстейдж остаются в рабочем ритме.',
    signatureTwoTitle: 'Сценическое мышление',
    signatureTwoText: 'Для неё концерт — не набор действий, а цельная композиция, где важны путь гостя, состояние команды и финальное впечатление.',
    signatureThreeTitle: 'Спортивная выдержка',
    signatureThreeText: 'Опыт соревнований дал ей дисциплину, устойчивость к давлению и привычку работать до результата.',
    cardAgencyTag: '01 / Best Sound',
    cardAgencyTitle: 'Представитель агентства Best Sound',
    cardAgencyText: 'Юлия представляет профессиональную среду Best Sound — концертного агентства, связанного с гастрольными проектами и международными артистами. В её публичной визитке Best Sound выступает не декоративным логотипом, а частью профессиональной идентичности.',
    cardConcertsTag: '02 / концерты',
    cardConcertsTitle: 'Концертная работа',
    cardConcertsText: 'Её деятельность связана с организацией концертных событий, гастрольной логикой, работой с площадкой, командой и бэкстейдж-процессами.',
    cardProjectsTag: '03 / проекты',
    cardProjectsTitle: 'Международный контекст',
    cardProjectsText: 'В профессиональном контексте Best Sound представлены Alessandro Safina, Joe Lynn Turner и концертные направления по России и странам СНГ.',
    cardSportTag: '04 / плавание',
    cardSportTitle: 'Плавание и дисциплина',
    cardSportText: 'Юлия неоднократно участвовала в соревнованиях по плаванию в России и Италии, становилась призёром разных стартов, а в 2024 году выступила на международном SwimCup и вошла в топ-5. Спорт сформировал в ней выдержку, темп и способность работать на результат.',
    quoteText: 'Она соединяет две разные среды — сцену и спортивную дистанцию. В обеих важны концентрация, точное движение и способность дойти до финала без потери темпа.',
    turnkeyKicker: 'Организация событий',
    turnkeyTitle: 'Организация мероприятия',
    turnkeyText: 'В работе Юлии событие рассматривается как цельная система: идея, подготовка, команда, бэкстейдж, публика и финальное впечатление.',
    serviceOneTitle: 'Концепция',
    serviceOneText: 'Формат, аудитория, настроение, масштаб и структура события.',
    serviceTwoTitle: 'Координация',
    serviceTwoText: 'Команда, тайминг, площадка, участники и последовательность действий.',
    serviceThreeTitle: 'Бэкстейдж',
    serviceThreeText: 'Невидимая часть мероприятия: коммуникация, контроль деталей и спокойное управление процессом.',
    serviceFourTitle: 'Результат',
    serviceFourText: 'Событие, которое воспринимается цельно: сцена, публика, атмосфера и профессиональный уровень.',
    timelineKicker: 'Опоры профиля',
    timelineTitle: 'Ключевые опоры профиля.',
    timelineLabelOne: 'Best Sound',
    timelineLabelTwo: 'Сцена',
    timelineLabelThree: 'SwimCup 2024',
    timelineLabelFour: 'RU · EN · IT',
    timelineOne: 'Профессиональная среда концертного менеджмента и гастрольных проектов.',
    timelineTwo: 'Работа с событиями, командой, площадкой и бэкстейдж-процессами.',
    timelineThree: 'Международный спортивный опыт и результат в топ-5.',
    timelineFour: 'Профиль, открытый для русскоязычной и международной аудитории.',
    languagesKicker: 'Языки',
    languagesTitle: 'Профиль на трёх языках',
    languagesText: 'Русский остаётся основным языком. Английский и итальянский раскрывают её профессиональный образ для международной аудитории.',
    langRuTitle: 'Русский',
    langRuText: 'Юлия Комарова — организатор концертов и представитель агентства Best Sound. Её работа объединяет концертную подготовку, коммуникацию и точную координацию событий.',
    langEnTitle: 'Английский',
    langEnText: 'Английская версия делает профиль понятным для международных артистов, партнёров и профессиональной аудитории.',
    langItTitle: 'Итальянский',
    langItText: 'Итальянская версия поддерживает европейский контекст биографии и спортивного опыта Юлии.',
    contactTitle: 'Контакт',
    contactText: 'Связь — через Instagram и официальный сайт Best Sound.',
    finalEyebrow: 'Личная биография',
    finalTitle: 'Сцена, дисциплина и личный стиль — в одной профессиональной биографии.',
    dialogTitle: 'Быстрые действия',
    dialogAgency: 'Профиль Best Sound',
    dialogSignature: 'Профессиональный почерк',
    dialogEvent: 'Организация мероприятия',
    rotator: ['Концертная работа', 'Бэкстейдж', 'Спортивная дисциплина', 'Ритм события']
  },
  en: {
    lang: 'en',
    title: 'Yulia Komarova — Best Sound',
    description: 'Yulia Komarova is a concert organizer and Best Sound representative. A personal biographical profile in Russian, English and Italian.',
    navAria: 'Main navigation',
    closeLabel: 'Close',
    languageSelector: 'Language selector',
    commandLabel: 'Open menu',
    commandButton: 'Menu',
    brandRole: 'Best Sound',
    navProfile: 'Biography',
    navSignature: 'Approach',
    navEvents: 'Events',
    eyebrow: 'Concerts · Best Sound · Personal profile',
    heroTitle: 'Yulia Komarova. <em>Stage, organization, precision.</em>',
    heroLead: 'Yulia Komarova is a concert organizer and Best Sound representative. Her work is connected with the preparation of concert events where precise coordination, composed communication and attention to details behind the audience’s view are essential.',
    primaryCta: 'Event organization',
    systemLabel: 'PERSONAL BIOGRAPHY',
    flowText: 'Concert organization · Best Sound · swimming discipline · international background.',
    metricLanguages: 'languages: RU, EN, IT',
    metricFields: 'stage and sport',
    metricProfile: 'top-5 SwimCup 2024',
    aboutKicker: 'Biography',
    aboutTitle: 'A biography shaped by stage work and sport.',
    aboutText: 'Yulia works in the concert industry as a professional for whom an event begins long before the artist steps onto the stage. Her focus is preparation, coordination, communication with everyone involved and control of the details that shape the overall impression.',
    signatureKicker: 'Signature',
    signatureTitle: 'Her professional signature.',
    signatureLead: 'Yulia does not work through noise or chance. Her style is calm focus, fast human contact and precise attention to what must work on time.',
    signatureOneTitle: 'Calm control',
    signatureOneText: 'She keeps the process steady without unnecessary noise: tasks, people, timing and backstage stay in rhythm.',
    signatureTwoTitle: 'Stage thinking',
    signatureTwoText: 'For her, a concert is not a set of actions but a complete composition where the guest journey, team condition and final impression matter.',
    signatureThreeTitle: 'Athletic resilience',
    signatureThreeText: 'Competition experience gave her discipline, pressure resistance and the habit of working until the result is achieved.',
    cardAgencyTag: '01 / Best Sound',
    cardAgencyTitle: 'Best Sound representative',
    cardAgencyText: 'Yulia represents the professional environment of Best Sound, a concert agency connected with touring projects and international artists. Best Sound is not just a logo in her public identity; it is part of her professional context.',
    cardConcertsTag: '02 / concerts',
    cardConcertsTitle: 'Concert work',
    cardConcertsText: 'Her work is linked to concert event organization, touring logic, venue coordination, team interaction and backstage processes.',
    cardProjectsTag: '03 / projects',
    cardProjectsTitle: 'International context',
    cardProjectsText: 'Within the Best Sound professional context are Alessandro Safina, Joe Lynn Turner and concert projects across Russia and CIS countries.',
    cardSportTag: '04 / swimming',
    cardSportTitle: 'Swimming and discipline',
    cardSportText: 'Yulia has repeatedly taken part in swimming competitions in Russia and Italy, achieved podium placements at different events, and in 2024 competed at the international SwimCup, finishing in the top 5. Sport shaped her endurance, pace and ability to work toward a result.',
    quoteText: 'She connects two different environments: the stage and the swimming lane. In both, concentration, precise movement and the ability to reach the finish without losing pace are essential.',
    turnkeyKicker: 'Event organization',
    turnkeyTitle: 'Event organization',
    turnkeyText: 'In Yulia’s work, an event is treated as a complete system: idea, preparation, team, backstage, audience and final impression.',
    serviceOneTitle: 'Concept',
    serviceOneText: 'Format, audience, mood, scale and event structure.',
    serviceTwoTitle: 'Coordination',
    serviceTwoText: 'Team, timing, venue, participants and sequence of actions.',
    serviceThreeTitle: 'Backstage',
    serviceThreeText: 'The invisible part of the event: communication, detail control and calm process management.',
    serviceFourTitle: 'Result',
    serviceFourText: 'An event perceived as a whole: stage, audience, atmosphere and professional level.',
    timelineKicker: 'Profile line',
    timelineTitle: 'Core points of the profile.',
    timelineLabelOne: 'Best Sound',
    timelineLabelTwo: 'Stage',
    timelineLabelThree: 'SwimCup 2024',
    timelineLabelFour: 'RU · EN · IT',
    timelineOne: 'A professional environment of concert management and touring projects.',
    timelineTwo: 'Work with events, teams, venues and backstage processes.',
    timelineThree: 'International athletic experience and a top-5 result.',
    timelineFour: 'A profile open to Russian-speaking and international audiences.',
    languagesKicker: 'Languages',
    languagesTitle: 'A profile in three languages',
    languagesText: 'Russian remains the main language. English and Italian present her professional image to an international audience.',
    langRuTitle: 'Russian',
    langRuText: 'Yulia Komarova is a concert organizer and Best Sound representative whose work combines event preparation, communication and precise coordination.',
    langEnTitle: 'English',
    langEnText: 'The English version makes the profile clear to international artists, partners and professional audiences.',
    langItTitle: 'Italian',
    langItText: 'The Italian version supports the European context of Yulia’s biography and sporting experience.',
    contactTitle: 'Contact',
    contactText: 'Contact via Instagram and the official Best Sound website.',
    finalEyebrow: 'Personal profile',
    finalTitle: 'Stage, discipline and personal style in one professional biography.',
    dialogTitle: 'Quick actions',
    dialogAgency: 'Best Sound profile',
    dialogSignature: 'Professional signature',
    dialogEvent: 'Event organization',
    rotator: ['Concert work', 'Backstage focus', 'Sport discipline', 'Event rhythm']
  },
  it: {
    lang: 'it',
    title: 'Yulia Komarova — Best Sound',
    description: 'Yulia Komarova è organizzatrice di concerti e rappresentante di Best Sound. Un profilo biografico personale in russo, inglese e italiano.',
    navAria: 'Navigazione principale',
    closeLabel: 'Chiudi',
    languageSelector: 'Selezione lingua',
    commandLabel: 'Apri menu',
    commandButton: 'Menu',
    brandRole: 'Best Sound',
    navProfile: 'Biografia',
    navSignature: 'Approccio',
    navEvents: 'Eventi',
    eyebrow: 'Concerti · Best Sound · Profilo personale',
    heroTitle: 'Yulia Komarova. <em>Palco, organizzazione, precisione.</em>',
    heroLead: 'Yulia Komarova è organizzatrice di concerti e rappresentante di Best Sound. La sua attività è legata alla preparazione di eventi concertistici, dove sono essenziali coordinamento preciso, comunicazione equilibrata e attenzione ai dettagli che il pubblico normalmente non vede.',
    primaryCta: 'Organizzazione eventi',
    systemLabel: 'BIOGRAFIA PERSONALE',
    flowText: 'Organizzazione concerti · Best Sound · disciplina del nuoto · contesto internazionale.',
    metricLanguages: 'lingue: RU, EN, IT',
    metricFields: 'palco e sport',
    metricProfile: 'top-5 SwimCup 2024',
    aboutKicker: 'Biografia',
    aboutTitle: 'Una biografia nel ritmo del palco e dello sport.',
    aboutText: 'Yulia lavora nell’industria dei concerti come una professionista per cui un evento comincia molto prima dell’ingresso dell’artista sul palco. Il suo focus è sulla preparazione, il coordinamento, la comunicazione con le persone coinvolte e il controllo dei dettagli che definiscono l’impressione complessiva.',
    signatureKicker: 'Signature',
    signatureTitle: 'La sua firma professionale.',
    signatureLead: 'Yulia non lavora attraverso il rumore o il caso. Il suo stile è concentrazione calma, contatto rapido con le persone e attenzione precisa a ciò che deve funzionare al momento giusto.',
    signatureOneTitle: 'Controllo calmo',
    signatureOneText: 'Mantiene il processo stabile senza rumore inutile: attività, persone, tempi e backstage restano nel ritmo giusto.',
    signatureTwoTitle: 'Pensiero scenico',
    signatureTwoText: 'Per lei un concerto non è una serie di azioni, ma una composizione completa in cui contano il percorso dell’ospite, lo stato del team e l’impressione finale.',
    signatureThreeTitle: 'Resistenza sportiva',
    signatureThreeText: 'L’esperienza agonistica le ha dato disciplina, resistenza alla pressione e l’abitudine a lavorare fino al risultato.',
    cardAgencyTag: '01 / Best Sound',
    cardAgencyTitle: 'Rappresentante di Best Sound',
    cardAgencyText: 'Yulia rappresenta l’ambiente professionale di Best Sound, un’agenzia di concerti legata a progetti in tournée e ad artisti internazionali. Best Sound non è solo un logo nella sua identità pubblica, ma una parte del suo contesto professionale.',
    cardConcertsTag: '02 / concerti',
    cardConcertsTitle: 'Lavoro concertistico',
    cardConcertsText: 'La sua attività è legata all’organizzazione di eventi concertistici, alla logica dei tour, al coordinamento con la location, al lavoro con il team e ai processi di backstage.',
    cardProjectsTag: '03 / progetti',
    cardProjectsTitle: 'Contesto internazionale',
    cardProjectsText: 'Nel contesto professionale di Best Sound rientrano Alessandro Safina, Joe Lynn Turner e progetti concertistici in Russia e nei paesi della CSI.',
    cardSportTag: '04 / nuoto',
    cardSportTitle: 'Nuoto e disciplina',
    cardSportText: 'Yulia ha partecipato più volte a competizioni di nuoto in Russia e in Italia, ottenendo piazzamenti sul podio in diverse gare; nel 2024 ha partecipato allo SwimCup internazionale, entrando nella top 5. Lo sport ha formato in lei resistenza, ritmo e capacità di lavorare per il risultato.',
    quoteText: 'Collega due ambienti diversi: il palco e la corsia di nuoto. In entrambi contano concentrazione, movimento preciso e capacità di arrivare al finale senza perdere ritmo.',
    turnkeyKicker: 'Organizzazione eventi',
    turnkeyTitle: 'Organizzazione eventi',
    turnkeyText: 'Nel lavoro di Yulia, un evento è considerato un sistema completo: idea, preparazione, team, backstage, pubblico e impressione finale.',
    serviceOneTitle: 'Concept',
    serviceOneText: 'Formato, pubblico, atmosfera, scala e struttura dell’evento.',
    serviceTwoTitle: 'Coordinamento',
    serviceTwoText: 'Team, timing, location, partecipanti e sequenza delle azioni.',
    serviceThreeTitle: 'Backstage',
    serviceThreeText: 'La parte invisibile dell’evento: comunicazione, controllo dei dettagli e gestione calma del processo.',
    serviceFourTitle: 'Risultato',
    serviceFourText: 'Un evento percepito come un insieme: palco, pubblico, atmosfera e livello professionale.',
    timelineKicker: 'Linea del profilo',
    timelineTitle: 'Punti chiave del profilo.',
    timelineLabelOne: 'Best Sound',
    timelineLabelTwo: 'Palco',
    timelineLabelThree: 'SwimCup 2024',
    timelineLabelFour: 'RU · EN · IT',
    timelineOne: 'Un ambiente professionale di management concertistico e progetti in tournée.',
    timelineTwo: 'Lavoro con eventi, team, location e processi di backstage.',
    timelineThree: 'Esperienza sportiva internazionale e risultato nella top 5.',
    timelineFour: 'Un profilo aperto al pubblico russofono e internazionale.',
    languagesKicker: 'Lingue',
    languagesTitle: 'Un profilo in tre lingue',
    languagesText: 'Il russo rimane la lingua principale. Inglese e italiano presentano la sua immagine professionale a un pubblico internazionale.',
    langRuTitle: 'Russo',
    langRuText: 'Yulia Komarova è organizzatrice di concerti e rappresentante di Best Sound. Il suo lavoro unisce preparazione, comunicazione e coordinamento preciso.',
    langEnTitle: 'Inglese',
    langEnText: 'La versione inglese rende il profilo chiaro per artisti internazionali, partner e pubblico professionale.',
    langItTitle: 'Italiano',
    langItText: 'La versione italiana sostiene il contesto europeo della biografia e dell’esperienza sportiva di Yulia.',
    contactTitle: 'Contatto',
    contactText: 'Contatto tramite Instagram e il sito ufficiale di Best Sound.',
    finalEyebrow: 'Profilo personale',
    finalTitle: 'Palco, disciplina e stile personale in una biografia professionale.',
    dialogTitle: 'Azioni rapide',
    dialogAgency: 'Profilo Best Sound',
    dialogSignature: 'Firma professionale',
    dialogEvent: 'Organizzazione eventi',
    rotator: ['Lavoro concertistico', 'Focus backstage', 'Disciplina sportiva', 'Ritmo evento']
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
