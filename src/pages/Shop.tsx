import React, { useState } from 'react';
import { ShoppingBag, Star, Heart, Eye, ShoppingCart, ExternalLink } from 'lucide-react';

interface ShopProps {
  setCurrentPage: (page: string) => void;
}

const Shop = ({ setCurrentPage }: ShopProps) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'artworks', label: 'Artworks' },
    { id: 'talismans', label: 'Talismans' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'oracle', label: 'Oracle & Cards' },
    { id: 'gates', label: 'Gates' },
  ];

  const products = [
    {
      id: 1,
      title: "Soichu's Talisman",
      category: 'talismans',
      price: 'A$30.00',
      image: `${import.meta.env.BASE_URL}shop/talisman1.webp`,
      description: 'Wood, 5cm diameter. The faithful reproduction of the original artworks Snake to the Sun and Free Snakes. Symbol of protection, transformation, and divine connection. With affirmations for daily meditation and inner renewal.',
      featured: true,
      squareLink: 'https://square.link/u/fyFFW85S',
      materials: 'Wood, 5cm diameter',
      quote: '"My talismans are one of my favourite creations, they\'re accessible for everybody and I\'m so happy for that. The one I wear around my neck has become an extremely supportive element in my daily life. I hope you can have one and enjoy its benefits." - Soichu~Fabian'
    },
    {
      id: 2,
      title: 'Snake to the Sun Series',
      category: 'artworks',
      price: 'A$350.00',
      image: `${import.meta.env.BASE_URL}shop/snake2unframe.webp`,
      description: 'This series is here to remind you that you can renew yourself as many times as needed. A symbolic call to rebirth and keep moving forward.',
      featured: true,
      squareLink: 'https://square.link/u/TqUjAhX0',
      materials: 'Bark: Ngargee Tree, Boonwurrung Country. Melbourne Australia. Bark on wood. 35x35cm. Deep white frame.',
      details: 'On sale: II and III versions',
      quote: '"This series is fundamental and so special for me, it marks the beginning of a powerful and, unexpected at that stage, revolutionary journey in my life. So excited to share it with you." - Soichu~Fabian'
    },
    {
      id: 3,
      title: 'Soichu Gates',
      category: 'gates',
      price: 'Contact for Price',
      image: `${import.meta.env.BASE_URL}shop/gates2.webp`,
      description: 'Mirrors as portals to introspection, insight, and creativity. "I have courage. I turn my attention inward. My eyes are the gates. I see beyond. I am grateful and practice acceptance. I embrace who I am."',
      featured: true,
      isExperience: true,
      materials: 'Mirror installation with sacred bark frame',
      quote: 'Conventional mirrors reflect your ego. SOICHU mirrors reflect your soul.'
    },
    {
      id: 4,
      title: 'The Tribe Experience',
      category: 'experiences',
      price: 'Custom Quote',
      image: `${import.meta.env.BASE_URL}shop/thetribeShop.webp`,
      description: 'Your celebration as a living ritual. An intimate, artistic and spiritual experience, created with and for your people. Not a performance, but a memory for life.',
      featured: true,
      isExperience: true,
      materials: 'Intimate, artistic and spiritual experience'
    },
    {
      id: 5,
      title: 'Free Snakes I, II, III',
      category: 'artworks',
      price: 'A$1,150.00',
      image: `${import.meta.env.BASE_URL}free2unframed.webp`,
      description: 'This series is here to encourage you to keep moving ahead, and to make you feel the power to re-birth, to become a new being every single time you need it.',
      featured: false,
      squareLink: 'https://square.link/u/1x7qIP1H',
      materials: 'Various bark: Djab Wurrung Country. Victoria State, Australia. Bark on wood. 35x35cm. Deep white frame.'
    },
    {
      id: 6,
      title: 'Flesh & Escape',
      category: 'artworks',
      price: 'A$1,450.00',
      image: `${import.meta.env.BASE_URL}shop/fleshUnframed.webp`,
      description: 'Becoming flesh, becoming good. Becoming flesh becoming new. An intimate and personal Big Bang. "I recognize and honour my origins. I love and value them. I embrace who I Am".',
      featured: true,
      squareLink: 'https://square.link/u/vFZocvao',
      materials: 'Paperbark tree: Gandangara Land. Coffs Harbour NSW, Australia. Bark on wood. 120 x 80 cm. Type: Collage'
    },
    {
      id: 7,
      title: 'Angels Messages for You',
      category: 'oracle',
      price: 'A$25.00',
      image: `${import.meta.env.BASE_URL}shop/AngelsTT.jpg`,
      description: 'This Oracle came to me in a very special way, and since then, I have used them as a guide. I don\'t see them as divinatory cards, but rather as guidance. Now I channel, always unexpected, recommendations for you from my/your Angels.',
      featured: false,
      squareLink: 'https://square.link/u/56XsvH8a',
      materials: 'Oracle guidance from Angels'
    },
    {
      id: 8,
      title: 'SoulCards',
      category: 'oracle',
      price: 'A$8.00',
      image: `${import.meta.env.BASE_URL}postal4framed.webp`,
      description: 'Each postcard is a breath-image, a visual pause, a reminder of your inner power. Personal — to reflect on slowly or to share with intention. Soulcards are not sent to addresses. They travel on their own, to the soul.',
      featured: false,
      squareLink: 'https://square.link/u/YMnq3rcf',
      materials: 'Visual postcards for the soul',
      note: 'Do you know whose soul yet?'
    },
    // {
    //   id: 9,
    //   title: 'Creating a New Pure Spiritual Shape',
    //   category: 'experiences',
    //   price: 'Workshop Pricing',
    //   image: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg',
    //   description: 'You will create your own conscious artwork, a unique artistic expression that marries visual artistry with wellbeing. It will become a reminder in your daily life, a new tool for making you feel better.',
    //   featured: false,
    //   squareLink: null,
    //   isExperience: true,
    //   materials: 'Workshop - Conscious artwork creation'
    // },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const handlePurchase = (product: any) => {
    if (product.squareLink) {
      window.open(product.squareLink, '_blank');
    } else {
      // For experiences or custom quotes, redirect to contact
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setCurrentPage('contact');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <ShoppingBag className="h-16 w-16 text-soichu-500" />
        </div>
        <h1 className="text-4xl md:text-6xl font-geomanist font-ultralight text-gray-500 mb-4 tracking-wide geomanist-ultra-thin">
          store~
        </h1>
        <h2 className="text-3xl md:text-5xl font-geomanist font-ultralight text-gray-500 mb-8 tracking-wide geomanist-ultra-thin">
          artworks & experiences
        </h2>
        <p className="text-xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
          Objects of presence, deep and personal power ~ art, talismans, and printed echoes
          offered as quiet companions for your space and journey.
        </p>
        <p className="text-sm text-gray-400 font-light mt-4">
          10% of Soichu's profits will be donated to aligned nonprofit organizations.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-2 rounded-lg transition duration-200 font-light ${selectedCategory === category.id
              ? 'bg-soichu-600 text-white'
              : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
              }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition duration-200 group"
          >
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
              />
              {product.featured && (
                <div className="absolute top-4 left-4">
                  <span className="bg-soichu-600 text-white px-3 py-1 rounded-lg text-xs font-light">
                    Featured
                  </span>
                </div>
              )}
              {/* <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition duration-200">
                <button className="bg-white/90 p-2 rounded-lg hover:bg-white transition duration-200">
                  <Eye className="h-5 w-5 text-soichu-600" />
                </button>
              </div> */}
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-geomanist font-ultralight text-gray-500 geomanist-ultra-thin">
                  {product.title}
                </h3>
                <button className="text-gray-400 hover:text-soichu-600 transition duration-200">
                  <Heart className="h-5 w-5" />
                </button>
              </div>

              <p className="text-sm text-gray-400 font-light mb-2">{product.materials}</p>

              <p className="text-gray-500 font-light mb-4 leading-relaxed line-clamp-3">
                {product.description}
              </p>

              {product.quote && (
                <p className="text-xs text-gray-400 font-light italic mb-4 line-clamp-2">
                  {product.quote}
                </p>
              )}

              {product.note && (
                <p className="text-sm text-soichu-600 font-light mb-4">
                  {product.note}
                </p>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-lg font-light text-gray-500">
                  {product.price}
                </span>
                <button
                  onClick={() => handlePurchase(product)}
                  className="flex items-center space-x-2 px-4 py-2 bg-soichu-600 text-white rounded-lg hover:bg-soichu-700 transition duration-200 font-light"
                >
                  {product.isExperience ? (
                    <>
                      <span>Learn More</span>
                      <ExternalLink className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="h-4 w-4" />
                      <span>Purchase</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Artist Statement */}
      <div className="mt-16 bg-gradient-to-r from-soichu-50 to-cream-50 rounded-lg p-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-geomanist font-ultralight text-gray-500 mb-4 geomanist-ultra-thin">
            Exceptional Moments
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto mb-6">
            From intimate workshops to curated works that carry the pulse of nature and intention,
            each piece invites you to feel, pause, and realign.
          </p>
          <p className="text-sm text-gray-400 font-light italic">
            "Each creation carries the energy of its origin place and the intention of transformation.
            These are not just artworks, but companions for your spiritual journey." - Soichu~Fabian
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => window.open('https://www.soichu.com/store.php', '_blank')}
            className="px-8 py-3 bg-soichu-600 text-white rounded-lg hover:bg-soichu-700 transition duration-200 font-light"
          >
            Visit Full Store
          </button>
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' })
              setCurrentPage('contact')
            }
            }
            className="px-8 py-3 text-gray-500 hover:text-gray-600 transition duration-200 font-light"
          >
            Commission Custom Art →
          </button>
        </div>
      </div>

      {/* Materials & Origins */}
      <div className="mt-16 bg-white rounded-lg p-12 shadow-sm border border-gray-200">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-geomanist font-ultralight text-gray-500 mb-4 geomanist-ultra-thin">
            Sacred Materials & Origins
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto">
            Each artwork is created with materials sourced from sacred lands across Australia,
            honoring the connection between art, nature, and spiritual practice.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-soichu-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-soichu-600" />
            </div>
            <h3 className="text-xl font-geomanist font-ultralight text-gray-500 mb-2 geomanist-ultra-thin">
              Boonwurrung Country
            </h3>
            <p className="text-gray-500 font-light">
              Ngargee Tree bark from Melbourne, Australia - used in Snake to the Sun series
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-soichu-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-soichu-600" />
            </div>
            <h3 className="text-xl font-geomanist font-ultralight text-gray-500 mb-2 geomanist-ultra-thin">
              Djab Wurrung Country
            </h3>
            <p className="text-gray-500 font-light">
              Various bark from Victoria State - featured in Free Snakes collection
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-soichu-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-soichu-600" />
            </div>
            <h3 className="text-xl font-geomanist font-ultralight text-gray-500 mb-2 geomanist-ultra-thin">
              Gandangara Land
            </h3>
            <p className="text-gray-500 font-light">
              Paperbark tree from Coffs Harbour NSW - used in Flesh & Escape
            </p>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Shop;