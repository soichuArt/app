import React, { useState } from 'react';
import { User, MapPin, Calendar, ArrowRight } from 'lucide-react';

interface AboutProps {
  setCurrentPage: (page: string) => void;
}

const About = ({ setCurrentPage }: AboutProps) => {
  const [showFullJourney, setShowFullJourney] = useState(false);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <User className="h-16 w-16 text-soichu-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-geomanist font-ultralight text-gray-500 mb-4 tracking-wide geomanist-ultra-thin">
          who am I?
        </h1>
        <h2 className="text-xl md:text-2xl font-geomanist font-ultralight text-gray-500 mb-8 tracking-wide geomanist-ultra-thin">
          a multidisciplinary argentine creator based in Bali.
        </h2>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-16 mb-16">
        <div className="space-y-6">
          <p className="text-lg text-gray-500 font-light leading-relaxed">
            My work merges art and nature with a profound intention:<br />
            to create rituals and spaces that embody beauty and balance,<br />
            nurturing inner peace and vibrancy.
          </p>
          
          <div className="lg:hidden mb-8">
            <img 
  src={`${import.meta.env.BASE_URL}FabianSoichu1.jpg`} 
  alt="Soichu portrait by Giacomisnki" 
/>

          </div>

          <p className="text-lg text-gray-500 font-light leading-relaxed">
            Throughout my career, I have explored various disciplines such as visual arts, performing arts, 
            literature and events management, among others, always focused on excellence, pioneering new styles and concepts.
          </p>
          
          <p className="text-lg text-gray-500 font-light leading-relaxed">
            I am now expanding my work into the subtle realms, weaving together my creative journey with spiritual 
            perception and my deep connection with my Querandíes ancestors.<br />
            <strong>Soichu is my legacy</strong>
          </p>
        </div>
        
        <div className="hidden lg:block">
        <img 
  src={`${import.meta.env.BASE_URL}travel-verb.webp`} 
  alt="soichu walking barefoot on the beach" 
/>

        </div>
      </div>

      {/* Journey Section */}
      <div className="bg-gradient-to-r from-soichu-50 to-cream-50 rounded-lg p-12 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-geomanist font-ultralight text-gray-500 mb-4 geomanist-ultra-thin">
            journey
          </h2>
          <p className="text-base text-gray-500 font-light italic">
            trip, tour, voyage, expedition, pilgrimage, explore, roam, transit, odyssey, cruise, journey. LIFE.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src="https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg" 
              alt="Travel artwork" 
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-geomanist font-ultralight text-gray-500 mb-3 geomanist-ultra-thin">
                28th september<br />the starting position.
              </h3>
              <p className="text-base text-gray-500 font-light leading-relaxed">
                1. it was a tuesday.<br />
                I became flesh, and I became good.<br />
                so they said, and still remark: "what a good boy."
              </p>
            </div>

            {!showFullJourney && (
              <button
                onClick={() => setShowFullJourney(true)}
                className="flex items-center space-x-2 text-gray-500 hover:text-gray-600 transition duration-200 font-light"
              >
                <span>continue reading</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            )}

            {showFullJourney && (
              <div className="space-y-6">
                <p className="text-base text-gray-500 font-light leading-relaxed">
                  I then became bad, and traversed impossible paths.<br />
                  I destroyed myself and was reborn a few times.<br />
                  at some point, I began to love myself,<br />to respect that good boy.
                </p>
                
                <p className="text-base text-gray-500 font-light leading-relaxed">
                  2. from the dusty vastness of the humid Pampas, to the unmistakable scent of Buenos Aires' subway.<br />
                  the priest school, in between both.
                </p>
                
                <p className="text-base text-gray-500 font-light leading-relaxed">
                  3. from fleeting Ibiza to olympic avant-garde,<br />
                  and wandering, absorbed among the medieval alleyways that shaved my mane.
                </p>
                
                <p className="text-base text-gray-500 font-light leading-relaxed">
                  4. from the exclusivity of cutting-edge clubs to the success of dawns which were as dark as profitable.
                </p>
                
                <p className="text-base text-gray-500 font-light leading-relaxed">
                  5. the Andalucian warmth, the door open,<br />
                  the cluttered dining room. the continuous long nights again<br />
                  darkening my suns.
                </p>
                
                <p className="text-base text-gray-500 font-light leading-relaxed">
                  6. my rescuer, my first love:<br />
                  the stage, dancing and the spins from here to there.<br />
                  kilometres travelled, theatre seats, vast success and failure.<br />
                  reached the highest the star from where I plummeted
                </p>
                
                <p className="text-base text-gray-500 font-light leading-relaxed">
                  7. meditating five hours a day in the south of Bangkok.<br />
                  setting new objectives and finding life purpose.<br />
                  next, a trivial comment in the Cameron Highlands<br />
                  that transformed my journey.
                </p>
                
                <p className="text-base text-gray-500 font-light leading-relaxed">
                  8. the antipodes. wild and free nakedness.<br />
                  water in all its versions.<br />
                  Guidance and ancestral healing.<br />
                  Arakwal country first, then Boonwurrung country.<br />
                  after the bark bearing the Pure Spiritual Shapes.
                </p>
                
                <h3 className="text-xl font-geomanist font-ultralight text-gray-500 geomanist-ultra-thin">
                  And then SOICHU
                </h3>

                <button
                  onClick={() => setShowFullJourney(false)}
                  className="flex items-center space-x-2 text-gray-500 hover:text-gray-600 transition duration-200 font-light"
                >
                  <span>read less</span>
                  <ArrowRight className="h-5 w-5 transform rotate-180" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Location & Contact */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3 mb-4">
            <MapPin className="h-6 w-6 text-soichu-500" />
            <h3 className="text-lg font-geomanist font-ultralight text-gray-500 geomanist-ultra-thin">
              Current Location
            </h3>
          </div>
          <p className="text-gray-500 font-light text-sm">
            Based in Bali, Indonesia<br />
            Originally from Argentina<br />
            Creating from Boonwurrung Country, Melbourne, Australia
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3 mb-4">
            <Calendar className="h-6 w-6 text-soichu-500" />
            <h3 className="text-lg font-geomanist font-ultralight text-gray-500 geomanist-ultra-thin">
              Ancestral Connection
            </h3>
          </div>
          <p className="text-gray-500 font-light text-sm">
            Deep connection with Querandíes ancestors<br />
            Weaving spiritual perception with creative journey<br />
            Expanding work into subtle realms
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <button 
          onClick={() => setCurrentPage('experiences')}
          className="px-8 py-3 bg-soichu-600 text-white rounded-lg hover:bg-soichu-700 transition duration-200 font-light"
        >
          Explore My Work →
        </button>
      </div>
    </div>
  );
};

export default About;
