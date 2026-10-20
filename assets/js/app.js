const root = document.documentElement;
const progress = document.querySelector('.scroll-progress span');
const cursor = document.querySelector('.cursor-glow');

const translations = {
  ru: {
    contactInstagram: "Instagram Юлии",
    contactAgency: "Сайт Best Sound",
    lightboxPrev: "Предыдущая работа",
    lightboxNext: "Следующая работа",
    lightboxClose: "Закрыть просмотр",
    swimFilmKicker: 'Плавание / видео',
    swimFilmTitle: 'В движении.',
    swimFilmCaption: 'Короткий фрагмент тренировки в бассейне.',
    swimFilmAria: 'Юлия во время плавания в бассейне',
    swimFilmFallback: 'Ваш браузер не поддерживает воспроизведение видео.',
    artKicker: 'Искусство',
    artTitle: 'Живопись и рисунок.',
    artMenu: 'Живопись',
    artAltFlowerStudy: 'Цветочная живопись Юлии, деталь розовых лепестков',
    artAltForest: 'Графический женский портрет с лесным пейзажем',
    artAltExpression: 'Графический портрет мужчины с усами',
    artAltCharcoal: 'Женский портрет, рисунок углём',
    artAltFloral: 'Цветочная картина Юлии на мольберте',
    artVideoLabel: 'Видео с цветочной картиной Юлии',
    artVideoFallback: 'Ваш браузер не поддерживает воспроизведение видео.',
    lang: 'ru',
    skipLink: 'К содержанию',
    title: 'Yulia Komarova — Best Sound',
    description: "Юлия Комарова — организация концертов Best Sound, живопись, плавание и профессиональная биография.",
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
    finalEyebrow: 'Личная биография',
    finalTitle: 'Сцена, дисциплина и личный стиль — в одной профессиональной биографии.',
    dialogTitle: 'Быстрые действия',
    dialogAgency: 'Профиль Best Sound',
    dialogSignature: 'Профессиональный почерк',
    dialogEvent: 'Организация мероприятия',
    rotator: ['Концертная работа', 'Бэкстейдж', 'Спортивная дисциплина', 'Ритм события']
  },
  en: {
    contactInstagram: "Yulia on Instagram",
    contactAgency: "Explore Best Sound",
    lightboxPrev: "Previous artwork",
    lightboxNext: "Next artwork",
    lightboxClose: "Close image viewer",
    swimFilmKicker: 'Swimming / Film',
    swimFilmTitle: 'In motion.',
    swimFilmCaption: 'A moment from the swimming pool.',
    swimFilmAria: 'Yulia swimming in a pool',
    swimFilmFallback: 'Your browser does not support video playback.',
    artKicker: 'Art',
    artTitle: 'Painting & drawing.',
    artMenu: 'Artwork',
    artAltFlowerStudy: 'Yulia\'s floral painting, close-up of soft pink petals',
    artAltForest: 'Charcoal portrait of a woman with a forest landscape',
    artAltExpression: 'Charcoal portrait of a man with a moustache',
    artAltCharcoal: 'Expressive charcoal portrait of a woman',
    artAltFloral: 'Yulia\'s floral canvas on an easel',
    artVideoLabel: 'Video of Yulia\'s floral painting',
    artVideoFallback: 'Your browser does not support video playback.',
    lang: 'en',
    skipLink: 'Skip to content',
    title: 'Yulia Komarova — Best Sound',
    description: "Yulia Komarova — concert organization at Best Sound, painting, swimming, and professional biography.",
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
    heroLead: 'Yulia Komarova is a concert organizer and Best Sound representative. Her work covers the preparation of concert events where precise coordination, calm communication and invisible attention to detail shape the result.',
    primaryCta: 'Event organization',
    systemLabel: 'PERSONAL BIOGRAPHY',
    flowText: 'Concert organization · Best Sound · athletic discipline · international background.',
    metricLanguages: 'languages: RU, EN, IT',
    metricFields: 'stage and sport',
    metricProfile: 'top-5 SwimCup 2024',
    aboutKicker: 'Biography',
    aboutTitle: 'A biography shaped by stage work and sport.',
    aboutText: 'Yulia works in the concert industry as a professional for whom an event begins long before the artist steps onto the stage. Her focus is preparation, coordination, communication with everyone involved and control of the details that shape the overall impression.',
    signatureKicker: 'Style',
    signatureTitle: 'Her professional signature.',
    signatureLead: 'Yulia’s style is calm focus, clear communication and precise attention to what has to work on time.',
    signatureOneTitle: 'Calm control',
    signatureOneText: 'She keeps the process steady without unnecessary noise: tasks, people, timing and backstage stay in rhythm.',
    signatureTwoTitle: 'Stage thinking',
    signatureTwoText: 'For her, a concert is not a list of tasks but a complete composition where the guest journey, team readiness and final impression matter.',
    signatureThreeTitle: 'Athletic resilience',
    signatureThreeText: 'Competition experience gave her discipline, pressure resistance and the habit of working until the result is achieved.',
    cardAgencyTag: '01 / Best Sound',
    cardAgencyTitle: 'Best Sound representative',
    cardAgencyText: 'Yulia represents the professional environment of Best Sound, a concert agency connected with touring projects and international artists. In her public identity, Best Sound is not just a logo; it is part of her professional context.',
    cardConcertsTag: '02 / concerts',
    cardConcertsTitle: 'Concert work',
    cardConcertsText: 'Her work is linked to concert event organization, touring logic, venue coordination, team interaction and backstage processes.',
    cardProjectsTag: '03 / projects',
    cardProjectsTitle: 'International context',
    cardProjectsText: 'Best Sound’s professional context includes Alessandro Safina, Joe Lynn Turner and concert projects across Russia and CIS countries.',
    cardSportTag: '04 / swimming',
    cardSportTitle: 'Swimming and discipline',
    cardSportText: 'Yulia has repeatedly taken part in swimming competitions in Russia and Italy, achieved podium placements at different events, and in 2024 competed at the international SwimCup, finishing in the top 5. Sport shaped her endurance, pace and ability to work toward a result.',
    quoteText: 'She connects two different environments: the stage and the swimming lane. In both, concentration, precise movement and the ability to reach the finish without losing pace are essential.',
    turnkeyKicker: 'Event organization',
    turnkeyTitle: 'Event organization',
    turnkeyText: 'For Yulia, an event is a complete system: idea, preparation, team, backstage, audience and final impression.',
    serviceOneTitle: 'Concept',
    serviceOneText: 'Format, audience, mood, scale and event structure.',
    serviceTwoTitle: 'Coordination',
    serviceTwoText: 'Team, timing, venue, participants and sequence of actions.',
    serviceThreeTitle: 'Backstage',
    serviceThreeText: 'The invisible part of the event: communication, detail control and calm process management.',
    serviceFourTitle: 'Result',
    serviceFourText: 'A complete event: stage, audience, atmosphere and professional level.',
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
    finalEyebrow: 'Personal biography',
    finalTitle: 'Stage, discipline and personal style in one professional biography.',
    dialogTitle: 'Quick actions',
    dialogAgency: 'Best Sound profile',
    dialogSignature: 'Professional signature',
    dialogEvent: 'Event organization',
    rotator: ['Concert work', 'Backstage focus', 'Sport discipline', 'Event rhythm']
  },
  it: {
    contactInstagram: "Instagram di Yulia",
    contactAgency: "Scopri Best Sound",
    lightboxPrev: "Opera precedente",
    lightboxNext: "Opera successiva",
    lightboxClose: "Chiudi la galleria",
    swimFilmKicker: 'Nuoto / Video',
    swimFilmTitle: 'In movimento.',
    swimFilmCaption: 'Un momento di allenamento in piscina.',
    swimFilmAria: 'Yulia mentre nuota in piscina',
    swimFilmFallback: 'Il browser non supporta la riproduzione video.',
    artKicker: 'Arte',
    artTitle: 'Pittura e disegno.',
    artMenu: 'Opere',
    artAltFlowerStudy: 'Dipinto floreale di Yulia, dettaglio di petali rosa',
    artAltForest: 'Ritratto a carboncino di una donna con paesaggio boschivo',
    artAltExpression: 'Ritratto a carboncino di un uomo con i baffi',
    artAltCharcoal: 'Ritratto espressivo a carboncino di una donna',
    artAltFloral: 'Dipinto floreale di Yulia su un cavalletto',
    artVideoLabel: 'Video del dipinto floreale di Yulia',
    artVideoFallback: 'Il browser non supporta la riproduzione video.',
    lang: 'it',
    skipLink: 'Vai al contenuto',
    title: 'Yulia Komarova — Best Sound',
    description: "Yulia Komarova — organizzazione di concerti Best Sound, pittura, nuoto e biografia professionale.",
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
    heroLead: 'Yulia Komarova è organizzatrice di concerti e rappresentante di Best Sound. Il suo lavoro riguarda la preparazione di eventi concertistici, dove coordinamento preciso, comunicazione equilibrata e attenzione ai dettagli non visibili al pubblico definiscono il risultato.',
    primaryCta: 'Organizzazione eventi',
    systemLabel: 'BIOGRAFIA PERSONALE',
    flowText: 'Organizzazione concerti · Best Sound · disciplina sportiva · contesto internazionale.',
    metricLanguages: 'lingue: RU, EN, IT',
    metricFields: 'palco e sport',
    metricProfile: 'top-5 SwimCup 2024',
    aboutKicker: 'Biografia',
    aboutTitle: 'Una biografia nel ritmo del palco e dello sport.',
    aboutText: 'Yulia lavora nell’industria dei concerti come una professionista per cui un evento comincia molto prima dell’ingresso dell’artista sul palco. Il suo focus è sulla preparazione, il coordinamento, la comunicazione con le persone coinvolte e il controllo dei dettagli che definiscono l’impressione complessiva.',
    signatureKicker: 'Firma',
    signatureTitle: 'La sua firma professionale.',
    signatureLead: 'Yulia non lavora nel rumore o nell’improvvisazione. Il suo stile è concentrazione calma, comunicazione chiara e attenzione precisa a ciò che deve funzionare al momento giusto.',
    signatureOneTitle: 'Controllo calmo',
    signatureOneText: 'Mantiene il processo stabile senza rumore inutile: attività, persone, tempi e backstage restano nel ritmo giusto.',
    signatureTwoTitle: 'Pensiero scenico',
    signatureTwoText: 'Per lei un concerto non è una lista di compiti, ma una composizione completa in cui contano il percorso degli ospiti, la prontezza del team e l’impressione finale.',
    signatureThreeTitle: 'Resistenza sportiva',
    signatureThreeText: 'L’esperienza agonistica le ha dato disciplina, resistenza alla pressione e l’abitudine a lavorare fino al risultato.',
    cardAgencyTag: '01 / Best Sound',
    cardAgencyTitle: 'Rappresentante di Best Sound',
    cardAgencyText: 'Yulia rappresenta l’ambiente professionale di Best Sound, un’agenzia di concerti legata a progetti in tournée e ad artisti internazionali. Nella sua identità pubblica, Best Sound non è solo un logo: è parte del suo contesto professionale.',
    cardConcertsTag: '02 / concerti',
    cardConcertsTitle: 'Lavoro concertistico',
    cardConcertsText: 'La sua attività è legata all’organizzazione di eventi concertistici, alla logica dei tour, al coordinamento con la location, al lavoro con il team e ai processi di backstage.',
    cardProjectsTag: '03 / progetti',
    cardProjectsTitle: 'Contesto internazionale',
    cardProjectsText: 'Il contesto professionale di Best Sound include Alessandro Safina, Joe Lynn Turner e progetti concertistici in Russia e nei paesi della CSI.',
    cardSportTag: '04 / nuoto',
    cardSportTitle: 'Nuoto e disciplina',
    cardSportText: 'Yulia ha partecipato più volte a competizioni di nuoto in Russia e in Italia, ottenendo piazzamenti sul podio in diverse gare; nel 2024 ha partecipato allo SwimCup internazionale, entrando nella top 5. Lo sport ha formato in lei resistenza, ritmo e capacità di lavorare per il risultato.',
    quoteText: 'Collega due ambienti diversi: il palco e la corsia di nuoto. In entrambi contano concentrazione, movimento preciso e capacità di arrivare al finale senza perdere ritmo.',
    turnkeyKicker: 'Organizzazione eventi',
    turnkeyTitle: 'Organizzazione eventi',
    turnkeyText: 'Nel lavoro di Yulia, un evento è un sistema completo: idea, preparazione, team, backstage, pubblico e impressione finale.',
    serviceOneTitle: 'Concept',
    serviceOneText: 'Formato, pubblico, atmosfera, scala e struttura dell’evento.',
    serviceTwoTitle: 'Coordinamento',
    serviceTwoText: 'Team, timing, location, partecipanti e sequenza delle azioni.',
    serviceThreeTitle: 'Backstage',
    serviceThreeText: 'La parte invisibile dell’evento: comunicazione, controllo dei dettagli e gestione calma del processo.',
    serviceFourTitle: 'Risultato',
    serviceFourText: 'Un evento completo: palco, pubblico, atmosfera e livello professionale.',
    timelineKicker: 'Linea del profilo',
    timelineTitle: 'Punti chiave del profilo.',
    timelineLabelOne: 'Best Sound',
    timelineLabelTwo: 'Palco',
    timelineLabelThree: 'SwimCup 2024',
    timelineLabelFour: 'RU · EN · IT',
    timelineOne: 'Un ambiente professionale legato alla gestione concertistica e ai progetti in tournée.',
    timelineTwo: 'Lavoro con eventi, team, location e processi di backstage.',
    timelineThree: 'Esperienza sportiva internazionale e risultato nella top 5.',
    timelineFour: 'Un profilo aperto al pubblico russofono e internazionale.',
    finalEyebrow: 'Profilo personale',
    finalTitle: 'Palco, disciplina e stile personale in una biografia professionale.',
    dialogTitle: 'Azioni rapide',
    dialogAgency: 'Profilo Best Sound',
    dialogSignature: 'Firma professionale',
    dialogEvent: 'Organizzazione eventi',
    rotator: ['Lavoro concertistico', 'Focus backstage', 'Disciplina sportiva', 'Ritmo evento']
  },
  de: {
    lang: "de",
    title: "Yulia Komarova — Best Sound",
    description: "Yulia Komarova organisiert Konzerte und vertritt Best Sound. Persönliches Porträt über Musik, Kunst und Schwimmen.",
    skipLink: "Zum Inhalt springen",
    navAria: "Hauptnavigation",
    closeLabel: "Schließen",
    languageSelector: "Sprache wählen",
    commandLabel: "Menü öffnen",
    commandButton: "Menü",
    navProfile: "Biografie",
    navSignature: "Arbeitsweise",
    navEvents: "Events",
    eyebrow: "Konzerte · Best Sound · Persönliches Porträt",
    heroTitle: "Yulia Komarova. <em>Bühne, Organisation, Präzision.</em>",
    heroLead: "Yulia Komarova organisiert Konzerte und vertritt Best Sound. Ihre Arbeit umfasst die Vorbereitung von Veranstaltungen, bei denen präzise Koordination, klare Kommunikation und Liebe zum Detail den Unterschied machen.",
    aboutKicker: "Biografie",
    aboutTitle: "Zwischen Bühne und Sport.",
    aboutText: "Für Yulia beginnt ein Konzert lange bevor die Künstler die Bühne betreten. Ihr Schwerpunkt liegt auf Vorbereitung, Koordination, Kommunikation und den Details, die das Erlebnis für das Publikum prägen.",
    signatureKicker: "Arbeitsweise",
    signatureTitle: "Ihre persönliche Handschrift.",
    signatureLead: "Yulias Arbeitsstil verbindet Ruhe, klare Kommunikation und ein sicheres Gespür dafür, was zum richtigen Zeitpunkt funktionieren muss.",
    signatureOneTitle: "Ruhige Übersicht",
    signatureOneText: "Sie behält Aufgaben, Menschen, Zeitpläne und Abläufe hinter der Bühne im Blick.",
    signatureTwoTitle: "Blick für die Bühne",
    signatureTwoText: "Für sie ist ein Konzert mehr als eine Abfolge von Aufgaben: Entscheidend sind die Gäste, das Team und der Gesamteindruck.",
    signatureThreeTitle: "Sportliche Ausdauer",
    signatureThreeText: "Der Wettkampfsport hat ihr Disziplin, Belastbarkeit und Zielstrebigkeit vermittelt.",
    cardAgencyTitle: "Vertreterin von Best Sound",
    cardConcertsText: "Ihre Tätigkeit verbindet Konzertorganisation, Tourneeplanung, Veranstaltungsorte, Teamarbeit und die Abläufe hinter der Bühne.",
    cardProjectsText: "Zum beruflichen Umfeld von Best Sound gehören Alessandro Safina, Joe Lynn Turner sowie Konzertprojekte in Russland und den GUS-Staaten.",
    quoteText: "Sie verbindet zwei Welten: die Bühne und die Schwimmbahn. Beide verlangen Konzentration, Präzision und Ausdauer bis zum Ziel.",
    cardSportTitle: "Schwimmen und Disziplin",
    cardSportText: "Yulia nahm mehrfach an Schwimmwettkämpfen in Russland und Italien teil und erreichte bei verschiedenen Wettbewerben Podiumsplätze. Beim internationalen SwimCup 2024 schaffte sie es unter die besten fünf. Der Sport prägt ihre Ausdauer und ihren Willen, Ziele zu erreichen.",
    swimFilmKicker: "Schwimmen / Film",
    swimFilmTitle: "In Bewegung.",
    swimFilmCaption: "Ein kurzer Moment aus dem Training im Schwimmbad.",
    swimFilmAria: "Yulia beim Schwimmen im Becken",
    swimFilmFallback: "Ihr Browser unterstützt keine Videowiedergabe.",
    turnkeyKicker: "Eventorganisation",
    turnkeyTitle: "Eine Veranstaltung organisieren",
    turnkeyText: "Für Yulia ist eine Veranstaltung ein Zusammenspiel aus Idee, Vorbereitung, Team, Backstage, Publikum und dem bleibenden Eindruck.",
    serviceOneTitle: "Konzept",
    serviceOneText: "Format, Publikum, Atmosphäre, Umfang und Aufbau der Veranstaltung.",
    serviceTwoTitle: "Koordination",
    serviceTwoText: "Team, Zeitplan, Veranstaltungsort, Beteiligte und Abläufe.",
    serviceThreeTitle: "Backstage",
    serviceThreeText: "Die unsichtbare Seite des Events: Kommunikation, Detailkontrolle und ruhige Steuerung.",
    serviceFourTitle: "Ergebnis",
    serviceFourText: "Eine stimmige Veranstaltung, bei der Bühne, Publikum und Atmosphäre zusammenwirken.",
    artKicker: "Kunst",
    artTitle: "Malerei und Zeichnung.",
    artMenu: "Kunst",
    artAltFlowerStudy: "Yulias Blumenmalerei mit zartrosa Blütenblättern",
    artAltForest: "Frauenporträt in Kohle mit Waldlandschaft",
    artAltExpression: "Kohlezeichnung eines Mannes mit Schnurrbart",
    artAltCharcoal: "Ausdrucksstarkes Frauenporträt in Kohle",
    artAltFloral: "Blumengemälde von Yulia auf einer Staffelei",
    artVideoLabel: "Video von Yulias Blumengemälde",
    artVideoFallback: "Ihr Browser unterstützt keine Videowiedergabe.",
    finalEyebrow: "Persönliches Porträt",
    finalTitle: "Bühne, Disziplin und persönlicher Stil – vereint in einem Porträt.",
    dialogTitle: "Schnellzugriff",
    dialogEvent: "Eventorganisation",
    contactInstagram: "Yulia auf Instagram",
    contactAgency: "Best Sound entdecken",
    lightboxPrev: "Vorheriges Werk",
    lightboxNext: "Nächstes Werk",
    lightboxClose: "Ansicht schließen",
  }
};


