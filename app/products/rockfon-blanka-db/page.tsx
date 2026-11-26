export default function RockfonBlankaDbPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 py-48 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center xl:relative xl:left-96">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
            ROCKFON
          </p>

          <h1 className="mt-3 text-5xl font-bold lg:text-6xl">
            Rockfon Blanka dB
          </h1>

          <p className="mx-auto max-w-4xl px-6 text-center xl:relative xl:left-0">
            Акустична стельова система з високим рівнем звукопоглинання та звукоізоляції.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>
              <img
                src="/images/products/rockfon/rockfon-blanka-db.jpg"
                alt="Rockfon Blanka dB"
                className="w-full rounded-3xl shadow-xl"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-sky-900">
                Опис продукту
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Rockfon Blanka dB — акустична стельова плита з кам'яної вати,
                що поєднує високі показники звукопоглинання та звукоізоляції
                між сусідніми приміщеннями.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Завдяки спеціальній звукоізоляційній мембрані плита зменшує
                передачу шуму між кімнатами, забезпечуючи приватність та
                акустичний комфорт.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Має гладку надматову білу поверхню з високим рівнем
                світловідбиття та доступна з видимою, напівприхованою
                і прихованою підвісними системами.
              </p>

              <h2 className="text-3xl font-bold text-sky-900">
                Основні переваги
              </h2>

              <div className="mt-6 space-y-6 text-lg leading-8 text-slate-600">

                <p>
                  <strong className="text-sky-900">αw до 1,00</strong> —
                  високий рівень звукопоглинання, що відповідає
                  класу А.
                </p>

                <p>
                  <strong className="text-sky-900">До 46 дБ (Dn,f,w)</strong> —
                  ефективна звукоізоляція між сусідніми приміщеннями.
                </p>

                <p>
                  <strong className="text-sky-900">Звукоізоляційна мембрана</strong> —
                  забезпечує додатковий акустичний комфорт та приватність.
                </p>

                <p>
                  <strong className="text-sky-900">Гладка поверхня Blanka</strong> —
                  надматове біле покриття з високим світловідбиттям.
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