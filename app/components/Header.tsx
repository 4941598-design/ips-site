export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-3xl font-bold text-sky-900">
            Buddecor
          </h1>

          <p className="text-xs text-slate-500">
            Стелі • Акустика • Освітлення
          </p>
        </div>

        <nav className="hidden gap-8 font-medium md:flex">
          <a href="/">Головна</a>
          <a href="/about">Про компанію</a>
          <a href="/brands">Бренди</a>
          <a href="/products">Продукція</a>
          <a href="/projects">Проєкти</a>
          <a href="/contacts">Контакти</a>
        </nav>
      </div>
    </header>
  );
}