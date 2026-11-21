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
    <section className="bg-slate-50 py-56">
      <div className="mx-auto max-w-screen-2xl px-6">
        <h2 className="text-center text-5xl font-bold text-sky-900">
          Популярні рішення
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-slate-600">
          Найпопулярніші системи для акустики, освітлення та стельових рішень
        </p>

        <div className="mt-16 flex justify-center">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.name}
                className="group w-[380px] rounded-3xl border border-slate-200 bg-white p-10 shadow-lg transition-all duration-500 hover:-translate-y-4 hover:border-sky-300 hover:shadow-2xl"
              >
                <h3 className="text-2xl font-bold text-sky-900">
                  {product.name}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {product.type}
                </p>

                <div className="mt-6 flex items-center font-semibold text-sky-700">
                  Детальніше
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}