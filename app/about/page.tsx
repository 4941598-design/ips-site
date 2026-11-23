export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            Працюємо з 1997 року
          </p>

          <h1 className="mt-6 text-5xl font-bold lg:text-7xl">
            Про компанію
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-xl text-slate-300">
            IPS  — постачальник комплексних рішень у сфері
            стельових систем, архітектурної акустики та освітлення для
            лікарень, офісів, освітніх закладів, ресторанів і торговельних
            центрів.
          </p>
        </div>
      </section>

      {/* Основний блок */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid items-center gap-20 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <img
  src="/images/projects/office-01.jpg"
  alt="IPS"
  className="w-full rounded-3xl shadow-2xl max-h-[520px] object-cover"
/>
            </div>

            <div>
              <p className="font-semibold uppercase tracking-[0.2em] text-sky-700">
                IPS 
              </p>

              <h2 className="mt-4 text-4xl font-bold text-sky-900">
                Понад 25 років створюємо комфортні простори
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Ми працюємо з провідними виробниками стельових систем,
                акустичних рішень та освітлення. Наша команда супроводжує
                проєкт від підбору матеріалів до реалізації на об'єкті.
              </p>

              <div className="mt-8 space-y-4 text-lg text-slate-700">
                <div>✓ 25+ років досвіду</div>
                <div>✓ 1000+ реалізованих проєктів</div>
                <div>✓ Лікарні, офіси, освіта, ресторани та ТРЦ</div>
                <div>✓ Технічна підтримка проєктів</div>
              </div>

              <button className="mt-10 rounded-2xl bg-sky-800 px-10 py-5 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-sky-900">
                Зв'язатися з нами
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-12 text-center md:grid-cols-3">
            <div>
              <div className="text-6xl font-bold text-sky-900">25+</div>
              <p className="mt-3 text-slate-600">років досвіду</p>
            </div>

            <div>
              <div className="text-6xl font-bold text-sky-900">1000+</div>
              <p className="mt-3 text-slate-600">
                реалізованих проєктів
              </p>
            </div>

            <div>
              <div className="text-6xl font-bold text-sky-900">3</div>
              <p className="mt-3 text-slate-600">
                ключові напрямки
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Переваги */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-4xl font-bold text-sky-900">
            Чому обирають нас
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-slate-600">
            Понад 25 років допомагаємо створювати сучасні,
            функціональні та довговічні простори.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-sky-900">
                Досвід
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Понад 25 років реалізуємо проєкти різного масштабу для
                медицини, освіти, офісів та громадських просторів.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-sky-900">
                Експертність
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Професійний підбір матеріалів, технічні консультації та
                супровід проєкту від ідеї до реалізації.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-sky-900">
                Надійність
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Співпрацюємо з провідними світовими виробниками стельових
                систем, архітектурної акустики, освітлення та
                оздоблювальних матеріалів.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Наші партнери та бренди */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-4xl font-bold text-sky-900">
            Наші партнери та бренди
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-slate-600">
            Співпрацюємо з провідними світовими виробниками стельових
            систем, архітектурної акустики, освітлення та оздоблювальних
            матеріалів.
          </p>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 text-center shadow-xl">
              <h3 className="text-lg font-bold text-sky-900">
                ROCKFON
              </h3>
            </div>

            <div className="rounded-3xl bg-white p-6 text-center shadow-xl">
              <h3 className="text-lg font-bold text-sky-900">
                KNAUF CEILING SOLUTIONS
              </h3>
            </div>

            <div className="rounded-3xl bg-white p-6 text-center shadow-xl">
              <h3 className="text-lg font-bold text-sky-900">
                HERADESIGN
              </h3>
            </div>

            <div className="rounded-3xl bg-white p-6 text-center shadow-xl">
              <h3 className="text-lg font-bold text-sky-900">
                CLIP-IN
              </h3>
            </div>

            <div className="rounded-3xl bg-white p-6 text-center shadow-xl">
              <h3 className="text-lg font-bold text-sky-900">
                KRAFT MESH
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sky-900 py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold">
            Готові обговорити ваш проєкт?
          </h2>

          <p className="mt-6 text-lg text-slate-200">
            Допоможемо підібрати оптимальні стельові, акустичні та
            освітлювальні рішення для вашого об'єкта.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <button className="rounded-2xl bg-amber-500 px-10 py-5 text-lg font-bold text-slate-900 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-amber-400">
              Отримати консультацію
            </button>

            <button className="rounded-2xl border-2 border-white px-10 py-5 text-lg font-bold transition-all duration-300 hover:bg-white hover:text-slate-900">
              Надіслати проєкт
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}