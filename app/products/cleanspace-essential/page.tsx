export default function RockfonCleanSpaceEssentialPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 py-48 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center xl:relative xl:left-96">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
            ROCKFON
          </p>

          <h1 className="mt-3 text-5xl font-bold lg:text-6xl">
            Rockfon CleanSpace Essential
          </h1>

          <p className="mx-auto max-w-4xl px-6 text-center xl:relative xl:left-0">
            Акустична стельова система для приміщень з підвищеними вимогами до гігієни.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>
              <img
                src="/images/products/rockfon/cleanspace-essential.jpg"
                alt="Rockfon CleanSpace Essential"
                className="w-full rounded-3xl shadow-xl"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-sky-900">
                Опис продукту
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Rockfon CleanSpace Essential — акустична стельова плита
                з кам'яної вати, спеціально розроблена для приміщень
                з підвищеними вимогами до гігієни та чистоти.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Забезпечує високий рівень звукопоглинання та сприяє
                створенню комфортного акустичного середовища.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Поверхня стійка до вологи, легко очищується та підходить
                для медичних, освітніх, громадських і комерційних приміщень.
              </p>

              <h2 className="text-3xl font-bold text-sky-900">
                Основні переваги
              </h2>

              <div className="mt-6 space-y-6 text-lg leading-8 text-slate-600">

                <p>
                  <strong className="text-sky-900">Висока гігієнічність</strong> —
                  оптимальне рішення для приміщень із підвищеними
                  вимогами до чистоти.
                </p>

                <p>
                  <strong className="text-sky-900">Стійкість до вологи</strong> —
                  витримує до 100% відносної вологості повітря.
                </p>

                <p>
                  <strong className="text-sky-900">Простий догляд</strong> —
                  очищення пилососом або вологою тканиною.
                </p>

                <p>
                  <strong className="text-sky-900">Універсальність</strong> —
                  підходить для медичних, освітніх та комерційних об'єктів.
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