export default function ProjectsGallery() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto w-full max-w-screen-2xl px-6">
        <h2 className="mx-auto text-center text-5xl font-bold text-sky-900">
          Реалізовані проєкти
        </h2>

        <p className="mt-4 text-center text-lg text-slate-600">
          Рішення для медичних закладів, офісів та освітніх просторів
        </p>

        <div className="mt-12 grid w-full gap-8 md:grid-cols-3">
          <div className="overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <img
              src="/images/projects/hospital-01.jpg"
              alt="Медичний заклад"
              className="h-80 w-full object-cover transition duration-500 hover:scale-105"
            />

            <div className="p-8">
              <h3 className="text-2xl font-bold text-sky-900">
                Медичні заклади
              </h3>

              <p className="mt-2 text-slate-600">
                Гігієнічні та акустичні стельові рішення.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <img
              src="/images/projects/office-01.jpg"
              alt="Офісний простір"
              className="h-80 w-full object-cover transition duration-500 hover:scale-105"
            />

            <div className="p-8">
              <h3 className="text-2xl font-bold text-sky-900">
                Офісні простори
              </h3>

              <p className="mt-2 text-slate-600">
                Акустичний комфорт та продуктивність.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <img
              src="/images/projects/school-01.jpg"
              alt="Освітній заклад"
              className="h-80 w-full object-cover transition duration-500 hover:scale-105"
            />

            <div className="p-8">
              <h3 className="text-2xl font-bold text-sky-900">
              </h3>

              <p className="mt-2 text-slate-600">
                Комфортне середовище для навчання.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}