const supportedLanguages = ["ru", "en", "it", "de"];
const initialLanguage = document.documentElement.lang.toLowerCase().slice(0, 2);
const activeLanguage = supportedLanguages.includes(initialLanguage) ? initialLanguage : "ru";
const siteRoot = new URL(document.querySelector('meta[name="site-root"]')?.content || "./", document.baseURI);
const languagePaths = {ru:"",en:"en/",it:"it/",de:"de/"};

function applyLanguage(code) {
  const words = translations[code] || translations.ru;
  document.documentElement.lang = words.lang;
  document.title = words.title;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.content = words.description;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const v = words[el.dataset.i18n];
    if (typeof v === "string") el.textContent = v;
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const v = words[el.dataset.i18nHtml];
    if (typeof v === "string") el.innerHTML = v;
  });
  document.querySelectorAll("[data-i18n-attr]").forEach(el => {
    for (const pair of el.dataset.i18nAttr.split(",")) {
      const [attr, key] = pair.split(":").map(value => value.trim());
      if (attr && typeof words[key] === "string") el.setAttribute(attr, words[key]);
    }
  });
  document.querySelectorAll("[data-lang-switch]").forEach(button => {
    const selected = button.dataset.langSwitch === code;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  const select = document.querySelector("[data-lang-select]");
  if (select) select.value = code;
}
function visitLanguage(code) {
  if (!supportedLanguages.includes(code) || code === activeLanguage) return;
  try { localStorage.setItem("yk-language", code); } catch { /* private mode or blocked storage */ }
  const next = new URL(languagePaths[code], siteRoot);
  next.hash = location.hash;
  location.assign(next.href);
}
document.querySelectorAll("[data-lang-switch]").forEach(el =>
  el.addEventListener("click", () => visitLanguage(el.dataset.langSwitch))
);
document.querySelector("[data-lang-select]")?.addEventListener("change", event =>
  visitLanguage(event.target.value)
);

const bar = document.querySelector(".scroll-progress span");
function updateScrollBar() {
  const distance = document.documentElement.scrollHeight - window.innerHeight;
  if (bar) bar.style.width = (distance > 0 ? window.scrollY / distance * 100 : 0) + "%";
}
addEventListener("scroll", updateScrollBar, {passive:true});
addEventListener("resize", updateScrollBar, {passive:true});
updateScrollBar();

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    for (const e of entries) if (e.isIntersecting) {
      e.target.classList.add("visible");
      observer.unobserve(e.target);
    }
  }, {threshold:0.08});
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
} else {
  document.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
}

