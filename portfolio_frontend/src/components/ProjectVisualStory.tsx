'use client'

import Image from 'next/image'
import type { PortfolioProject } from '@/lib/projects'

type Language = 'ru' | 'en'

const visualCopy: Record<string, { ru: string[]; en: string[]; system: string }> = {
  cito: {
    ru: ['Выбор услуги', 'Специалист', 'Запись на приём'],
    en: ['Choose a service', 'Specialist', 'Appointment'],
    system: 'Patient journey',
  },
  'mir-dverey': {
    ru: ['Категория', 'Подходящая модель', 'Заявка'],
    en: ['Category', 'Matching model', 'Inquiry'],
    system: 'Catalog journey',
  },
  'potolkoviy-master': {
    ru: ['Задача клиента', 'Расчёт решения', 'Вызов замерщика'],
    en: ['Client request', 'Solution estimate', 'Site measurement'],
    system: 'Service journey',
  },
  glavgrad: {
    ru: ['Вакансия', 'Подходящий исполнитель', 'Отклик'],
    en: ['Job listing', 'Matching contractor', 'Application'],
    system: 'Matching platform',
  },
  'personal-marketer': {
    ru: ['Диалог', 'AI-анализ', 'Персональный план'],
    en: ['Conversation', 'AI analysis', 'Personal plan'],
    system: 'AI workflow',
  },
}

const screenshotCopy: Record<string, { ru: string[]; en: string[] }> = {
  cito: {
    ru: ['Главная и запись', 'Правовая информация', 'Цены и специалисты'],
    en: ['Home and appointment', 'Legal information', 'Prices and specialists'],
  },
  'mir-dverey': {
    ru: ['Главная и категории', 'Каталог производителей', 'Новости и контент'],
    en: ['Home and categories', 'Manufacturer catalog', 'News and content'],
  },
  'potolkoviy-master': {
    ru: ['Главная и предложение', 'Расчёт стоимости', 'Работы и процесс'],
    en: ['Home and offer', 'Price estimate', 'Portfolio and process'],
  },
  glavgrad: {
    ru: ['Главная и вакансии', 'База знаний', 'Партнёрские заявки'],
    en: ['Home and jobs', 'Knowledge base', 'Partner requests'],
  },
}

export default function ProjectVisualStory({ project, language }: { project: PortfolioProject; language: Language }) {
  const localized = language === 'ru' ? project : project.en
  const copy = language === 'ru'
    ? { scheme: 'Карта продукта', journey: 'Основной сценарий', includes: 'Что входит в продукт', interface: 'Интерфейс', real: 'Реальный продукт' }
    : { scheme: 'Product map', journey: 'Core journey', includes: 'What the product includes', interface: 'Interface', real: 'Real product' }
  const visual = visualCopy[project.slug]
  const steps = visual[language]
  const images = project.images ?? []
  const imageLabels = screenshotCopy[project.slug]?.[language] ?? []

  return (
    <>
      <section className="mx-auto max-w-335 border-x border-b border-border p-4 sm:p-8 lg:p-14">
        <div className="relative min-h-150 overflow-hidden border border-foreground/10 p-6 sm:p-10 lg:p-14" style={{ backgroundColor: project.accent }}>
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,#111318_1px,transparent_1px),linear-gradient(to_bottom,#111318_1px,transparent_1px)] [background-size:52px_52px]" />
          <div className="relative z-10 flex items-center justify-between border-b border-foreground/25 pb-5 text-[10px] uppercase tracking-[0.18em]">
            <span>{copy.scheme} · {project.index}</span>
            <span>{visual.system}</span>
          </div>

          <ProductMap project={project} language={language} steps={steps} journeyLabel={copy.journey} includesLabel={copy.includes} />

          <div className="relative z-10 mt-10 flex flex-wrap gap-2 border-t border-foreground/25 pt-5">
            {project.stack.map((item) => <span key={item} className="rounded-full border border-foreground/25 bg-background/35 px-4 py-2 text-xs backdrop-blur-sm">{item}</span>)}
          </div>
        </div>
      </section>

      {images.length > 0 && (
        <section className="mx-auto max-w-335 border-x border-b border-border">
          <div className="flex items-center justify-between border-b border-border px-6 py-4 sm:px-10 lg:px-18">
            <p className="text-xl font-medium uppercase text-muted-foreground">{copy.interface}</p>
            <p className="text-sm">{copy.real}</p>
          </div>
          <div className="grid gap-0 lg:grid-cols-12">
            <div className="border-b border-border p-4 sm:p-8 lg:col-span-8 lg:border-r lg:border-b-0 lg:p-12">
              <BrowserFrame label={imageLabels[0] ?? copy.real} url={project.displayUrl}>
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <Image src={images[0]} alt={`${localized.title} — ${imageLabels[0] ?? copy.real}`} fill sizes="(min-width: 1024px) 65vw, 100vw" className="object-cover object-top" quality={90} />
                </div>
              </BrowserFrame>
            </div>
            <div className="grid gap-0 lg:col-span-4 lg:grid-rows-2">
              <DetailCrop image={images[1] ?? images[0]} title={imageLabels[1] ?? localized.highlights[1]} position={images[1] ? 'center top' : 'center'} />
              <DetailCrop image={images[2] ?? images[0]} title={imageLabels[2] ?? localized.highlights[2]} position={images[2] ? 'center top' : 'center bottom'} last />
            </div>
          </div>
        </section>
      )}
    </>
  )
}

