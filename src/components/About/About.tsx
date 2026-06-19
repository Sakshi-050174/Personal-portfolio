import {
  DraftingCompass,
  Users,
  Lightbulb,
} from "lucide-react";
import type { ReactElement } from "react";

const capabilities = [
  {
    title: "Architect",
    icon: DraftingCompass,
  },
  {
    title: "Mentor",
    icon: Users,
  },
  {
    title: "Problem Solver",
    icon: Lightbulb,
  },
];

export default function About(): ReactElement {
  return (
    <section
      id="about"
      className="bg-slate-900 px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-4xl">
        {/* Label */}
        <p className="text-sm text-center font-semibold uppercase tracking-[0.3em] text-cyan-400">
          About
        </p>

        {/* Intro */}
        <p
          className="
            mt-8
            max-w-4xl
            text-2xl
            font-medium
            leading-relaxed
            text-center
            text-white
            sm:text-3xl
          "
        >
          I build scalable frontend platforms and lead teams in
          delivering high-quality digital products.
        </p>

        {/* Capabilities */}
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  flex
                  gap-3
                  rounded-full
                  border
                  border-white/10
                  bg-slate-950/60
                  px-5
                  py-3
                  text-slate-200
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-cyan-500/30
                  hover:bg-cyan-500/10
                "
              >
                <Icon
                  size={18}
                  className="text-cyan-400"
                />

                <span className="font-medium">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Experience */}
        <div className="mt-8 text-center">
          <span
            className="
              inline-flex
              rounded-full
              border
              border-cyan-500/20
              bg-cyan-500/10
              px-4
              py-2
              text-sm
              font-medium
              text-cyan-300
            "
          >
            6+ Years of Frontend Engineering Experience
          </span>
        </div>
      </div>
    </section>
  );
}