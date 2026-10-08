'use client'

import { motion } from 'motion/react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Waves from '@/components/ui/Waves/Waves'
import TitleSeparator from '@/components/layout/TitleSeparator'
import ProjectsGrid from '@/components/ProjectsGrid'
import TechMarquee from '@/components/TechMarquee'
import HorizontalProcess from '@/components/HorizontalProcess'
import { useLanguage } from '@/components/i18n/LanguageProvider'
import FloatingNavigation from '@/components/layout/FloatingNavigation'

const stack = [
  ['01', 'Frontend', 'React, Next.js, TypeScript, Tailwind CSS'],
  ['02', 'Backend', 'Node.js, Python, FastAPI, Redis, REST API'],
  ['03', 'UI & motion', 'Responsive layouts, Motion, GSAP'],
  ['04', 'Workflow', 'Git, Figma, deployment, integrations'],
]

const pageCopy = {
  ru: {
    intro: 'Привет, мы',
    hero: 'Создаём современные сайты и веб-приложения — от интерфейса и анимации до API и запуска.',
    viewProjects: 'Смотреть проекты',
    focus: 'Фокус', based: 'Работаем с', available: 'Доступны для', freelance: 'Проекты\nАутстафф',
    projects: 'проекты', selected: 'Избранные работы · 05',
    about: 'о нас', context: 'Немного контекста',
    aboutLead: 'Превращаем сложные задачи в', aboutAccent: 'простые, быстрые и живые', aboutEnd: 'цифровые продукты.',
    aboutOne: 'Мы работаем на стыке разработки и дизайна: думаем о сценариях пользователя, деталях интерфейса и о том, как продукт будет жить после запуска.',
    aboutTwo: 'Вдвоём закрываем полный цикл продукта: лендинги, корпоративные сайты, каталоги, боты и веб-сервисы.',
    discuss: 'Обсудить проект',
    experience: 'опыт', what: 'Что мы делаем', current: 'Сейчас', webapps: 'Сайты и веб-приложения',
    responsibility: 'Берём ответственность за техническую часть проекта: архитектуру, интерфейс, backend, интеграции и стабильный запуск.',
    stats: ['проектов в текущей подборке', 'разработчика в одной команде', 'полный цикл от идеи до запуска'],
    services: ['Корпоративные сайты', 'Продуктовые интерфейсы', 'Fullstack-разработка'],
    tools: 'Инструменты и возможности',
    contacts: 'контакты', useful: 'Сделаем что-нибудь полезное', haveProject: 'Есть проект?', talk: 'Давайте обсудим',
    contactIntro: 'Сайт, веб-сервис, бот или усиление вашей команды — расскажите, что нужно сделать.',
    cooperation: ['Проект', 'Аутстафф', 'Поддержка'], response: 'Обычно отвечаем в течение дня',
  },
  en: {
    intro: "Hey, we're", hero: 'We build modern websites and web applications — from interface and motion to APIs and launch.',
    viewProjects: 'View projects', focus: 'Focus', based: 'Working with', available: 'Available for', freelance: 'Projects\nOutstaff',
    projects: 'projects', selected: 'Selected work · 05', about: 'about', context: 'A little context',
    aboutLead: 'We turn complex problems into', aboutAccent: 'simple, fast and lively', aboutEnd: 'digital products.',
    aboutOne: 'We work at the intersection of development and design, thinking about user flows, interface details and how a product lives after launch.',
    aboutTwo: 'As a two-person team, we cover the complete product cycle: landing pages, corporate websites, catalogs, bots and web services.',
    discuss: 'Discuss a project', experience: 'experience', what: 'What I do', current: 'Current', webapps: 'Websites & web applications',
    responsibility: 'We take ownership of the technical side: architecture, interface, backend, integrations and a stable launch.',
    stats: ['projects in the current selection', 'developers working as one team', 'full cycle from idea to launch'],
    services: ['Corporate websites', 'Product interfaces', 'Fullstack development'],
    tools: 'Tools & capabilities', contacts: 'contacts', useful: "Let's make something useful", haveProject: 'Have a project?', talk: "Let's talk",
    contactIntro: 'A website, web service, bot or extra hands for your team — tell us what you need.',
    cooperation: ['Project', 'Outstaff', 'Support'], response: 'We usually reply within one day',
  },
}

