import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, FileText, MapPin } from "lucide-react";
import { profile } from "@/content/profile";
import { archive, getProject, projects } from "@/content/projects";
import { marquee } from "@/content/skills";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { LocalTime } from "./local-time";
import { ProjectCover } from "./project-cover";

export function BentoHero() {
  const featured = getProject("media-print")!;
  const stats = [
    { value: projects.length + archive.length, label: "projects" },
    { value: "4", label: "domains" },
    { value: "2021", label: "building since" },
  ];

  return (
    <section className="grid auto-rows-[minmax(10.5rem,auto)] grid-cols-2 gap-3 pt-8 sm:gap-4 sm:pt-12 lg:grid-cols-4">
      {/* Intro */}
      <div className="tile rise col-span-2 flex flex-col p-7 sm:p-9 lg:row-span-2" style={{ "--i": 0 } as React.CSSProperties}>
        <h1 className="text-[clamp(2.25rem,6vw,3.75rem)] leading-[0.95] whitespace-nowrap font-medium tracking-[-0.045em]">
          {profile.firstName} {profile.lastName}
        </h1>
        <p className="mt-3 text-xl tracking-tight text-muted sm:text-1xl">{profile.tagline}</p>
        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-pretty text-muted">{profile.intro}</p>

        <div className="mt-auto flex flex-wrap items-end justify-between gap-6 pt-8">
          <div className="flex flex-wrap gap-2">
            <Link 
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-[14px] font-medium text-bg transition hover:opacity-85"
            >
              View work <ArrowDown className="size-4" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-[14px] font-medium transition hover:bg-line"
            >
              Get in touch
            </Link>
          </div>
          <dl className="flex gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-2xl font-medium tracking-tight tabular-nums">{s.value}</dd>
                <dd className="text-[12px] text-faint">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Avatar */}
      <div className="tile rise relative max-lg:aspect-square lg:row-span-2" style={{ "--i": 1 } as React.CSSProperties}>
        <Image src={profile.avatar} alt={profile.name} fill loading="eager" fetchPriority="high" sizes="(min-width: 1024px) 280px, 50vw" className="object-cover" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-16">
          <p className="font-mono text-[12px] text-white/80">@{profile.links.githubHandle}</p>
        </div>
      </div>

      {/* GitHub */}
      <a
        href={profile.links.github}
        target="_blank"
        rel="noreferrer"
        className="tile tile-link rise group flex flex-col justify-between !bg-fg p-6 text-bg max-lg:aspect-square"
        style={{ "--i": 2 } as React.CSSProperties}
      >
        <div className="flex items-start justify-between">
          <GitHubIcon className="size-8" />
          <ArrowUpRight className="size-5 opacity-50 transition group-hover:rotate-45 group-hover:opacity-100" />
        </div>
        <div>
          <p className="text-lg font-medium tracking-tight">GitHub</p>
        </div>
      </a>

      {/* LinkedIn */}
      <a
        href={profile.links.linkedin}
        target="_blank"
        rel="noreferrer"
        className="tile tile-link rise group flex flex-col justify-between !border-transparent !bg-[#0a66c2] p-6 text-white max-lg:aspect-square"
        style={{ "--i": 3 } as React.CSSProperties}
      >
        <div className="flex items-start justify-between">
          <LinkedInIcon className="size-8" />
          <ArrowUpRight className="size-5 opacity-60 transition group-hover:rotate-45 group-hover:opacity-100" />
        </div>
        <div>
          <p className="text-lg font-medium tracking-tight">LinkedIn</p>
        </div>
      </a>

      {/* Featured project */}
      <Link
        href={`/projects/${featured.slug}`}
        className="tile tile-link rise group relative col-span-2 min-h-72 max-lg:order-1 lg:row-span-2"
        style={{ "--i": 4 } as React.CSSProperties}
      >
        <div className="absolute inset-0">
          <ProjectCover project={featured} className="h-full w-full" sizes="(min-width: 1024px) 560px, 100vw" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white">
          <div>
            <p className="font-mono text-[11px] tracking-wider text-white/70 uppercase">Featured · {featured.year}</p>
            <p className="mt-1 text-2xl font-medium tracking-tight">{featured.title}</p>
            <p className="mt-1 line-clamp-1 max-w-sm text-[14px] text-white/75">Packaging e-commerce, bilingual EN / AR</p>
          </div>
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white/15 backdrop-blur-md transition duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
            <ArrowUpRight className="size-5" />
          </span>
        </div>
      </Link>

      {/* Location & time */}
      <div className="tile rise dot-grid flex flex-col justify-between p-6" style={{ "--i": 5 } as React.CSSProperties}>
        <span className="grid size-10 place-items-center rounded-full bg-accent-soft text-accent">
          <MapPin className="size-5" />
        </span>
        <div>
          <p className="text-[13px] text-muted">{profile.location}</p>
          <p className="text-2xl font-medium tracking-tight">
            <LocalTime timeZone={profile.timeZone} />
          </p>
        </div>
      </div>

      {/* Résumé */}
      <ResumeTile />

      {/* Stack marquee */}
      <div className="tile rise col-span-2 flex flex-col justify-between gap-6 py-6 max-lg:order-2" style={{ "--i": 7 } as React.CSSProperties}>
        <div className="flex items-center justify-between px-6">
          <p className="text-lg font-medium tracking-tight">Toolbox</p>
          <Link href="#stack" className="text-[13px] text-muted transition hover:text-fg">
            Full stack →
          </Link>
        </div>
        <div className="marquee-mask flex flex-col gap-2.5 overflow-hidden">
          {[marquee, [...marquee].reverse()].map((row, r) => (
            <div key={r} className="flex">
              <ul
                className="marquee flex shrink-0 gap-2.5 pr-2.5"
                style={r ? { animationDirection: "reverse", animationDuration: "38s" } : undefined}
              >
                {[...row, ...row].map((item, i) => (
                  <li
                    key={i}
                    className="rounded-full border border-line bg-tile-2 px-3.5 py-1.5 text-[13px] whitespace-nowrap text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResumeTile() {
  const style = { "--i": 6 } as React.CSSProperties;
  const body = (
    <>
      <div className="flex items-start justify-between">
        <span className="grid size-10 place-items-center rounded-full bg-tile-2 text-fg">
          <FileText className="size-5" />
        </span>
        {profile.resumeUrl && <ArrowDown className="size-5 text-muted transition group-hover:translate-y-0.5 group-hover:text-fg" />}
      </div>
      <div>
        <p className="text-lg font-medium tracking-tight">Résumé</p>
        <p className="text-[13px] text-muted">{profile.resumeUrl ? "Download PDF" : "Fresh copy coming soon"}</p>
      </div>
    </>
  );

  return profile.resumeUrl ? (
    <a href={profile.resumeUrl} download className="tile tile-link rise group flex flex-col justify-between p-6 max-lg:order-2 max-lg:col-span-2" style={style}>
      {body}
    </a>
  ) : (
    <div className="tile rise flex flex-col justify-between max-lg:order-2 max-lg:col-span-2 !border-dashed !border-line-strong p-6 !shadow-none" style={style}>
      {body}
    </div>
  );
}
