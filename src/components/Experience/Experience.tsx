import { experiences } from "../../data/portfolio"

export default function Experience() {
  return (
    <section id="experience" className="mt-10 bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-cyan-400">
          Experience
        </h2>

        <div className="mt-12 space-y-8">
          {experiences.map((item) => (
            <div
              key={item.company}
              className="rounded-2xl border border-white/10 bg-slate-950 p-8"
            >
              <h3 className="text-2xl font-semibold">
                {item.role}
              </h3>

              <p className="mt-2 text-cyan-400">
                {item.company} • {item.period}
              </p>

             <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}