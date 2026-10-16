import { ArrowUpRight, Braces, Cpu, Globe, Mail, ScanEye } from "lucide-react";
import { BentoHero } from "@/components/bento-hero";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { SectionHeading, Serif } from "@/components/section-heading";
import { WorkGrid } from "@/components/work-grid";
import { timeline } from "@/content/experience";
import { profile } from "@/content/profile";
import { archive } from "@/content/projects";
import { skillGroups } from "@/content/skills";

const skillIcons = [Braces, Globe, ScanEye, Cpu];

export default function Home() {
  return (
    <>
      <BentoHero />

      {/* Work */}
      <section id="work" className="pt-28">
        <SectionHeading eyebrow="Selected work" title={<>Things I&apos;ve <Serif>built</Serif></>}>
          Client websites, research prototypes and low-level tools. Open any project for the full story.
        </SectionHeading>
        <WorkGrid />

        <div className="tile mt-4 p-2">
          <p className="px-4 pt-4 pb-2 font-mono text-[12px] tracking-wider text-muted uppercase">From the archive</p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3">
            {archive.map((a) => (
              <li key={a.title}>
                <a
                  href={a.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-3 rounded-2xl px-4 py-3 transition hover:bg-tile-2"
                >
                  <span className="min-w-0">
                    <span className="block truncate text-[14px] font-medium">{a.title}</span>
                    <span className="block text-[12px] text-faint">
                      {a.stack} · {a.year}
                    </span>
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-faint transition group-hover:rotate-45 group-hover:text-fg" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Journey */}
      <section id="journey" className="pt-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading eyebrow="Journey" title={<>The path <Serif>so far</Serif></>} />
            <p className="-mt-4 max-w-sm text-[15px] leading-relaxed text-pretty text-muted">
              From Flutter apps and C++ console systems to production websites, computer vision and embedded Linux.
            </p>
          </div>

          <ol className="relative">
            {timeline.map((t, i) => (
              <li key={t.title} className="relative grid grid-cols-[1.5rem_1fr] gap-x-5 pb-10 last:pb-0">
                {i < timeline.length - 1 && (
                  <span className="absolute top-6 bottom-0 left-[11px] w-px bg-gradient-to-b from-line-strong to-line" />
                )}
                <span className="relative mt-1 grid size-6 place-items-center rounded-full border border-line-strong bg-tile">
                  <span className={`size-2 rounded-full ${i === 0 ? "bg-accent" : "bg-faint"}`} />
                </span>
                <div>
                  <p className="font-mono text-[12px] tracking-wide text-muted">{t.period}</p>
                  <h3 className="mt-1 text-xl font-medium tracking-tight">
                    {t.title}
                    {t.org && <span className="text-muted"> · {t.org}</span>}
                  </h3>
                  <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-pretty text-muted">{t.body}</p>
                  {t.tags && (
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {t.tags.map((tag) => (
                        <li key={tag} className="rounded-full bg-tile-2 px-2.5 py-1 text-[11.5px] text-muted ring-1 ring-line">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="pt-28">
        <SectionHeading eyebrow="Stack" title={<>Tools of the <Serif>trade</Serif></>}>
          Comfortable from the browser down to the bare metal.
        </SectionHeading>
        <div className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map((g, i) => {
            const Icon = skillIcons[i % skillIcons.length];
            return (
              <div key={g.title} className="tile p-7">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-accent-soft text-accent">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-lg font-medium tracking-tight">{g.title}</h3>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li key={s} className="rounded-full border border-line bg-tile-2 px-3.5 py-1.5 text-[13.5px]">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="pt-28">
        <div className="tile relative overflow-hidden px-7 py-16 text-center sm:px-12 sm:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-80 w-[44rem] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
            style={{ background: "radial-gradient(closest-side, var(--accent), transparent)" }}
          />
          <div aria-hidden className="dot-grid pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
          <p className="font-mono text-[12px] tracking-wider text-muted uppercase">Contact</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-[clamp(2.4rem,6vw,4.25rem)] leading-[1] font-medium tracking-[-0.04em] text-balance">
            Let&apos;s build something <Serif>together</Serif>.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-pretty text-muted">
            Open to full-time roles and freelance projects. The fastest way to reach me is LinkedIn.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-2">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-[14px] font-medium text-bg transition hover:opacity-85"
            >
              <LinkedInIcon className="size-4" /> Message on LinkedIn
            </a>
            {profile.email && (
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-tile px-5 py-3 text-[14px] font-medium transition hover:bg-line"
              >
                <Mail className="size-4" /> {profile.email}
              </a>
            )}
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-tile px-5 py-3 text-[14px] font-medium transition hover:bg-line"
            >
              <GitHubIcon className="size-4" /> GitHub
            </a>
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-tile px-5 py-3 text-[14px] font-medium transition hover:bg-line"
              >
                Download résumé
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
