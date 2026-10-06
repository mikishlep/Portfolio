export type PortfolioProject = {
  index: string
  slug: string
  title: string
  subtitle: string
  description: string
  url: string
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
    stack: ['React', 'TypeScript', 'Responsive UI', 'API integrations'],
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
    stack: ['React', 'TypeScript', 'Catalog UI', 'Responsive layout'],
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
  },
  {
    index: '04',
    slug: 'glavreklama-rabota',
    title: 'Главреклама Работа',
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
    stack: ['React', 'TypeScript', 'Node.js', 'REST API'],
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
