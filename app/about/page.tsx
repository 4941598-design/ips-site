export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-5xl font-bold">
        Про компанію
      </h1>

      <p className="mt-8 text-lg text-slate-600">
        IPS (Buddecor) працює з 1997 року та
        спеціалізується на стельових системах,
        архітектурній акустиці та освітленні.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold">
            Наша місія
          </h2>

          <p className="mt-4 text-slate-600">
            Створювати комфортні, сучасні та
            довговічні простори для людей.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">
            Досвід
          </h2>

          <p className="mt-4 text-slate-600">
            Понад 25 років роботи з офісами,
            медичними центрами, освітніми
            закладами та громадськими об'єктами.
          </p>
        </div>
      </div>
    </main>
  );
}