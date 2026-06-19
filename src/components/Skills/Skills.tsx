import type { ReactElement } from "react";
import { skillGroups } from "../../data/portfolio";

export default function Skills(): ReactElement {
  return (
   <section
  id="skills"
  className="bg-slate-900 px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
>
  <div className="mx-auto max-w-7xl">
    <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
      Skills
    </p>

    <h2 className="mt-4 text-center text-4xl font-bold text-white">
      Technologies & Expertise
    </h2>

    <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {skillGroups.map((group) => (
        <div
          key={group.title}
          className="
            rounded-[28px]
            border
            border-white/10
            bg-slate-950/60
            p-7
            backdrop-blur-xl
            transition-all
            hover:-translate-y-1
            hover:border-cyan-500/30
            hover:shadow-xl
            hover:shadow-cyan-500/5
          "
        >
          <h3 className="text-xl font-semibold text-cyan-400">
            {group.title}
          </h3>

          <div className="mt-6 flex flex-wrap gap-2">
            {group.items.map((skill) => (
              <span
                key={skill}
                className="
                  rounded-full
                  bg-cyan-500/10
                  px-3
                  py-2
                  text-sm
                  text-slate-300
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}