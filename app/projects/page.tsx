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
    <main className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-5xl font-bold">
        Наші проєкти
      </h1>

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