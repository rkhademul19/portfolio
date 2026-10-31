"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Download } from "lucide-react";
import { profile } from "@/data/portfolio";
import HeroArt from "./HeroArt";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-6xl px-5 pt-10 pb-8 sm:px-8 sm:pt-14"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/80 px-3.5 py-1.5 text-sm text-ink shadow-sm dark:border-emerald-500/20 dark:bg-slate-900/60 dark:text-slate-200">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            {profile.availability}
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl lg:text-[52px] dark:text-white">
            {profile.name}
            <span className="block bg-gradient-to-r from-emerald-400 to-emerald-700 bg-clip-text text-transparent dark:from-emerald-300 dark:to-emerald-500">
              {profile.role}
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-700 to-emerald-600 px-6 py-3 text-sm font-medium text-white shadow-md shadow-emerald-700/20 transition hover:from-emerald-800 hover:to-emerald-700"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-700 bg-white/70 px-6 py-3 text-sm font-medium text-ink transition hover:bg-emerald-50 dark:border-emerald-500 dark:bg-transparent dark:text-white dark:hover:bg-emerald-500/10"
            >
              <Mail className="h-4 w-4 text-emerald-700 dark:text-emerald-400" />
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              download="Md-Khademul-Islam-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-700 bg-white/70 px-6 py-3 text-sm font-medium text-ink transition hover:bg-emerald-50 dark:border-emerald-500 dark:bg-transparent dark:text-white dark:hover:bg-emerald-500/10"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>

          <div className="mt-7 flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-ink transition hover:opacity-70 dark:text-white"
            >
              <GithubIcon className="h-6 w-6" />
            </a>
            <span className="h-6 w-px bg-slate-200 dark:bg-slate-700" />
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#0A66C2] transition hover:opacity-70"
            >
              <LinkedinIcon className="h-6 w-6" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="hidden md:block"
        >
          <HeroArt />
        </motion.div>
      </div>
    </section>
  );
}
