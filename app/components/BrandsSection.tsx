export default function BrandsSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-5xl font-bold text-sky-900">
          Наші бренди
        </h2>

        <p className="mt-4 text-center text-lg text-slate-600">
          Працюємо з провідними європейськими виробниками
          стельових систем та акустичних рішень.
        </p>

        <div className="mt-12 grid items-center gap-12 md:grid-cols-3">
          <div className="flex justify-center">
            <img
              src="/images/brands/rockfon.jpg"
              alt="Rockfon"
              className="h-24 object-contain"
            />
          </div>

          <div className="flex justify-center">
            <h3 className="text-4xl font-bold text-slate-700">
              Heradesign
            </h3>
          </div>

          <div className="flex justify-center">
            <h3 className="text-4xl font-bold text-slate-700">
              KRAFT
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}