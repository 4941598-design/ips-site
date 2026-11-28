export default function ProductsSection() {
  const products = [
  {
    name: "Rockfon",
    type: "Акустичні та стельові рішення",
    color: "bg-sky-100",
    link: "/brands/rockfon-products",
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
  link: "/brands/kraft-products",
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
  href={product.link}
                key={product.name}
                className="group flex h-[140px] w-[380px] flex-col items-center justify-center rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:border-sky-300 hover:shadow-2xl active:translate-y-1 active:shadow-md"
              >
                

                <h3 className="text-3xl font-bold text-sky-900 transition-colors duration-300 group-hover:text-sky-700">
                  {product.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
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