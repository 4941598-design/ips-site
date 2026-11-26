export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center xl:relative xl:left-96">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            Працюємо з 1997 року
          </p>

          <h1 className="mt-4 text-4xl font-bold lg:text-6xl">
            Про компанію
          </h1>

          <p className="mx-auto mt-8 max-w-5xl text-xl text-slate-300">
            IPS — постачальник комплексних рішень у сфері стельових систем,
            архітектурної акустики та освітлення для лікарень, офісів,
            освітніх закладів, ресторанів і торговельних центрів.
          </p>
        </div>
      </section>

      {/* Основний блок */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <img
  src="/images/projects/office-01.jpg"
  alt="IPS"
  className="w-full max-h-[520px] rounded-3xl shadow-2xl object-cover"
/>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-sky-900">
                Понад 28 років створюємо комфортні простори
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Ми працюємо з провідними виробниками стельових систем,
                акустичних рішень та освітлення. Наша команда супроводжує
                проєкт від підбору матеріалів до реалізації на об'єкті.
              </p>

              <div className="mt-8 space-y-4 text-lg text-slate-700">
                <div>✓ 25+ років досвіду</div>
                <div>✓ 700+ реалізованих проєктів</div>
                <div>✓ Лікарні, офіси, освіта, ресторани та ТРЦ</div>
                <div>✓ Технічна підтримка проєктів</div>
              </div>

              
            </div>
          </div>
        </div>
      </section>

      {/* Переваги */}
<section className="py-24 bg-slate-50">
  <div className="mx-auto max-w-6xl px-6">
    <h2 className="text-center text-4xl font-bold text-sky-900">
      Чому обирають нас
    </h2>

    <p className="mx-auto mt-4 text-center text-lg text-slate-600">
      Допомагаємо створювати сучасні,
      функціональні та довговічні простори.
    </p>

    <div className="mx-auto mt-16 max-w-5xl grid gap-12 md:grid-cols-3">
  <div>
    <h3 className="text-2xl font-bold text-sky-900">
      Досвід
    </h3>

    <p className="mt-4 leading-8 text-slate-600">
      Понад 28 років реалізуємо проєкти різного масштабу для медицини,
      освіти, офісів та громадських просторів.
    </p>
  </div>

  <div>
    <h3 className="text-2xl font-bold text-sky-900">
      Експертність
    </h3>

    <p className="mt-4 leading-8 text-slate-600">
      Професійний підбір матеріалів, технічні консультації та супровід
      проєкту від ідеї до реалізації.
    </p>
  </div>

  <div>
    <h3 className="text-2xl font-bold text-sky-900">
      Надійність
    </h3>

    <p className="mt-4 leading-8 text-slate-600">
      Співпрацюємо з провідними світовими виробниками стельових систем,
      архітектурної акустики, освітлення та оздоблювальних матеріалів.
    </p>
  </div>
</div>

          
          </div>
      </section>

      {/* CTA */}
      
    </main>
  );
}