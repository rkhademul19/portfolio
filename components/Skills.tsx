import type { IconType } from "react-icons";
import {
  SiAxios,
  SiBitbucket,
  SiBootstrap,
  SiCss,
  SiDjango,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiReactquery,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
} from "react-icons/si";
import { ArrowDownUp, Boxes, Cloud } from "lucide-react";
import { skills } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";

type IconDef = { Icon: IconType | typeof Boxes; className: string };

const skillIcons: Record<string, IconDef> = {
  "React.js": { Icon: SiReact, className: "text-[#149ECA] dark:text-[#61DAFB]" },
  "Next.js": { Icon: SiNextdotjs, className: "text-black dark:text-white" },
  TypeScript: { Icon: SiTypescript, className: "text-[#3178C6]" },
  JavaScript: { Icon: SiJavascript, className: "text-[#F7DF1E] bg-black rounded-[3px]" },
  HTML5: { Icon: SiHtml5, className: "text-[#E34F26]" },
  CSS3: { Icon: SiCss, className: "text-[#1572B6] dark:text-[#3b9be6]" },
  "Tailwind CSS": { Icon: SiTailwindcss, className: "text-[#06B6D4]" },
  "Material UI": { Icon: SiMui, className: "text-[#007FFF]" },
  Bootstrap: { Icon: SiBootstrap, className: "text-[#7952B3]" },
  "React Query": { Icon: SiReactquery, className: "text-[#FF4154]" },
  "Context API": { Icon: Boxes, className: "text-slate-500 dark:text-slate-400" },
  "REST APIs": { Icon: Cloud, className: "fill-slate-400 text-slate-500 dark:fill-slate-500 dark:text-slate-400" },
  Fetch: { Icon: ArrowDownUp, className: "text-emerald-600 dark:text-emerald-400" },
  Axios: { Icon: SiAxios, className: "text-[#5A29E4] dark:text-[#8b6cf0]" },
  Git: { Icon: SiGit, className: "text-[#F05032]" },
  Bitbucket: { Icon: SiBitbucket, className: "text-[#0052CC] dark:text-[#4c8dff]" },
  Jest: { Icon: SiJest, className: "text-[#C21325]" },
  "React Testing Library": { Icon: SiTestinglibrary, className: "text-[#E33332]" },
  Python: { Icon: SiPython, className: "text-[#3776AB]" },
  Django: { Icon: SiDjango, className: "text-[#0C4B33] dark:text-[#44B78B]" },
  "Node.js": { Icon: SiNodedotjs, className: "text-[#5FA04E]" },
  MySQL: { Icon: SiMysql, className: "text-[#4479A1]" },
};

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {skills.map((skill, i) => {
          const def = skillIcons[skill];
          return (
            <Reveal key={skill} delay={Math.min(i * 0.02, 0.3)}>
              <li className="card flex h-full items-center gap-3 px-3.5 py-3 text-sm font-medium text-ink transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md dark:text-slate-200 dark:hover:border-emerald-500/50">
                {def && <def.Icon className={`h-6 w-6 shrink-0 ${def.className}`} />}
                {skill}
              </li>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
