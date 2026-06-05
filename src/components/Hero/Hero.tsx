import { motion } from 'framer-motion'

export default function Hero() {
    const handleScrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="flex min-h-screen items-center px-6">
      <div className="mx-auto max-w-7xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold leading-tight md:text-7xl"
        >
          Lead Frontend Engineer
        </motion.h1>
         <p className="mt-6 max-w-3xl text-lg text-slate-400">
          Building scalable React and Angular applications with
          modern frontend architecture, micro-frontends, and
          enterprise-grade UI systems.
        </p>

        <div className="mt-8 flex gap-4">
          <button onClick={() => handleScrollToId("projects")} className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black">
            View Projects
          </button>

          <button className="rounded-xl border border-cyan-500 px-6 py-3 text-cyan-400">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  )
}