function ProductMap({ project, language, steps, journeyLabel, includesLabel }: { project: PortfolioProject; language: Language; steps: string[]; journeyLabel: string; includesLabel: string }) {
  const localized = language === 'ru' ? project : project.en

  return (
    <div className="relative z-10 py-12">
      <div className="grid gap-8 border-b border-foreground/25 pb-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="text-[10px] uppercase tracking-[0.18em] text-foreground/55">{localized.type}</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-medium tracking-tight sm:text-6xl">{localized.title}</h2>
        </div>
        <p className="max-w-xl text-sm leading-relaxed text-foreground/65 lg:col-span-5">{localized.description}</p>
      </div>

      <div className="mt-10">
        <p className="mb-4 text-[10px] uppercase tracking-[0.18em] text-foreground/55">{journeyLabel}</p>
        <ol className="grid lg:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step} className="relative flex min-h-36 flex-col justify-between border border-foreground/25 bg-background/45 p-6 backdrop-blur-sm lg:border-r-0 lg:last:border-r">
              <span className="text-[10px] text-foreground/50">0{index + 1}</span>
              <span className="mt-8 text-xl font-medium sm:text-2xl">{step}</span>
              {index < steps.length - 1 && <span aria-hidden="true" className="absolute -right-3 top-1/2 z-10 hidden size-6 -translate-y-1/2 items-center justify-center rounded-full border border-foreground/25 bg-background text-xs lg:flex">→</span>}
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-10">
        <p className="mb-4 text-[10px] uppercase tracking-[0.18em] text-foreground/55">{includesLabel}</p>
        <div className="grid gap-px border border-foreground/20 bg-foreground/20 sm:grid-cols-2 lg:grid-cols-4">
          {localized.highlights.map((highlight, index) => (
            <div key={highlight} className="min-h-28 bg-background/70 p-5 backdrop-blur-sm">
              <span className="text-[10px] text-foreground/45">M{index + 1}</span>
              <p className="mt-5 text-sm leading-snug">{highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function BrowserFrame({ label, url, children }: { label: string; url: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden border border-foreground/15 bg-background shadow-[0_20px_70px_rgba(17,19,24,0.09)]">
      <div className="flex h-11 items-center gap-4 border-b border-border px-4">
        <div className="flex gap-1.5"><span className="size-2 rounded-full bg-foreground/20" /><span className="size-2 rounded-full bg-foreground/20" /><span className="size-2 rounded-full bg-foreground/20" /></div>
        <span className="truncate text-[10px] text-muted-foreground">{url}</span>
        <span className="ml-auto text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{label}</span>
      </div>
      {children}
    </div>
  )
}

function DetailCrop({ image, title, position, last = false }: { image: string; title: string; position: string; last?: boolean }) {
  return (
    <div className={`p-4 sm:p-8 lg:p-8 ${last ? '' : 'border-b border-border'}`}>
      <p className="mb-4 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{title}</p>
      <div className="relative min-h-52 h-[calc(100%-2rem)] overflow-hidden border border-foreground/10 bg-muted">
        <Image src={image} alt="" fill sizes="(min-width: 1024px) 32vw, 100vw" className="object-cover" style={{ objectPosition: position }} quality={90} />
      </div>
    </div>
  )
}
