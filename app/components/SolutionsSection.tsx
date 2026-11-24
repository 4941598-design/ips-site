export default function SolutionsSection() {
  const solutions = [
    {
      title: "Медичні заклади",
      description:
        "Гігієнічні стелі та спеціалізовані рішення для лікарень і медичних центрів.",
      image: "/images/solutions/medical-solution.jpg",
    },
    {
      title: "Офісні простори",
      description:
        "Акустичний комфорт, продуктивність та сучасний дизайн робочого середовища.",
      image: "/images/solutions/office-solution.jpg",
    },
    {
      title: "Освітні установи",
      description:
        "Комфортне середовище для навчання, концентрації та спілкування.",
      image: "/images/solutions/education-solution.jpg",
    },
    {
      title: "Ресторанний бізнес",
      description:
        "Стелі й акустика для затишної атмосфери та якісного сервісу.",
      image: "/images/solutions/restaurant.jpg",
    },
    {
      title: "Торгові центри",
      description:
        "Металеві та дизайнерські стельові системи для громадських просторів.",
      image: "/images/solutions/mall.jpg",
    },
    {
      title: "Архітекторам і дизайнерам",
      description:
        "Технічна підтримка, BIM-моделі, специфікації та консультації.",
      image: "/images/solutions/architect.jpg",
    },
  ];

  return (
    <section className="bg-slate-50 pt-32 pb-24">
      <div className="mx-auto max-w-screen-2xl px-6">
        <h2 className="text-center text-5xl font-bold text-sky-900">
          Рішення для об'єктів
        </h2>

        <p className="mt-4 text-center text-lg text-slate-600">
  Підбираємо оптимальні рішення для різних типів просторів
</p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((solution) => (
            <article
              key={solution.title}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <img
                src={solution.image}
                alt={solution.title}
                className="h-44 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold text-sky-900">
                  {solution.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {solution.description}
                </p>

                <div className="mt-5 flex items-center font-semibold text-sky-700">
                  Детальніше
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}