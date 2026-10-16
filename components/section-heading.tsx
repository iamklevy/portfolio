import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:mb-10 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="mb-3 flex items-center gap-2 font-mono text-[12px] tracking-wider text-muted uppercase">
          <span className="size-1.5 rounded-full bg-accent" />
          {eyebrow}
        </p>
        <h2 className="text-4xl font-medium tracking-[-0.035em] text-balance sm:text-5xl">{title}</h2>
      </div>
      {children && <p className="max-w-sm text-[15px] leading-relaxed text-pretty text-muted">{children}</p>}
    </div>
  );
}

export function Serif({ children }: { children: ReactNode }) {
  return <span className="font-serif font-normal tracking-normal italic">{children}</span>;
}
