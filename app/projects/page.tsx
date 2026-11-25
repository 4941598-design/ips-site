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
        IPS
      </p>
      <h1 className="mt-3 text-5xl font-bold lg:text-6xl">
      Наші проєкти
      </h1>
    
    </div>
  </div>
</section>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
      </div>
    </main>
  );
}