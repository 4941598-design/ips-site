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
    <main className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-5xl font-bold">
        Продукція
      </h1>

      <p className="mt-4 text-lg text-slate-600">
        Рішення для сучасних комерційних,
        медичних та громадських просторів.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
    </main>
  );
}