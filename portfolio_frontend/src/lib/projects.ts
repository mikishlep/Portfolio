export type PortfolioProject = {
  index: string
  slug: string
  title: string
  subtitle: string
  description: string
  url?: string
  displayUrl: string
  tags: string[]
  accent: string
  role: string
  type: string
  overview: string
  challenge: string
  approach: string
  highlights: string[]
  stack: string[]
  image?: string
  en: {
    title: string
    subtitle: string
    description: string
    role: string
    type: string
    overview: string
    challenge: string
    approach: string
    highlights: string[]
  }
}

export const projects: PortfolioProject[] = [
  {
    index: '01',
    slug: 'cito',
    title: 'ЦИТО',
    subtitle: 'Медицинский центр',
    description: 'Сайт медицинского центра: услуги, специалисты, цены и запись на приём.',
    url: 'https://cito-nt.ru',
    displayUrl: 'cito-nt.ru',
    tags: ['development', 'medical'],
    accent: '#c7ddd5',
    role: 'Web development',
    type: 'Corporate website',
    overview: 'Информационный сайт медицинского центра в Нижнем Тагиле. Он объединяет услуги, анализы, специалистов, цены и обязательную правовую информацию в одной понятной структуре.',
    challenge: 'Для медицинского сайта особенно важны спокойная визуальная подача, быстрый доступ к нужной услуге и доверие к информации. Большой объём материалов должен оставаться простым для навигации.',
    approach: 'Контент разделён по понятным пользовательским сценариям: выбрать услугу, найти специалиста, уточнить цену или контакты. Интерфейс собран с акцентом на читаемость и доступность ключевых действий.',
    highlights: ['Каталог услуг и анализов', 'Страницы специалистов', 'Цены и правовые документы', 'Контакты и запись на приём'],
    stack: ['React', 'TypeScript', 'Strapi', 'REST API'],
    image: '/projects/cito.png',
    en: {
      title: 'CITO',
      subtitle: 'Medical center',
      description: 'Medical center website with services, specialists, prices and appointment booking.',
      role: 'Web development',
      type: 'Corporate website',
      overview: 'An informational website for a medical center in Nizhny Tagil. It brings services, lab tests, specialists, prices and required legal information into one clear structure.',
      challenge: 'A medical website needs calm visual communication, quick access to services and trust in its content. A large amount of information has to remain easy to navigate.',
      approach: 'Content is organized around clear user goals: choose a service, find a specialist, check a price or get in touch. The interface prioritizes readability and access to key actions.',
      highlights: ['Services and tests catalog', 'Specialist pages', 'Prices and legal documents', 'Contacts and appointments'],
    },
  },
  {
    index: '02',
    slug: 'mir-dverey',
    title: 'Мир Дверей',
    subtitle: 'Каталог дверей',
    description: 'Каталог входных и межкомнатных дверей для компании из Нижнего Тагила.',
    url: 'https://mirdverey-nt.ru',
    displayUrl: 'mirdverey-nt.ru',
    tags: ['development', 'catalog'],
    accent: '#dfd1c5',
    role: 'Web development',
    type: 'Product catalog',
    overview: 'Каталог для магазина входных и межкомнатных дверей. Сайт помогает познакомиться с ассортиментом и быстро перейти от просмотра вариантов к обращению в компанию.',
    challenge: 'Каталог должен показывать разнообразие товаров, но не перегружать посетителя. Основная задача — сделать выбор последовательным и сохранить удобство на мобильных устройствах.',
    approach: 'Структура строится вокруг категорий и карточек товаров. Визуальная иерархия отделяет характеристики от основных действий, а адаптивная сетка сохраняет удобный просмотр на любом экране.',
    highlights: ['Категории продукции', 'Карточки товаров', 'Адаптивный каталог', 'Быстрый переход к контакту'],
    stack: ['React', 'TypeScript', 'Strapi', 'REST API'],
    image: '/projects/mir-dverey.png',
    en: {
      title: 'World of Doors',
      subtitle: 'Door catalog',
      description: 'Entrance and interior door catalog for a company in Nizhny Tagil.',
      role: 'Web development',
      type: 'Product catalog',
      overview: 'A catalog for an entrance and interior door store. The website presents the range and moves visitors smoothly from browsing options to contacting the company.',
      challenge: 'The catalog has to show product variety without overwhelming visitors. The main goal is to make selection straightforward and preserve usability on mobile devices.',
      approach: 'The structure revolves around categories and product cards. Visual hierarchy separates specifications from main actions, while the responsive grid keeps browsing comfortable on every screen.',
      highlights: ['Product categories', 'Product cards', 'Responsive catalog', 'Quick contact path'],
    },
  },
  {
    index: '03',
    slug: 'potolkoviy-master',
    title: 'Потолковый мастер',
    subtitle: 'Натяжные потолки',
    description: 'Презентационный сайт услуг по установке натяжных потолков.',
    url: 'https://потолковый-мастер.рф',
    displayUrl: 'потолковый-мастер.рф',
    tags: ['development', 'services'],
    accent: '#cbd5e2',
    role: 'Web development',
    type: 'Service website',
    overview: 'Презентационный сайт мастера по установке натяжных потолков. Знакомит с направлениями работ и помогает посетителю быстро перейти к обсуждению заказа.',
    challenge: 'Услугу нужно объяснить без длинного пути по сайту: показать варианты, снять основные вопросы и привести пользователя к заявке.',
    approach: 'Страница выстроена как последовательный рассказ — от предложения и примеров до преимуществ и контакта. Акценты и повторяющиеся точки действия поддерживают короткий сценарий принятия решения.',
    highlights: ['Презентация услуг', 'Примеры решений', 'Понятный путь к заявке', 'Мобильная версия'],
    stack: ['React', 'TypeScript', 'Landing UI', 'Responsive layout'],
    image: '/projects/potolkoviy-master.png',
    en: {
      title: 'Ceiling Master',
      subtitle: 'Stretch ceilings',
      description: 'A service website for professional stretch ceiling installation.',
      role: 'Web development',
      type: 'Service website',
      overview: 'A presentation website for a stretch ceiling specialist. It introduces the service areas and helps visitors quickly start discussing their project.',
      challenge: 'The service needs to be explained without a long journey through the site: show options, answer the main questions and lead the visitor to an inquiry.',
      approach: 'The page works as a consistent story — from the offer and examples to benefits and contact. Accents and recurring calls to action support a short decision path.',
      highlights: ['Service presentation', 'Solution examples', 'Clear inquiry path', 'Mobile version'],
    },
  },
  {
    index: '04',
    slug: 'glavgrad',
    title: 'Главград',
    subtitle: 'Сервис вакансий',
    description: 'Платформа для поиска подработки, вакансий и исполнителей.',
    url: 'https://rabota.glavreklamant.ru',
    displayUrl: 'rabota.glavreklamant.ru',
    tags: ['fullstack', 'platform'],
    accent: '#ddd7bf',
    role: 'Fullstack development',
    type: 'Web platform',
    overview: 'Веб-сервис, который соединяет заказчиков и исполнителей: вакансии, разовые задачи и поиск подходящей работы собраны в одном продукте.',
    challenge: 'В платформе встречаются два разных сценария — публикация задачи и поиск работы. Интерфейс должен быстро объяснять продукт обеим сторонам и не смешивать их действия.',
    approach: 'Пользовательские потоки разделены уже на старте. Карточки предложений, фильтрация и формы строятся вокруг конкретных задач, а интерфейс сохраняет единый визуальный язык.',
    highlights: ['Два пользовательских сценария', 'Лента предложений', 'Формы публикации', 'Полный цикл разработки'],
    stack: ['Next.js', 'TypeScript', 'Python', 'FastAPI'],
    image: '/projects/glavreklama-rabota.png',
    en: {
      title: 'Glavgrad',
      subtitle: 'Jobs platform',
      description: 'A platform for finding part-time work, vacancies and contractors.',
      role: 'Fullstack development',
      type: 'Web platform',
      overview: 'A web service connecting clients and contractors: vacancies, one-off jobs and job search are brought together in one product.',
      challenge: 'The platform serves two distinct flows — publishing a task and finding work. The interface must explain the product to both audiences without mixing their actions.',
      approach: 'User flows are separated from the first screen. Offer cards, filters and forms are built around specific tasks while sharing one consistent visual language.',
      highlights: ['Two user flows', 'Listings feed', 'Publishing forms', 'Full-cycle development'],
    },
  },
  {
    index: '05',
    slug: 'personal-marketer',
    title: 'Личный маркетолог',
    subtitle: 'Telegram / VK бот',
    description: 'AI-сервис для анализа бизнеса, распаковки компетенций и создания персональных маркетинговых материалов.',
    displayUrl: 'Telegram + VK',
    tags: ['bots', 'ai'],
    accent: '#d7cee5',
    role: 'Bot & backend development',
    type: 'Cross-platform AI bot',
    overview: 'Единый продукт для Telegram и ВКонтакте, который помогает предпринимателям анализировать бизнес и компетенции, формировать цели и получать персональные материалы.',
    challenge: 'Нужно было перенести сложные многоэтапные маркетинговые сценарии в привычный формат диалога, сохранить контекст пользователя между сессиями и синхронизировать логику двух платформ.',
    approach: 'Основная бизнес-логика и AI-сценарии собраны в общие модули, а Telegram и VK получили собственные адаптеры интерфейса. Redis хранит состояние диалогов, OpenAI обрабатывает аналитические сценарии, а результаты можно собирать в PDF.',
    highlights: ['Telegram и VK в одном продукте', 'AI-анализ бизнеса и компетенций', 'Сохранение контекста диалога', 'Формирование персональных PDF-отчётов'],
    stack: ['TypeScript', 'grammY', 'vk-io', 'OpenAI API', 'Redis'],
    en: {
      title: 'Personal Marketer',
      subtitle: 'Telegram / VK bot',
      description: 'An AI service for business analysis, expertise discovery and personalized marketing materials.',
      role: 'Bot & backend development',
      type: 'Cross-platform AI bot',
      overview: 'A unified Telegram and VK product that helps entrepreneurs analyze their business and expertise, set goals and receive personalized materials.',
      challenge: 'Complex multi-step marketing workflows had to fit a natural conversation while preserving user context between sessions and keeping both platforms in sync.',
      approach: 'Core business logic and AI workflows are shared, while Telegram and VK use platform-specific interface adapters. Redis stores conversation state, OpenAI powers analysis and the resulting insights can be exported as PDF reports.',
      highlights: ['Telegram and VK product', 'AI business and expertise analysis', 'Persistent conversation context', 'Personalized PDF reports'],
    },
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
