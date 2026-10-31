/** Soft mint gradient shapes behind the page. Purely decorative. */
export default function Background() {
  const blob =
    "absolute rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-500/10";
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-emerald-50/80 to-transparent dark:from-emerald-500/[0.04]" />
      <div className={`${blob} -right-32 -top-24 h-96 w-96`} />
      <div className={`${blob} -left-40 top-[620px] h-80 w-80`} />
      <div className={`${blob} -right-40 top-[1500px] h-80 w-80`} />
      <div className={`${blob} -left-40 bottom-40 h-96 w-96`} />
      <div className={`${blob} -right-32 bottom-0 h-80 w-80`} />
    </div>
  );
}
