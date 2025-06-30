import React, { useState } from 'react';
import { Headphones, Play, ExternalLink, Youtube, Music, Globe } from 'lucide-react';

interface MeditationsProps {
  setCurrentPage: (page: string) => void;
}

const Meditations = ({ setCurrentPage }: MeditationsProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState('all');

  const languages = [
    { id: 'all', label: 'All Languages' },
    { id: 'english', label: 'English' },
    { id: 'spanish', label: 'Español' },
  ];

  const meditations = [
    {
      id: 1,
      title: 'CellSelf-Regeneration',
      language: 'english',
      platform: 'spotify',
      duration: '9 min',
      description: 'A short and powerful meditation to boost your energy and cellular health with an stronger dose of SELF-love! Don\'t miss it.',
      affirmation: 'I boost my energy and cellular health with self-love and intention.',
      link: 'https://open.spotify.com/show/5Uv5Q2toxlK3b0MJ6i5FYz?si=d265ee45842f4972',
      featured: true,
      date: 'Feb 14',
      review: {
        author: 'nuriatya',
        text: 'Just wanted to say thank you, This has become part of my daily morning routine. Love the sounds, very good mindfulness exercise helping to heal the body 🙏🥰',
        timeAgo: '4 months ago'
      }
    },
    {
      id: 2,
      title: 'Regeneración celular ~ Guía de meditación',
      language: 'spanish',
      platform: 'spotify',
      duration: '11 min',
      description: 'Guía de meditación para conectar con tu cuerpo y comenzar tu propio proceso de bienestar. AVISO IMPORTANTE: Este es un proceso que comparto desde mi propia experiencia.',
      affirmation: 'Conecto con mi cuerpo y comienzo mi proceso de bienestar y regeneración.',
      link: 'https://open.spotify.com/show/5Uv5Q2toxlK3b0MJ6i5FYz?si=d265ee45842f4972',
      featured: true,
      date: 'Feb 6',
    },
    {
      id: 3,
      title: 'Cellular Regeneration Visual Meditation',
      language: 'spanish',
      platform: 'youtube',
      duration: '10 min',
      description: 'A guided meditation that energizes your body and strengthens your self-love with powerful mental control techniques. Trust, believe in your words - just 10 minutes that will transform your mood! A unique visual and sound meditation experience.',
      affirmation: 'I expand my consciousness and connect with self-love in a profound way.',
      youtubeId: '339ragxlsvY',
      embedded: true,
      featured: true,
      note: 'Meditation audio is in Spanish with visual elements',
      benefits: [
        'Expand your consciousness and connect with self-love deeply',
        'Activate the power of mental control over your body to improve wellbeing',
        'Align your breathing and intention with every cell of your body, promoting healing and balance'
      ]
    }
  ];

  const filteredMeditations = selectedLanguage === 'all' 
    ? meditations 
    : meditations.filter(meditation => meditation.language === selectedLanguage);

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'spotify': return Music;
      case 'youtube': return Youtube;
      default: return Headphones;
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'spotify': return 'bg-green-100 text-green-700';
      case 'youtube': return 'bg-red-100 text-red-700';
      default: return 'bg-soichu-100 text-soichu-700';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <Headphones className="h-16 w-16 text-soichu-500" />
        </div>
        <h1 className="text-4xl md:text-6xl font-geomanist font-ultralight text-gray-500 mb-4 tracking-wide geomanist-ultra-thin">
          meditations
        </h1>
        <p className="text-xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
          Guided spiritual meditations by Soichu available on Spotify and YouTube. 
          Deep practices for transformation, cellular regeneration, and connection with your inner light.
        </p>
      </div>

      {/* Language Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {languages.map((language) => (
          <button
            key={language.id}
            onClick={() => setSelectedLanguage(language.id)}
            className={`px-6 py-2 rounded-lg transition duration-200 font-light ${
              selectedLanguage === language.id
                ? 'bg-soichu-600 text-white'
                : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            {language.label}
          </button>
        ))}
      </div>

      {/* Meditations Grid */}
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredMeditations.map((meditation) => {
          const PlatformIcon = getPlatformIcon(meditation.platform);
          return (
            <div
              key={meditation.id}
              className={`bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-md transition duration-200 ${
                meditation.embedded ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${getPlatformColor(meditation.platform)}`}>
                    <PlatformIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-sm font-light text-gray-500 capitalize">
                      {meditation.platform}
                    </span>
                    <div className="text-xs text-gray-400">{meditation.duration}</div>
                    {meditation.date && (
                      <div className="text-xs text-gray-400">{meditation.date}</div>
                    )}
                  </div>
                </div>
                {meditation.featured && (
                  <span className="bg-soichu-600 text-white px-3 py-1 rounded-lg text-xs font-light">
                    Featured
                  </span>
                )}
              </div>

              <h3 className="text-xl font-geomanist font-ultralight text-gray-500 mb-3 geomanist-ultra-thin">
                {meditation.title}
              </h3>
              
              <p className="text-gray-500 font-light mb-4 leading-relaxed">
                {meditation.description}
              </p>

              {meditation.note && (
                <p className="text-sm text-gray-400 font-light italic mb-4">
                  Note: {meditation.note}
                </p>
              )}

              {meditation.benefits && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-600 mb-2">Benefits:</h4>
                  <ul className="text-sm text-gray-500 font-light space-y-1">
                    {meditation.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-soichu-500 mt-1">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {meditation.affirmation && (
                <div className="bg-soichu-50 rounded-lg p-4 mb-6">
                  <p className="text-soichu-600 font-light italic text-sm">
                    "{meditation.affirmation}"
                  </p>
                </div>
              )}

              {/* User Review */}
              {meditation.review && (
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm font-medium text-gray-600">{meditation.review.author}</span>
                    <span className="text-xs text-gray-400">{meditation.review.timeAgo}</span>
                  </div>
                  <p className="text-sm text-gray-600 font-light italic">
                    "{meditation.review.text}"
                  </p>
                </div>
              )}

              {/* YouTube Embed */}
              {meditation.embedded && meditation.youtubeId && (
                <div className="mb-6">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${meditation.youtubeId}?start=39`}
                      title={meditation.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-gray-200">
                {meditation.embedded ? (
                  <div className="text-center">
                    <span className="text-lg font-light text-gray-500">Watch Above</span>
                  </div>
                ) : (
                  <a
                    href={meditation.link || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 w-full py-3 bg-soichu-600 text-white rounded-lg hover:bg-soichu-700 transition duration-200 font-light"
                  >
                    <Play className="h-4 w-4" />
                    <span>Listen on {meditation.platform === 'spotify' ? 'Spotify' : 'YouTube'}</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* About Meditations */}
      <div className="mt-16 bg-gradient-to-r from-soichu-50 to-cream-50 rounded-lg p-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-geomanist font-ultralight text-gray-500 mb-4 geomanist-ultra-thin">
            About These Meditations
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto">
            Each meditation is crafted to guide you through transformation, cellular regeneration, and spiritual renewal, 
            based on Soichu's personal experience and sacred practices.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-soichu-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-soichu-600" />
            </div>
            <h3 className="text-xl font-geomanist font-ultralight text-gray-500 mb-2 geomanist-ultra-thin">
              Multiple Languages
            </h3>
            <p className="text-gray-500 font-light">
              Available in English and Spanish to reach our global community of practitioners.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-soichu-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Headphones className="h-8 w-8 text-soichu-600" />
            </div>
            <h3 className="text-xl font-geomanist font-ultralight text-gray-500 mb-2 geomanist-ultra-thin">
              Personal Experience
            </h3>
            <p className="text-gray-500 font-light">
              Guided by Soichu's authentic voice and insights from personal spiritual and wellness journey.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <button 
            onClick={() => setCurrentPage('rituals')}
            className="px-8 py-3 bg-soichu-600 text-white rounded-lg hover:bg-soichu-700 transition duration-200 font-light"
          >
            Explore More Rituals
          </button>
        </div>
      </div>
    </div>
  );
};

export default Meditations;