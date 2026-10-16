"use client";

import { useState } from "react";
import { categories, projects, type Category } from "@/content/projects";
import { ProjectCard } from "./project-card";

type Filter = Category | "all";

export function WorkGrid() {
  const [filter, setFilter] = useState<Filter>("all");
  // "All" leads with the featured work (two per row), then the rest three per row.
  const visible =
    filter === "all"
      ? [...projects.filter((p) => p.featured), ...projects.filter((p) => !p.featured)]
      : projects.filter((p) => p.category === filter);
  const tabs: { id: Filter; label: string; count: number }[] = [
    { id: "all", label: "All", count: projects.length },
    ...categories.map((c) => ({ ...c, count: projects.filter((p) => p.category === c.id).length })),
  ];

  return (
    <>
      <div role="tablist" aria-label="Filter projects" className="-mx-4 mb-6 flex gap-1.5 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0">
        {tabs.map((t) => {
          const active = filter === t.id;
          return (
            <button
              key={t.id}
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(t.id)}
              className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-[13px] transition ${
                active
                  ? "border-fg bg-fg text-bg"
                  : "border-line bg-tile text-muted hover:border-line-strong hover:text-fg"
              }`}
            >
              {t.label}
              <span className={`font-mono text-[11px] ${active ? "text-bg/60" : "text-faint"}`}>{t.count}</span>
            </button>
          );
        })}
      </div>

      <div key={filter} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {visible.map((p, i) => {
          const large = filter === "all" && !!p.featured;
          return (
            <div
              key={p.slug}
              className={`rise ${large ? "sm:col-span-2 lg:col-span-3" : "lg:col-span-2"}`}
              style={{ "--i": Math.min(i, 8) } as React.CSSProperties}
            >
              <ProjectCard project={p} large={large} />
            </div>
          );
        })}
      </div>
    </>
  );
}
