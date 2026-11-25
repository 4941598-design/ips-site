export default function ProductsSection() {
  const products = [
  {
    name: "Rockfon",
    type: "Акустичні та стельові рішення",
    color: "bg-sky-100",
  },
  {
    name: "Heradesign",
    type: "Панелі з деревного волокна",
    color: "bg-rose-100",
  },
  {
    name: "Clip-In",
    type: "Металеві стельові системи",
    color: "bg-violet-100",
  },
  {
    name: "Knauf CEILING Solutions",
    type: "AMF, Armstrong-професійні стельові рішення",
    color: "bg-orange-100",
  },
  {
    name: "Kraft",
    type: "Архітектурні металеві системи",
    color: "bg-orange-100",
  },
  {
    name: "Освітлення LED",
    type: "Інтегровані світлові рішення",
    color: "bg-yellow-100",
  },
];

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-screen-2xl px-6">
        <h2 className="text-center text-5xl font-bold text-sky-900">
          Каталог продукції
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-slate-600 relative left-100">
  Найпопулярніші системи для акустики,
  <br />
  освітлення та стелі
</p>

        <div className="mt-14 flex justify-center">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <a
  href="#"
                key={product.name}
                className="group block w-[380px] min-h-[180px] rounded-3xl border border-slate-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl active:translate-y-1 active:shadow-md"
              >
                

                <h3 className="text-2xl font-bold text-sky-900">
                  {product.name}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {product.type}
                </p>

                
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}