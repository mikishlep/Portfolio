'use client'

import Link from 'next/link'
import { FaGithubAlt, FaTelegramPlane, FaVk } from 'react-icons/fa'
import { useLanguage } from '@/components/i18n/LanguageProvider'

export default function Header() {
    const { language, setLanguage } = useLanguage()
    const labels = language === 'ru'
        ? ['главная', 'проекты', 'о нас', 'опыт', 'стек', 'контакты']
        : ['home', 'projects', 'about', 'experience', 'stack', 'contacts']

    return (
        <header className="relative z-50 w-full">
            <div className="mx-auto flex max-w-335 items-center justify-between border border-border px-6 py-5 sm:px-10 lg:px-18 lg:py-6">
                <Link href="/" className="text-lg font-medium tracking-[0.08em]">SIDEBYTE</Link>
                <nav className="hidden gap-7 text-sm font-light text-foreground lg:flex">
                    <Link href="/">{labels[0]}</Link>
                    <Link href="/#projects">{labels[1]}</Link>
                    <Link href="/#about">{labels[2]}</Link>
                    <Link href="/#experience">{labels[3]}</Link>
                    <Link href="/#stack">{labels[4]}</Link>
                    <Link href="/#contacts">{labels[5]}</Link>
                </nav>
                <div className="flex items-center gap-2 font-light sm:gap-3">
                    <div className="mr-1 flex items-center rounded-full border border-border p-1 text-[10px] font-medium uppercase tracking-wider">
                        {(['ru', 'en'] as const).map((item) => (
                            <button
                                key={item}
                                type="button"
                                onClick={() => setLanguage(item)}
                                className={`rounded-full px-2 py-1 transition-colors ${language === item ? 'bg-foreground text-background' : 'text-muted-foreground'}`}
                                aria-pressed={language === item}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                    <a href="https://github.com/mikishlep" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full border border-foreground p-2 transition-colors hover:bg-foreground hover:text-background">
                        <FaGithubAlt />
                    </a>
                    <a href="https://t.me/mikishlep" target="_blank" rel="noreferrer" aria-label="Telegram" className="rounded-full border border-foreground p-2 transition-colors hover:bg-foreground hover:text-background">
                        <FaTelegramPlane />
                    </a>
                    <a href="https://vk.ru/mikishlep" target="_blank" rel="noreferrer" aria-label="VK" className="hidden rounded-full border border-foreground p-2 transition-colors hover:bg-foreground hover:text-background sm:block">
                        <FaVk />
                    </a>
                </div>
            </div>
        </header>
    );
}