const commandDialog = document.querySelector("[data-command-dialog]");
document.querySelector("[data-command-open]")?.addEventListener("click", () => {
  if (commandDialog && !commandDialog.open) commandDialog.showModal();
});
commandDialog?.querySelectorAll("a[href]").forEach(link =>
  link.addEventListener("click", () => commandDialog.close())
);

const artDialog = document.querySelector("[data-art-lightbox]");
const artImage = artDialog?.querySelector("[data-art-lightbox-image]");
const artNumber = artDialog?.querySelector("[data-art-counter]");
const artworks = [...document.querySelectorAll(".artwork-item a.artwork-image")];
let artIndex = 0;
function setArt(index) {
  if (!artImage || !artNumber || artworks.length === 0) return;
  artIndex = (index + artworks.length) % artworks.length;
  const selected = artworks[artIndex];
  artImage.src = selected.href;
  artImage.alt = selected.querySelector("img")?.alt || "";
  artNumber.textContent = String(artIndex + 1).padStart(2,"0") + " / " + String(artworks.length).padStart(2,"0");
}
artworks.forEach((link,index) => link.addEventListener("click", event => {
  if (!artDialog || !artImage) return;
  event.preventDefault();
  setArt(index);
  if (!artDialog.open) artDialog.showModal();
}));
artDialog?.querySelector("[data-art-prev]")?.addEventListener("click", () => setArt(artIndex - 1));
artDialog?.querySelector("[data-art-next]")?.addEventListener("click", () => setArt(artIndex + 1));
artDialog?.querySelector("[data-art-close]")?.addEventListener("click", () => artDialog.close());
artDialog?.addEventListener("click", event => {
  if (event.target === artDialog) artDialog.close();
});
document.addEventListener("keydown", event => {
  if (artDialog?.open) {
    if (event.key === "ArrowLeft") {event.preventDefault();setArt(artIndex - 1);}
    if (event.key === "ArrowRight") {event.preventDefault();setArt(artIndex + 1);}
    return;
  }
  const target = event.target;
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k" &&
      !event.repeat && !target?.matches?.("input, textarea, select, [contenteditable]")) {
    event.preventDefault();
    if (commandDialog && !commandDialog.open) commandDialog.showModal();
  }
});
applyLanguage(activeLanguage);
