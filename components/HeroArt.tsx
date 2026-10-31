"use client";

import { motion } from "framer-motion";
import { CodeXml } from "lucide-react";
import { SiNextdotjs, SiReact } from "react-icons/si";

/** Simple code-window illustration with floating tech badges. */
export default function HeroArt() {
  const float = (delay: number) => ({
    animate: { y: [0, -6, 0] },
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const, delay },
  });

  return (
    <div aria-hidden className="relative mx-auto h-[300px] w-[380px] sm:h-[330px] sm:w-[420px]">
      {/* glow + orbit */}
      <div className="absolute inset-8 rounded-full bg-emerald-200/50 blur-3xl dark:bg-emerald-500/15" />
      <div className="absolute left-0 top-10 h-[250px] w-full -rotate-[18deg] rounded-[50%] border-2 border-emerald-200/80 dark:border-emerald-500/25" />
      <span className="absolute left-[6px] top-[118px] h-3 w-3 rounded-full bg-emerald-500" />
      <span className="absolute right-[6px] top-[62px] h-2.5 w-2.5 rounded-full bg-emerald-500" />
      <span className="absolute bottom-[22px] left-[52%] h-3 w-3 rounded-full bg-emerald-500" />
      <span className="absolute left-[34%] top-[26px] h-2 w-2 rounded-full bg-emerald-300" />

      {/* code window */}
      <div className="absolute left-1/2 top-1/2 w-[260px] -translate-x-1/2 -translate-y-1/2 [perspective:900px]">
        <div className="rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 p-3 shadow-2xl shadow-emerald-900/20 [transform:rotateY(-14deg)_rotateX(8deg)] dark:from-slate-800 dark:to-slate-950 dark:ring-1 dark:ring-slate-700">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <div className="mt-2 flex h-[130px] items-center justify-center rounded-lg bg-slate-900/60">
            <CodeXml className="h-20 w-20 text-emerald-400" strokeWidth={2.4} />
          </div>
        </div>
      </div>

      {/* floating badges */}
      <motion.div
        {...float(0)}
        className="absolute left-[42%] top-0 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg dark:bg-slate-800"
      >
        <SiReact className="h-10 w-10 text-[#149ECA] dark:text-[#61DAFB]" />
      </motion.div>
      <motion.div
        {...float(1.2)}
        className="absolute right-0 top-[86px] flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg dark:bg-slate-800"
      >
        <SiNextdotjs className="h-10 w-10 text-black dark:text-white" />
      </motion.div>
      <motion.div
        {...float(0.6)}
        className="absolute bottom-[54px] left-[10px] flex h-16 w-16 items-end justify-end rounded-xl bg-[#3178C6] p-2 text-2xl font-bold leading-none text-white shadow-lg"
      >
        TS
      </motion.div>
    </div>
  );
}
