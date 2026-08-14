export default function Header() {
    return (
        <header className="w-full">
            <div className="mx-auto flex max-w-[1600px] items-center justify-between py-6">
                <h1>Header</h1>
                <nav className="flex gap-8">
                    <a href="#">Главная</a>
                    <a href="#projects">Проекты</a>
                    <a href="#about">Обо мне</a>
                    <a href="#expirience">Опыт</a>
                    <a href="#stack">Стек</a>
                    <a href="#contacts">Контакты</a>
                </nav>
                <div className="socials">социалки</div>
            </div>
        </header>
    );
}