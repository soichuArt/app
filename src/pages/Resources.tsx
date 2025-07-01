import React from "react";
import SoichuLogo from "../components/SoichuLogo";
import { Headphones, Zap, Youtube, BookOpen, Sparkles, Users } from "lucide-react";

const resources = [
  {
    title: "Guided Meditations",
    description: "Listen to free audio & video meditations.",
    icon: <Headphones className="w-10 h-10 text-soichu-600 mb-2" />,
    cta: "Listen",
    url: "https://example.com/meditations",
    items: [
      { title: "Morning Meditation", url: "https://example.com/morning" },
      { title: "Evening Calm", url: "https://example.com/evening" },
    ],
  },
  {
    title: "Spiritual Playlists",
    description: "Curated music for rituals and daily uplift.",
    icon: <Zap className="w-10 h-10 text-soichu-600 mb-2" />,
    cta: "Play",
    url: "https://example.com/playlists",
    items: [
      { title: "Creative Flow", url: "https://open.spotify.com/creative-flow" },
      { title: "Peaceful Presence", url: "https://open.spotify.com/peaceful-presence" },
    ],
  },
  {
    title: "PDF Guides",
    description: "Download free guides for creativity & mindfulness.",
    icon: <BookOpen className="w-10 h-10 text-soichu-600 mb-2" />,
    cta: "Download",
    url: "/pdfs/artistry-guide.pdf",
    items: [
      { title: "Artistry Guide", url: "/pdfs/artistry-guide.pdf" },
      { title: "Mindful Living", url: "/pdfs/mindful-living.pdf" },
      { title: "Beginner's Guide to Rituals", url: "/pdfs/rituals.pdf" },
      { title: "Daily Presence Practices", url: "/pdfs/presence-practices.pdf" },
    ],
  },
  {
    title: "Conscious Events",
    description: "Workshops & live gatherings.",
    icon: <Users className="w-10 h-10 text-soichu-600 mb-2" />,
    cta: "Join",
    url: "/events/art-as-ritual",
    items: [
      { title: "Art as Ritual - Monthly Gathering", url: "/events/art-as-ritual" },
      { title: "Conscious Movement Workshop", url: "/events/conscious-movement" },
    ],
  },
  {
    title: "Books",
    description: "Recommended reading for seekers & creatives.",
    icon: <BookOpen className="w-10 h-10 text-soichu-600 mb-2" />,
    cta: "Explore",
    url: "https://www.goodreads.com/book/show/132721.The_Art_Spirit",
    items: [
      { title: "The Art Spirit by Robert Henri", url: "https://www.goodreads.com/book/show/132721.The_Art_Spirit" },
      { title: "Waking Up by Sam Harris", url: "https://www.goodreads.com/book/show/18774981-waking-up" },
    ],
  },
  {
    title: "Videos & Movies",
    description: "Inspiring documentaries & films.",
    icon: <Youtube className="w-10 h-10 text-soichu-600 mb-2" />,
    cta: "Watch",
    url: "https://www.netflix.com/title/81090166",
    items: [
      { title: "The Creative Brain (Netflix)", url: "https://www.netflix.com/title/81090166" },
      { title: "Becoming Nobody (Documentary)", url: "https://becomingnobody.com/" },
    ],
  },
  {
    title: "Podcasts",
    description: "Voices and conversations for growth.",
    icon: <Headphones className="w-10 h-10 text-soichu-600 mb-2" />,
    cta: "Listen",
    url: "https://onbeing.org/series/podcast/",
    items: [
      { title: "On Being with Krista Tippett", url: "https://onbeing.org/series/podcast/" },
      { title: "The Tim Ferriss Show", url: "https://tim.blog/podcast/" },
    ],
  },
];

export default function Resources() {
  return (
    <div className="min-h-screen bg-[#faf9f6] font-geomanist">
      <header className="w-full flex flex-col items-center py-10">
        <SoichuLogo className="w-24 h-24 mb-3" />
        <h1 className="text-5xl md:text-6xl font-ultralight font-bold text-soichu-700 text-center mb-3 tracking-tight" style={{ textTransform: "lowercase" }}>
          free resources
        </h1>
        <p className="text-lg md:text-xl text-soichu-600 text-center max-w-2xl font-geomanist font-light mb-8">
          Explore and download tools for creative and conscious living. All resources are free for our community.
        </p>
      </header>

      <main>
        <section className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
            {resources.map((resource, idx) => (
              <div
                key={resource.title + idx}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition p-8 flex flex-col items-center text-center"
              >
                {resource.icon}
                <h3 className="text-xl font-bold text-soichu-700 mb-1 font-geomanist">{resource.title}</h3>
                <p className="text-gray-600 mb-4 font-geomanist">{resource.description}</p>
                <ul className="mb-4 space-y-1">
                  {resource.items.map((item, i) => (
                    <li key={i}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-soichu-600 font-medium underline hover:text-soichu-700"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
                {resource.url && (
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto px-5 py-2 rounded font-geomanist text-base font-semibold bg-soichu-600 text-white hover:bg-soichu-700 transition"
                  >
                    {resource.cta}
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
