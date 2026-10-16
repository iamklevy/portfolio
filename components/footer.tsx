import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="mx-auto mt-24 w-full max-w-6xl px-4 pb-10 sm:px-6">
      <div className="flex flex-col items-start justify-between gap-3 border-t border-line pt-6 text-[13px] text-faint sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js & Tailwind.
        </p>
        <p className="font-mono">{profile.location}</p>
      </div>
    </footer>
  );
}
