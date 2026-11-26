export default function RockfonContourPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 py-48 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center xl:relative xl:left-96">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
            ROCKFON
          </p>

          <h1 className="mt-3 text-5xl font-bold lg:text-6xl">
            Rockfon Contour
          </h1>

          <p className="mx-auto max-w-4xl px-6 text-center xl:relative xl:left-0">
            Безкаркасний акустичний екран для відкритих просторів.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>
              <img
                src="/images/products/rockfon/rockfon-contour.jpg"
                alt="Rockfon Contour"
                className="w-full rounded-3xl shadow-xl"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-sky-900">
                Опис продукту
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Rockfon Contour — безкаркасний акустичний підвісний екран
                із кам'яної вати, призначений для ефективного звукопоглинання
                та покращення акустичного комфорту в приміщенні.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Доступний у прямокутних і хвилеподібних формах та може
                виготовлятися у будь-якому кольорі за палітрою NCS,
                що дозволяє створювати оригінальні дизайнерські композиції.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Монтується вертикально за допомогою спеціальної тросової
                підвісної системи без використання традиційного каркаса.
              </p>

              <h2 className="text-3xl font-bold text-sky-900">
                Основні переваги
              </h2>

              <div className="mt-6 space-y-6 text-lg leading-8 text-slate-600">

                <p>
                  <strong className="text-sky-900">Безкаркасна конструкція</strong> —
                  сучасний зовнішній вигляд та простий монтаж.
                </p>

                <p>
                  <strong className="text-sky-900">Палітра NCS</strong> —
                  можливість виготовлення в індивідуальному кольорі.
                </p>

                <p>
                  <strong className="text-sky-900">Вертикальний монтаж</strong> —
                  ефективне поглинання шуму в приміщеннях відкритого типу.
                </p>

                <p>
                  <strong className="text-sky-900">Вільний доступ до комунікацій</strong> —
                  ідеальне рішення для відкритих стель та інженерних систем.
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