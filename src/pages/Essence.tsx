import { Heart, Target, Compass, ArrowRight } from 'lucide-react';

interface EssenceProps {
  setCurrentPage: (page: string) => void;
}

const Essence = ({ setCurrentPage }: EssenceProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <Heart className="h-16 w-16 text-soichu-500" />
        </div>
        <h1 className="text-4xl md:text-6xl font-geomanist font-ultralight text-gray-500 mb-4 tracking-wide geomanist-ultra-thin">
          essence
        </h1>
        <p className="text-xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
          The core values and mission that guide Soichu's artistic practices and spiritual journey.
        </p>
      </div>

      {/* Hero Image */}
      <div className="mb-16">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={`${import.meta.env.BASE_URL}/essence2.jpg`}
            alt="Soichu Essence"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <Target className="h-12 w-12 text-soichu-500" />
        </div>
        <h2 className="text-3xl font-geomanist font-ultralight text-gray-500 mb-6 geomanist-ultra-thin">
          vision
        </h2>
        <p className="text-xl text-gray-500 font-light max-w-4xl mx-auto leading-relaxed">
          To inspire and take part in a cultural paradigm shift towards a sustainable and conscious way of living.
        </p>
      </div>

      <div className="mb-16">
        <hr className="border-none border-t border-gray-200 w-1/2 mx-auto" />
      </div>

      {/* Mission Section */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <Compass className="h-12 w-12 text-soichu-500" />
        </div>
        <h2 className="text-3xl font-geomanist font-ultralight text-gray-500 mb-6 geomanist-ultra-thin">
          mission
        </h2>
        <p className="text-xl text-gray-500 font-light max-w-4xl mx-auto leading-relaxed mb-8">
          To foster holistic spaces of cross-disciplinary expression that integrate diverse art forms and are open to all,
          with special focus on underrepresented communities.
        </p>

        <div className="max-w-4xl mx-auto">
          <ul className="text-lg text-gray-500 font-light space-y-3 list-none">
            <li>• to improve quality of life</li>
            <li>• to heal body, mind, and spirit</li>
            <li>• to empower stigmatized communities</li>
            <li>• to give back to those in need</li>
            <li>• to co-create social living neighborhoods based on a conscious and sustainable lifestyle</li>
          </ul>

          <p className="text-sm text-gray-400 font-light italic mt-6">
            *holistic spaces are environments where artistic, social, and spiritual expressions converge to support collective well-being.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <hr className="border-none border-t border-gray-200 w-1/2 mx-auto" />
      </div>

      {/* Values Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-geomanist font-ultralight text-gray-500 mb-6 geomanist-ultra-thin">
          values
        </h2>
        <p className="text-xl text-gray-500 font-light max-w-4xl mx-auto leading-relaxed mb-6">
          Soichu.art is rooted in two core values that guide both its artistic practices and everyday actions:
          honesty and respect.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-geomanist font-ultralight text-gray-500 mb-4 geomanist-ultra-thin">
              Honesty
            </h3>
            <p className="text-gray-500 font-light leading-relaxed">
              Honesty in content and communication across all areas and expressions.
              Authentic representation of spiritual experiences and artistic vision.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-geomanist font-ultralight text-gray-500 mb-4 geomanist-ultra-thin">
              Respect
            </h3>
            <p className="text-gray-500 font-light leading-relaxed">
              Respect for oneself, for others, for all living beings, and for the environment.
              Honoring traditional cultures and sacred lands.
            </p>
          </div>
        </div>
      </div>

      {/* Environmental Commitment */}
      <div className="bg-gradient-to-r from-soichu-50 to-cream-50 rounded-lg p-12 mb-16">
        <div className="text-center">
          <h2 className="text-3xl font-geomanist font-ultralight text-gray-500 mb-6 geomanist-ultra-thin">
            Environmental Commitment
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto mb-8">
            Our commitment to sustainability extends beyond art into every aspect of our practice,
            honoring the earth that provides our sacred materials.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-soichu-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-soichu-600" />
              </div>
              <h3 className="text-lg font-geomanist font-ultralight text-gray-500 mb-2 geomanist-ultra-thin">
                Sacred Materials
              </h3>
              <p className="text-gray-500 font-light text-sm">
                Ethically sourced bark and natural materials from Australian sacred lands
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-soichu-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-soichu-600" />
              </div>
              <h3 className="text-lg font-geomanist font-ultralight text-gray-500 mb-2 geomanist-ultra-thin">
                Giving Back
              </h3>
              <p className="text-gray-500 font-light text-sm">
                10% of profits donated to aligned nonprofit organizations
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-soichu-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Compass className="h-8 w-8 text-soichu-600" />
              </div>
              <h3 className="text-lg font-geomanist font-ultralight text-gray-500 mb-2 geomanist-ultra-thin">
                Conscious Living
              </h3>
              <p className="text-gray-500 font-light text-sm">
                Promoting sustainable and mindful lifestyle choices
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-3xl font-geomanist font-ultralight text-gray-500 mb-4 geomanist-ultra-thin">
          Experience Our Vision
        </h2>
        <p className="text-lg text-gray-500 font-light mb-8 max-w-2xl mx-auto">
          Discover how these values come to life through our transformative experiences and sacred artworks.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            setCurrentPage('experiences')
          }}
            className="px-8 py-3 bg-soichu-600 text-white rounded-lg hover:bg-soichu-700 transition duration-200 font-light flex items-center space-x-2">
            <span>Explore Experiences</span>
            <ArrowRight className="h-5 w-5" />
          </button>
          {/* <button onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            setCurrentPage('experiences')
          }}
            className="px-8 py-3 text-gray-500 hover:text-gray-600 transition duration-200 font-light">
            Learn About Our Journey →
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Essence;