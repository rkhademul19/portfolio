import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  /** Render without the outer container (used for the Education/Contact row). */
  bare?: boolean;
};

export function SectionTitle({
  title,
  icon,
}: {
  title: string;
  icon?: React.ReactNode;
}) {
  return (
    <Reveal>
      <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold tracking-tight text-ink dark:text-white">
        {icon ?? (
          <span className="h-6 w-1.5 rounded-sm bg-emerald-600 dark:bg-emerald-400" />
        )}
        {title}
      </h2>
    </Reveal>
  );
}

export default function Section({ id, title, icon, children, bare }: SectionProps) {
  if (bare) {
    return (
      <section id={id}>
        <SectionTitle title={title} icon={icon} />
        {children}
      </section>
    );
  }
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-10">
      <SectionTitle title={title} icon={icon} />
      {children}
    </section>
  );
}
