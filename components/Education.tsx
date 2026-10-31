import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <Section id="education" title="Education" bare>
      <Reveal>
        <div className="card flex gap-4 p-5">
          <GraduationCap className="mt-0.5 h-7 w-7 shrink-0 text-ink dark:text-slate-200" />
          <div className="flex-1">
            <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-4">
              <h3 className="font-semibold text-ink dark:text-white">
                {education.degree}
              </h3>
              <p className="shrink-0 text-sm text-slate-600 dark:text-slate-400">
                {education.period}
              </p>
            </div>
            <p className="mt-1 text-sm">{education.institution}</p>
            <p className="mt-1 text-sm">CGPA: {education.cgpa}</p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
