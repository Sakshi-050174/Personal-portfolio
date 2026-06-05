import { skills } from "../../data/portfolio"

export default function Skills() {
  return (
    <section id="skills" className="mt-10 bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-cyan-400">
          Skills
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-2xl border border-white/10 bg-slate-950 p-5 text-center"
            >{skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}