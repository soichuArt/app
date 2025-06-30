import React, { useState } from 'react';
import { Compass, Star, Moon, Sun, Heart, Calendar, Clock, DollarSign, Play } from 'lucide-react';

interface RitualsProps {
  setCurrentPage: (page: string) => void;
}

const Rituals = ({ setCurrentPage }: RitualsProps) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const ritualCategories = [
    { id: 'all', label: 'All Experiences' },
    { id: 'talisman', label: 'Talisman Ritual' },
    { id: 'readings', label: 'Oracle Readings' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'experiences', label: 'Group Experiences' },
  ];

  const rituals = [
    {
      id: 1,
      title: "Soichu's Talisman Activation",
      category: 'talisman',
      type: 'guided',
      duration: '30 min',
      price: 'Included with Talisman',
      description: 'A ritual of sacred shedding - just like the tree lets go of its bark, or the snake releases its skin. Through meditation and psychomagic, release what no longer serves you.',
      features: ['Guided meditation', 'Symbolic shedding ritual', 'Personal transformation', 'Talisman empowerment'],
      materials: 'Wood talisman, 5cm diameter, with protective seal',
      quote: '"My talismans are one of my favourite creations, they\'re accessible for everybody and I\'m so happy for that." - Soichu~Fabian'
    },
    {
      id: 2,
      title: 'Angels Oracle Reading',
      category: 'readings',
      type: 'premium',
      duration: '60 min',
      price: 'Contact for Price',
      description: 'This Oracle came to me in a very special way, and since then, I have used them as a guide. I don\'t see them as divinatory cards, but rather as guidance. Now I channel, always unexpected, recommendations for you from my/your Angels.',
      features: ['Channeled angelic messages', 'Personal guidance', 'Spiritual insights', 'Recording included'],
      squareLink: 'https://square.link/u/56XsvH8a'
    },
    {
      id: 3,
      title: 'Creating a New Pure Spiritual Shape',
      category: 'workshops',
      type: 'workshop',
      duration: '3 hours',
      price: 'Workshop Pricing',
      description: 'You will create your own conscious artwork, a unique artistic expression that marries visual artistry with wellbeing. It will become a reminder in your daily life, a new tool for making you feel better.',
      features: ['Conscious art creation', 'Personal spiritual artwork', 'Wellbeing integration', 'Take-home piece'],
      materials: 'All art materials provided'
    },
    {
      id: 4,
      title: 'The Tribe Experience',
      category: 'experiences',
      type: 'group',
      duration: '2-4 hours',
      price: 'Custom Quote',
      description: 'Your celebration as a living ritual. An intimate, artistic and spiritual experience, created with and for your people. Not a performance, but a memory for life.',
      features: ['Collective creation', 'Sacred bark art', 'Group bonding', 'Living ritual'],
      materials: 'Local tree bark and natural materials'
    },
    {
      id: 5,
      title: 'Soichu Gates Experience',
      category: 'experiences',
      type: 'installation',
      duration: 'Variable',
      price: 'Installation Quote',
      description: 'A perceptual journey where mirrors become portals to introspection, insight, and creativity. This unique project blends artistic reflection, literature, and interactive engagement.',
      features: ['Mirror portals', 'Introspective journey', 'Interactive art', 'Perceptual exploration'],
      materials: 'Mirror installations and interactive elements'
    },
  ];

  const filteredRituals = selectedCategory === 'all' 
    ? rituals 
    : rituals.filter(ritual => ritual.category === selectedCategory);

  const handleBooking = (ritual: any) => {
    if (ritual.squareLink) {
      window.open(ritual.squareLink, '_blank');
    } else {
      // Redirect to contact for custom experiences
      setCurrentPage('contact');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <Compass className="h-16 w-16 text-soichu-500" />
        </div>
        <h1 className="text-4xl md:text-6xl font-geomanist font-ultralight text-gray-500 mb-4 tracking-wide geomanist-ultra-thin">
          Rituals & Sacred Experiences
        </h1>
        <p className="text-xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
          Sacred practices designed to guide your spiritual journey through art, nature, and divine connection. 
          Each experience is crafted to foster transformation, healing, and deeper self-awareness.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {ritualCategories.map((category) => (
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

      {/* Rituals Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredRituals.map((ritual) => (
          <div
            key={ritual.id}
            className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-md transition duration-200"
          >
            <div className="flex items-center justify-between mb-4">
              <span className={`px-3 py-1 rounded-lg text-xs font-light ${
                ritual.type === 'premium' || ritual.type === 'workshop' || ritual.type === 'installation'
                  ? 'bg-soichu-100 text-soichu-700' 
                  : ritual.type === 'free'
                  ? 'bg-sage-100 text-sage-700'
                  : 'bg-cream-100 text-cream-700'
              }`}>
                {ritual.type === 'premium' ? 'Premium' : 
                 ritual.type === 'free' ? 'Free' :
                 ritual.type === 'workshop' ? 'Workshop' :
                 ritual.type === 'installation' ? 'Installation' :
                 ritual.type === 'group' ? 'Group Experience' : 'Guided'}
              </span>
              <div className="flex items-center space-x-2 text-soichu-500">
                {ritual.category === 'readings' && <Star className="h-5 w-5" />}
                {ritual.category === 'talisman' && <Moon className="h-5 w-5" />}
                {ritual.category === 'workshops' && <Sun className="h-5 w-5" />}
                {ritual.category === 'experiences' && <Heart className="h-5 w-5" />}
              </div>
            </div>

            <h3 className="text-xl font-geomanist font-ultralight text-gray-500 mb-3 geomanist-ultra-thin">
              {ritual.title}
            </h3>
            
            <p className="text-gray-500 font-light mb-4 leading-relaxed">
              {ritual.description}
            </p>

            {ritual.materials && (
              <p className="text-sm text-gray-400 font-light mb-4 italic">
                Materials: {ritual.materials}
              </p>
            )}

            {ritual.quote && (
              <p className="text-xs text-gray-400 font-light italic mb-4">
                {ritual.quote}
              </p>
            )}

            <div className="space-y-2 mb-6">
              {ritual.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-soichu-400 rounded-full"></div>
                  <span className="text-sm text-gray-500 font-light">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span className="font-light">{ritual.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <DollarSign className="h-4 w-4" />
                  <span className="font-light">{ritual.price}</span>
                </div>
              </div>
              <button 
                onClick={() => handleBooking(ritual)}
                className="px-4 py-2 bg-soichu-600 text-white rounded-lg hover:bg-soichu-700 transition duration-200 text-sm font-light"
              >
                {ritual.type === 'free' ? 'Access Free' : 'Book Now'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Angel Card Reading Testimonials */}
      <div className="mt-16 bg-white rounded-lg p-12 shadow-sm border border-gray-200">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-geomanist font-ultralight text-gray-500 mb-4 geomanist-ultra-thin">
            Angel Card Reading Testimonials
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto">
            Hear from those who have experienced Soichu's powerful and profound channeled messages through Angel Oracle readings.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-3">
              <Star className="h-4 w-4 text-soichu-500 fill-current" />
              <span className="font-medium text-gray-600">Delia</span>
              <span className="text-sm text-gray-400">Byron Bay, Australia</span>
            </div>
            <p className="text-gray-600 font-light italic">
              "Soichu embodies the energy of a true angel. He is intuitive, insightful, grounded, and clear in his connection to the advice of the angels and the cards he reads. I found the meeting very helpful in understanding recent events and how to go forward. I highly recommend a reading with Soichu."
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-3">
              <Star className="h-4 w-4 text-soichu-500 fill-current" />
              <span className="font-medium text-gray-600">Orlando</span>
              <span className="text-sm text-gray-400">Sydney, Australia</span>
            </div>
            <p className="text-gray-600 font-light italic">
              "Thank you for your guidance and clarity. The reading was direct, luminous, and revealing. I received exactly what I needed."
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-3">
              <Star className="h-4 w-4 text-soichu-500 fill-current" />
              <span className="font-medium text-gray-600">Alejandra</span>
              <span className="text-sm text-gray-400">Medellín, Colombia</span>
            </div>
            <p className="text-gray-600 font-light italic">
              "Thank you for the angel reading. I loved the precise and loving messages. A wonderful experience."
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-3">
              <Star className="h-4 w-4 text-soichu-500 fill-current" />
              <span className="font-medium text-gray-600">Andrea</span>
              <span className="text-sm text-gray-400">Mar del Plata, Argentina</span>
            </div>
            <p className="text-gray-600 font-light italic">
              "A few days ago, the reading Fabi did for me was absolutely clear. The angels had the perfect message. They gave me guidance. If you're looking for answers, Soichu is the right person."
            </p>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <button 
            onClick={() => handleBooking({ squareLink: 'https://square.link/u/56XsvH8a' })}
            className="px-8 py-3 bg-soichu-600 text-white rounded-lg hover:bg-soichu-700 transition duration-200 font-light"
          >
            Book Angel Card Reading
          </button>
        </div>
      </div>

      {/* Talisman Ritual Detail */}
      <div className="mt-16 bg-gradient-to-r from-soichu-50 to-cream-50 rounded-lg p-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-geomanist font-ultralight text-gray-500 mb-4 geomanist-ultra-thin">
            Talisman Ritual Activation
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto">
            A ritual is a personal sacred act, done with intention, through which we awaken and honor our own spiritual power.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-geomanist font-ultralight text-gray-500 mb-4 geomanist-ultra-thin">
              The Sacred Process
            </h3>
            <p className="text-gray-500 font-light mb-4">
              Through a short meditation focused on your breath, look within for what you no longer need. 
              It may be something small or great, recent or with you all your life.
            </p>
            <p className="text-gray-500 font-light mb-4">
              Peel the outer layer with presence. With each movement, you go deeper into what you no longer want, 
              releasing it, just as you peel away pieces of this skin from the talisman.
            </p>
            <p className="text-gray-500 font-light">
              Let it shine in its full splendor, just as you will begin to see yourself.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-geomanist font-ultralight text-gray-500 mb-4 geomanist-ultra-thin">
              What's Included
            </h3>
            <ul className="space-y-2 text-gray-500 font-light">
              <li>• 1 Talisman with cord</li>
              <li>• 1 Soulcard with affirmations</li>
              <li>• 1 bookmark</li>
              <li>• Angel Card Reading included</li>
            </ul>
            <div className="mt-6">
              <button 
                onClick={() => setCurrentPage('shop')}
                className="px-6 py-3 bg-soichu-600 text-white rounded-lg hover:bg-soichu-700 transition duration-200 font-light"
              >
                Get Your Talisman
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16 bg-white rounded-lg p-12 shadow-sm border border-gray-200">
        <h2 className="text-3xl font-geomanist font-ultralight text-gray-500 mb-4 geomanist-ultra-thin">
          Ready for Your Sacred Journey?
        </h2>
        <p className="text-lg text-gray-500 font-light mb-8 max-w-2xl mx-auto">
          Each ritual is crafted to meet you where you are, offering guidance and transformation 
          through the sacred arts of divination, nature connection, and creative expression.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button 
            onClick={() => setCurrentPage('contact')}
            className="px-8 py-3 bg-soichu-600 text-white rounded-lg hover:bg-soichu-700 transition duration-200 font-light"
          >
            Schedule Consultation
          </button>
          <button 
            onClick={() => setCurrentPage('meditations')}
            className="px-8 py-3 text-gray-500 hover:text-gray-600 transition duration-200 font-light"
          >
            Explore Meditations →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rituals;