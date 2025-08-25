import {
  Users,
  BookOpen,
  Headphones,
  Youtube,
  Zap,
  Sparkles,
} from 'lucide-react';
import ResourceCard from '../components/ResourceCard';
import SoichuLogo from '../components/SoichuLogo';
import SectionTitle from '../components/SectionTitle';

const resources = [
  {
    title: 'Guided Meditations',
    description: 'Listen to free audio & video meditations.',
    icon: Headphones,
    onClick: () =>
      window.open(
        'https://open.spotify.com/show/5Uv5Q2toxlK3b0MJ6i5FYz?si=d265ee45842f4972',
        '_blank'
      ),
    cta: 'Listen',
  },
  {
    title: 'Stress-free Playlists',
    description: 'Curated music for rituals and daily uplift.',
    icon: Zap,
    onClick: () =>
      window.open(
        'https://open.spotify.com/playlist/62lz8cDvGdQsqHjA0XXxRu',
        '_blank'
      ),
    cta: 'Play',
  },
  {
    title: 'YouTube Channel',
    description: 'Art, rituals, creative processes & talks.',
    icon: Youtube,
    onClick: () =>
      window.open('https://www.youtube.com/@soichuart', '_blank'),
    cta: 'Watch',
  },
  {
    title: 'Resource Directory',
    description: 'Find coaches, artists, tools & books for your journey.',
    icon: BookOpen,
    onClick: (setCurrentPage) => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setCurrentPage('resources')
    },
    cta: 'Explore',
  },
  {
    title: 'Habit Tracker',
    description: 'Printable & digital templates for growth.',
    icon: Sparkles,
    onClick: () =>
      window.open(
        'https://marble-trampoline-732.notion.site/Personal-Habit-Tracker-Soichu-2574d86f03c1805885abc1c5e046efff?source=copy_link',
        '_blank'
      ),
    cta: 'Download',
  },
];

function CalendarIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="18" rx="4" stroke="#745C44" strokeWidth="2" />
      <path d="M16 2v4M8 2v4M3 10h18" stroke="#745C44" strokeWidth="2" />
    </svg>
  );
}

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

const Home = ({ setCurrentPage }: HomeProps) => (
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
      <h2 className="text-2xl md:text-3xl geomanist-ultra-thin mb-6">
        welcome to the Pueblo community
      </h2>
      <div className="flex justify-center mb-4">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            setCurrentPage('community')
          }}
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
      <SectionTitle>Featured Free Resources</SectionTitle>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto max-w-4xl">
        {resources.map((res) => (
          <ResourceCard
            key={res.title}
            title={res.title}
            description={res.description}
            icon={res.icon}
            cta={res.cta}
            onClick={() => res.onClick(setCurrentPage)}
          />
        ))}
      </div>
    </section>

    {/* Soichu's Card (Interactive Element) */}
    <section className="mb-20 text-center">
      <SectionTitle>
        Soichu's Card <span className="ml-1" role="img" aria-label="wing">🪽</span>
      </SectionTitle>
      <p className="mb-6 text-gray-500 font-light">
        Need inspiration or a gentle nudge? Click below to receive a message!
      </p>
      <button
        onClick={() => setCurrentPage('fortune')}
        className="px-8 py-3 bg-soichu-400 text-white rounded-lg shadow font-light hover:bg-soichu-500 transition"
      >
        Coming Soon
      </button>
    </section>

    {/* About / Vision Preview (centered) */}
    <section className="mb-20">
      <div className="flex flex-col items-center text-center">
        <SectionTitle>About Soichu & Vision</SectionTitle>
        <p className="mb-3 max-w-2xl">
          What began with visual creations from sacred bark now expands through living rituals and experiences, where art, nature, and energy align to create transformative encounters.
          <br />
          Our vision: Inspire a cultural paradigm shift towards a conscious and sustainable way of living—together.
        </p>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            setCurrentPage('essence')
          }}
          className="text-soichu-600 hover:underline font-medium"
        >
          Read More
        </button>
      </div>
    </section>

    {/* Upcoming Events & Rituals */}
    <section className="mb-20">
      <SectionTitle>Upcoming Events & Rituals</SectionTitle>
      <div className="text-center">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            setCurrentPage('calendar')
          }}
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
      <SectionTitle>Shop & Offerings</SectionTitle>
      <div className="text-center">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            setCurrentPage('shop')
          }}
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
      <SoichuLogo />
      © {new Date().getFullYear()} Soichu · Art as a Living Presence
    </footer>
  </div>
);

export default Home;
