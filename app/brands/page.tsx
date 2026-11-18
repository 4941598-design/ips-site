export default function BrandsPage() {
  const brands = [
    {
      name: "Rockfon",
      description:
        "Світовий виробник акустичних стельових систем і архітектурної акустики.",
    },
    {
      name: "Heradesign",
      description:
        "Панелі з деревного волокна для акустичного комфорту та дизайну.",
    },
    {
      name: "Kraft",
      description:
        "Металеві стелі, архітектурні рейки та дизайнерські металеві рішення.",
    },
    {
      name: "Clip-In",
      description:
        "Металеві стельові системи для медичних і технічних приміщень.",
    },
  ];

  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-5xl font-bold">
        Бренди
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-slate-600">
        Ми працюємо з провідними європейськими виробниками
        стельових систем, акустичних рішень та архітектурних конструкцій.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {brands.map((brand) => (
          <article
            key={brand.name}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-xl"
          >
            <h2 className="text-3xl font-semibold text-sky-900">
              {brand.name}
            </h2>

            <p className="mt-4 text-slate-600">
              {brand.description}
            </p>

            <button className="mt-6 rounded-xl bg-sky-900 px-5 py-3 text-white">
              Детальніше
            </button>
          </article>
        ))}
      </div>
    </main>
  );
}