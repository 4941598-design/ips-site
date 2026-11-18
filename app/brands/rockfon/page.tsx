export default function RockfonPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-5xl font-bold text-sky-900">
        Rockfon
      </h1>

      <p className="mt-6 max-w-4xl text-lg text-slate-600">
        Rockfon — один із провідних світових виробників
        акустичних стельових систем та архітектурних
        акустичних рішень.
      </p>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold">
          Основні рішення
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-3xl border p-6">
            <h3 className="text-xl font-semibold">
              Sonar
            </h3>

            <p className="mt-3 text-slate-600">
              Акустичні стелі для офісів та навчальних закладів.
            </p>
          </div>

          <div className="rounded-3xl border p-6">
            <h3 className="text-xl font-semibold">
              MediCare
            </h3>

            <p className="mt-3 text-slate-600">
              Спеціальні стелі для медичних закладів.
            </p>
          </div>

          <div className="rounded-3xl border p-6">
            <h3 className="text-xl font-semibold">
              Eclipse
            </h3>

            <p className="mt-3 text-slate-600">
              Архітектурні акустичні острови.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}