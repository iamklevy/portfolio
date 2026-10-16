import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories, type Project } from "@/content/projects";
import { ProjectCover } from "./project-cover";

export const categoryLabel = (id: Project["category"]) => categories.find((c) => c.id === id)?.label ?? id;

export function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="tile tile-link group flex h-full flex-col p-2 focus-visible:outline-2 focus-visible:outline-accent"
    >
      <ProjectCover
        project={project}
        className={`rounded-[1.25rem] ${large ? "aspect-[16/10]" : "aspect-[16/11]"}`}
        sizes={large ? "(min-width: 1024px) 560px, 100vw" : "(min-width: 1024px) 370px, 100vw"}
      />
      <div className="flex flex-1 flex-col px-3 pt-4 pb-3">
        <div className="flex items-center justify-between gap-3 text-[12px] text-muted">
          <span className="font-mono tracking-wide uppercase">{categoryLabel(project.category)}</span>
          <span className="font-mono tabular-nums">{project.year}</span>
        </div>
        <h3 className={`mt-2 font-medium tracking-tight ${large ? "text-2xl" : "text-lg"}`}>{project.title}</h3>
        <p className="mt-1.5 line-clamp-2 text-[14px] leading-relaxed text-muted">{project.summary}</p>
        <div className="mt-auto flex items-end justify-between gap-3 pt-5">
          <ul className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, large ? 4 : 3).map((s) => (
              <li key={s} className="rounded-full border border-line px-2.5 py-1 text-[11.5px] text-muted">
                {s}
              </li>
            ))}
          </ul>
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-tile-2 text-muted transition duration-300 group-hover:rotate-45 group-hover:bg-fg group-hover:text-bg">
            <ArrowUpRight className="size-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
