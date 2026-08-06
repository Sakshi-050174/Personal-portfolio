import type { ReactElement } from "react";
import { GitBranchIcon, ExternalLink, Building2 } from "lucide-react";
import { personalProjects, professionalProjects } from "../../data/portfolio";

export default function Projects(): ReactElement {
  return (
    <section id="projects" className="bg-slate-900 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Projects
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">Featured Work</h2>
        </div>

        {/* PERSONAL PROJECTS */}

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white">Personal Projects</h3>

          <p className="mt-2 text-slate-400">
            Projects built independently to explore modern frontend
            architecture, AI integrations, and scalable application design.
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {personalProjects.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950 transition hover:-translate-y-2 hover:border-cyan-500/50"
              >
                {/* <img
                  src={project.image}
                  alt={project.title}
                  className="h-60 w-full object-cover"
                /> */}

                <div className="p-6">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      project.status === "Completed"
                        ? "bg-green-500/20 text-green-300"
                        : "bg-yellow-500/20 text-yellow-300"
                    }`}
                  >
                    {project.status}
                  </span>

                  <h4 className="mt-4 text-2xl font-semibold text-white">
                    {project.title}
                  </h4>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <p className="mt-5 leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex gap-3">
                    {project.github && (
                      <a
                        href={
                          "https://github.com/Sakshi-050174/" + project.github
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-white transition hover:border-cyan-500"
                      >
                        <GitBranchIcon size={18} />
                        GitHub
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 font-medium text-slate-900 transition hover:bg-cyan-400"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* PROFESSIONAL PROJECTS */}

        <div className="mt-24">
          <h3 className="text-2xl font-bold text-white">
            Professional Experience
          </h3>

          <p className="mt-2 text-slate-400">
            Enterprise products delivered as part of professional software
            engineering roles.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {professionalProjects.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl border border-white/10 bg-slate-950 p-6"
              >
                <div className="flex items-center gap-2 text-cyan-400">
                  <Building2 size={18} />
                  <span className="text-sm">{project.company}</span>
                </div>

                <h4 className="mt-4 text-xl font-semibold text-white">
                  {project.title}
                </h4>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                    >
                      {tech}
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
      </div>
    </section>
  );
}
