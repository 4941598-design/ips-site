export default function StatsSection() {
  const stats = [
    {
      value: "25+",
      label: "років досвіду",
    },
    {
      value: "700+",
      label: "реалізованих проєктів",
    },
    {
      value: "3",
      label: "ключові напрямки",
    },
  ];

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-screen-2xl px-6">
        <div className="flex justify-center">
          <div className="grid gap-12 text-center md:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label}>
                <div className="text-6xl font-bold text-sky-900">
                  {item.value}
                </div>

                <p className="mt-3 text-lg text-slate-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}