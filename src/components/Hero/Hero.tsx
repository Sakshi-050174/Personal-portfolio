import { motion } from "framer-motion";
import type { ReactElement } from "react";
import  myResume from "../../assets/Sakshi_Gupta_Lead_Frontend_Resume.pdf"

export default function Hero(): ReactElement {
  const handleScrollToId = (id: string): void => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="
        flex
        min-h-screen
        items-center
        bg-slate-900
        px-4
        pt-24
        pb-16
        sm:px-6
        lg:px-8
      "
    >
      <div className="mx-auto max-w-7xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            max-w-5xl
            text-4xl
            font-bold
            leading-tight
            text-white
            sm:text-5xl
            lg:text-7xl
          "
        >
          Lead Frontend Engineer
          <span className="mt-2 block text-cyan-400">
            Designing performant and scalable web experiences
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="
            mt-6
            max-w-3xl
            text-base
            leading-8
            text-slate-400
            sm:text-lg
          "
        >
          I build enterprise-grade frontend applications, design
          systems, and AI-powered products with React and TypeScript.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <button
            onClick={() => handleScrollToId("projects")}
            className="
              rounded-xl
              bg-cyan-500
              px-6
              py-3
              font-semibold
              text-slate-950
              transition
              hover:bg-cyan-400
            "
          >
            View Projects
          </button>

          <a
            href={myResume}
            download="Sakshi_gupta_lead_frontend_resume.pdf"
          >
            <button
              className="
                w-full
                rounded-xl
                border
                border-cyan-500
                px-6
                py-3
                font-semibold
                text-cyan-400
                transition
                hover:bg-cyan-500/10
                sm:w-auto
              "
            >
              Download Resume
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}