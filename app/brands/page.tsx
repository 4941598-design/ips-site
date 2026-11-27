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
      logo: "/images/brands/Heradesign LOGO.jpg",
      description:
        "Панелі з деревного волокна для акустичного комфорту та сучасного дизайну.",
      link: "/brands/heradesign",
    },
    {
      name: "Kraft",
      logo: "/images/brands/KRAFT Logo.jpg",
      description:
        "Архітектурні металеві рейки, стелі та дизайнерські металеві рішення.",
      link: "/brands/kraft",
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero */}
<section className="bg-slate-900 py-32 text-white">
  <div className="mx-auto max-w-4xl px-6 text-center xl:relative xl:left-96">
    <div className="flex flex-col items-center text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
        ПАРТНЕРИ IPS
      </p>

      <h1 className="mt-3 text-5xl font-bold lg:text-6xl">
        Бренди
      </h1>

      <p className="mt-6 max-w-3xl text-center text-lg leading-8 text-slate-300">
        Ми співпрацюємо з провідними європейськими виробниками
        стельових систем, архітектурної акустики та спеціалізованих
        рішень для громадських просторів.
      </p>
    </div>
  </div>
</section>

      {/* Brands */}
      <section className="py-12">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {brands.map((brand) => (
              <a
  key={brand.name}
  href={brand.link}
  className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
>

                <div className="flex h-32 items-center justify-center overflow-hidden rounded-2xl bg-slate-50 p-4">
                  <img
  src={brand.logo}
  alt={brand.name}
  className={
    brand.name === "Knauf Ceiling Solutions"
      ? "max-h-28 w-auto object-contain"
      : brand.name === "Heradesign"
  ? "max-h-24 w-auto scale-[1.8] object-contain"
      : brand.name === "Kraft"
  ? "max-h-24 w-auto scale-[1.8] object-contain"
      : brand.name === "Rockfon"
      ? "max-h-24 w-auto scale-125 object-contain"
      : "max-h-24 w-auto object-contain"
  }
/>
                </div>

                

                <p className="mt-3 text-base leading-7 text-slate-600">
                  {brand.description}
                </p>

                
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      
    </main>
  );
}