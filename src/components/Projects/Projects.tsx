import type { ReactElement } from "react";
import { projects } from "../../data/portfolio";

export default function Projects(): ReactElement {
  return (
    <section
      id="projects"
      className="bg-slate-900 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Projects
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Featured Work
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="
                rounded-3xl
                border
                border-white/10
                bg-slate-950/70
                p-6
                backdrop-blur-xl
                transition-all
                hover:-translate-y-1
                hover:border-cyan-500/40
              "
            >
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.split(",").map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-full
                      border
                      border-cyan-500/20
                      bg-cyan-500/10
                      px-3
                      py-1
                      text-xs
                      text-cyan-300
                    "
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>

              <p className="mt-5 leading-7 text-slate-400">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}