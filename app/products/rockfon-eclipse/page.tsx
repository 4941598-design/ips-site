export default function RockfonEclipsePage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 py-48 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center xl:relative xl:left-96">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
            ROCKFON
          </p>

          <h1 className="mt-3 text-5xl font-bold lg:text-6xl">
            Rockfon Eclipse
          </h1>

          <p className="mx-auto max-w-4xl px-6 text-center xl:relative xl:left-0">
            Безкаркасний акустичний острів для сучасних просторів.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>
              <img
                src="/images/products/rockfon/rockfon-eclipse.jpg"
                alt="Rockfon Eclipse"
                className="w-full rounded-3xl shadow-xl"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-sky-900">
                Опис продукту
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Rockfon Eclipse — безкаркасний акустичний острів із
                кам'яної вати, призначений для покращення акустичного
                комфорту в приміщенні.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Забезпечує ефективне звукопоглинання, зменшуючи рівень
                шуму та реверберацію в приміщенні.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Доступний у різних геометричних формах і розмірах та може
                монтуватися на підвісній системі або безпосередньо до стелі.
              </p>

              <h2 className="text-3xl font-bold text-sky-900">
                Основні переваги
              </h2>

              <div className="mt-6 space-y-6 text-lg leading-8 text-slate-600">

                <p>
                  <strong className="text-sky-900">Високе звукопоглинання</strong> —
                  ефективно зменшує шум та реверберацію.
                </p>

                <p>
                  <strong className="text-sky-900">Різні форми та розміри</strong> —
                  можливість адаптації під архітектуру приміщення.
                </p>

                <p>
                  <strong className="text-sky-900">Гнучкий монтаж</strong> —
                  встановлення на підвісній системі або безпосередньо до стелі.
                </p>

                <p>
                  <strong className="text-sky-900">Сучасний дизайн</strong> —
                  ідеальне рішення для відкритих просторів та дизайнерських інтер'єрів.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">

        </div>
      </section>
    </main>
  );
}