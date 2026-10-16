import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Play } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { categoryLabel, ProjectCard } from "@/components/project-card";
import { ProjectCover } from "@/components/project-cover";
import { getProject, projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(props: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: project.image ? { images: [project.image] } : undefined,
  };
}

export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];
  const prev = projects[(index - 1 + projects.length) % projects.length];

  const meta = [
    { label: "Year", value: project.year },
    { label: "Area", value: categoryLabel(project.category) },
    { label: "Role", value: project.role },
  ];

  return (
    <article className="pt-10 sm:pt-14">
      <Link
        href="/#work"
        className="rise inline-flex items-center gap-2 rounded-full border border-line bg-tile px-4 py-2 text-[13px] text-muted transition hover:text-fg"
      >
        <ArrowLeft className="size-4" /> All work
      </Link>

      <header className="rise mt-8 grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-end" style={{ "--i": 1 } as React.CSSProperties}>
        <div>
          <h1 className="text-[clamp(2.5rem,6.5vw,4.5rem)] leading-[0.98] font-medium tracking-[-0.045em] text-balance">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-pretty text-muted">{project.summary}</p>
        </div>
        <div className="flex flex-wrap gap-2 lg:justify-end">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-[14px] font-medium text-bg transition hover:opacity-85"
            >
              Visit live <ArrowUpRight className="size-4" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-[14px] font-medium text-bg transition hover:opacity-85"
            >
              <Play className="size-4" /> {project.demo.label}
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-tile px-5 py-2.5 text-[14px] font-medium transition hover:bg-line"
            >
              <GitHubIcon className="size-4" /> Source
            </a>
          )}
        </div>
      </header>

      <div className="tile rise mt-10 p-2" style={{ "--i": 2 } as React.CSSProperties}>
        <ProjectCover project={project} priority className="aspect-[16/9] rounded-[1.25rem]" sizes="(min-width: 1152px) 1120px, 100vw" />
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <div className="tile rise p-7 sm:p-9 lg:col-span-2" style={{ "--i": 3 } as React.CSSProperties}>
          <p className="font-mono text-[12px] tracking-wider text-muted uppercase">Overview</p>
          <div className="mt-4 space-y-4 text-[16px] leading-relaxed text-pretty">
            {project.description.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>
        </div>
        <div className="tile rise flex flex-col gap-6 p-7" style={{ "--i": 4 } as React.CSSProperties}>
          <dl className="grid gap-4">
            {meta.map((m) => (
              <div key={m.label} className="flex items-baseline justify-between gap-4 border-b border-line pb-4 last:border-0 last:pb-0">
                <dt className="text-[13px] text-muted">{m.label}</dt>
                <dd className="text-right text-[14px] font-medium">{m.value}</dd>
              </div>
            ))}
          </dl>
          <div>
            <p className="text-[13px] text-muted">Stack</p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <li key={s} className="rounded-full border border-line bg-tile-2 px-3 py-1 text-[12.5px]">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <section className="mt-4 grid gap-4 sm:grid-cols-2">
        {project.highlights.map((h, i) => (
          <div key={h.title} className="tile rise p-7" style={{ "--i": 5 + i } as React.CSSProperties}>
            <span className="font-mono text-[12px] text-accent tabular-nums">{String(i + 1).padStart(2, "0")}</span>
            <h2 className="mt-3 text-lg font-medium tracking-tight">{h.title}</h2>
            <p className="mt-1.5 text-[15px] leading-relaxed text-pretty text-muted">{h.body}</p>
          </div>
        ))}
      </section>

      <nav className="mt-24" aria-label="More projects">
        <p className="mb-5 font-mono text-[12px] tracking-wider text-muted uppercase">Keep exploring</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <ProjectCard project={prev} />
          <ProjectCard project={next} />
        </div>
      </nav>
    </article>
  );
}
