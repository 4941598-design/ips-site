export default function SolutionsSection() {
  const solutions = [
    {
      title: "Медичні заклади",
              
      image: "/images/solutions/medical-solution.jpg",
    },
    {
      title: "Офісні простори",
      
      image: "/images/solutions/office-solution.jpg",
    },
    {
      title: "Освітні установи",
      
      image: "/images/solutions/education-solution.jpg",
    },
    {
      title: "Ресторанний бізнес",
      
      image: "/images/solutions/restaurant.jpg",
    },
    {
      title: "Торгові центри",
      
      image: "/images/solutions/mall.jpg",
    },
    {
      title: "Допомога архітекторам і дизайнерам",
      
      image: "/images/solutions/architect.jpg",
    },
  ];

  return (
    <section className="bg-slate-50 pt-32 pb-24">
      <div className="mx-auto max-w-screen-2xl px-6">
        <h2 className="text-center text-5xl font-bold text-sky-900">
  Професійні рішення
</h2>

        <p className="mt-4 text-center text-lg text-slate-600">
  Ідеї для комерційних, медичних та громадських просторів
</p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((solution) => (
            <article
  key={solution.title}
  className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
>
              <img
                src={solution.image}
                alt={solution.title}
                className="h-44 w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-all duration-300 hover:bg-black/20">
  <h3 className="px-4 text-center text-3xl font-bold text-white drop-shadow-lg">
    {solution.title}
  </h3>
</div>

              
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}