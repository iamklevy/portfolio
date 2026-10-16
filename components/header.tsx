import Image from "next/image";
import Link from "next/link";
import { profile } from "@/content/profile";
import { ThemeToggle } from "./theme-toggle";

const nav: { href: string; label: string; hideOnMobile?: boolean }[] = [
  { href: "/#work", label: "Work" },
  { href: "/#journey", label: "Journey", hideOnMobile: true },
  { href: "/#stack", label: "Stack" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-3 z-50 mx-auto mt-3 w-full max-w-6xl px-4 sm:px-6">
      <div className="flex h-14 items-center justify-between rounded-full border border-line bg-tile/70 pr-2 pl-2 shadow-[var(--shadow)] backdrop-blur-xl">
        <Link href="/" className="group flex items-center gap-2.5 rounded-full pr-3" aria-label="Home">
          <span className="relative size-10 shrink-0 overflow-hidden rounded-full bg-tile-2 transition duration-300 group-hover:scale-110">
            <Image src={profile.avatar} alt={profile.name} fill loading="eager" sizes="40px" className="object-cover" />
          </span>
          <span className="hidden text-sm font-medium tracking-tight sm:block">{profile.name}</span>
        </Link>
        <nav className="flex items-center gap-0.5">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-2 text-[13px] text-muted transition hover:bg-line hover:text-fg max-sm:px-2.5 ${item.hideOnMobile ? "max-sm:hidden" : ""}`}
            >
              {item.label}
            </Link>
          ))}
          <span className="mx-1 h-5 w-px bg-line-strong max-sm:hidden" />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
