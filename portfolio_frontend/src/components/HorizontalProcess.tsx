'use client'

import { useLayoutEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '@/components/i18n/LanguageProvider'

type ProcessStep = readonly [string, string, string, readonly string[]]

const content: Record<'ru' | 'en', readonly ProcessStep[]> = {
  ru: [
    ['01', 'Погружение', 'Разбираемся в задаче, аудитории и бизнес-целях проекта.', ['Бриф', 'Цели', 'Ограничения']],
    ['02', 'Структура', 'Проектируем сценарии и собираем понятную архитектуру продукта.', ['Сценарии', 'Прототип', 'Архитектура']],
    ['03', 'Разработка', 'Создаём быстрый адаптивный интерфейс и техническую логику.', ['Интерфейс', 'Backend', 'Интеграции']],
    ['04', 'Запуск', 'Проверяем результат, выпускаем проект и остаёмся на связи.', ['Тестирование', 'Релиз', 'Поддержка']],
  ],
  en: [
    ['01', 'Dive in', 'We explore the problem, audience and business goals of the project.', ['Brief', 'Goals', 'Constraints']],
    ['02', 'Shape', 'We design user flows and turn them into a clear product structure.', ['User flows', 'Prototype', 'Architecture']],
    ['03', 'Build', 'We create a fast responsive interface and the technical logic behind it.', ['Interface', 'Backend', 'Integrations']],
    ['04', 'Launch', 'We test the result, release the project and stay available afterwards.', ['Testing', 'Release', 'Support']],
  ],
}

export default function HorizontalProcess() {
  const sceneRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<HTMLDivElement>(null)
  const { language } = useLanguage()

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const scene = sceneRef.current
    const track = trackRef.current
    const frame = frameRef.current
    if (!scene || !track || !frame) return

    const context = gsap.context(() => {
      const media = gsap.matchMedia()

      media.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
        const panelCount = content.ru.length
        const tween = gsap.to(track, {
          xPercent: -25 * (panelCount - 1),
          ease: 'none',
          scrollTrigger: {
            trigger: scene,
            start: 'top top',
            end: () => `+=${window.innerHeight * (panelCount - 1)}`,
            pin: true,
            scrub: 0.45,
            snap: {
              snapTo: 1 / (panelCount - 1),
              duration: { min: 0.16, max: 0.36 },
              delay: 0.08,
              ease: 'power2.inOut',
            },
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        })

        return () => tween.scrollTrigger?.kill()
      })

      return () => media.revert()
    }, scene)

    return () => context.revert()
  }, [])

  return (
    <section ref={sceneRef} id="process" className="scroll-mt-20 bg-background">
      <div ref={frameRef} className="mx-auto max-w-335 overflow-hidden border-x border-b border-border bg-background">
        <div className="flex items-center justify-between border-b border-border px-6 py-4 sm:px-10 lg:px-18">
          <p className="text-xl font-medium uppercase text-muted-foreground">{language === 'ru' ? 'Процесс' : 'Process'}</p>
          <div className="flex items-center gap-3 text-sm">
            <span>{language === 'ru' ? 'Как мы работаем' : 'How we work'}</span>
            <ArrowRight size={18} />
          </div>
        </div>

        <div ref={trackRef} className="grid lg:flex lg:h-[calc(100vh-61px)] lg:w-[400%]">
          {content[language].map(([number, title, description, outcomes], index) => (
            <article
              key={number}
              className={`relative flex min-h-96 flex-col justify-between overflow-hidden border-b border-border p-8 last:border-b-0 sm:p-12 lg:min-h-0 lg:w-1/4 lg:shrink-0 lg:border-r lg:border-b-0 lg:last:border-r-0 lg:p-18 ${index === 1 || index === 3 ? 'bg-foreground text-background' : 'bg-background'}`}
            >
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[clamp(14rem,32vw,34rem)] leading-none font-medium tracking-[-0.09em] ${index === 1 || index === 3 ? 'text-background/[0.035]' : 'text-foreground/[0.025]'}`}
              >
                {number}
              </span>

              <div className="relative z-10 flex items-start justify-between">
                <span className={`text-xs ${index === 1 || index === 3 ? 'text-background/55' : 'text-muted-foreground'}`}>{number} / 04</span>
                <span className="text-xs uppercase tracking-[0.16em]">SIDEBYTE</span>
              </div>

              <div className="relative z-10 max-w-2xl">
                <h3 className="text-5xl font-medium tracking-tight sm:text-7xl">{title}</h3>
                <p className={`mt-8 max-w-lg text-base leading-relaxed ${index === 1 || index === 3 ? 'text-background/65' : 'text-muted-foreground'}`}>{description}</p>
                <div className={`mt-12 border-t pt-5 ${index === 1 || index === 3 ? 'border-background/20' : 'border-border'}`}>
                  <p className={`mb-4 text-[10px] uppercase tracking-[0.18em] ${index === 1 || index === 3 ? 'text-background/45' : 'text-muted-foreground'}`}>
                    {language === 'ru' ? 'Результат этапа' : 'Stage output'}
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                    {outcomes.map((outcome) => <span key={outcome}>{outcome}</span>)}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
