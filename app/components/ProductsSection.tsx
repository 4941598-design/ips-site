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
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold">
          Популярні рішення
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-sky-300 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-sky-900">
                {product.name}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {product.type}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}