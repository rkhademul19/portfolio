import { Mail } from "lucide-react";
import { FaEnvelope } from "react-icons/fa";
import { profile } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const links = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: <Mail className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />,
    external: false,
  },
  {
    label: "GitHub",
    value: profile.github.replace(/^https?:\/\//, ""),
    href: profile.github,
    icon: <GithubIcon className="h-5 w-5 text-ink dark:text-white" />,
    external: true,
  },
  {
    label: "LinkedIn",
    value: profile.linkedin.replace(/^https?:\/\//, ""),
    href: profile.linkedin,
    icon: <LinkedinIcon className="h-5 w-5 text-[#0A66C2]" />,
    external: true,
  },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      bare
      icon={<FaEnvelope className="h-6 w-6 text-emerald-500" />}
    >
      <Reveal>
        <p className="text-sm leading-relaxed">
          I&apos;m open to Front-End Developer and Remote Software Engineer
          opportunities. The best way to reach me is by email.
        </p>
      </Reveal>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {links.map(({ label, value, href, icon, external }, i) => (
          <Reveal key={label} delay={i * 0.05}>
            <a
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="card group flex h-full items-center gap-3 p-3.5 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md dark:hover:border-emerald-500/50"
            >
              <span className="shrink-0">{icon}</span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold text-ink dark:text-white">
                  {label}
                </span>
                <span className="block truncate text-[11px] text-slate-500 group-hover:text-emerald-600 dark:text-slate-400 dark:group-hover:text-emerald-400">
                  {value}
                </span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
