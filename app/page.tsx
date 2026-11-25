import SolutionsSection from "./components/SolutionsSection";
import ProductsSection from "./components/ProductsSection";
import StatsSection from "./components/StatsSection";
import ProjectsGallery from "./components/ProjectsGallery";

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
        <div className="absolute inset-0 bg-slate-900/45" />

        <div className="relative z-10 w-full px-6">
          <div className="flex min-h-[45vh] items-center justify-center">
            <div className="mx-auto max-w-4xl px-6 text-center">
              <p className="mb-20 text-xs font-semibold uppercase tracking-[0.5em] text-slate-300">
  Працюємо з 1997 року
</p>

<div className="mt-8 flex justify-center">
  <img
    src="/images/logo/ips-logo-full.jpg"
    alt="IPS"
    className="h-32 w-auto lg:h-40"
  />
</div>

              {/*<h1 className="mt-6 text-4xl font-bold leading-tight lg:text-6xl">
                Стелі.
                <br />
                Акустика.
                <br />
                Освітлення.
              </h1>*/}

              <p className="mx-auto mt-10 max-w-4xl text-xl leading-9 text-slate-200">
  Комплексні рішення для лікарень, офісів,
  навчальних закладів, ресторанів та ТРЦ.
</p>

<div className="mt-12">
  <div className="mt-8 flex flex-wrap justify-center gap-6">
    <button className="min-w-[260px] rounded-2xl bg-amber-500 px-8 py-4 text-lg font-bold text-slate-900 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-amber-400">
      Отримати консультацію
    </button>

    <button className="min-w-[260px] rounded-2xl border-2 border-white bg-white/15 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-slate-900">
      Надіслати проєкт
    </button>
  </div>
</div>
            </div>
          </div>
        </div>
      </section>

      <StatsSection /> 
<SolutionsSection /> 
<ProductsSection />
<ProjectsGallery />
    </main>
  );
}