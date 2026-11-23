export default function BrandsPage() {
  const brands = [
    {
      name: "Rockfon",
      logo: "/images/brands/rockfon logo.png",
      description:
        "Світовий виробник акустичних стельових систем та архітектурної акустики.",
      link: "/brands/rockfon",
    },
    {
      name: "Knauf Ceiling Solutions",
      logo: "/images/brands/Knauf Ceiling Solutions Logo.png",
      description:
        "AMF, Thermatex, Topiq та професійні стельові рішення для офісів, медицини та освіти.",
      link: "/brands/knauf",
    },
    {
      name: "Heradesign",
      logo: "/images/brands/Heradesign Logo.jpg",
      description:
        "Панелі з деревного волокна для акустичного комфорту та сучасного дизайну.",
      link: "/brands/heradesign",
    },
    {
      name: "Kraft",
      logo: "/images/brands/KRAFT Logo.png",
      description:
        "Архітектурні металеві рейки, стелі та дизайнерські металеві рішення.",
      link: "/brands/kraft",
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 py-32 text-white">
        <div className="mx-auto max-w-screen-2xl px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
            ПАРТНЕРИ IPS 
          </p>

          <h1 className="mt-4 text-6xl font-bold lg:text-8xl">
            Бренди
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-xl text-slate-300">
            Ми співпрацюємо з провідними європейськими виробниками
            стельових систем, архітектурної акустики та спеціалізованих
            рішень для громадських просторів.
          </p>
        </div>
      </section>

      {/* Brands */}
      <section className="py-28">
        <div className="mx-auto max-w-screen-2xl px-8">
          <div className="grid gap-10 md:grid-cols-2">
            {brands.map((brand) => (
              <article
                key={brand.name}
                className="rounded-3xl border border-slate-200 bg-white p-12 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-72 items-center justify-center overflow-hidden rounded-2xl bg-slate-50 p-8">
                  <img
  src={brand.logo}
  alt={brand.name}
  className={
    brand.name === "Knauf Ceiling Solutions"
      ? "max-h-44 w-auto object-contain"
      : brand.name === "Heradesign"
      ? "max-h-52 w-auto scale-[2.2] object-contain"
      : brand.name === "Kraft"
      ? "max-h-52 w-auto scale-[2.2] object-contain"
      : brand.name === "Rockfon"
      ? "max-h-40 w-auto scale-125 object-contain"
      : "max-h-40 w-auto object-contain"
  }
/>
                </div>

                <h2 className="mt-10 text-4xl font-bold text-sky-900">
                  {brand.name}
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  {brand.description}
                </p>

                <a
                  href={brand.link}
                  className="mt-8 inline-flex rounded-xl bg-sky-900 px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-sky-800"
                >
                  Детальніше
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-32 bg-sky-900 py-28 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-5xl font-bold">
            Допоможемо підібрати бренд під ваш проєкт
          </h2>

          <p className="mt-8 text-xl text-slate-200">
            Консультуємо щодо вибору акустичних, стельових та архітектурних
            рішень для офісів, медичних закладів, освітніх установ та
            комерційних просторів.
          </p>

          <a
            href="/contacts"
            className="mt-12 inline-flex rounded-2xl bg-amber-500 px-10 py-5 text-lg font-bold text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:bg-amber-400"
          >
            Отримати консультацію
          </a>
        </div>
      </section>
    </main>
  );
}