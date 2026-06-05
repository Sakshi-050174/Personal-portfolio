import { projects } from "../../data/portfolio"

export default function Projects() {
  return (
    <section id="projects" className="mt-10 bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-cyan-400">
          Projects
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-white/10 bg-slate-950 p-6"
            >
              <h3 className="text-2xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-3 text-cyan-400">
                {project.tech}
              </p>

              <p className="mt-4 text-slate-400">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}