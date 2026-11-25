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
      <section className="pt-20 pb-20">
  <div className="mx-auto px-6">
    <div className="flex justify-center mt-96">
      <div className="mt-64 w-full max-w-3xl rounded-3xl border border-slate-200 bg-white p-10 shadow-lg">

        <div className="space-y-6 text-lg">

          <p>
            <strong>Телефон:</strong> +380 96 436 19 95
          </p>

          <p>
            <strong>Email:</strong> 4941598@gmail.com
          </p>

          <p>
            <strong>Адреса:</strong> м. Київ
          </p>

        </div>

      </div>
    </div>
  </div>
</section>
    </main>
  );
}