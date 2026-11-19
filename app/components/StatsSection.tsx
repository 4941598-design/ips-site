export default function StatsSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 text-center md:grid-cols-3">
          <div>
            <div className="text-6xl font-bold text-sky-900">
              25+
            </div>

            <p className="mt-3 text-lg text-slate-600">
              років досвіду
            </p>
          </div>

          <div>
            <div className="text-6xl font-bold text-sky-900">
              1000+
            </div>

            <p className="mt-3 text-lg text-slate-600">
              реалізованих проєктів
            </p>
          </div>

          <div>
            <div className="text-6xl font-bold text-sky-900">
              3
            </div>

            <p className="mt-3 text-lg text-slate-600">
              ключові напрямки
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}