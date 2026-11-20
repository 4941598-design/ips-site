export default function SolutionsSection() {
  const solutions = [
    {
      title: "Лікарні",
      description: "Гігієнічні стелі та медичні рішення",
      color: "bg-sky-100",
    },
    {
      title: "Офіси",
      description: "Акустичний комфорт та продуктивність",
      color: "bg-emerald-100",
    },
    {
      title: "Освіта",
      description: "Комфортне середовище для навчання",
      color: "bg-amber-100",
    },
    {
      title: "Ресторани",
      description: "Акустика та атмосфера",
      color: "bg-rose-100",
    },
    {
      title: "ТРЦ",
      description: "Металеві стельові системи",
      color: "bg-violet-100",
    },
    {
      title: "Архітекторам",
      description: "Документація та технічна підтримка",
      color: "bg-cyan-100",
    },
  ];

  return (
    <section className="bg-white py-36">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold text-sky-900">
          Рішення для об'єктів
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-slate-600">
          Підбираємо оптимальні рішення для різних типів просторів
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((solution) => (
            <div
              key={solution.title}
             className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div
                className={`mb-5 h-12 w-12 rounded-xl ${solution.color}`}
              />

              <h3 className="text-2xl font-bold text-sky-900">
                {solution.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {solution.description}
              </p>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}