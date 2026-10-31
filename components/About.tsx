import { CalendarDays, CodeXml, Zap } from "lucide-react";
import { SiReact } from "react-icons/si";
import { about, highlights } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";

const icons = {
  calendar: <CalendarDays className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />,
  code: <CodeXml className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />,
  react: <SiReact className="h-7 w-7 text-[#149ECA] dark:text-[#61DAFB]" />,
  zap: <Zap className="h-7 w-7 fill-emerald-500 text-emerald-500" />,
};

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
        <Reveal>
          <p className="max-w-xl leading-relaxed">{about}</p>
        </Reveal>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {highlights.map((h, i) => (
            <Reveal key={h.label} delay={i * 0.05}>
              <div className="card flex h-full flex-col items-center justify-center px-4 py-5 text-center transition hover:-translate-y-0.5 hover:shadow-md lg:w-[124px]">
                {icons[h.icon]}
                <p className="mt-3 text-xl font-bold leading-tight text-ink dark:text-white">
                  {h.value}
                </p>
                <p className="mt-0.5 text-[13px] leading-snug text-slate-700 dark:text-slate-400">
                  {h.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
