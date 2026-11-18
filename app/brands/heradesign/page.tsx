export default function HeradesignPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-5xl font-bold text-sky-900">
        Heradesign
      </h1>

      <p className="mt-6 max-w-4xl text-lg text-slate-600">
        Heradesign — акустичні панелі з деревного волокна,
        які поєднують високу звукопоглинальну здатність,
        міцність та природний дизайн.
      </p>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold">
          Переваги Heradesign
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-3xl border p-6">
            <h3 className="text-xl font-semibold">
              Акустичний комфорт
            </h3>

            <p className="mt-3 text-slate-600">
              Ефективне зниження шуму в приміщеннях.
            </p>
          </div>

          <div className="rounded-3xl border p-6">
            <h3 className="text-xl font-semibold">
              Натуральний вигляд
            </h3>

            <p className="mt-3 text-slate-600">
              Природна текстура деревного волокна.
            </p>
          </div>

          <div className="rounded-3xl border p-6">
            <h3 className="text-xl font-semibold">
              Довговічність
            </h3>

            <p className="mt-3 text-slate-600">
              Висока механічна міцність та тривалий термін служби.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold">
          Сфери застосування
        </h2>

        <ul className="mt-6 space-y-3 text-lg text-slate-600">
          <li>• Освітні заклади</li>
          <li>• Офіси</li>
          <li>• Ресторани та кафе</li>
          <li>• Спортивні об'єкти</li>
          <li>• Конференц-зали</li>
        </ul>
      </section>
    </main>
  );
}