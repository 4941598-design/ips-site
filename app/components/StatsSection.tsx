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
    <section className="bg-white pt-24 pb-20">
      <div className="mx-auto max-w-screen-2xl px-6">
        <h2 className="text-center text-4xl font-bold text-sky-900">
          Рішення для об'єктів
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
          Підбираємо оптимальні рішення для різних типів просторів
        </p>

        <div className="mt-12 flex justify-center">
          <div className="grid gap-8 md:grid-cols-3">
            {solutions.map((solution) => (
              <article
                key={solution.title}
                className="group w-[380px] overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-sky-900">
                    {solution.title}
                  </h3>

                  <p className="mt-3 text-slate-600">
                    {solution.description}
                  </p>

                  <div className="mt-6 flex items-center font-semibold text-sky-700">
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
      </div>
    </section>
  );
}