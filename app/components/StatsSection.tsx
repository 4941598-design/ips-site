export default function StatsSection() {
  const stats = [
    {
      value: "25+",
      label: "років досвіду",
    },
    {
      value: "500+",
      label: "реалізованих проєктів",
    },
    {
      value: "4",
      label: "провідні бренди",
    },
    {
      value: "100%",
      label: "супровід проєкту",
    },
  ];

  return (
    <section className="bg-white pt-16 pb-24">
      <div className="mx-auto max-w-screen-2xl px-6">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm"
            >
              <div className="text-5xl font-bold text-sky-900">
                {stat.value}
              </div>

              <div className="mt-3 text-slate-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}