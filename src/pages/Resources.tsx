import React, { useState } from 'react';
import { Users, ExternalLink, Star, BookOpen, Heart, Compass, Headphones } from 'lucide-react';

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Resources' },
    { id: 'coaches', label: 'Spiritual Coaches' },
    { id: 'artists', label: 'Ritual Artists' },
    { id: 'meditations', label: 'Meditations' },
    { id: 'books', label: 'Recommended Books' },
    { id: 'tools', label: 'Sacred Tools' },
  ];

  const resources = [
    {
      id: 1,
      name: 'Luna Moonweaver',
      category: 'coaches',
      type: 'Spiritual Coach',
      location: 'Melbourne, Australia',
      specialties: ['Tarot Reading', 'Energy Healing', 'Moon Rituals'],
      description: 'Intuitive guide specializing in lunar cycles and feminine wisdom traditions.',
      website: 'https://lunamoonweaver.com',
      rating: 4.9,
      verified: true,
    },
    {
      id: 2,
      name: 'Sacred Earth Collective',
      category: 'artists',
      type: 'Ritual Artist Group',
      location: 'Byron Bay, Australia',
      specialties: ['Land Art', 'Ceremony Design', 'Natural Materials'],
      description: 'Collective creating large-scale earth art installations for healing and ceremony.',
      website: 'https://sacredearthcollective.org',
      rating: 4.8,
      verified: true,
    },
    {
      id: 3,
      name: 'CellSelf-Regeneration (English)',
      category: 'meditations',
      type: 'Guided Meditation',
      author: 'Soichu',
      duration: '9 min',
      specialties: ['Cellular Health', 'Self-Love', 'Energy Boost'],
      description: 'A short and powerful meditation to boost your energy and cellular health with an stronger dose of SELF-love! Available on Spotify.',
      website: 'https://open.spotify.com/show/5Uv5Q2toxlK3b0MJ6i5FYz?si=d265ee45842f4972',
      rating: 4.9,
      verified: true,
    },
    {
      id: 4,
      name: 'Regeneración celular ~ Guía de meditación (Español)',
      category: 'meditations',
      type: 'Guided Meditation',
      author: 'Soichu',
      duration: '11 min',
      specialties: ['Regeneración Celular', 'Bienestar', 'Conexión Corporal'],
      description: 'Guía de meditación para conectar con tu cuerpo y comenzar tu propio proceso de bienestar. Disponible en Spotify.',
      website: 'https://open.spotify.com/show/5Uv5Q2toxlK3b0MJ6i5FYz?si=d265ee45842f4972',
      rating: 4.8,
      verified: true,
    },
    {
      id: 5,
      name: 'Cellular Regeneration Visual Meditation',
      category: 'meditations',
      type: 'Video Meditation',
      author: 'Soichu',
      duration: '10 min',
      specialties: ['Visual Meditation', 'Mental Control', 'Self-Love'],
      description: 'A guided meditation that energizes your body and strengthens your self-love with powerful mental control techniques. Visual and sound meditation experience on YouTube.',
      website: 'https://www.youtube.com/watch?v=339ragxlsvY&t=39s',
      rating: 4.7,
      verified: true,
    },
    {
      id: 6,
      name: 'The Artist\'s Way',
      category: 'books',
      type: 'Book',
      author: 'Julia Cameron',
      specialties: ['Creative Recovery', 'Spiritual Practice', 'Artistic Awakening'],
      description: 'Essential guide to recovering your creative self through spiritual practice.',
      website: 'https://juliacameronlive.com',
      rating: 4.7,
      verified: false,
    },
    {
      id: 7,
      name: 'Crystal Sanctuary',
      category: 'tools',
      type: 'Sacred Tools',
      location: 'Online & Melbourne',
      specialties: ['Crystals', 'Ritual Tools', 'Altar Supplies'],
      description: 'Ethically sourced crystals and ritual tools for spiritual practice.',
      website: 'https://crystalsanctuary.com.au',
      rating: 4.6,
      verified: true,
    },
    {
      id: 8,
      name: 'Marcus Aurelius',
      category: 'coaches',
      type: 'Philosophy Guide',
      location: 'Online Sessions',
      specialties: ['Stoic Philosophy', 'Mindfulness', 'Life Guidance'],
      description: 'Modern interpreter of ancient wisdom traditions and contemplative practices.',
      website: 'https://stoicwisdom.com',
      rating: 4.8,
      verified: true,
    },
    {
      id: 9,
      name: 'Women Who Run With Wolves',
      category: 'books',
      type: 'Book',
      author: 'Clarissa Pinkola Estés',
      specialties: ['Feminine Psychology', 'Archetypal Wisdom', 'Wild Nature'],
      description: 'Profound exploration of the wild woman archetype and feminine wisdom.',
      website: 'https://clarissapinkolaestes.com',
      rating: 4.9,
      verified: false,
    },
  ];

  const filteredResources = selectedCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory);

  const getIcon = (category: string) => {
    switch (category) {
      case 'coaches': return Users;
      case 'artists': return Heart;
      case 'meditations': return Headphones;
      case 'books': return BookOpen;
      case 'tools': return Compass;
      default: return Star;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <Users className="h-16 w-16 text-soichu-500" />
        </div>
        <h1 className="text-4xl md:text-6xl font-sans font-thin text-gray-600 mb-4 tracking-wide">
          Resource Directory
        </h1>
        <p className="text-xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
          Curated collection of spiritual coaches, ritual artists, guided meditations, recommended books, and sacred tools 
          to support your journey of transformation and creative expression.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-2 rounded-lg transition duration-200 font-light ${
              selectedCategory === category.id
                ? 'bg-soichu-600 text-white'
                : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Resources Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredResources.map((resource) => {
          const IconComponent = getIcon(resource.category);
          return (
            <div
              key={resource.id}
              className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-md transition duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-soichu-100 rounded-lg">
                    <IconComponent className="h-6 w-6 text-soichu-600" />
                  </div>
                  <div>
                    <span className="text-sm font-light text-gray-500">{resource.type}</span>
                    {resource.duration && (
                      <div className="text-xs text-gray-400">{resource.duration}</div>
                    )}
                    {resource.verified && (
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 text-soichu-500 fill-current" />
                        <span className="text-xs text-gray-400">Verified</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-soichu-500 fill-current" />
                  <span className="text-sm font-light text-gray-500">{resource.rating}</span>
                </div>
              </div>

              <h3 className="text-xl font-sans font-thin text-gray-600 mb-2">
                {resource.name}
              </h3>
              
              {resource.author && (
                <p className="text-sm text-gray-500 font-light mb-2">by {resource.author}</p>
              )}
              
              {resource.location && (
                <p className="text-sm text-gray-400 font-light mb-3">{resource.location}</p>
              )}
              
              <p className="text-gray-500 font-light mb-4 leading-relaxed">
                {resource.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {resource.specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-500 rounded-lg text-xs font-light"
                  >
                    {specialty}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-200">
                <a
                  href={resource.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full py-3 bg-soichu-600 text-white rounded-lg hover:bg-soichu-700 transition duration-200 font-light"
                >
                  <span>
                    {resource.category === 'meditations' ? 'Listen/Watch' : 'Visit Website'}
                  </span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Submit Resource */}
      <div className="mt-16 bg-gradient-to-r from-soichu-50 to-cream-50 rounded-lg p-12 text-center">
        <h2 className="text-3xl font-sans font-thin text-gray-600 mb-4">
          Share a Sacred Resource
        </h2>
        <p className="text-lg text-gray-500 font-light mb-8 max-w-2xl mx-auto">
          Know of a spiritual coach, ritual artist, meditation, or sacred tool that has supported your journey? 
          Help our community by sharing your recommendations.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="px-8 py-3 bg-soichu-600 text-white rounded-lg hover:bg-soichu-700 transition duration-200 font-light">
            Submit Resource
          </button>
          <button className="px-8 py-3 text-gray-500 hover:text-gray-600 transition duration-200 font-light">
            Become a Partner →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resources;