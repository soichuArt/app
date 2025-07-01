import React from "react";
import SoichuLogo from "../components/SoichuLogo";
import {
  Headphones,
  Zap,
  Youtube,
  BookOpen,
  Sparkles,
  Users,
} from "lucide-react";

// Tus recursos reales
const resources = [
  {
    title: "PDFs",
    icon: <BookOpen className="w-8 h-8 text-soichu-600 mb-2" />,
    items: [
      { title: "Artistry Guide", url: "/pdfs/artistry-guide.pdf" },
      { title: "Mindful Living", url: "/pdfs/mindful-living.pdf" },
    ],
  },
  {
    title: "Meditations",
    icon: <Headphones className="w-8 h-8 text-soichu-600 mb-2" />,
    items: [
      { title: "Morning Meditation", url: "https://www.youtube.com/watch?v=xxxx" },
      { title: "Evening Calm", url: "https://www.youtube.com/watch?v=yyyy" },
    ],
  },
  {
    title: "Playlists",
    icon: <Zap className="w-8 h-8 text-soichu-600 mb-2" />,
    items: [
      { title: "Creative Flow", url: "https://open.spotify.com/playlist/xxxxx" },
      { title: "Peaceful Presence", url: "https://open.spotify.com/playlist/yyyyy" },
    ],
  },
  {
    title: "Guides",
    icon: <Sparkles className="w-8 h-8 text-soichu-600 mb-2" />,
    items: [
      { title: "Beginner's Guide to Rituals", url: "/pdfs/rituals.pdf" },
      { title: "Daily Presence Practices", url: "/pdfs/presence-practices.pdf" },
    ],
  },
  {
    title: "Conscious Events",
    icon: <Users className="w-8 h-8 text-soichu-600 mb-2" />,
    items: [
      { title: "Art as Ritual - Monthly Gathering", url: "/events/art-as-ritual" },
      { title: "Conscious Movement Workshop", url: "/events/conscious-movement" },
    ],
  },
  {
    title: "Books",
    icon: <BookOpen className="w-8 h-8 text-soichu-600 mb-2" />,
    items: [
      { title: "The Art Spirit by Robert Henri", url: "https://www.goodreads.com/book/show/132721.The_Art_Spirit" },
      { title: "Waking Up by Sam Harris", url: "https://www.goodreads.com/book/show/18774981-waking-up" },
    ],
  },
  {
    title: "Videos & Movies",
    icon: <Youtube className="w-8 h-8 text-soichu-600 mb-2" />,
    items: [
      { title: "The Creative Brain (Netflix)", url: "https://www.netflix.com/title/81090166" },
      { title: "Becoming Nobody (Documentary)", url: "https://becomingnobody.com/" },
    ],
  },
  {
    title: "Podcasts",
    icon: <Headphones className="w-8 h-8 text-soichu-600 mb-2" />,
    items: [
      { title: "On Being with Krista Tippett", url: "https://onbeing.org/series/podcast/" },
      { title: "The Tim Ferriss Show", url: "https://tim.blog/podcast/" },
    ],
  },
];

export default function Resources() {
  return (
    <div className="min-h-screen bg-white font-geomanist">
      {/* Banner exactamente igual que en la Home */}
      <div className="w-full">
        <img
          src="/essence4.jpg"
          alt="Essence Banner"
          className="w-full object-cover object-center max-h-[340px] min-h-[170px] rounded-b-3xl shadow"
        />
      </div>

      {/* Hero con logo y título */}
      <header className="w-full flex flex-col items-center py-10 px-4">
        <SoichuLogo className="w-20 h-20 mb-4" style={{ objectFit: "contain" }} />
        <h1 className="text-5xl md:text-6xl font-ultralight font-bold text-soichu-700 text-center mb-2 tracking-tight lowercase">
          free resources
        </h1>
        <p className="text-lg md:text-xl text-soichu-600 text-center max-w-2xl font-geomanist font-light mb-8">
          Explore and download tools for creative and conscious living. All resources are free for our community.
        </p>
      </header>

      {/* Grid de recursos */}
      <main>
        <section className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
            {resources.map((section, idx) => (
              <div
                key={section.title + idx}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 flex flex-col items-center text-center"
              >
                {section.icon}
                <h3 className="text-xl font-semibold text-soichu-700 mb-3 font-geomanist">{section.title}</h3>
                <ul className="mb-2 space-y-1">
                  {section.items.map((item, i) => (
                    <li key={i}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-soichu-600 font-medium underline hover:text-soichu-700 break-all"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
