'use client'

import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '@/components/i18n/LanguageProvider'

const sections = [
  { id: 'projects', number: '01', ru: 'Проекты', en: 'Projects' },
  { id: 'about', number: '02', ru: 'О нас', en: 'About' },
  { id: 'experience', number: '03', ru: 'Опыт', en: 'Experience' },
  { id: 'stack', number: '04', ru: 'Стек', en: 'Stack' },
  { id: 'process', number: '05', ru: 'Процесс', en: 'Process' },
  { id: 'contacts', number: '06', ru: 'Контакты', en: 'Contacts' },
] as const

export default function FloatingNavigation() {
  const { language, setLanguage } = useLanguage()
  const [visible, setVisible] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [processStep, setProcessStep] = useState(1)
  const [progress, setProgress] = useState(0)

  const activeSection = sections[activeIndex]
  const activeLabel = activeSection[language]
  const sectionLabel = useMemo(() => {
    if (activeSection.id !== 'process') return activeLabel
    return `${activeLabel} · ${String(processStep).padStart(2, '0')}/04`
  }, [activeLabel, activeSection.id, processStep])

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const header = document.querySelector('header')
      setVisible(Boolean(header && header.getBoundingClientRect().bottom <= 0))

      const marker = window.innerHeight * 0.38
      let nextActive = 0
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id)
        if (element && element.getBoundingClientRect().top <= marker) nextActive = index
      })
      setActiveIndex(nextActive)

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      setProgress(maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0)

      const process = document.getElementById('process')
      const pinSpace = process?.parentElement
      if (process && pinSpace?.classList.contains('pin-spacer')) {
        const start = pinSpace.getBoundingClientRect().top + window.scrollY
        const distance = Math.max(1, pinSpace.offsetHeight - window.innerHeight)
        const sceneProgress = Math.min(1, Math.max(0, (window.scrollY - start) / distance))
        setProcessStep(Math.round(sceneProgress * 3) + 1)
      }
    }

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)
    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setExpanded(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const navigate = () => setExpanded(false)

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.aside
            initial={{ opacity: 0, x: -88 }}
            animate={{ opacity: 1, x: 0, width: expanded ? 300 : 72 }}
            exit={{ opacity: 0, x: -88 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-4 left-[max(16px,calc((100vw-1340px)/2-88px))] z-90 hidden flex-col overflow-hidden border border-border bg-background/95 shadow-[0_18px_60px_rgba(17,19,24,0.08)] backdrop-blur-xl min-[1440px]:flex"
            aria-label={language === 'ru' ? 'Навигация по странице' : 'Page navigation'}
          >
            <motion.div
              className="absolute right-0 top-0 w-px origin-top bg-foreground"
              animate={{ height: `${progress * 100}%` }}
              transition={{ duration: 0.15, ease: 'linear' }}
            />

            <div className="flex h-18 shrink-0 items-center justify-between border-b border-border">
              <a href="#top" onClick={navigate} className="flex h-full w-18 shrink-0 flex-col items-center justify-center text-[9px] font-medium leading-tight tracking-[0.18em]">
                <span>SIDE</span>
                <span>BYTE</span>
              </a>
              {expanded && <span className="mr-auto whitespace-nowrap text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{language === 'ru' ? 'Навигация' : 'Navigation'} · 01—06</span>}
              <button
                type="button"
                onClick={() => setExpanded((value) => !value)}
                className="flex h-full w-18 shrink-0 items-center justify-center border-l border-border"
                aria-expanded={expanded}
                aria-label={expanded ? (language === 'ru' ? 'Закрыть меню' : 'Close menu') : (language === 'ru' ? 'Открыть меню' : 'Open menu')}
              >
                {expanded ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>

            <div className="relative flex min-h-0 flex-1 flex-col">
              <AnimatePresence mode="wait" initial={false}>
                {expanded ? (
                  <motion.nav
                    key="expanded"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    className="flex flex-1 flex-col justify-center px-7 py-8"
                  >
                    {sections.map((section, index) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        onClick={navigate}
                        className={`group flex items-center gap-4 border-b border-border py-3 text-sm transition-colors last:border-b-0 ${index === activeIndex ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                      >
                        <span className="w-5 text-[10px]">{section.number}</span>
                        <span className="flex-1">{section[language]}</span>
                        <span className={`size-1.5 rounded-full bg-foreground transition-opacity ${index === activeIndex ? 'opacity-100' : 'opacity-0 group-hover:opacity-30'}`} />
                      </a>
                    ))}
                  </motion.nav>
                ) : (
                  <motion.div
                    key="collapsed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative flex flex-1 items-center justify-center overflow-hidden"
                  >
                    <span className="absolute top-7 text-[10px] text-muted-foreground">{activeSection.number} / 06</span>
                    <span className="rotate-180 whitespace-nowrap text-[10px] uppercase tracking-[0.2em] text-muted-foreground [writing-mode:vertical-rl]">
                      {sectionLabel}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className={`flex h-18 shrink-0 items-center border-t border-border text-[10px] font-medium uppercase tracking-wider ${expanded ? 'justify-between px-6' : 'justify-center gap-1'}`}>
              {expanded && <span className="text-muted-foreground">Language</span>}
              <div className="flex gap-1">
                {(['ru', 'en'] as const).map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setLanguage(item)}
                    className={`px-1.5 py-1 ${language === item ? 'text-foreground' : 'text-muted-foreground'}`}
                    aria-pressed={language === item}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-3 top-3 z-90 border border-border bg-background/95 shadow-[0_12px_40px_rgba(17,19,24,0.08)] backdrop-blur-xl min-[1440px]:hidden"
          >
            <motion.div
              className="absolute bottom-0 left-0 h-px origin-left bg-foreground"
              animate={{ width: `${progress * 100}%` }}
              transition={{ duration: 0.15, ease: 'linear' }}
            />
            <div className="flex h-13 items-center">
              <a href="#top" onClick={navigate} className="flex h-full items-center border-r border-border px-4 text-xs font-medium tracking-[0.12em]">SB</a>
              <span className="min-w-0 flex-1 truncate px-4 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                {activeSection.number} · {sectionLabel}
              </span>
              <button type="button" onClick={() => setExpanded((value) => !value)} className="flex h-full w-13 items-center justify-center border-l border-border" aria-expanded={expanded} aria-label={language === 'ru' ? 'Меню' : 'Menu'}>
                {expanded ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
            <AnimatePresence>
              {expanded && (
                <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-border">
                  <div className="grid grid-cols-2 p-3">
                    {sections.map((section, index) => (
                      <a key={section.id} href={`#${section.id}`} onClick={navigate} className={`flex items-center gap-3 p-3 text-sm ${index === activeIndex ? 'text-foreground' : 'text-muted-foreground'}`}>
                        <span className="text-[10px]">{section.number}</span>{section[language]}
                      </a>
                    ))}
                  </div>
                  <div className="flex items-center justify-between border-t border-border px-6 py-4 text-xs">
                    <a href="https://t.me/mikishlep" target="_blank" rel="noreferrer">Telegram ↗</a>
                    <div className="flex gap-3 uppercase">
                      {(['ru', 'en'] as const).map((item) => <button key={item} type="button" onClick={() => setLanguage(item)} className={language === item ? 'text-foreground' : 'text-muted-foreground'}>{item}</button>)}
                    </div>
                  </div>
                </motion.nav>
              )}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
