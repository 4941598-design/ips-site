export default function RockfonEclipseColourPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 py-48 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center xl:relative xl:left-96">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
            ROCKFON
          </p>

          <h1 className="mt-3 text-5xl font-bold lg:text-6xl">
            Rockfon Eclipse Colour
          </h1>

          <p className="mx-auto max-w-4xl px-6 text-center xl:relative xl:left-0">
            Кольоровий акустичний острів для сучасних дизайнерських просторів.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>
              <img
                src="/images/products/rockfon/rockfon-eclipse-colour.jpg"
                alt="Rockfon Eclipse Colour"
                className="w-full rounded-3xl shadow-xl"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-sky-900">
                Опис продукту
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Rockfon Eclipse Colour — безкаркасний акустичний острів
                із кам'яної вати, який поєднує ефективне звукопоглинання
                та виразний сучасний дизайн.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Доступний у будь-якому кольорі за палітрою NCS,
                що відкриває широкі можливості для реалізації
                дизайнерських рішень.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Монтується на спеціальній підвісній системі або
                безпосередньо до перекриття, що дозволяє використовувати
                його навіть там, де встановлення традиційної підвісної
                стелі неможливе.
              </p>

              <h2 className="text-3xl font-bold text-sky-900">
                Основні переваги
              </h2>

              <div className="mt-6 space-y-6 text-lg leading-8 text-slate-600">

                <p>
                  <strong className="text-sky-900">Будь-який колір NCS</strong> —
                  максимальна свобода для дизайнерських рішень.
                </p>

                <p>
                  <strong className="text-sky-900">Ефективне звукопоглинання</strong> —
                  зменшує рівень шуму та реверберацію в приміщенні.
                </p>

                <p>
                  <strong className="text-sky-900">Безкаркасна конструкція</strong> —
                  легкий сучасний вигляд та простий монтаж.
                </p>

                <p>
                  <strong className="text-sky-900">Гнучке встановлення</strong> —
                  монтаж на підвісній системі або безпосередньо до перекриття.
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