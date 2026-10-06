'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

export type Language = 'ru' | 'en'

const LanguageContext = createContext<{
  language: Language
  setLanguage: (language: Language) => void
} | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ru')

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage)
    window.localStorage.setItem('portfolio-language', nextLanguage)
    document.documentElement.lang = nextLanguage
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider')
  return context
}
