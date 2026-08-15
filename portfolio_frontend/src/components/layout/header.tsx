import {FaGithubAlt, FaTelegramPlane, FaVk } from "react-icons/fa";

export default function Header() {
    return (
        <header className="w-full">
            <div className="mx-auto flex max-w-335 items-center justify-between border border-border px-18 py-6">
                <h1 className="font-medium text-lg">mikishlep</h1>
                <nav className="flex gap-8 font-light text-foreground">
                    <a href="#">main</a>
                    <a href="#projects">projects</a>
                    <a href="#about">about</a>
                    <a href="#expirience">expirience</a>
                    <a href="#stack">stack</a>
                    <a href="#contacts">contacts</a>
                </nav>
                <div className="socials font-light flex gap-4 items-center">
                    <a href="https://github.com/mikishlep" target="_blank" title="github" className="border border-foreground p-2 rounded-full">
                        <FaGithubAlt />
                    </a>
                    <a href="https://t.me/mikishlep" title="telegram" target="_blank" className="border border-foreground p-2 rounded-full">
                        <FaTelegramPlane />
                    </a>
                    <a href="https://vk.ru/mikishlep" title="vk" target="_blank" className="border border-foreground p-2 rounded-full">
                        <FaVk />
                    </a>
                </div>
            </div>
        </header>
    );
}