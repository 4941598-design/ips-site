export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-screen-2xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">

          <div>
            <h3 className="text-3xl font-bold text-white">
              BUDDECOR
            </h3>

            <p className="mt-3 text-slate-300">
              Стелі • Акустика • Освітлення
            </p>

            <p className="mt-6 text-slate-400">
              Комплексні рішення для лікарень, офісів,
              навчальних закладів, ресторанів та ТРЦ.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">
              Контакти
            </h4>

            <p className="mt-4 text-slate-300">
              +38 (0XX) XXX-XX-XX
            </p>

            <p className="mt-2 text-slate-300">
              info@buddecor.com.ua
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">
              Компанія
            </h4>

            <p className="mt-4 text-slate-300">
              Працюємо з 1997 року
            </p>

            <p className="mt-2 text-slate-300">
              1000+ реалізованих проєктів
            </p>

            <p className="mt-2 text-slate-300">
              Вся Україна
            </p>
          </div>

        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-400">
          © 2026 Buddecor. Всі права захищені.
        </div>
      </div>
    </footer>
  );
}