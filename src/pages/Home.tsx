import React from 'react';
import { Heart, ArrowRight, Star, Moon, Sun, Sparkles, Compass, BookOpen, Crown } from 'lucide-react';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

const Home = ({ setCurrentPage }: HomeProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section with Banner Image */}
      <div className="text-center mb-20">
        {/* Banner Image */}
        <div className="mb-12 relative overflow-hidden rounded-lg">
         <img 
  src={`${import.meta.env.BASE_URL}essence4.jpg`} 
  alt="Soichu Essence" 
  className="w-full h-48 md:h-64 object-cover"
/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        <h1 className="text-4xl md:text-5xl font-geomanist font-ultralight text-gray-500 mb-6 tracking-wide geomanist-ultra-thin">
          pure spiritual shapes ~
        </h1>
        <h2 className="text-2xl md:text-3xl font-geomanist font-ultralight text-gray-500 mb-8 tracking-wide geomanist-ultra-thin">
          art as a living presence
        </h2>

        <p className="text-base md:text-lg text-gray-500 font-light mb-12 max-w-4xl mx-auto leading-relaxed">
          What began with visual creations crafted from sacred bark, today expands through living rituals and experiences, 
          where art, nature, and energy align to create transformative encounters. From profound ceremonies to interactive 
          artistic explorations, Soichu brings presence, connection, and meaning into spaces and lives.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button 
            onClick={() => setCurrentPage('experiences')}
            className="px-8 py-3 bg-soichu-600 text-white rounded-lg hover:bg-soichu-700 transition duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl font-light"
          >
            <span>Begin Your Journey</span>
            <ArrowRight className="h-5 w-5" />
          </button>
          <button 
            onClick={() => setCurrentPage('library')}
            className="px-8 py-3 border-2 border-soichu-400 text-soichu-700 rounded-lg hover:bg-soichu-50 transition duration-200 font-light"
          >
            Explore Free Content
          </button>
        </div>
      </div>

      {/* The Beginning Section */}
      <div className="grid md:grid-cols-2 gap-16 mb-20">
        <div className="space-y-6">
          <h2 className="text-2xl font-geomanist font-ultralight text-gray-500 mb-6 geomanist-ultra-thin">the beginning</h2>
          <p className="text-gray-500 text-base leading-relaxed font-light">
            It was a process of seeking spiritual well-being through art, undertaken by Fabián Pérez Arias, Soichu, 
            from his studio in the lands of the Boonwurrung Country, Melbourne, Australia.
          </p>
          <p className="text-gray-500 text-base leading-relaxed font-light">
            What began with visual creations crafted from sacred bark, today expands through living rituals and experiences, 
            where art, nature, and energy align to create transformative encounters.
          </p>
          <div className="flex items-center space-x-4 pt-4">
            <Heart className="h-6 w-6 text-soichu-500" />
            <span className="text-gray-500 font-light text-sm">Healing through art and ritual</span>
          </div>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-soichu-100 to-cream-100 rounded-lg p-8 h-full flex items-center justify-center">
            <div className="text-center">
              <Sparkles className="h-16 w-16 text-soichu-500 mx-auto mb-4" />
              <h3 className="text-lg font-geomanist font-ultralight text-gray-500 mb-2 geomanist-ultra-thin">Sacred Materials</h3>
              <p className="text-gray-500 font-light text-sm">
                Artwork: The Artlovers. Bark on wood. Ngargee tree. Boonwurrung Country, Melbourne, Australia.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        <div className="bg-white rounded-lg p-8 shadow-sm border border-soichu-200/30 hover:shadow-md transition duration-200">
          <div className="flex items-center space-x-3 mb-4">
            <Compass className="h-8 w-8 text-soichu-500" />
            <h3 className="text-lg font-geomanist font-ultralight text-gray-500 geomanist-ultra-thin">Experiences</h3>
          </div>
          <p className="text-gray-500 font-light leading-relaxed text-sm">
            Interactive art, workshops, and evolving installations crafted to spark participation, foster deep connection, 
            and inspire personal transformation.
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm border border-soichu-200/30 hover:shadow-md transition duration-200">
          <div className="flex items-center space-x-3 mb-4">
            <BookOpen className="h-8 w-8 text-soichu-500" />
            <h3 className="text-lg font-geomanist font-ultralight text-gray-500 geomanist-ultra-thin">Offerings</h3>
          </div>
          <p className="text-gray-500 font-light leading-relaxed text-sm">
            Objects of presence, deep and personal power ~ art, talismans, and printed echoes offered as quiet 
            companions for your space and journey.
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm border border-soichu-200/30 hover:shadow-md transition duration-200">
          <div className="flex items-center space-x-3 mb-4">
            <Crown className="h-8 w-8 text-soichu-500" />
            <h3 className="text-lg font-geomanist font-ultralight text-gray-500 geomanist-ultra-thin">Spiritual Guidance</h3>
          </div>
          <p className="text-gray-500 font-light leading-relaxed text-sm">
            Angels oracle readings are powerful and profound channeled messages. Meditation guides available 
            on Spotify and YouTube.
          </p>
        </div>
      </div>

      {/* Who Am I Section */}
      <div className="bg-gradient-to-r from-soichu-50 to-cream-50 rounded-lg p-12 mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-geomanist font-ultralight text-gray-500 mb-6 geomanist-ultra-thin">
              who am I?
            </h2>
            <p className="text-gray-500 font-light mb-6 leading-relaxed text-sm">
              I'm a visionary creator shaping spaces since childhood. I turned a 1970s garage into vibrant parties, 
              "asaltos" with disco lights and driving sound.
            </p>
            <p className="text-gray-500 font-light mb-6 leading-relaxed text-sm">
              From events management and performing arts to being devoted to guiding others through intuitive 
              channeling and transformative readings.
            </p>
            <button 
              onClick={() => setCurrentPage('about')}
              className="px-8 py-3 bg-soichu-600 text-white rounded-lg hover:bg-soichu-700 transition duration-200 font-light"
            >
              Read My Journey →
            </button>
</div>
        <div>
        <img 
  src={`${import.meta.env.BASE_URL}soichu-home-02.jpg`} 
  alt="Soichu portrait surrounded by artworks"
  className="w-full h-48 md:h-64 object-cover"
/>
</div>
          </div>
        </div>
      </div>

      <div className="text-center bg-white rounded-lg p-12 shadow-sm border border-gray-200">
        <h2 className="text-2xl font-geomanist font-ultralight text-gray-500 mb-4 geomanist-ultra-thin">
          Ready to Transform Your Space?
        </h2>
        <p className="text-base text-gray-500 font-light mb-8 max-w-2xl mx-auto">
          From intimate workshops to curated works that carry the pulse of nature and intention, 
          each piece invites you to feel, pause, and realign.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button 
            onClick={() => setCurrentPage('shop')}
            className="px-8 py-3 bg-soichu-600 text-white rounded-lg hover:bg-soichu-700 transition duration-200 font-light"
          >
            Explore Offerings
          </button>
          <button 
            onClick={() => setCurrentPage('essence')}
            className="px-8 py-3 text-gray-500 hover:text-gray-600 transition duration-200 font-light"
          >
            Learn More →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
