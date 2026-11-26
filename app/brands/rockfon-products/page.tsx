const products = [
  {
    name: "Rockfon Sonar",
    image: "/images/products/rockfon/rockfon-sonar.jpg",
    link: "/products/rockfon-sonar",
  },
  {
    name: "CleanSpace Essential",
    image: "/images/products/rockfon/cleanspace-essential.jpg",
    link: "/products/cleanspace-essential",
  },
  {
    name: "Rockfon Eclipse",
    image: "/images/products/rockfon/rockfon-eclipse.jpg",
    link: "/products/rockfon-eclipse",
  },
  {
    name: "Rockfon Blanka dB",
    image: "/images/products/rockfon/rockfon-blanka-db.jpg",
    link: "/products/rockfon-blanka-db",
  },
  {
    name: "Rockfon Eclipse Colour",
    image: "/images/products/rockfon/rockfon-eclipse-colour.jpg",
    link: "/products/rockfon-eclipse-colour",
  },
  {
    name: "Rockfon Industrial",
    image: "/images/products/rockfon/rockfon-industrial.jpg",
    link: "/products/rockfon-industrial",
  },
  {
    name: "Rockfon Contour",
    image: "/images/products/rockfon/rockfon-contour.jpg",
    link: "/products/rockfon-contour",
  },
  {
    name: "Rockfon Color-all",
    image: "/images/products/rockfon/rockfon-color-all.jpg",
    link: "/products/rockfon-color-all",
  },
];
export default function RockfonProductsPage() {
  return (
    <main className="bg-white">
      <section className="bg-slate-900 py-32 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
            ROCKFON
          </p>

          <h1 className="mt-3 text-5xl font-bold lg:text-6xl">
            Каталог Rockfon
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Акустичні, гігієнічні та дизайнерські стельові рішення Rockfon.
          </p>
        </div>
      </section>
      <section className="py-20">
  <div className="mx-auto max-w-7xl px-6">

    <h2 className="mb-12 text-center text-3xl font-bold text-sky-900">
      Продукція Rockfon
    </h2>

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
  {products.map((product) => (
    <a
      key={product.name}
      href={product.link}
      className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      <img
        src={product.image}
        alt={product.name}
        className="h-64 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold text-sky-900">
          {product.name}
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