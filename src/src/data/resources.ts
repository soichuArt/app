import { BookOpen, Headphones, Youtube, Zap, Sparkles } from "lucide-react";

export interface Resource {
  title: string;
  description: string;
  icon: React.ElementType;
  cta: string;
  onClick: (setCurrentPage?: (page: string) => void) => void;
}

export const resources: Resource[] = [
  {
    title: "Guided Meditations",
    description: "Listen to free audio & video meditations.",
    icon: Headphones,
    cta: "Listen",
    onClick: () =>
      window.open(
        "https://open.spotify.com/show/5Uv5Q2toxlK3b0MJ6i5FYz?si=d265ee45842f4972",
        "_blank"
      ),
  },
  {
    title: "Spiritual Playlists",
    description: "Curated music for rituals and daily uplift.",
    icon: Zap,
    cta: "Play",
    onClick: () =>
      window.open(
        "https://open.spotify.com/user/31phqpxk7z3wucg3lpzjv6f3e5c4?si=29e6e8c2e90b4c2c",
        "_blank"
      ),
  },
  {
    title: "YouTube Channel",
    description: "Art, rituals, creative processes & talks.",
    icon: Youtube,
    cta: "Watch",
    onClick: () =>
      window.open("https://www.youtube.com/@soichuart", "_blank"),
  },
  {
    title: "Resource Directory",
    description: "Find coaches, artists, tools & books.",
    icon: BookOpen,
    cta: "Explore",
    onClick: (setCurrentPage) => setCurrentPage && setCurrentPage("resources"),
  },
  {
    title: "Habit Tracker (Free)",
    description: "Printable & digital templates for growth.",
    icon: Sparkles,
    cta: "Download",
    onClick: (setCurrentPage) => setCurrentPage && setCurrentPage("library"),
  },
];
