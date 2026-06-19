import { Mail, ArrowUpRight } from "lucide-react";
import type { ReactElement } from "react";

const LinkedinIcon = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.367 4.267 5.445v6.303zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.919-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.454C23.208 24 24 23.226 24 22.271V1.729C24 .774 23.208 0 22.225 0z" />
  </svg>
);

export default function Contact(): ReactElement {
  const contactItems = [
    {
      title: "Email",
      subtitle: "Drop me a message",
      value: "sakshi.gupta050174@gmail.com",
      href: "mailto:sakshi.gupta050174@gmail.com",
      icon: <Mail size={26} />,
    },
    {
      title: "LinkedIn",
      subtitle: "Let's connect professionally",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/sakshi-gupta-874990361",
      icon: <LinkedinIcon  />,
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="bg-slate-900 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Let's Build Something Meaningful
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400">
            Open to frontend leadership opportunities, consulting,
            freelance collaborations, and building impactful products.
          </p>
        </div>

        {/* Contact Container */}
        <div
          className="
            mt-14
            rounded-[32px]
            border
            border-white/10
            bg-slate-950/60
            p-6
            backdrop-blur-xl
            sm:p-8
            lg:p-10
          "
        >
          <div className="grid gap-6 md:grid-cols-2">
            {contactItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={
                  item.external
                    ? "noopener noreferrer"
                    : undefined
                }
                className="
                  group
                  rounded-3xl
                  border
                  border-white/10
                  bg-slate-900/60
                  p-6
                  transition-all
                  text-center
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-500/40
                  hover:bg-slate-900
                  hover:shadow-xl
                  hover:shadow-cyan-500/10
                "
              >
                <div className="flex items-start justify-between">
                 <div
                  className="
                    mx-auto
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-cyan-500/10
                    text-cyan-400
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  {item.icon}
                </div>

                  <ArrowUpRight
                    size={22}
                    className="
                      text-slate-500
                      transition-all
                      duration-300
                      group-hover:text-cyan-400
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </div>

                <p className="mt-6 text-sm text-slate-400">
                  {item.subtitle}
                </p>

                <h3 className="mt-2 text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 break-all text-slate-300">
                  {item.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}