export default function Home() {
  const { language } = useLanguage()
  const copy = pageCopy[language]

  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Header />
      <FloatingNavigation />

      <main className="w-full">
        <section className="mx-auto grid max-w-335 border-x border-b border-border lg:grid-cols-2">
          <div className="flex min-h-[38rem] flex-col justify-center gap-8 border-b border-border px-6 py-16 sm:px-10 lg:min-h-140 lg:border-r lg:border-b-0 lg:px-18">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">{copy.intro}</p>
            <h1 className="text-[clamp(3.3rem,9vw,6rem)] leading-[0.88] font-medium tracking-[-0.06em]">
              SIDE<span className="text-muted-foreground">BYTE</span>
            </h1>
            <p className="text-xl">Web development team</p>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              {copy.hero}
            </p>
            <a className="mt-10 inline-flex w-fit items-center gap-3 text-sm" href="#projects">
              <span>{copy.viewProjects}</span>
              <motion.span animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowDown size={18} strokeWidth={1.5} />
              </motion.span>
            </a>
          </div>

          <div className="relative min-h-125 overflow-hidden lg:min-h-140">
            <Waves
              lineColor="#111318"
              backgroundColor="rgba(255, 255, 255, 0.2)"
              waveSpeedX={0.0125}
              waveSpeedY={0.01}
              waveAmpX={40}
              waveAmpY={20}
              friction={0.5}
              tension={0.01}
              maxCursorMove={120}
              xGap={15}
              yGap={30}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-80 bg-linear-to-b from-transparent via-background/80 to-background" />
            <div className="absolute inset-x-0 bottom-0 z-20 grid grid-cols-3 gap-4 px-6 pb-8 sm:px-10 lg:px-18 lg:pb-10">
              <HeroMeta label={copy.focus} value={<>Web products<br />Interfaces<br />Fullstack</>} />
              <HeroMeta label={copy.based} value={<>Worldwide,<br />Remote</>} align="center" />
              <HeroMeta label={copy.available} value={<>{copy.freelance.split('\n').map((part) => <span className="block" key={part}>{part}</span>)}</>} align="end" />
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-20">
          <TitleSeparator name={copy.projects} textContent={copy.selected} />
          <ProjectsGrid />
        </section>

        <section id="about" className="scroll-mt-20">
          <TitleSeparator name={copy.about} textContent={copy.context} />
          <div className="mx-auto grid max-w-335 border-x border-b border-border lg:grid-cols-12">
            <div className="border-b border-border px-6 py-16 sm:px-10 lg:col-span-7 lg:border-r lg:border-b-0 lg:px-18 lg:py-24">
              <p className="max-w-3xl text-3xl leading-tight tracking-tight sm:text-5xl sm:leading-[1.08]">
                {copy.aboutLead}{' '}
                <span className="text-muted-foreground">{copy.aboutAccent}</span> {copy.aboutEnd}
              </p>
            </div>
            <div className="flex flex-col justify-between gap-12 px-6 py-16 sm:px-10 lg:col-span-5 lg:px-14 lg:py-24">
              <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  {copy.aboutOne}
                </p>
                <p>
                  {copy.aboutTwo}
                </p>
              </div>
              <a className="group inline-flex w-fit items-center gap-3 border-b border-foreground pb-1" href="https://t.me/mikishlep" target="_blank" rel="noreferrer">
                {copy.discuss}
                <ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={18} />
              </a>
            </div>
          </div>
        </section>

        <TechMarquee />

        <section id="experience" className="scroll-mt-20">
          <TitleSeparator name={copy.experience} textContent={copy.what} />
          <div className="mx-auto grid max-w-335 border-x border-b border-border md:grid-cols-3">
            <Stat value="05" label={copy.stats[0]} />
            <Stat value="02" label={copy.stats[1]} />
            <Stat value="FS" label={copy.stats[2]} last />
          </div>
          <div className="mx-auto grid max-w-335 border-x border-b border-border lg:grid-cols-12">
            <div className="border-b border-border px-6 py-14 sm:px-10 lg:col-span-4 lg:border-r lg:border-b-0 lg:px-18 lg:py-20">
              <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">{copy.current}</p>
              <h3 className="mt-6 text-3xl font-medium">Independent team</h3>
              <p className="mt-3 text-muted-foreground">{copy.webapps}</p>
            </div>
            <div className="px-6 py-14 sm:px-10 lg:col-span-8 lg:px-18 lg:py-20">
              <p className="max-w-3xl text-2xl leading-snug sm:text-3xl">
                {copy.responsibility}
              </p>
              <div className="mt-12 grid gap-5 text-sm text-muted-foreground sm:grid-cols-3">
                {copy.services.map((service) => <p key={service}>{service}</p>)}
              </div>
            </div>
          </div>
        </section>

        <section id="stack" className="scroll-mt-20">
          <TitleSeparator name="stack" textContent={copy.tools} />
          <div className="mx-auto grid max-w-335 border-x border-border md:grid-cols-2">
            {stack.map(([number, title, description], index) => (
              <div key={number} className={`group min-h-56 border-b border-border p-6 transition-colors hover:bg-foreground hover:text-background sm:p-10 lg:p-14 ${index % 2 === 0 ? 'md:border-r' : ''}`}>
                <div className="flex items-start justify-between">
                  <span className="text-xs text-muted-foreground transition-colors group-hover:text-background/60">{number}</span>
                  <ArrowUpRight size={20} strokeWidth={1.4} />
                </div>
                <h3 className="mt-12 text-3xl font-medium">{title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-background/65">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <HorizontalProcess />

        <section id="contacts" className="flex min-h-screen flex-col">
          <TitleSeparator name={copy.contacts} textContent={copy.useful} />
          <div className="mx-auto flex w-full max-w-335 flex-1 flex-col justify-center border-x border-b border-border px-6 py-20 sm:px-10 lg:px-18 lg:py-28">
            <div className="flex items-end justify-between gap-8">
              <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">{copy.haveProject}</p>
              <p className="hidden max-w-sm text-right text-sm leading-relaxed text-muted-foreground sm:block">{copy.contactIntro}</p>
            </div>
            <a href="https://t.me/mikishlep" target="_blank" rel="noreferrer" className="group mt-7 flex items-end justify-between gap-4 border-b border-foreground pb-5">
              <span className="text-[clamp(2.5rem,8vw,7rem)] leading-none font-medium tracking-[-0.06em]">{copy.talk}</span>
              <ArrowUpRight className="mb-1 shrink-0 transition-transform group-hover:-translate-y-2 group-hover:translate-x-2" size={42} strokeWidth={1.2} />
            </a>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:hidden">{copy.contactIntro}</p>
            <div className="mt-10 grid gap-8 text-sm sm:grid-cols-2 sm:items-end">
              <div>
                <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{language === 'ru' ? 'Формат работы' : 'Ways to work'}</p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {copy.cooperation.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
              <div className="sm:text-right">
                <p className="mb-3 text-muted-foreground">{copy.response}</p>
                <div className="flex flex-wrap gap-x-8 gap-y-3 sm:justify-end">
                  <a href="https://t.me/mikishlep" target="_blank" rel="noreferrer">Telegram ↗</a>
                  <a href="https://github.com/mikishlep" target="_blank" rel="noreferrer">GitHub ↗</a>
                  <a href="https://vk.ru/mikishlep" target="_blank" rel="noreferrer">VK ↗</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

function HeroMeta({ label, value, align = 'start' }: { label: string; value: React.ReactNode; align?: 'start' | 'center' | 'end' }) {
  const alignment = align === 'center' ? 'justify-self-center' : align === 'end' ? 'justify-self-end text-right' : 'justify-self-start'

  return (
    <div className={alignment}>
      <p className="mb-2 text-[10px] uppercase tracking-wider text-muted-foreground sm:text-xs">{label}</p>
      <p className="text-xs leading-relaxed sm:text-sm">{value}</p>
    </div>
  )
}

function Stat({ value, label, last = false }: { value: string; label: string; last?: boolean }) {
  return (
    <div className={`border-b border-border px-6 py-10 md:border-b-0 sm:px-10 lg:px-18 ${last ? '' : 'md:border-r'}`}>
      <p className="text-5xl font-medium tracking-tight">{value}</p>
      <p className="mt-3 max-w-44 text-sm leading-relaxed text-muted-foreground">{label}</p>
    </div>
  )
}
