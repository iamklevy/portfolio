export type TimelineEntry = {
  period: string;
  title: string;
  org?: string;
  body: string;
  tags?: string[];
};

export const timeline: TimelineEntry[] = [
  {
    period: "2026 — Now",
    title: "Freelance Software Engineer",
    body: "Designing and building production websites for businesses in Egypt and Europe: Media Print, EgyTaltex and Zentralbiker. Multilingual, RTL-ready and fast.",
    tags: ["Next.js", "React", "Supabase"],
  },
  {
    period: "2025",
    title: "Signals, systems & connected devices",
    body: "An eye-controlled EOG calculator, a libpcap packet analyser, a concurrent socket server, and an Android + Firebase smart-home system.",
    tags: ["Python", "C", "Android"],
  },
  {
    period: "2024",
    title: "Precision agriculture with computer vision",
    body: "Built an autonomous nozzle-control system that detects crop rows on a Raspberry Pi 4 and sprays only where needed. Also built custom Yocto Linux images.",
    tags: ["Computer Vision", "Raspberry Pi", "ESP32"],
  },
  {
    period: "2022",
    title: "NASA Space Apps Cairo",
    org: "Hackathon",
    body: "Shipped a 3D James Webb Space Telescope explorer during the international NASA Space Apps Challenge.",
    tags: ["3D", "Game Dev"],
  },
  {
    period: "2021",
    title: "Started building in public",
    body: "First Flutter apps, C++ console systems and algorithm practice, which grew into 25+ public repositories.",
    tags: ["Flutter", "C++"],
  },
];
