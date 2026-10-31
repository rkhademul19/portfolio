import { ArrowUpRight, BriefcaseBusiness, Laptop, Plane, ShoppingCart } from "lucide-react";
import { projects } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";

const iconStyles = {
  plane: { Icon: Plane, bg: "from-sky-500 to-blue-600" },
  cart: { Icon: ShoppingCart, bg: "from-emerald-400 to-emerald-600" },
  laptop: { Icon: Laptop, bg: "from-violet-500 to-purple-600" },
  briefcase: { Icon: BriefcaseBusiness, bg: "from-amber-400 to-orange-500" },
};

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, i) => {
          const { Icon, bg } = iconStyles[project.icon];
          return (
            <Reveal key={project.name} delay={i * 0.05}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card group flex h-full flex-col p-5 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md dark:hover:border-emerald-500/50"
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${bg} shadow-sm`}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink dark:text-white">
                      {project.name}
                    </h3>
                    <p className="mt-1.5 text-sm leading-snug">
                      {project.description}
                    </p>
                  </div>
                </div>
                <p className="mt-auto flex items-center gap-1 pt-5 text-sm text-blue-700 group-hover:underline dark:text-sky-400">
                  {project.url}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </p>
              </a>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
