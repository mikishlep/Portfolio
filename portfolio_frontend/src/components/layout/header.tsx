import Link from 'next/link'
import { FaGithubAlt, FaTelegramPlane, FaVk } from 'react-icons/fa'

export default function Header() {
    return (
        <header className="relative z-50 w-full">
            <div className="mx-auto flex max-w-335 items-center justify-between border border-border px-6 py-5 sm:px-10 lg:px-18 lg:py-6">
                <Link href="/" className="text-lg font-medium tracking-tight">mikishlep</Link>
                <nav className="hidden gap-7 text-sm font-light text-foreground lg:flex">
                    <Link href="/">main</Link>
                    <Link href="/#projects">projects</Link>
                    <Link href="/#about">about</Link>
                    <Link href="/#experience">experience</Link>
                    <Link href="/#stack">stack</Link>
                    <Link href="/#contacts">contacts</Link>
                </nav>
                <div className="flex items-center gap-2 font-light sm:gap-3">
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
