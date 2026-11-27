export default function ProjectsPage() {
  const projects = [
    {
      title: "Медичний центр",
      description: "Гігієнічні стелі та акустичні рішення.",
    },
    {
      title: "Бізнес-центр",
      description: "Акустичні стельові системи для офісів.",
    },
    {
      title: "Освітній заклад",
      description: "Комфортне середовище для навчання.",
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero */}
<section className="bg-slate-900 py-32 text-white">
  <div className="mx-auto max-w-4xl px-6 text-center xl:relative xl:left-96">
    <div className="flex flex-col items-center text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
  НАПРЯМКИ ЗАСТОСУВАННЯ
</p>
      <h1 className="mt-3 text-5xl font-bold lg:text-6xl">
       Галерея
      </h1>
      <p className="mt-6 max-w-3xl text-center text-lg leading-8 text-slate-300">
  Реалізовані рішення для медичних, освітніх, офісних та громадських просторів.
</p>
    
    </div>
  </div>
</section>
<section className="bg-slate-50 py-24">
  <div className="mx-auto max-w-screen-2xl px-6">
    <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
        <img
          src="/images/solutions/medical-solution.jpg"
          alt="Медичні заклади"
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/10">
          <h3 className="px-4 text-center text-3xl font-bold text-white drop-shadow-lg">
            Медичні заклади
          </h3>
        </div>
      </article>
      <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
  <img
    src="/images/solutions/office-solution.jpg"
    alt="Офісні простори"
    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
  />
  <div className="absolute inset-0 flex items-center justify-center bg-black/10">
    <h3 className="px-4 text-center text-3xl font-bold text-white drop-shadow-lg">
      Офісні простори
    </h3>
  </div>
</article>

<article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
  <img
    src="/images/solutions/education-solution.jpg"
    alt="Освітні установи"
    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
  />

  <div className="absolute inset-0 flex items-center justify-center bg-black/10">
    <h3 className="px-4 text-center text-3xl font-bold text-white drop-shadow-lg">
      Освітні установи
    </h3>
  </div>
</article>

<article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
  <img
    src="/images/solutions/restaurant.jpg"
    alt="Ресторанний бізнес"
    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
  />
  <div className="absolute inset-0 flex items-center justify-center bg-black/10">
    <h3 className="px-4 text-center text-3xl font-bold text-white drop-shadow-lg">
      Ресторанний бізнес
    </h3>
  </div>
</article>

<article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
  <img
    src="/images/solutions/mall.jpg"
    alt="Торгові центри"
    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
  />
  <div className="absolute inset-0 flex items-center justify-center bg-black/10">
    <h3 className="px-4 text-center text-3xl font-bold text-white drop-shadow-lg">
      Торгові центри
    </h3>
  </div>
</article>
<article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
  <img
    src="/images/solutions/sport.jpg"
    alt="Спортивні зали"
    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
  />
  <div className="absolute inset-0 flex items-center justify-center bg-black/10">
    <h3 className="px-4 text-center text-3xl font-bold text-white drop-shadow-lg">
      Спортивні зали
    </h3>
  </div>
</article>
    </div>
  </div>
</section>
      {/* <div className="mx-auto mt-12 max-w-screen-2xl px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border border-slate-200 p-6 shadow-sm"
          >
            <h2 className="text-2xl font-semibold">
              {project.title}
            </h2>

            <p className="mt-4 text-slate-600">
              {project.description}
            </p>
          </div>
        ))}
      </div>*/}
    </main>
  );
}