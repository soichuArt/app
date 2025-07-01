import React from 'react';
import {
  Users,
  BookOpen,
  Headphones,
  Youtube,
  Zap,
  Sparkles,
} from 'lucide-react';

// Resource cards data
const resources = [
  {
    title: 'Guided Meditations',
    description: 'Listen to free audio & video meditations.',
    icon: Headphones,
    onClick: setCurrentPage =>
      window.open(
        'https://open.spotify.com/show/5Uv5Q2toxlK3b0MJ6i5FYz?si=d265ee45842f4972',
        '_blank'
      ),
    cta: 'Listen',
  },
  {
    title: 'Spiritual Playlists',
    description: 'Curated music for rituals and daily uplift.',
    icon: Zap,
    onClick: setCurrentPage =>
      window.open(
        'https://open.spotify.com/user/31phqpxk7z3wucg3lpzjv6f3e5c4?si=29e6e8c2e90b4c2c',
        '_blank'
      ),
    cta: 'Play',
  },
  {
    title: 'YouTube Channel',
    description: 'Art, rituals, creative processes & talks.',
    icon: Youtube,
    onClick: setCurrentPage =>
      window.open('https://www.youtube.com/@soichuart', '_blank'),
    cta: 'Watch',
  },
  {
    title: 'Resource Directory',
    description: 'Find coaches, artists, tools & books.',
    icon: BookOpen,
    onClick: setCurrentPage => setCurrentPage && setCurrentPage('resources'),
    cta: 'Explore',
  },
  {
    title: 'Habit Tracker (Free)',
    description: 'Printable & digital templates for growth.',
    icon: Sparkles,
    onClick: setCurrentPage => setCurrentPage && setCurrentPage('library'),
    cta: 'Download',
  },
];

// Inline calendar icon as component
function CalendarIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none">
      <rect
        x="3"
        y="4"
        width="18"
        height="18"
        rx="4"
        stroke="#745C44"
        strokeWidth="2"
      />
      <path
        d="M16 2v4M8 2v4M3 10h18"
        stroke="#745C44"
        strokeWidth="2"
      />
    </svg>
  );
}

const Home = ({ setCurrentPage }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-geomanist text-gray-500">
    {/* Hero Banner */}
    <div className="text-center mb-16 relative">
      <img
        src={`${import.meta.env.BASE_URL}essence4.jpg`}
        alt="Soichu Essence"
        className="w-full h-48 md:h-64 object-cover mx-auto mb-8 rounded-lg shadow"
        style={{ objectPosition: 'center top', maxWidth: '900px' }}
      />
      <h1
        className="text-5xl font-ultralight tracking-wide geomanist-ultra-thin mb-2 text-soichu-600"
        style={{ textTransform: 'lowercase' }}
      >
        art as a living presence
      </h1>
      <h2
        className="text-2xl md:text-3xl geomanist-ultra-thin mb-6"
        style={{ textTransform: 'lowercase' }}
      >
        welcome to the Pueblo community
      </h2>
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setCurrentPage('community')}
          className="px-8 py-3 bg-soichu-600 text-white rounded-lg shadow-lg font-light flex items-center space-x-2 hover:bg-soichu-700 transition"
        >
          <Users className="h-5 w-5" />
          <span>Join Free Community</span>
        </button>
      </div>
      <p className="max-w-2xl mx-auto text-lg font-light text-gray-500">
        Connect, share, and grow with fellow seekers. Explore free resources,
        collective wisdom, and living rituals.
      </p>
    </div>

    {/* Featured Free Resources */}
    <section className="mb-20">
      <h2 className="text-2xl font-ultralight geomanist-ultra-thin mb-8 text-center">
        Featured Free Resources
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto max-w-4xl">
        {resources.map((res, idx) => {
          const Icon = res.icon;
          return (
            <button
              key={res.title}
              onClick={() => res.onClick(setCurrentPage)}
              className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:shadow-lg transition group border border-soichu-100 cursor-pointer"
              style={{ minHeight: 220 }}
            >
              <Icon className="h-10 w-10 mb-4 text-soichu-600 group-hover:text-soichu-700" />
              <h3 className="text-lg font-medium mb-1 text-soichu-700">{res.title}</h3>
              <p className="mb-2 text-sm text-center">{res.description}</p>
              <span className="mt-auto px-4 py-1 bg-soichu-50 text-soichu-700 rounded-full text-sm shadow group-hover:bg-soichu-100">
                {res.cta}
              </span>
            </button>
          );
        })}
      </div>
    </section>

    {/* Soichu's Card (Interactive Element) */}
    <section className="mb-20 text-center">
      <h2 className="text-2xl geomanist-ultra-thin mb-4">
        Soichu's Card <span className="ml-1" role="img" aria-label="wing">🪽</span>
      </h2>
      <p className="mb-6 text-gray-500 font-light">
        Need inspiration or a gentle nudge? Click below to receive a message!
      </p>
      <button
        onClick={() => setCurrentPage && setCurrentPage('fortune')}
        className="px-8 py-3 bg-soichu-400 text-white rounded-lg shadow font-light hover:bg-soichu-500 transition"
      >
        Draw a Card
      </button>
    </section>

    {/* About / Vision Preview (centered) */}
    <section className="mb-20">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-2xl font-ultralight geomanist-ultra-thin mb-4">
          About Soichu & Vision
        </h2>
        <p className="mb-3 max-w-2xl">
          What began with visual creations from sacred bark now expands through living rituals and experiences, where art, nature, and energy align to create transformative encounters.
          <br />
          Our vision: Inspire a cultural paradigm shift towards a conscious and sustainable way of living—together.
        </p>
        <button
          onClick={() => setCurrentPage('essence')}
          className="text-soichu-600 hover:underline font-medium"
        >
          Read More
        </button>
      </div>
    </section>

    {/* Upcoming Events & Rituals */}
    <section className="mb-20">
      <h2 className="text-2xl geomanist-ultra-thin mb-6 text-center">
        Upcoming Events & Rituals
      </h2>
      <div className="text-center">
        <button
          onClick={() => setCurrentPage && setCurrentPage('events')}
          className="px-8 py-3 bg-soichu-600 text-white rounded-lg shadow-lg font-light flex items-center space-x-2 mx-auto hover:bg-soichu-700 transition"
        >
          <CalendarIcon className="h-5 w-5" />
          <span>View Calendar</span>
        </button>
        <p className="mt-4 text-gray-400 text-sm">
          Participate in group rituals, workshops, and global meditations.
        </p>
      </div>
    </section>

    {/* Shop/Offerings Preview */}
    <section className="mb-16">
      <h2 className="text-2xl geomanist-ultra-thin mb-6 text-center">
        Shop & Offerings
      </h2>
      <div className="text-center">
        <button
          onClick={() => setCurrentPage && setCurrentPage('shop')}
          className="px-8 py-3 bg-soichu-400 text-white rounded-lg shadow font-light hover:bg-soichu-500 transition"
        >
          Visit Shop
        </button>
        <p className="mt-4 text-gray-400 text-sm">
          Talismans, art, ceremonial tools, and more for your journey.
        </p>
      </div>
    </section>

    {/* Footer Soichu Logo */}
    <footer className="text-center text-sm text-gray-400 mt-16 pb-6">
      <img
        src={`${import.meta.env.BASE_URL}logoSOICHU-01.jpg`}
        alt="Soichu Logo"
        className="mx-auto w-10 mb-2"
      />
      © {new Date().getFullYear()} Soichu · Art as a Living Presence
    </footer>
  </div>
);

export default Home;
