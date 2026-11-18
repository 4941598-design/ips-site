export default function ProductsSection() {
  const products = [
    {
      name: "Rockfon Sonar",
      type: "Акустична стеля для офісів",
    },
    {
      name: "Rockfon MediCare",
      type: "Гігієнічна стеля для лікарень",
    },
    {
      name: "Rockfon Eclipse",
      type: "Архітектурна акустика",
    },
    {
      name: "Heradesign",
      type: "Панелі з деревного волокна",
    },
    {
      name: "Clip-In",
      type: "Металева стельова система",
    },
    {
      name: "Kraft Mesh",
      type: "Архітектурна металева сітка",
    },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold">
          Популярні рішення
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold">
                {product.name}
              </h3>

              <p className="mt-3 text-slate-600">
                {product.type}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}