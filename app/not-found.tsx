import Link from "next/link";
import { Serif } from "@/components/section-heading";

export default function NotFound() {
  return (
    <div className="tile mt-12 px-7 py-24 text-center">
      <p className="font-mono text-[12px] tracking-wider text-muted uppercase">404</p>
      <h1 className="mt-4 text-5xl font-medium tracking-[-0.04em]">
        Nothing <Serif>here</Serif>.
      </h1>
      <Link href="/" className="mt-8 inline-flex rounded-full bg-fg px-5 py-2.5 text-[14px] font-medium text-bg">
        Back home
      </Link>
    </div>
  );
}
