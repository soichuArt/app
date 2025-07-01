import React from 'react';
import {
  Users,
  BookOpen,
  Headphones,
  Youtube,
  Zap,
  Sparkles,
} from 'lucide-react';
import ResourceCard from '../components/ResourceCard';
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
    title: 'Spiritual Playlists',
    description: 'Curated music for rituals and daily uplift.',
    icon: Zap,
    onClick: () =>
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
    onClick: () =>
      window.open('https://www.youtube.com/@soichuart', '_blank'),
    cta: 'Watch',
  },
  {
    title: 'Resource Directory',
    description: 'Find coaches, artists, tools & books for your journey.',
    icon: BookOpen,
    onClick: () =>
      window.open(
        'https://docs.google.com/document/d/1d7uQfAe8wNwM7bPOjZoRZqYk9sA2-AeO4rJZpQ0YcS8',
        '_blank'
      ),
    cta: 'Explore',
  },
  {
    title: 'Habit Tracker (Free)',
    description: 'Printable & digital templates for growth.',
    icon: Sparkles,
    onClick: () =>
      window.open(
        'https://drive.google.com/drive/folders/1zdrF6xwotmxfh9jc1Q7dN4lZ6WnUMyF2?usp=sharing',
        '_blank'
      ),
    cta: 'Download',
  },
  {
    title: 'Upcoming Events',
    description: 'Rituals, workshops & group gatherings.',
    icon: Users,
    onClick: () =>
      window.open(
        'https://www.soysoichu.com/events',
        '_blank'
      ),
    cta: 'See Events',
  },
];

const Resources = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-geomanist text-gray-500">
    {/* Banner igual que en la Home */}
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
        free resources
      </h1>
      <h2 className="text-2xl md:text-3xl geomanist-ultra-thin mb-6">
        all tools, playlists, and downloads are free for our community
      </h2>
      <p className="max-w-2xl mx-auto text-lg font-light text-gray-500">
        Listen, download, or join—explore resources for creativity and conscious living.
      </p>
    </div>

    {/* Free Resources Section */}
    <section className="mb-20">
      <SectionTitle>Explore</SectionTitle>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto max-w-4xl">
        {resources.map((res) => (
          <ResourceCard
            key={res.title}
            title={res.title}
            description={res.description}
            icon={res.icon}
            cta={res.cta}
            onClick={res.onClick}
          />
        ))}
      </div>
    </section>

    {/* Footer igual que Home */}
    <footer className="text-center text-sm text-gray-400 mt-16 pb-6">
      © {new Date().getFullYear()} Soichu · Art as a Living Presence
    </footer>
  </div>
);

export default Resources;
