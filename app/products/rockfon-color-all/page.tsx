export default function RockfonColorAllPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 py-48 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center xl:relative xl:left-96">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
            ROCKFON
          </p>

          <h1 className="mt-3 text-5xl font-bold lg:text-6xl">
            Rockfon Color-all
          </h1>

          <p className="mx-auto max-w-4xl px-6 text-center xl:relative xl:left-0">
            Акустична стельова система з широкими дизайнерськими можливостями.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>
              <img
                src="/images/products/rockfon/rockfon-color-all.jpg"
                alt="Rockfon Color-all"
                className="w-full rounded-3xl shadow-xl"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-sky-900">
                Опис продукту
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Rockfon Color-all — акустична стельова плита з кам'яної вати,
                що поєднує високі показники звукопоглинання та широкі
                можливості для дизайнерських рішень.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Доступна у 34 ексклюзивних кольорах із гладкою матовою
                поверхнею, а також може виготовлятися у будь-якому
                індивідуальному кольорі за палітрою NCS.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Представлена з видимою, напівприхованою та прихованою
                підвісними системами для реалізації сучасних інтер'єрних рішень.
              </p>

              <h2 className="text-3xl font-bold text-sky-900">
                Основні переваги
              </h2>

              <div className="mt-6 space-y-6 text-lg leading-8 text-slate-600">

                <p>
                  <strong className="text-sky-900">34 ексклюзивні кольори</strong> —
                  широкі можливості для створення індивідуального дизайну.
                </p>

                <p>
                  <strong className="text-sky-900">Палітра NCS</strong> —
                  можливість замовлення кольору під конкретний проєкт.
                </p>

                <p>
                  <strong className="text-sky-900">αw до 1,00</strong> —
                  максимальний рівень звукопоглинання класу А.
                </p>

                <p>
                  <strong className="text-sky-900">Клас А1</strong> —
                  високий рівень пожежної безпеки відповідно до європейських стандартів.
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