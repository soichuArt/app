import React from 'react';
import { Crown, Star, Video, Users, Sparkles, Check } from 'lucide-react';

const Premium = () => {
  const premiumFeatures = [
    {
      icon: Video,
      title: 'Video Workshops',
      description: 'In-depth guided sessions exploring advanced spiritual practices and artistic techniques.',
    },
    {
      icon: Users,
      title: 'Live Art Ceremonies',
      description: 'Exclusive access to live streaming art creation ceremonies and group rituals.',
    },
    {
      icon: Sparkles,
      title: 'Guided Rituals',
      description: 'Step-by-step guidance through powerful transformation rituals and sacred practices.',
    },
    {
      icon: Star,
      title: 'Bespoke Art',
      description: 'Commission personalized artworks created specifically for your spiritual journey.',
    },
  ];

  const membershipTiers = [
    {
      name: 'Sacred Circle',
      price: 29,
      period: 'month',
      description: 'Essential access to premium content and community',
      features: [
        'Monthly video workshops',
        'Guided ritual library',
        'Community forum access',
        'Monthly group ceremony',
        'Digital resource downloads',
      ],
      popular: false,
    },
    {
      name: 'Divine Path',
      price: 79,
      period: 'month',
      description: 'Complete spiritual transformation experience',
      features: [
        'All Sacred Circle benefits',
        'Weekly live sessions',
        'Personal ritual consultations',
        'Exclusive art previews',
        'Priority booking for events',
        'Custom meditation recordings',
      ],
      popular: true,
    },
    {
      name: 'Mystic Mastery',
      price: 149,
      period: 'month',
      description: 'Ultimate spiritual artistry and guidance',
      features: [
        'All Divine Path benefits',
        'Monthly 1:1 sessions with Soichu',
        'Bespoke artwork commission',
        'Advanced ritual training',
        'Exclusive retreat access',
        'Personal spiritual mentorship',
      ],
      popular: false,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <Crown className="h-16 w-16 text-soichu-500" />
        </div>
        <h1 className="text-4xl md:text-6xl font-sans font-thin text-gray-600 mb-4 tracking-wide">
          Premium Access
        </h1>
        <p className="text-xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
          Deeper rituals, guided workshops, readings, bespoke art, and exclusive sessions 
          for dedicated spiritual practitioners seeking profound transformation.
        </p>
      </div>

      {/* Premium Features */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {premiumFeatures.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition duration-200"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-soichu-100 rounded-lg">
                  <IconComponent className="h-8 w-8 text-soichu-600" />
                </div>
              </div>
              <h3 className="text-xl font-sans font-thin text-gray-600 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Membership Tiers */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-sans font-thin text-gray-600 mb-4">
            Choose Your Sacred Path
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto">
            Select the membership level that resonates with your spiritual journey and commitment to growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {membershipTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-lg p-8 shadow-sm border transition duration-200 ${
                tier.popular 
                  ? 'border-soichu-400 shadow-lg scale-105' 
                  : 'border-gray-200 hover:shadow-md'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-soichu-600 text-white px-4 py-1 rounded-lg text-sm font-light">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-sans font-thin text-gray-600 mb-2">
                  {tier.name}
                </h3>
                <p className="text-gray-500 font-light mb-4">
                  {tier.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-light text-gray-600">${tier.price}</span>
                  <span className="text-gray-500 font-light ml-2">/{tier.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-soichu-500 flex-shrink-0" />
                    <span className="text-gray-500 font-light">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-lg transition duration-200 font-light ${
                tier.popular
                  ? 'bg-soichu-600 text-white hover:bg-soichu-700'
                  : 'border-2 border-gray-300 text-gray-500 hover:bg-gray-50'
              }`}>
                Start Your Journey
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gradient-to-r from-soichu-50 to-cream-50 rounded-lg p-12 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-sans font-thin text-gray-600 mb-4">
            Transformation Stories
          </h2>
          <p className="text-lg text-gray-500 font-light">
            Hear from our community members about their spiritual journey with Soichu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6">
            <p className="text-gray-500 font-light italic mb-4">
              "The premium workshops have completely transformed my understanding of art as spiritual practice. 
              Each session brings new insights and deeper connection to my creative essence."
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div>
                <p className="font-light text-gray-600">Sarah M.</p>
                <p className="text-sm text-gray-500">Divine Path Member</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6">
            <p className="text-gray-500 font-light italic mb-4">
              "The bespoke artwork created for me carries such powerful energy. It's become the centerpiece 
              of my meditation space and continues to inspire my daily practice."
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div>
                <p className="font-light text-gray-600">Michael R.</p>
                <p className="text-sm text-gray-500">Mystic Mastery Member</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-3xl font-sans font-thin text-gray-600 mb-4">
          Ready to Deepen Your Practice?
        </h2>
        <p className="text-lg text-gray-500 font-light mb-8 max-w-2xl mx-auto">
          Join our community of spiritual practitioners and artists committed to transformation 
          through sacred creativity and ritual practice.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="px-8 py-3 bg-soichu-600 text-white rounded-lg hover:bg-soichu-700 transition duration-200 font-light">
            Start Free Trial
          </button>
          <button className="px-8 py-3 text-gray-500 hover:text-gray-600 transition duration-200 font-light">
            Schedule Consultation →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Premium;