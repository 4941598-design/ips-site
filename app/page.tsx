import SolutionsSection from "./components/SolutionsSection"
import ProductsSection from "./components/ProductsSection"
import StatsSection from "./components/StatsSection"
import BrandsSection from "./components/BrandsSection"
import ProjectsGallery from "./components/ProjectsGallery"
export default function HomePage() {
  return (
    <main>
      <section
  className="relative overflow-hidden text-white"
  style={{
    backgroundImage: "url('/images/projects/hero.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
        <div className="mx-auto max-w-7xl px-6 py-48 lg:py-64">
          <p className="text-sm uppercase tracking-widest">
            Працюємо з 1997 року
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-tight lg:text-7x2">
Стелі.
Акустика.
Освітлення.  
  
  
</h1>

          <p className="mt-6 max-w-3xl text-xl">
            Комплексні рішення для лікарень,
            офісів, навчальних закладів,
            ресторанів та ТРЦ.
          </p>

          <p className="mt-8 text-lg font-semibold">
            Рішення для кофортного простору
          </p>
          <div className="absolute inset-0 bg-slate-900/60"></div>

          <div className="mt-10 flex gap-4">
            <button className="rounded-xl bg-amber-500 px-8 py-4 text-black">
              Отримати консультацію
            </button>

            <button className="rounded-xl border border-white px-6 py-3">
              Надіслати проєкт
            </button>
          </div>
        </div>
      </section>
<StatsSection />
<ProjectsGallery />
      <SolutionsSection />

      <ProductsSection />

      <section className="py-20">
        <div className="mx-auto max-w-screen-2xl px-8">
          <h2 className="text-5xl font-bold text-sky-900">
  Про компанію Buddecor
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