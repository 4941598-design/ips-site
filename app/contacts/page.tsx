export default function ContactsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 py-48 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center relative left-96">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
            IPS
          </p>

          <h1 className="mt-3 text-5xl font-bold lg:text-6xl">
            Контакти
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Готові відповісти на ваші запитання та допомогти з підбором рішень для вашого проєкту.
          </p>
        </div>
      </section>

      {/* Контактна інформація */}
      <section className="py-20">
  <div className="flex justify-center">
    <img
      src="/images/contacts/contact-card.jpg"
      alt="Контакти IPS"
      className="w-full max-w-5xl rounded-3xl shadow-2xl"
    />
  </div>
</section>
    </main>
  );
}