export default function SolutionsSection() {
  const solutions = [
    {
      title: "Лікарні",
      description: "Гігієнічні стелі та медичні рішення",
    },
    {
      title: "Офіси",
      description: "Акустичний комфорт та продуктивність",
    },
    {
      title: "Освіта",
      description: "Комфортне середовище для навчання",
    },
    {
      title: "Ресторани",
      description: "Акустика та атмосфера",
    },
    {
      title: "ТРЦ",
      description: "Металеві стельові системи",
    },
    {
      title: "Архітекторам",
      description: "Документація та технічна підтримка",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold">
          Рішення для об'єктів
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="rounded-2xl bg-white p-6 shadow"
            >
              <h3 className="text-xl font-semibold">
                {solution.title}
              </h3>

              <p className="mt-3 text-slate-600">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}