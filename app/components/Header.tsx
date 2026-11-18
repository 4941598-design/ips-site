export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-2xl font-bold text-sky-900">
            IPS
          </h1>

          <p className="text-xs text-slate-500">
            Стелі • Акустика • Освітлення
          </p>
        </div>

        <nav className="hidden gap-6 md:flex">
          <a href="/">Головна</a>
          <a href="/solutions">Рішення</a>
          <a href="/products">Продукція</a>
          <a href="/projects">Об'єкти</a>
          <a href="/contacts">Контакти</a>
        </nav>
      </div>
    </header>
  );
}