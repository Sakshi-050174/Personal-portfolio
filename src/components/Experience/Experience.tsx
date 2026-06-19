import type { ReactElement } from "react";
import { experiences } from "../../data/portfolio";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience(): ReactElement {
  return (
    <section
      id="experience"
      className="bg-slate-900 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Experience
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Leadership & Impact
          </h2>

          <p className="mt-5 text-slate-400">
            6+ years delivering enterprise applications and leading
            frontend initiatives.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          {experiences.map((item) => (
            <article
              key={`${item.company}-${item.period}`}
              className="
                rounded-3xl
                border
                border-white/10
                bg-slate-950/70
                p-6
                backdrop-blur-xl
                transition
                hover:border-cyan-500/40
              "
            >
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                {item.role}
              </h3>

              <div className="mt-4 flex flex-col gap-3 text-sm sm:flex-row sm:justify-between">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Briefcase size={16} />
                  {item.company}
                </div>

                <div className="flex items-center gap-2 text-slate-400">
                  <Calendar size={16} />
                  {item.period}
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />

                    <span className="leading-7 text-slate-300">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}