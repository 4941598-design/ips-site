export default function ProjectsGallery() {
  return (
    <section className="bg-slate-50 pt-12 pb-32">
      <div className="mx-auto max-w-screen-2xl px-6">
        <h2 className="text-center text-5xl font-bold text-sky-900">
          Реалізовані проєкти
        </h2>

        <p className="mt-4 text-center text-lg text-slate-600">
          Рішення для медичних закладів, офісів та освітніх просторів
        </p>

        <div className="mt-12 flex justify-center">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Медичні заклади */}
            <div className="group w-[380px] overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl">
              <div className="overflow-hidden">
                <img
                  src="/images/projects/hospital-01.jpg"
                  alt="Медичний заклад"
                  className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-sky-900">
                  Медичні заклади
                </h3>

                <p className="mt-3 text-slate-600">
                  Гігієнічні та акустичні стельові рішення.
                </p>

                <div className="mt-6 flex items-center font-semibold text-sky-700">
                  Детальніше
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </div>

            {/* Офісні простори */}
            <div className="group w-[380px] overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl">
              <div className="overflow-hidden">
                <img
                  src="/images/projects/office-01.jpg"
                  alt="Офісний простір"
                  className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-sky-900">
                  Офісні простори
                </h3>

                <p className="mt-3 text-slate-600">
                  Акустичний комфорт та продуктивність.
                </p>

                <div className="mt-6 flex items-center font-semibold text-sky-700">
                  Детальніше
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </div>

            {/* Освіта */}
            <div className="group w-[380px] overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl">
              <div className="overflow-hidden">
                <img
                  src="/images/projects/school-01.jpg"
                  alt="Освітній заклад"
                  className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-sky-900">
                  Освіта
                </h3>

                <p className="mt-3 text-slate-600">
                  Комфортне середовище для навчання.
                </p>

                <div className="mt-6 flex items-center font-semibold text-sky-700">
                  Детальніше
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}