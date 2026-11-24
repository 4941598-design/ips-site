export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

        <div className="flex items-center gap-4">
  <img
  src="/images/logo/ips-logo-footer.JPG"
  alt="IPS"
  className="h-18 w-auto"
/>

  
</div>

        <nav className="hidden items-center gap-10 text-base font-medium md:flex">
          <a href="/" className="hover:text-sky-700">
            Головна
          </a>

          <a href="/about" className="hover:text-sky-700">
            Про компанію
          </a>

          <a href="/brands" className="hover:text-sky-700">
            Бренди
          </a>

          <a href="/products" className="hover:text-sky-700">
            Продукція
          </a>

          <a href="/projects" className="hover:text-sky-700">
            Проєкти
          </a>

          <a href="/contacts" className="hover:text-sky-700">
            Контакти
          </a>
        </nav>

      </div>
    </header>
  );
}