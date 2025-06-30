import React from 'react';
import { Sparkles, Users, Eye, Heart, ArrowRight } from 'lucide-react';

const Experiences = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <Sparkles className="h-16 w-16 text-soichu-500" />
        </div>
        <h1 className="text-4xl md:text-6xl font-geomanist font-ultralight text-gray-500 mb-4 tracking-wide geomanist-ultra-thin">
          experiences
        </h1>
        <p className="text-xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
          Evolving experiences that blend art, spirituality, and connection. Interactive art, workshops, 
          and evolving installations crafted to spark participation, foster deep connection, and inspire personal transformation.
        </p>
      </div>

      {/* Featured Image */}
      <div className="mb-16 text-center">
        <img 
          src={`${import.meta.env.BASE_URL}thetribe5.webp`} 
          alt="The Tribe ~ Latam~Spain Entrepreneurs Meeting" 
          className="w-full max-w-4xl h-64 md:h-96 object-cover rounded-lg mx-auto"
        />
        <p className="text-sm text-gray-400 font-light italic mt-4">
          Latam~Spain Entrepreneurs Meeting. Bali, October 2024.
        </p>
      </div>

      {/* The Tribe Experience */}
      <div className="grid lg:grid-cols-2 gap-16 mb-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-geomanist font-ultralight text-gray-500 geomanist-ultra-thin">
            the tribe: a journey of collective creation
          </h2>
          <p className="text-lg text-gray-500 font-light leading-relaxed">
            It's a unique co-creation experience where participants collaboratively build an artistic piece using local tree bark. 
            This process fosters deep connections, creative expression, and a shared sense of purpose.
          </p>
          <p className="text-lg text-gray-500 font-light leading-relaxed">
            The Tribe has been successfully presented in over 20 public and private events, including contemporary art 
            and spirituality festivals in Australia and Indonesia.
          </p>
          <button className="px-8 py-3 bg-soichu-600 text-white rounded-lg hover:bg-soichu-700 transition duration-200 font-light">
            Explore Formats & Availability
          </button>
        </div>
        <div className="text-center">
          <img 
            src={`${import.meta.env.BASE_URL}thetribe4.webp`} 
            alt="Co-creation process at Tetiana's Birthday" 
            className="w-full h-80 object-cover rounded-lg"
          />
          <p className="text-sm text-gray-400 font-light italic mt-4">
            Tetiana's Birthday. Private event. Ubud, November 2024.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <hr className="border-none border-t border-gray-200 w-1/2 mx-auto" />
      </div>

      {/* Soichu Gates */}
      <div className="grid lg:grid-cols-2 gap-16 mb-16">
        <div className="text-center">
          <img 
            src={`${import.meta.env.BASE_URL}gatesExpo1.jpg`} 
            alt="Soichu Gates Installation" 
            className="w-full h-80 object-cover rounded-lg"
          />
          <p className="text-sm text-gray-400 font-light italic mt-4">
            Soichu Gates, now available for installations and private events. Setup mockup.
          </p>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-geomanist font-ultralight text-gray-500 geomanist-ultra-thin">
            soichu gates: mirrors as portals
          </h2>
          <p className="text-lg text-gray-500 font-light leading-relaxed">
            It's a perceptual journey where mirrors become portals to introspection, insight, and creativity. 
            This unique project blends artistic reflection, literature, and interactive engagement, allowing participants 
            to explore new dimensions of thought and self-awareness.
          </p>
          <div className="bg-soichu-50 rounded-lg p-6">
            <h3 className="text-xl font-geomanist font-ultralight text-gray-500 mb-3 geomanist-ultra-thin">
              Gates Affirmation
            </h3>
            <p className="text-gray-500 font-light italic">
              "I have courage. I turn my attention inward. My eyes are the gates. I see beyond. 
              I am grateful and practice acceptance. I embrace who I am."
            </p>
          </div>
          <button 
            onClick={() => window.open('https://square.link/u/ifgRipj6', '_blank')}
            className="px-8 py-3 bg-soichu-600 text-white rounded-lg hover:bg-soichu-700 transition duration-200 font-light"
          >
            Purchase Gates Experience
          </button>
        </div>
      </div>

      <div className="mb-16">
        <hr className="border-none border-t border-gray-200 w-1/2 mx-auto" />
      </div>

      {/* Tailored Creations */}
      <div className="grid lg:grid-cols-2 gap-16 mb-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-geomanist font-ultralight text-gray-500 geomanist-ultra-thin">
            tailored creations
          </h2>
          <p className="text-lg text-gray-500 font-light leading-relaxed">
            At soichu, we weave art into the heart of spaces, crafting environments that inspire, connect, and resonate. 
            Designed for visionary real estate, hospitality, and entrepreneurial projects, our bespoke art concepts blend 
            nature, culture, and intention to create ambiances that live and breathe.
          </p>
          <button className="px-8 py-3 bg-soichu-600 text-white rounded-lg hover:bg-soichu-700 transition duration-200 font-light">
            Explore Ambiences
          </button>
        </div>
        <div className="text-center">
          <img 
            src={`${import.meta.env.BASE_URL}essence.jpg`} 
            alt="Project, Sanur, Bali. Space proposal mock-up" 
            className="w-full h-80 object-cover rounded-lg"
          />
          <p className="text-sm text-gray-400 font-light italic mt-4">
            Project, Sanur, Bali. Space proposal mock-up.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <hr className="border-none border-t border-gray-200 w-1/2 mx-auto" />
      </div>

      {/* Spiritual & Transformational */}
      <div className="grid lg:grid-cols-2 gap-16 mb-16">
        <div className="text-center">
          <img 
            src={`${import.meta.env.BASE_URL}workshop1.webp`} 
            alt="Workshop at Pangaea Festival" 
            className="w-full h-80 object-cover rounded-lg"
          />
          <p className="text-sm text-gray-400 font-light italic mt-4">
            Pangaea Festival. Workshop. Ubud, March 2025
          </p>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-geomanist font-ultralight text-gray-500 geomanist-ultra-thin">
            spiritual and transformational
          </h2>
          <p className="text-lg text-gray-500 font-light leading-relaxed">
            Beyond artistic experiences, Soichu offers guided journeys for self-exploration and spiritual connection.
          </p>
          <ul className="text-lg text-gray-500 font-light space-y-2">
            <li>~ Angels oracle readings are powerful and profound channeled messages</li>
            <li>~ Meditation guides available on Spotify and YouTube</li>
            <li>~ Workshop <strong>Create Your Own Pure Spiritual Shape</strong> - a creative process where participants 
            design their own spiritual bark artwork</li>
          </ul>
        </div>
      </div>

      {/* Experience Types Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-md transition duration-200">
          <div className="flex items-center space-x-3 mb-4">
            <Users className="h-8 w-8 text-soichu-500" />
            <h3 className="text-xl font-geomanist font-ultralight text-gray-500 geomanist-ultra-thin">
              Group Experiences
            </h3>
          </div>
          <p className="text-gray-500 font-light leading-relaxed">
            Collective creation experiences that foster deep connections and shared artistic expression 
            through collaborative bark art projects.
          </p>
        </div>
        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-md transition duration-200">
          <div className="flex items-center space-x-3 mb-4">
            <Eye className="h-8 w-8 text-soichu-500" />
            <h3 className="text-xl font-geomanist font-ultralight text-gray-500 geomanist-ultra-thin">
              Installation Art
            </h3>
          </div>
          <p className="text-gray-500 font-light leading-relaxed">
            Immersive mirror installations that create portals for introspection and expanded perception, 
            challenging conventional reality.
          </p>
        </div>
        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-md transition duration-200">
          <div className="flex items-center space-x-3 mb-4">
            <Heart className="h-8 w-8 text-soichu-500" />
            <h3 className="text-xl font-geomanist font-ultralight text-gray-500 geomanist-ultra-thin">
              Sacred Spaces
            </h3>
          </div>
          <p className="text-gray-500 font-light leading-relaxed">
            Bespoke environmental art that transforms spaces into living sanctuaries, 
            weaving nature and intention into architectural design.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-soichu-50 to-cream-50 rounded-lg p-12 text-center">
        <h2 className="text-3xl font-geomanist font-ultralight text-gray-500 mb-4 geomanist-ultra-thin">
          join soichu's living art
        </h2>
        <p className="text-lg text-gray-500 font-light mb-8 max-w-2xl mx-auto">
          Every Soichu Experience invites you to explore, create, and connect on a deeper level. 
          Whether through artistic co-creation, immersive installations, or spiritual practices, 
          each experience is a unique opportunity to expand perception and meaning.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="px-8 py-3 bg-soichu-600 text-white rounded-lg hover:bg-soichu-700 transition duration-200 font-light flex items-center space-x-2">
            <span>Contact Us Now</span>
            <ArrowRight className="h-5 w-5" />
          </button>
          <button className="px-8 py-3 text-gray-500 hover:text-gray-600 transition duration-200 font-light">
            Go to Store →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
