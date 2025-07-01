import React from "react";
import {
  BookOpen,
  Headphones,
  Youtube,
  Zap,
  Sparkles,
  Users,
} from "lucide-react";
import SoichuLogo from "../components/SoichuLogo";

const resourceSections = [
  {
    title: "PDFs",
    items: [
      { title: "Artistry Guide", url: "/pdfs/artistry-guide.pdf" },
      { title: "Mindful Living", url: "/pdfs/mindful-living.pdf" },
    ],
    icon: BookOpen,
  },
  {
    title: "Meditations",
    items: [
      { title: "Morning Meditation", url: "https://example.com/morning" },
      { title: "Evening Calm", url: "https://example.com/evening" },
    ],
    icon: Headphones,
  },
  {
    title: "Playlists",
    items: [
      { title: "Creative Flow", url: "https://open.spotify.com/creative-flow" },
      { title: "Peaceful Presence", url: "https://open.spotify.com/peaceful-presence" },
    ],
    icon: Zap,
  },
  {
    title: "Guides",
    items: [
      { title: "Beginner's Guide to Rituals", url: "/pdfs/rituals.pdf" },
      { title: "Daily Presence Practices", url: "/pdfs/presence-practices.pdf" },
    ],
    icon: Sparkles,
  },
  {
    title: "Conscious Events",
    items: [
      { title: "Art as Ritual - Monthly Gathering", url: "/events/art-as-ritual" },
      { title: "Conscious Movement Workshop", url: "/events/conscious-movement" },
    ],
    icon: Users,
  },
  {
    title: "Books",
    items: [
      { title: "The Art Spirit by Robert Henri", url: "https://www.goodreads.com/book/show/132721.The_Art_Spirit" },
      { title: "Waking Up by Sam Harris", url: "https://www.goodreads.com/book/show/18774981-waking-up" },
    ],
    icon: BookOpen,
  },
  {
    title: "Videos & Movies",
    items: [
      { title: "The Creative Brain (Netflix)", url: "https://www.netflix.com/title/81090166" },
      { title: "Becoming Nobody (Documentary)", url: "https://becomingnobody.com/" },
    ],
    icon: Youtube,
  },
  {
    title: "Podcasts",
    items: [
      { title: "On Being with Krista Tippett", url: "https://onbeing.org/series/podcast/" },
      { title: "The Tim Ferriss Show", url: "https://tim.blog/podcast/" },
    ],
    icon: Headphones,
  },
];

const ResourceSection = ({ title, items, icon: Icon }) => (
  <div className="bg-white rounded-xl shadow p-6 flex flex-col h-full">
    <div className="flex items-center mb-4">
      <Icon className="w-7 h-7 text-soichu-600 mr-2" />
      <h2 className="text-xl font-semibold text-soichu-700 font-geomanist">{title}</h2>
    </div>
    <ul className="space-y-2 pl-1">
      {items.map((item, i) => (
        <li key={i}>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-soichu-600 font-medium hover:underline transition-colors duration-150"
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Resources: React.FC = () => (
  <div className="max-w-6xl mx-auto py-14 px-4 font-geomanist">
    <div className="flex flex-col items-center mb-8">
      <SoichuLogo className="w-16 h-16 mb-2" />
      <h1 className="text-4xl md:text-5xl font-bold mb-2 text-soichu-700 text-center font-ultralight tracking-wide" style={{ textTransform: "lowercase" }}>
        free resources
      </h1>
      <p className="text-lg text-gray-500 text-center max-w-xl font-light">
        Explore tools, inspiration, and conscious materials for your creative and spiritual journey.
      </p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {resourceSections.map(section => (
        <ResourceSection key={section.title} {...section} />
      ))}
    </div>
  </div>
);

export default Resources;
