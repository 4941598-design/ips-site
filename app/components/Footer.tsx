export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-screen-2xl px-6 py-20">
        <div className="flex flex-col items-center text-center">
          <img
  src="/images/logo/ips-logo-full.png"
  alt="IPS"
  className="h-48 w-auto"
  loading="lazy"
/>

          <h2 className="mt-8 text-4xl font-bold tracking-tight">
            IPS 
          </h2>

          <p className="mt-4 text-lg text-slate-300">
            Стелі • Акустика • Освітлення
          </p>

          <p className="mt-6 text-slate-400">
            Працюємо з 1997 року
          </p>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            Комплексні рішення для лікарень, офісів,
            освітніх закладів, ресторанів та ТРЦ.
          </p>

          <div className="mt-12 h-px w-48 bg-slate-700" />

          <p className="mt-8 text-sm text-slate-500">
            © {new Date().getFullYear()} IPS. Всі права захищені.
          </p>
        </div>
      </div>
    </footer>
  );
}