export default function Footer() {
    return (
        <footer className="w-full">
            <div className="mx-auto flex max-w-335 flex-col gap-5 border-x border-b border-border px-6 py-8 text-xs uppercase tracking-[0.14em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-18">
                <p>© 2026 mikishlep</p>
                <p>Designed & developed with care</p>
                <a href="#top" className="text-foreground">Back to top ↑</a>
            </div>
        </footer>
    );
}
