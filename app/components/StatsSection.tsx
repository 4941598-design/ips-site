export default function StatsSection() {
  return (
    <section className="bg-white pt-16 pb-6">
      <div className="flex justify-center px-6">
        <div className="grid w-full max-w-[1180px] gap-12 text-center md:grid-cols-3">
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