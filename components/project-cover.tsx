import Image from "next/image";
import type { Category, Project } from "@/content/projects";

/** A screenshot when the project has one, otherwise generated art tinted by the project's hue. */
export function ProjectCover({
  project,
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  project: Project;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  if (project.image) {
    return (
      <div className={`relative overflow-hidden bg-tile-2 ${className}`}>
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>
    );
  }

  const h = project.hue;
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 15% 0%, oklch(0.78 0.13 ${h}) 0%, transparent 55%),
          radial-gradient(90% 90% at 100% 100%, oklch(0.58 0.17 ${h + 35}) 0%, transparent 60%),
          oklch(0.36 0.09 ${h})`,
      }}
      aria-hidden
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.35) 1px, transparent 0)",
          backgroundSize: "16px 16px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <div className="absolute inset-0 grid place-items-center p-8 text-white transition duration-700 ease-out group-hover:scale-[1.06]">
        <Motif category={project.category} />
      </div>
      <span className="absolute bottom-3 left-4 font-mono text-[11px] tracking-wider text-white/60 uppercase">
        {project.slug.replace(/-/g, "_")}
      </span>
    </div>
  );
}

function Motif({ category }: { category: Category }) {
  const common = {
    viewBox: "0 0 160 100",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    className: "h-auto w-[min(62%,15rem)] drop-shadow-[0_8px_24px_rgb(0_0_0/0.25)]",
  } as const;

  switch (category) {
    case "web":
      return (
        <svg {...common}>
          <rect x="10" y="10" width="140" height="80" rx="8" fill="rgb(255 255 255 / 0.12)" />
          <path d="M10 26h140" opacity=".5" />
          <circle cx="20" cy="18" r="2" fill="currentColor" stroke="none" />
          <circle cx="28" cy="18" r="2" fill="currentColor" stroke="none" opacity=".6" />
          <circle cx="36" cy="18" r="2" fill="currentColor" stroke="none" opacity=".35" />
          <rect x="22" y="38" width="56" height="8" rx="4" fill="currentColor" stroke="none" />
          <rect x="22" y="52" width="40" height="4" rx="2" fill="currentColor" stroke="none" opacity=".5" />
          <rect x="22" y="62" width="48" height="4" rx="2" fill="currentColor" stroke="none" opacity=".5" />
          <rect x="22" y="74" width="24" height="8" rx="4" fill="currentColor" stroke="none" opacity=".85" />
          <rect x="92" y="36" width="46" height="46" rx="6" fill="rgb(255 255 255 / 0.18)" />
        </svg>
      );
    case "ai":
      return (
        <svg {...common}>
          {[
            [20, 25], [20, 50], [20, 75],
            [65, 18], [65, 41], [65, 64], [65, 87],
            [110, 30], [110, 55], [110, 80],
            [145, 50],
          ].map(([x, y], i, pts) => (
            <g key={i}>
              {pts
                .filter(([nx]) => nx > x && nx - x < 50)
                .map(([nx, ny], j) => (
                  <path key={j} d={`M${x} ${y}L${nx} ${ny}`} opacity=".3" strokeWidth="1" />
                ))}
            </g>
          ))}
          {[
            [20, 25], [20, 50], [20, 75],
            [65, 18], [65, 41], [65, 64], [65, 87],
            [110, 30], [110, 55], [110, 80],
            [145, 50],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={i === 10 ? 6 : 4} fill="currentColor" stroke="none" opacity={i === 10 ? 1 : 0.85} />
          ))}
        </svg>
      );
    case "embedded":
      return (
        <svg {...common}>
          <rect x="50" y="20" width="60" height="60" rx="6" fill="rgb(255 255 255 / 0.14)" />
          <rect x="64" y="34" width="32" height="32" rx="3" fill="currentColor" stroke="none" opacity=".9" />
          {[30, 42, 54, 66].map((y) => (
            <g key={y}>
              <path d={`M50 ${y + 2}H34v0`} />
              <path d={`M110 ${y + 2}h16`} />
            </g>
          ))}
          {[58, 70, 82, 94].map((x) => (
            <g key={x}>
              <path d={`M${x} 20V8`} />
              <path d={`M${x} 80v12`} />
            </g>
          ))}
          <path d="M34 32H18v28H8" opacity=".55" />
          <path d="M126 68h16V44h10" opacity=".55" />
          <circle cx="8" cy="60" r="2.5" fill="currentColor" stroke="none" />
          <circle cx="152" cy="44" r="2.5" fill="currentColor" stroke="none" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <rect x="10" y="12" width="140" height="76" rx="8" fill="rgb(0 0 0 / 0.22)" />
          <path d="M24 34l10 8-10 8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="40" y="47" width="14" height="4" rx="1" fill="currentColor" stroke="none" />
          <rect x="24" y="60" width="70" height="3.5" rx="1.75" fill="currentColor" stroke="none" opacity=".45" />
          <rect x="24" y="70" width="50" height="3.5" rx="1.75" fill="currentColor" stroke="none" opacity=".3" />
          <rect x="100" y="60" width="30" height="3.5" rx="1.75" fill="currentColor" stroke="none" opacity=".3" />
        </svg>
      );
  }
}
