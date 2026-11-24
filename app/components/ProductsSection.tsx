export default function ProductsSection() {
  const products = [
    {
      name: "Rockfon Sonar",
      type: "Акустична стеля для офісів",
      color: "bg-sky-100",
    },
    {
      name: "Rockfon MediCare",
      type: "Гігієнічна стеля для лікарень",
      color: "bg-emerald-100",
    },
    {
      name: "Rockfon Eclipse",
      type: "Архітектурна акустика",
      color: "bg-amber-100",
    },
    {
      name: "Heradesign",
      type: "Панелі з деревного волокна",
      color: "bg-rose-100",
    },
    {
      name: "Clip-In",
      type: "Металева стельова система",
      color: "bg-violet-100",
    },
    {
      name: "Kraft Mesh",
      type: "Архітектурна металева сітка",
      color: "bg-cyan-100",
    },
    {
      name: "Kraft GLK",
      type: "Металева касетна стельова система",
      color: "bg-orange-100",
    },
    {
      name: "Kraft Рейкові стелі",
      type: "Сучасні рейкові стелі для громадських просторів",
      color: "bg-orange-200",
    },
    {
      name: "KRAFT LED",
      type: "Інтегровані освітлювальні рішення для стельових систем",
      color: "bg-yellow-100",
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-screen-2xl px-6">
        <h2 className="text-center text-5xl font-bold text-sky-900">
          Популярні рішення
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-slate-600 relative left-100">
  Найпопулярніші системи для акустики,
  <br />
  освітлення та стельових рішень
</p>

        <div className="mt-14 flex justify-center">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.name}
                className="group w-[380px] min-h-[180px] rounded-3xl border border-slate-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`mb-5 h-12 w-12 rounded-xl ${product.color}`}
                />

                <h3 className="text-2xl font-bold text-sky-900">
                  {product.name}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {product.type}
                </p>

                <div className="mt-6 font-semibold text-sky-700">
                  Детальніше →
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}