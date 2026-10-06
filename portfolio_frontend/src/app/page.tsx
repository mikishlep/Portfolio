'use client'

import { motion } from 'motion/react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Waves from '@/components/ui/Waves/Waves'
import TitleSeparator from '@/components/layout/TitleSeparator'
import ProjectsGrid from '@/components/ProjectsGrid'

const stack = [
  ['01', 'Frontend', 'React, Next.js, TypeScript, Tailwind CSS'],
  ['02', 'Backend', 'Node.js, Express, REST API, databases'],
  ['03', 'UI & motion', 'Responsive layouts, Motion, GSAP'],
  ['04', 'Workflow', 'Git, Figma, deployment, integrations'],
]

const workflow = [
  ['01', 'Dive in', 'Разбираюсь в задаче, аудитории и бизнес-целях проекта.'],
  ['02', 'Shape', 'Проектирую структуру и собираю понятный визуальный сценарий.'],
  ['03', 'Build', 'Разрабатываю быстрый адаптивный интерфейс и логику.'],
  ['04', 'Launch', 'Проверяю, запускаю и остаюсь на связи после релиза.'],
]

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Header />

      <main className="w-full">
        <section className="mx-auto grid max-w-335 border-x border-b border-border lg:grid-cols-2">
          <div className="flex min-h-[38rem] flex-col justify-center gap-8 border-b border-border px-6 py-16 sm:px-10 lg:min-h-140 lg:border-r lg:border-b-0 lg:px-18">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Hey, I&apos;m</p>
            <h1 className="text-[clamp(3.3rem,9vw,6rem)] leading-[0.88] font-medium tracking-[-0.06em]">
              miki<span className="text-muted-foreground">shlep</span>
            </h1>
            <p className="text-xl">Frontend / Fullstack developer</p>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              Создаю современные сайты и веб-приложения — от интерфейса и анимации до API и запуска.
            </p>
            <a className="mt-10 inline-flex w-fit items-center gap-3 text-sm" href="#projects">
              <span>Смотреть проекты</span>
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
              <HeroMeta label="Focus" value={<>Web products<br />Interfaces<br />Fullstack</>} />
              <HeroMeta label="Based in" value={<>Yekaterinburg,<br />Russia</>} align="center" />
              <HeroMeta label="Available for" value={<>Freelance<br />projects</>} align="end" />
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-20">
          <TitleSeparator name="projects" textContent="Selected work · 04" />
          <ProjectsGrid />
        </section>

        <section id="about" className="scroll-mt-20">
          <TitleSeparator name="about" textContent="A little context" />
          <div className="mx-auto grid max-w-335 border-x border-b border-border lg:grid-cols-12">
            <div className="border-b border-border px-6 py-16 sm:px-10 lg:col-span-7 lg:border-r lg:border-b-0 lg:px-18 lg:py-24">
              <p className="max-w-3xl text-3xl leading-tight tracking-tight sm:text-5xl sm:leading-[1.08]">
                Люблю превращать сложные задачи в{' '}
                <span className="text-muted-foreground">простые, быстрые и живые</span> цифровые продукты.
              </p>
            </div>
            <div className="flex flex-col justify-between gap-12 px-6 py-16 sm:px-10 lg:col-span-5 lg:px-14 lg:py-24">
              <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  Работаю на стыке разработки и дизайна: думаю о сценариях пользователя, деталях интерфейса и о том, как продукт будет жить после запуска.
                </p>
                <p>
                  Могу собрать лендинг, корпоративный сайт, каталог или веб-сервис — самостоятельно или вместе с командой.
                </p>
              </div>
              <a className="group inline-flex w-fit items-center gap-3 border-b border-foreground pb-1" href="https://t.me/mikishlep" target="_blank" rel="noreferrer">
                Обсудить проект
                <ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={18} />
              </a>
            </div>
          </div>
        </section>

        <section id="experience" className="scroll-mt-20">
          <TitleSeparator name="experience" textContent="What I do" />
          <div className="mx-auto grid max-w-335 border-x border-b border-border md:grid-cols-3">
            <Stat value="04" label="запущенных проекта в подборке" />
            <Stat value="FE" label="аккуратные адаптивные интерфейсы" />
            <Stat value="FS" label="полный цикл от идеи до запуска" last />
          </div>
          <div className="mx-auto grid max-w-335 border-x border-b border-border lg:grid-cols-12">
            <div className="border-b border-border px-6 py-14 sm:px-10 lg:col-span-4 lg:border-r lg:border-b-0 lg:px-18 lg:py-20">
              <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Current</p>
              <h3 className="mt-6 text-3xl font-medium">Freelance developer</h3>
              <p className="mt-3 text-muted-foreground">Websites & web applications</p>
            </div>
            <div className="px-6 py-14 sm:px-10 lg:col-span-8 lg:px-18 lg:py-20">
              <p className="max-w-3xl text-2xl leading-snug sm:text-3xl">
                Беру ответственность за техническую часть проекта: архитектуру, интерфейс, интеграции и стабильный запуск.
              </p>
              <div className="mt-12 grid gap-5 text-sm text-muted-foreground sm:grid-cols-3">
                <p>Corporate websites</p>
                <p>Product interfaces</p>
                <p>Fullstack development</p>
              </div>
            </div>
          </div>
        </section>

        <section id="stack" className="scroll-mt-20">
          <TitleSeparator name="stack" textContent="Tools & capabilities" />
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

        <section id="process" className="scroll-mt-20">
          <TitleSeparator name="process" textContent="How I work" />
          <div className="mx-auto max-w-335 border-x border-border">
            {workflow.map(([number, title, description]) => (
              <div key={number} className="grid gap-5 border-b border-border px-6 py-8 sm:grid-cols-[5rem_1fr_2fr] sm:items-center sm:px-10 lg:px-18">
                <span className="text-xs text-muted-foreground">{number}</span>
                <h3 className="text-xl font-medium">{title}</h3>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contacts" className="scroll-mt-20">
          <TitleSeparator name="contacts" textContent="Let's make something useful" />
          <div className="mx-auto max-w-335 border-x border-b border-border px-6 py-20 sm:px-10 lg:px-18 lg:py-28">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Have a project?</p>
            <a href="https://t.me/mikishlep" target="_blank" rel="noreferrer" className="group mt-7 flex items-end justify-between gap-4 border-b border-foreground pb-5">
              <span className="text-[clamp(2.5rem,8vw,7rem)] leading-none font-medium tracking-[-0.06em]">Let&apos;s talk</span>
              <ArrowUpRight className="mb-1 shrink-0 transition-transform group-hover:-translate-y-2 group-hover:translate-x-2" size={42} strokeWidth={1.2} />
            </a>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm">
              <a href="https://t.me/mikishlep" target="_blank" rel="noreferrer">Telegram ↗</a>
              <a href="https://github.com/mikishlep" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://vk.ru/mikishlep" target="_blank" rel="noreferrer">VK ↗</a>
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
