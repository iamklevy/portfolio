export type Category = "web" | "ai" | "embedded" | "systems";

export const categories: { id: Category; label: string }[] = [
  { id: "web", label: "Web" },
  { id: "ai", label: "AI & Vision" },
  { id: "embedded", label: "Embedded & IoT" },
  { id: "systems", label: "Systems & more" },
];

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string[];
  highlights: { title: string; body: string }[];
  year: number;
  category: Category;
  role: string;
  stack: string[];
  repo?: string;
  live?: string;
  demo?: { label: string; href: string };
  image?: string;
  featured?: boolean;
  /** Hue (0–360) used to tint the generated cover art. */
  hue: number;
};

const gh = (repo: string) => `https://github.com/iamklevy/${repo}`;

export const projects: Project[] = [
  {
    slug: "media-print",
    title: "Media Print",
    summary: "A production website for a printing & packaging company, with a product catalogue, pricing requests, a backend operations dashboard for sales team and a bilingual English/Arabic experience.",
    description: [
      "Media Print Pack needed a website that does more than list services. Customers should be able to browse packaging by product and industry, see finishing options, and request pricing or book a meeting without picking up the phone.",
      "I designed and built the site end to end on Next.js with a Supabase backend. It runs in English and Arabic with full right-to-left support, and sends transactional email for every enquiry.",
    ],
    highlights: [
      { title: "Bilingual, RTL-ready", body: "English and Arabic routes via next-intl, with layouts that mirror cleanly for right-to-left reading." },
      { title: "Catalogue & industries", body: "Products organised by type, industry and finishing, so buyers find the right packaging fast." },
      { title: "Lead capture", body: "Pricing requests and meeting bookings stored in Supabase, with email notifications sent through Resend." },
      { title: "Modern stack", body: "Next.js App Router, React 19, Tailwind v4 and shadcn/Radix components, with subtle motion throughout." },
    ],
    year: 2026,
    category: "web",
    role: "Design & full-stack development",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "next-intl", "Resend"],
    repo: gh("Media-Print"),
    live: "https://mediaprint-eg.com/",
    image: "/shots/media-print.png",
    featured: true,
    hue: 24,
  },
  {
    slug: "zentralbiker",
    title: "Zentralbiker",
    summary:
      "A ground-up rebuild of a 149-page travel journal from a round-the-world bicycle journey: trilingual, typed, and fully migrated.",
    description: [
      "The original Zentralbiker site was a hand-coded, Dreamweaver-era build of nested layout tables, spacer GIFs and navigation copy-pasted into all 149 pages. The content was worth keeping. The markup wasn't.",
      "I wrote a migration pipeline that extracts every report, route and photo gallery into structured JSON, then rebuilt the site on Next.js with a typed content layer, German/English/French routing, and a Supabase-backed guestbook and newsletter.",
    ],
    highlights: [
      { title: "Content migration", body: "Scripts parse the legacy HTML into pages, journey and gallery data, which the site regenerates rather than hand-edits." },
      { title: "Two languages", body: "German at the root, with English under /en" },
      { title: "Galleries", body: "Photo galleries with a lightbox, plus route and journey pages driven by the migrated data." },
      { title: "Community features", body: "Guestbook and newsletter forms backed by Supabase, with email delivered through Resend." },
    ],
    year: 2026,
    category: "web",
    role: "Migration & full-stack development",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "next-intl", "Node.js"],
    repo: gh("zentralbiker"),
    live: "https://www.zentralbiker.com/",
    image: "/shots/zentralbiker.png",
    featured: true,
    hue: 200,
  },
  {
    slug: "egytaltex",
    title: "EgyTaltex",
    summary:
      "A premium trilingual (English / Italian / Arabic RTL) website for an Egyptian-Italian textiles and garments factory.",
    description: [
      "EgyTaltex is a textiles and garments manufacturer in Cairo that exports to European fashion brands. The new site needed to feel as premium as the clients it serves, and to speak to them in their own language.",
      "Built with React, Vite and Framer Motion, the site has animated storytelling sections, real production facts, a factory-floor gallery and a working contact form, all switchable between English, Italian and Arabic.",
    ],
    highlights: [
      { title: "Three languages", body: "A language pill switches between EN, IT and Arabic with full RTL support, and the choice is remembered." },
      { title: "Storytelling pages", body: "Animated hero, stat counters, a process timeline and a 2001→2019 company history." },
      { title: "Real content", body: "Factory photography, a product range grid and client logos from brands such as OVS and Coin." },
      { title: "Contact flow", body: "Contact form posting to Formspree, with an embedded map and clear error states." },
    ],
    year: 2026,
    category: "web",
    role: "Design & front-end development",
    stack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "i18n"],
    repo: gh("EgyTaltex"),
    live: "https://www.egytaltex.com/",
    image: "/shots/egytaltex.png",
    featured: true,
    hue: 340,
  },
  {
    slug: "events-booking-system",
    title: "Events Booking System",
    summary:
      "A full-stack event platform: browse and filter events, book seats, manage a profile, and run events from an admin dashboard.",
    description: [
      "A MERN-style booking platform with a React front end and an Express + MongoDB API. Visitors filter events by category and price, sign up, and book. Admins create, update and manage events.",
    ],
    highlights: [
      { title: "Auth", body: "Sign-up and login secured with JWT." },
      { title: "Booking API", body: "REST routes for events, bookings and users, backed by MongoDB models." },
      { title: "Admin tools", body: "A dashboard to create, edit and manage events." },
      { title: "Theming", body: "Category and price filters, plus a light/dark theme toggle." },
    ],
    year: 2026,
    category: "web",
    role: "Full-stack development",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    repo: gh("Events-Booking-System"),
    image: "/shots/events-booking-system.png",
    hue: 265,
  },
  {
    slug: "precision-agricultural-spraying",
    title: "Precision Agricultural Spraying",
    summary:
      "Autonomous computer vision for tractor-mounted sprayer nozzles: detect crop rows, spray only what matters, cut pesticide waste.",
    description: [
      "Blanket pesticide spraying wastes chemicals and contaminates soil. This system uses computer vision on a Raspberry Pi 4 to detect crop rows in real time and map them to individual sprayer nozzles, so only the targeted sections are sprayed.",
      "I built the full pipeline from camera to nozzle: the vision algorithm, the nozzle-mapping logic, and the hardware control across an Arduino Uno and an ESP32. A prototype vehicle can be driven and monitored remotely from a phone.",
    ],
    highlights: [
      { title: "Crop row detection", body: "A vision pipeline on Raspberry Pi 4 that locates crop rows and converts them into nozzle activation signals." },
      { title: "Nozzle control", body: "An Arduino Uno fires nozzles precisely over the targeted crop sections." },
      { title: "Remote operation", body: "An ESP32 links to the Blynk IoT cloud for motor control, with an MIT App Inventor app for the pumps." },
      { title: "Hardware build", body: "L298N motor drivers, Li-ion power, an HC-05 Bluetooth module and a 3D-designed prototype." },
    ],
    year: 2024,
    category: "ai",
    role: "Computer vision & embedded engineering",
    stack: ["Python", "Computer Vision", "Raspberry Pi 4", "Arduino", "ESP32", "Blynk"],
    repo: gh("PRECISION-AGRICULTURAL-SPRAYING-AUTONOMOUS-COMPUTER-VISION-FOR-SPRAYER-NOZZLE-CONTROL"),
    image: "/shots/precision-agricultural-sprayer.jpg",
    featured: true,
    hue: 140,
  },
  {
    slug: "multi-cancer-classification",
    title: "Multi-Cancer Classification",
    summary: "Deep-learning CNNs that classify breast and brain tumour scans, separating benign, malignant and healthy cases.",
    description: [
      "A computer-vision project that trains convolutional neural networks on medical imaging to detect breast and brain cancers. The dataset is split 70/20/10 into training, validation and test sets, and the notebooks document the model architecture and per-class predictions.",
    ],
    highlights: [
      { title: "Two domains", body: "Separate classification tasks for breast (benign vs malignant) and brain (tumour vs no tumour) scans." },
      { title: "CNN architecture", body: "Custom convolutional models, with parameter summaries documented in the notebook." },
      { title: "Clean evaluation", body: "A 70/20/10 train/validation/test split, with visual prediction examples." },
    ],
    year: 2026,
    category: "ai",
    role: "Deep learning",
    stack: ["Python", "Deep Learning", "CNNs", "Jupyter"],
    repo: gh("Multi-Cancer-Classification"),
    image: "/shots/multi-cancer-classification.png",
    hue: 310,
  },
  {
    slug: "eog-based-calculator",
    title: "EOG-Based Calculator",
    summary:
      "A human–computer interface that lets you operate a calculator with your eyes, by classifying electrooculography (EOG) signals.",
    description: [
      "Electrooculography measures the electrical signals of eye movement. This project turns those signals into calculator input: two eye movements and a blink select a digit or an operation.",
      "The pipeline filters raw EOG signals, compares raw-sample features against wavelet coefficients, and tunes classifiers for each class. A simulation UI highlights the hovered and selected keys in real time.",
    ],
    highlights: [
      { title: "Signal preprocessing", body: "Band-pass filtering and artifact removal to clean blinks and muscle noise." },
      { title: "Feature comparison", body: "Raw samples vs wavelet coefficients, benchmarked on classification accuracy." },
      { title: "Classification", body: "Classifiers tuned with grid search for digits 0–9, the four operators and control commands." },
      { title: "Eye-driven UI", body: "A calculator layout designed so each choice takes minimal eye movement." },
    ],
    year: 2025,
    category: "ai",
    role: "Signal processing & ML",
    stack: ["Python", "Signal Processing", "Wavelets", "Machine Learning", "Jupyter"],
    repo: gh("EOG-Based-Calculator"),
    image: "/shots/eog-based-calculator.png",
    hue: 175,
  },
  {
    slug: "tweets-clustering",
    title: "Tweets Clustering",
    summary: "Grouping tweets by content using K-means with Jaccard distance, an unsupervised take on topic discovery.",
    description: [
      "An implementation of K-means clustering over tweets using Jaccard distance between token sets, used to group short texts into topics without labels.",
    ],
    highlights: [
      { title: "Custom distance", body: "Jaccard distance over token sets, which suits short, noisy text." },
      { title: "K-means from scratch", body: "Centroid selection, assignment and convergence implemented directly." },
    ],
    year: 2022,
    category: "ai",
    role: "Machine learning",
    stack: ["Python", "K-means", "NLP"],
    repo: gh("Tweets_Clustering"),
    image: "/shots/tweets-clustering.jpg",
    hue: 210,
  },
  {
    slug: "smart-home-system",
    title: "Smart Home System",
    summary:
      "Remote control of home hardware from an Android app: temperature, lighting, fans and a keypad door lock, synced through Firebase.",
    description: [
      "A pervasive-computing project that connects a microcontroller with sensors and actuators to a mobile app over Wi-Fi. Users monitor room temperature, switch lights and fans, and set the door-lock password from their phone.",
      "State is synced through Firebase in the cloud and cached locally in SQLite, so the app stays responsive even when the connection drops.",
    ],
    highlights: [
      { title: "Android app", body: "Native Java app with screens for each home feature." },
      { title: "Cloud + cache", body: "Firebase for real-time cloud state, SQLite for local caching." },
      { title: "Door lock", body: "The password is set in the app and verified by the microcontroller at the keypad." },
      { title: "Sensors & actuators", body: "Temperature sensing, LED lighting and fan control over Wi-Fi." },
    ],
    year: 2025,
    category: "embedded",
    role: "Embedded & mobile development",
    stack: ["Java", "Android", "C++", "Firebase", "SQLite", "Microcontrollers"],
    repo: gh("Smart-Home-System"),
    demo: { label: "Watch demo", href: "https://www.youtube.com/watch?v=LAhoLC1QU5o" },
    image: "/shots/smart-home-system.png",
    hue: 45,
  },
  {
    slug: "yocto-rpi-image",
    title: "Yocto RPi Image",
    summary: "Custom, lightweight embedded Linux images for Raspberry Pi, built with the Yocto Project.",
    description: [
      "A collection of configuration, recipes and documentation for building tailored Linux distributions for Raspberry Pi with the Yocto Project. The images ship only what the device needs.",
    ],
    highlights: [
      { title: "Custom layers", body: "Recipes and configuration that shape a minimal, purpose-built image." },
      { title: "Reproducible builds", body: "The whole OS is defined in version-controlled config." },
    ],
    year: 2024,
    category: "embedded",
    role: "Embedded Linux",
    stack: ["Yocto", "Embedded Linux", "BitBake", "Raspberry Pi"],
    repo: gh("Yocto-RPI-image"),
    image: "/shots/yocto-rpi-image.jpg",
    hue: 95,
  },
  {
    slug: "remote-iot-monitoring",
    title: "Remote IoT Monitoring",
    summary: "An Arduino that acts as a Wi-Fi web server, so you can monitor sensors and control devices from any browser.",
    description: [
      "Pairs an Arduino with a Wi-Fi module so the board serves its own web interface. Any browser on the network can read sensor values in real time and toggle connected devices.",
    ],
    highlights: [
      { title: "On-device web server", body: "The microcontroller serves the control UI directly, with no backend needed." },
      { title: "Two-way", body: "Live readings out, control commands in." },
    ],
    year: 2024,
    category: "embedded",
    role: "Embedded development",
    stack: ["C++", "Arduino", "Wi-Fi", "HTTP"],
    repo: gh("Remote-IoT-data-monitoring-and-control-using-Wi-Fi"),
    image: "/shots/remote-iot-monitoring.jpg",
    hue: 160,
  },
  {
    slug: "weather-station",
    title: "Weather Station",
    summary: "Measures temperature, humidity, altitude and barometric pressure, logs readings, and raises alerts when values turn abnormal.",
    description: [
      "Weather-related disasters cost lives and property, and many can be detected early. This station records environmental readings for study and sends an alert when any reading leaves its normal range.",
    ],
    highlights: [
      { title: "Multi-sensor", body: "Temperature, humidity, altitude and barometric pressure." },
      { title: "Alerting", body: "Threshold checks trigger alerts on abnormal readings." },
    ],
    year: 2023,
    category: "embedded",
    role: "Embedded development",
    stack: ["C++", "Arduino", "Sensors"],
    repo: gh("Weather-Station"),
    image: "/shots/weather-station.png",
    hue: 190,
  },
  {
    slug: "traffic-light-system",
    title: "Traffic Light System",
    summary: "An ATmega32 controller that manages traffic flow at a simulated intersection, written in C and simulated in Proteus.",
    description: [
      "A microcontroller-based simulation of a real-world intersection. The ATmega32 firmware is written in C and sequences the lights to manage traffic flow, and the whole circuit is verified in Proteus.",
    ],
    highlights: [
      { title: "Bare-metal C", body: "Firmware written directly against the ATmega32." },
      { title: "Simulated hardware", body: "The full circuit is modelled and tested in Proteus 8." },
    ],
    year: 2023,
    category: "embedded",
    role: "Firmware",
    stack: ["C", "ATmega32", "AVR", "Proteus"],
    repo: gh("Traffic-Light-system"),
    image: "/shots/traffic-light-system.png",
    hue: 0,
  },
  {
    slug: "network-packet-counter",
    title: "Network Packet Counter",
    summary: "A lightweight libpcap tool that captures live traffic and reports TCP/UDP/ICMP statistics, with BPF filtering.",
    description: [
      "A small, fast C program that reads packets straight from a network interface with libpcap, classifies them by protocol, and prints timestamped statistics on a configurable interval.",
    ],
    highlights: [
      { title: "Live capture", body: "Reads from real interfaces, with optional BPF filters such as tcp, udp or icmp." },
      { title: "Efficient", body: "Designed for at least 1,000 packets/sec in under 10 MB of memory." },
      { title: "Least privilege", body: "Runs without sudo by granting the binary only CAP_NET_RAW." },
    ],
    year: 2025,
    category: "systems",
    role: "Systems programming",
    stack: ["C", "libpcap", "Linux", "CMake"],
    repo: gh("Network_packet_counter"),
    image: "/shots/network-packet-counter.jpg",
    hue: 120,
  },
  {
    slug: "multi-client-server",
    title: "Multi-Client Server & Chat",
    summary: "A C++ socket server that handles many clients at once, with a C# WinForms chat app built on top.",
    description: [
      "A concurrent TCP server written in C++ that accepts and serves multiple clients at the same time. A companion C# WinForms chat client uses the server to exchange messages between users.",
    ],
    highlights: [
      { title: "Concurrent sockets", body: "Many simultaneous client connections handled by a single server." },
      { title: "Chat client", body: "A WinForms desktop client for real-time messaging." },
    ],
    year: 2025,
    category: "systems",
    role: "Network programming",
    stack: ["C++", "Sockets", "C#", "WinForms"],
    repo: gh("Multi-Client-Server"),
    image: "/shots/multi-client-server.png",
    hue: 230,
  },
  {
    slug: "nasa-james-webb",
    title: "James Webb 3D Explorer",
    summary: "A 3D game for NASA Space Apps Cairo 2022: fly through the solar system and explore the James Webb Space Telescope.",
    description: [
      "Built during NASA Space Apps Cairo 2022, this 3D world lets players explore the solar system and get up close to the James Webb Space Telescope. It's playable in the browser on itch.io.",
    ],
    highlights: [
      { title: "Hackathon build", body: "Designed and shipped within the NASA Space Apps Challenge." },
      { title: "Explorable 3D", body: "Free navigation of the solar system and a JWST model." },
    ],
    year: 2022,
    category: "systems",
    role: "Game development",
    stack: ["3D", "Game Dev", "WebGL"],
    repo: gh("Nasa-James-Webb-Telescope"),
    image: "/shots/nasa-james-webb.png",
    live: "https://klevy-always-solo.itch.io/nasa-james-webb",
    hue: 280,
  },
];

/** Smaller repos, listed compactly at the bottom of the work section. */
export const archive = [
  { title: "Hotel Booking App", stack: "C#", year: 2023, href: gh("Hotel-Booking-App") },
  { title: "BlackJack", stack: "Java · OOP", year: 2022, href: gh("BlackJack_Game") },
  { title: "Cinema Booking System", stack: "C++", year: 2022, href: gh("Cinema-Booking-System") },
  { title: "DS & Algorithms", stack: "C++ · LeetCode", year: 2022, href: gh("DataStructures-algorithms-problem-solving-") },
  { title: "To-do App", stack: "Flutter · Dart", year: 2022, href: gh("To_do_App") },
  { title: "BMI Calculator", stack: "Flutter · Dart", year: 2022, href: gh("Bmi_Calculator") },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
