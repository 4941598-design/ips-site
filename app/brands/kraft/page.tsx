export default function KraftPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-5xl font-bold text-sky-900">
        Kraft
      </h1>

      <p className="mt-6 max-w-4xl text-lg text-slate-600">
        Kraft пропонує сучасні архітектурні металеві
        рішення для стель, фасадів та інтер'єрів.
        Системи поєднують довговічність, сучасний
        дизайн та широкі можливості для архітекторів.
      </p>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold">
          Основні напрямки
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-3xl border p-6">
            <h3 className="text-xl font-semibold">
              Металеві стелі
            </h3>

            <p className="mt-3 text-slate-600">
              Надійні та довговічні рішення для
              комерційних і громадських об'єктів.
            </p>
          </div>

          <div className="rounded-3xl border p-6">
            <h3 className="text-xl font-semibold">
              Рейкові системи
            </h3>

            <p className="mt-3 text-slate-600">
              Сучасні архітектурні рішення для
              інтер'єрів та громадських просторів.
            </p>
          </div>

          <div className="rounded-3xl border p-6">
            <h3 className="text-xl font-semibold">
              Архітектурна сітка
            </h3>

            <p className="mt-3 text-slate-600">
              Декоративні та функціональні рішення
              для стель і фасадів.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold">
          Сфери застосування
        </h2>

        <ul className="mt-6 space-y-3 text-lg text-slate-600">
          <li>• Бізнес-центри</li>
          <li>• Торговельні центри</li>
          <li>• Аеропорти</li>
          <li>• Ресторани та готелі</li>
          <li>• Громадські простори</li>
        </ul>
      </section>
    </main>
  );
}