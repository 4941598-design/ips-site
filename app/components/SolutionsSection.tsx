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
    <section className="bg-white py-56">
      <div className="mx-auto max-w-screen-2xl px-6">
        <h2 className="text-center text-4xl font-bold text-sky-900">
          Рішення для об'єктів
        </h2>

        <p className="mx-auto mt-4 max-w-4xl text-center text-lg text-slate-600">
          Підбираємо оптимальні рішення для різних типів просторів
        </p>

        <div className="mt-16 flex justify-center">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {solutions.map((solution) => (
              <div
                key={solution.title}
                className="group w-[380px] rounded-3xl border border-slate-200 bg-white p-10 shadow-lg transition-all duration-500 hover:-translate-y-4 hover:border-sky-300 hover:shadow-2xl"
              >
                <h3 className="text-2xl font-bold text-sky-900">
                  {solution.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {solution.description}
                </p>

                <div className="mt-6 flex items-center font-semibold text-sky-700">
                  Детальніше
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}