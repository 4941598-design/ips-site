export default function StatsSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-6 py-5">
        <div className="grid gap-8 text-center md:grid-cols-3">
          <div>
            <div className="text-4xl font-bold text-sky-900">
              25+
            </div>
            <p className="mt-2 text-slate-600">
              років досвіду
            </p>
          </div>

          <div>
            <div className="justify-self-start"></div>
            <div className="text-4xl font-bold text-sky-900">
              1000+
            </div>
            <p className="mt-2 text-slate-600">
              реалізованих проєктів
            </p>
          </div>

          <div>
            <div className="text-4xl font-bold text-sky-900">
              3
            </div>
            <p className="mt-2 text-slate-600">
              ключові напрямки
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}