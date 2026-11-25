export default function ProductsPage() {
  const products = [
    {
      name: "Rockfon Sonar",
      category: "Акустичні стелі",
    },
    {
      name: "Rockfon MediCare",
      category: "Медичні стелі",
    },
    {
      name: "Rockfon Eclipse",
      category: "Архітектурна акустика",
    },
    {
      name: "Heradesign",
      category: "Деревоволокнисті панелі",
    },
    {
      name: "Clip-In",
      category: "Металеві стелі",
    },
    {
      name: "Kraft Mesh",
      category: "Архітектурна металева сітка",
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 py-32 text-white">
  <div className="mx-auto max-w-4xl px-6 text-center relative left-96">
    <div className="flex flex-col items-center text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
        IPS
      </p>

      <h1 className="mt-3 text-5xl font-bold lg:text-6xl">
        Продукція
      </h1>

      <p className="mt-6 max-w-3xl text-center text-lg leading-8 text-slate-300">
        Рішення для сучасних комерційних, медичних та громадських просторів.
      </p>
    </div>
  </div>
</section>

      {/* Products */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.name}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-xl"
              >
                <h2 className="text-2xl font-semibold">
                  {product.name}
                </h2>

                <p className="mt-3 text-slate-600">
                  {product.category}
                </p>

                <button className="mt-6 rounded-xl bg-sky-900 px-5 py-3 text-white">
                  Детальніше
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}