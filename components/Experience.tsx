import { CalendarDays, MapPin } from "lucide-react";
import { experience } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative space-y-4">
        {/* timeline line */}
        <span className="absolute bottom-6 left-[11px] top-6 w-0.5 bg-emerald-500/70 sm:left-[23px]" />
        {experience.map((job, i) => (
          <li key={job.company} className="relative pl-9 sm:pl-14">
            <span className="absolute left-[5px] top-6 h-3.5 w-3.5 rounded-full border-[3px] border-white bg-emerald-500 ring-1 ring-emerald-500 sm:left-[17px] dark:border-[#0b1120]" />
            <Reveal delay={i * 0.05}>
              <article className="card p-5 transition hover:shadow-md">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="text-base font-semibold text-ink sm:text-lg dark:text-white">
                    {job.role}{" "}
                    <span className="font-medium text-emerald-600 dark:text-emerald-400">
                      — {job.company}
                    </span>
                  </h3>
                  <p className="flex shrink-0 items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400">
                    <CalendarDays className="h-4 w-4" />
                    {job.period}
                  </p>
                </div>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                  <MapPin className="h-3.5 w-3.5" />
                  {job.location}
                </p>
                <ul className="mt-3 space-y-1 text-sm">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-2.5">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-ink dark:bg-slate-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
