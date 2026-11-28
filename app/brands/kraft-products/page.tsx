const products = [
  {
    name: "KRAFT Clip-In",
    image: "/images/products/kraft/clip-in/KRAFT-Clip-In-1.jpg",
    link: "/products/kraft-clip-in",
  },
  {
    name: "KRAFT Кубоподібна рейка",
    image: "/images/products/kraft/cube-rail/cube.jpg",
    link: "/products/kraft-cube-rail",
  },
  {
    name: "KRAFT Fortis",
    image: "/images/products/kraft/fortis/fortis.jpg",
    link: "/products/kraft-fortis",
  },
  {
    name: "KRAFT Nova",
    image: "/images/products/kraft/nova/nova.jpg",
    link: "/products/kraft-nova",
  },
  {
    name: "KRAFT Grilyato Classic",
    image: "/images/products/kraft/grilyato-classic/grilyato-classic.jpg",
    link: "/products/kraft-grilyato-classic",
  },
  {
    name: "KRAFT Grilyato GLK",
    image: "/images/products/kraft/grilyato-glk/grilyato-glk-1.jpg",
    link: "/products/kraft-grilyato-glk",
  },
  {
    name: "KRAFT Grilyato Pyramid",
    image: "/images/products/kraft/grilyato-pyramid/grilyato-pyramid.jpg",
    link: "/products/kraft-grilyato-pyramid",
  },
  {
    name: "KRAFT LED",
    image: "/images/products/kraft/led/t-led.jpg",
    link: "/products/kraft-led",
  },
  {
    name: "KRAFT Mesh",
    image: "/images/products/kraft/mesh/Mesh.jpg",
    link: "/products/kraft-mesh",
  },
  {
    name: "KRAFT Metal Ceiling Panels",
    image: "/images/products/kraft/metal ceiling panels/panels.jpg",
    link: "/products/kraft-metal-ceiling-panels",
  },
  {
    name: "KRAFT Пластинчаста рейка",
    image: "/images/products/kraft/plate-baffle/plate-baffle.jpg",
    link: "/products/kraft-plate-baffle",
  },
];

export default function KraftProductsPage() {
  return (
    <main className="bg-white">
      <section className="bg-slate-900 py-32 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
            KRAFT
          </p>

          <h1 className="mt-3 text-5xl font-bold lg:text-6xl">
            Каталог KRAFT
          </h1>

          <p className="mt-6 text-lg text-slate-300">
            Металеві стельові системи, грильято, рейкові конструкції,
            освітлення та дизайнерські рішення KRAFT.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-sky-900">
            Продукція KRAFT
          </h2>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => (
              <a
                key={product.name}
                href={product.link}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-64 w-full object-cover"
                />

                <div className="flex min-h-[110px] items-center justify-center p-5">
  <h3 className="text-center text-xl font-bold leading-tight text-sky-900">
    <span className="block">KRAFT</span>
    <span className="block text-lg font-semibold mt-1">
      {product.name.replace("KRAFT ", "")}
    </span>
  </h3>
</div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}