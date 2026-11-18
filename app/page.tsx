import SolutionsSection from "./components/SolutionsSection"
import ProductsSection from "./components/ProductsSection"
import StatsSection from "./components/StatsSection"
import BrandsSection from "./components/BrandsSection"
export default function HomePage() {
  return (
    <main>
      <section className="bg-sky-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-32 lg:py-40">
          <p className="text-sm uppercase tracking-widest">
            Працюємо з 1997 року
          </p>

          <h1 className="mt-6 text-6xl font-bold leading-tight lg:text-8xl">
  Стелі.
  <br />
  Акустика.
  <br />
  Освітлення.
</h1>

          <p className="mt-6 max-w-3xl text-xl">
            Комплексні рішення для лікарень,
            офісів, навчальних закладів,
            ресторанів та ТРЦ.
          </p>

          <p className="mt-8 text-lg font-semibold">
            Простір. Комфорт. Рішення.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="rounded-xl bg-amber-500 px-6 py-3 text-black">
              Отримати консультацію
            </button>

            <button className="rounded-xl border border-white px-6 py-3">
              Надіслати проєкт
            </button>
          </div>
        </div>
      </section>
<StatsSection />
      <SolutionsSection />

      <ProductsSection />
<BrandsSection />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-bold">
            Про компанію IPS
          </h2>

          <p className="mt-6 max-w-3xl text-lg text-slate-600">
            Ми допомагаємо реалізовувати сучасні простори
            за допомогою стельових систем, архітектурної
            акустики та освітлення.
          </p>
        </div>
      </section>
    </main>
  );
}