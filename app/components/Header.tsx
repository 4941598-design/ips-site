"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-4">
          <a href="/">
            <img
              src="/images/logo/ips-logo-footer.jpg"
              alt="IPS"
              className="h-16 w-auto"
            />
          </a>
        </div>

        {/* Desktop menu */}
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

          

          <a href="/projects" className="hover:text-sky-700">
            Проєкти
          </a>

          <a href="/contacts" className="hover:text-sky-700">
            Контакти
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl md:hidden"
          aria-label="Меню"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="flex flex-col px-6 py-4 text-lg">
            <a
              href="/"
              className="py-3"
              onClick={() => setMenuOpen(false)}
            >
              Головна
            </a>

            <a
              href="/about"
              className="py-3"
              onClick={() => setMenuOpen(false)}
            >
              Про компанію
            </a>

            <a
              href="/brands"
              className="py-3"
              onClick={() => setMenuOpen(false)}
            >
              Бренди
            </a>

            

            <a
              href="/projects"
              className="py-3"
              onClick={() => setMenuOpen(false)}
            >
              Проєкти
            </a>

            <a
              href="/contacts"
              className="py-3"
              onClick={() => setMenuOpen(false)}
            >
              Контакти
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}