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
  <div className="mx-auto max-w-4xl px-6 text-center xl:relative xl:left-96">
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
             <a
  href="#"
  key={product.name}
  className="
    group
    block
    rounded-3xl
    border
    border-sky-100
    bg-gradient-to-b
    from-sky-100
to-white
    p-7 min-h-[160px]
    shadow-[0_10px_25px_rgba(0,0,0,0.12)]
    transition-all
    duration-200
    hover:-translate-y-2
    hover:shadow-[0_20px_40px_rgba(0,0,0,0.18)]
    active:translate-y-1
    active:shadow-[0_5px_10px_rgba(0,0,0,0.15)]
  "
>
                <h2 className="text-3xl font-bold text-sky-900 transition-colors duration-200 group-hover:text-sky-700">
  {product.name}
</h2>

                <p className="mt-5 text-lg font-medium text-slate-600">
  {product.category}
</p>
</a>
                
              
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}