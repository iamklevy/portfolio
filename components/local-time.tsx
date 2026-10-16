"use client";

import { useSyncExternalStore } from "react";

const subscribe = (tick: () => void) => {
  const id = setInterval(tick, 1000);
  return () => clearInterval(id);
};
// Snapshot is the current second, so React re-renders once per tick.
const getSnapshot = () => Math.floor(Date.now() / 1000);
const getServerSnapshot = () => null;

export function LocalTime({ timeZone }: { timeZone: string }) {
  const seconds = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const now = seconds === null ? null : new Date(seconds * 1000);

  const hm = now
    ? new Intl.DateTimeFormat("en-GB", { timeZone, hour: "2-digit", minute: "2-digit" }).format(now)
    : "--:--";
  const ss = now ? String(now.getSeconds()).padStart(2, "0") : "--";

  return (
    <span className="font-mono tabular-nums">
      {hm}
      <span className="text-faint">:{ss}</span>
    </span>
  );
}
