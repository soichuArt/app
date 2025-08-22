import React, { useState } from 'react';
import { BookOpen, Download, Play, FileText, Video, Headphones, ExternalLink } from 'lucide-react';

interface LibraryProps {
  setCurrentPage: (page: string) => void;
}

const Library = ({ setCurrentPage }: LibraryProps) => {
  const [selectedType, setSelectedType] = useState('all');

  const contentTypes = [
    { id: 'all', label: 'All Content' },
    { id: 'pdfs', label: 'PDFs' },
    { id: 'meditations', label: 'Meditations' },
    { id: 'videos', label: 'Videos' },
    { id: 'guides', label: 'Guides' },
  ];

  const libraryContent = [
    {
      id: 1,
      title: 'Introduction to Sacred Art',
      type: 'pdfs',
      format: 'PDF',
      duration: '15 min read',
      description: 'Foundational guide to understanding art as a spiritual practice and living presence.',
      icon: FileText,
      downloadCount: 1247,
    },
    {
      id: 2,
      title: 'CellSelf-Regeneration (English)',
      type: 'meditations',
      format: 'Audio',
      duration: '9 min',
      description: 'A short and powerful meditation to boost your energy and cellular health with an stronger dose of SELF-love! Available on Spotify.',
      icon: Headphones,
      downloadCount: 892,
      isExternal: true,
      externalLink: 'https://open.spotify.com/show/5Uv5Q2toxlK3b0MJ6i5FYz?si=d265ee45842f4972',
    },
    {
      id: 3,
      title: 'Cellular Regeneration Visual Meditation',
      type: 'meditations',
      format: 'Video',
      duration: '10 min',
      description: 'A guided meditation that energizes your body and strengthens your self-love with powerful mental control techniques. Visual and sound meditation experience.',
      icon: Video,
      downloadCount: 756,
      isExternal: true,
      externalLink: 'https://www.youtube.com/watch?v=339ragxlsvY&t=39s',
    },
    {
      id: 4,
      title: 'Regeneración celular ~ Guía de meditación (Español)',
      type: 'meditations',
      format: 'Audio',
      duration: '11 min',
      description: 'Guía de meditación para conectar con tu cuerpo y comenzar tu propio proceso de bienestar. Disponible en Spotify.',
      icon: Headphones,
      downloadCount: 634,
      isExternal: true,
      externalLink: 'https://open.spotify.com/show/5Uv5Q2toxlK3b0MJ6i5FYz?si=d265ee45842f4972',
    },
    // {
    //   id: 5,
    //   title: 'Ritual Space Creation',
    //   type: 'videos',
    //   format: 'Video',
    //   duration: '18 min',
    //   description: 'Step-by-step video showing how to create and consecrate your personal ritual space.',
    //   icon: Video,
    //   downloadCount: 1089,
    // },
    {
      id: 6,
      title: 'Sacred Symbols Guide',
      type: 'pdfs',
      format: 'PDF',
      duration: '25 min read',
      description: 'Comprehensive guide to understanding and working with sacred symbols in daily life.',
      icon: FileText,
      downloadCount: 543,
    },
    // {
    //   id: 7,
    //   title: 'Art as Healing Practice',
    //   type: 'videos',
    //   format: 'Video',
    //   duration: '22 min',
    //   description: 'Demonstration of using creative expression as a tool for emotional and spiritual healing.',
    //   icon: Video,
    //   downloadCount: 923,
    // },
    // {
    //   id: 8,
    //   title: 'Daily Ritual Practices',
    //   type: 'guides',
    //   format: 'PDF',
    //   duration: '20 min read',
    //   description: 'Simple yet powerful daily practices to maintain spiritual connection and presence.',
    //   icon: FileText,
    //   downloadCount: 0,
    // },
  ];

  const filteredContent = selectedType === 'all' 
    ? libraryContent 
    : libraryContent.filter(item => item.type === selectedType);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <BookOpen className="h-16 w-16 text-soichu-500" />
        </div>
        <h1 className="text-4xl md:text-6xl font-sans font-thin text-gray-600 mb-4 tracking-wide">
          Free Library
        </h1>
        <p className="text-xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
          Downloadable PDFs, meditations, introductory content, and videos showing ritual processes. 
          Accessible without login - our gift to your spiritual journey.
        </p>
      </div>

      {/* Content Type Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {contentTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => setSelectedType(type.id)}
            className={`px-6 py-2 rounded-lg transition duration-200 font-light ${
              selectedType === type.id
                ? 'bg-soichu-600 text-white'
                : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            {type.label}
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredContent.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.id}
              className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-md transition duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-soichu-100 rounded-lg">
                    <IconComponent className="h-6 w-6 text-soichu-600" />
                  </div>
                  <div>
                    <span className="text-sm font-light text-gray-500">{item.format}</span>
                    <div className="text-xs text-gray-400">{item.duration}</div>
                  </div>
                </div>
                <span className="text-xs text-gray-400 font-light">
                  {item.downloadCount} downloads
                </span>
              </div>

              <h3 className="text-xl font-sans font-thin text-gray-600 mb-3">
                {item.title}
              </h3>
              
              <p className="text-gray-500 font-light mb-6 leading-relaxed">
                {item.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-lg font-light text-gray-500">Free</span>
                {item.isExternal ? (
                  <a
                    href={item.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-soichu-600 text-white rounded-lg hover:bg-soichu-700 transition duration-200 font-light"
                  >
                    <Play className="h-4 w-4" />
                    <span>{item.format === 'Video' ? 'Watch' : 'Listen'}</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) : (
                  <button className="flex items-center space-x-2 px-4 py-2 bg-soichu-600 text-white rounded-lg hover:bg-soichu-700 transition duration-200 font-light">
                    {item.format === 'Video' ? (
                      <>
                        <Play className="h-4 w-4" />
                        <span>Watch</span>
                      </>
                    ) : (
                      <>
                        <Download className="h-4 w-4" />
                        <span>Download</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Meditations Section */}
      <div className="mt-16 bg-gradient-to-r from-soichu-50 to-cream-50 rounded-lg p-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-sans font-thin text-gray-600 mb-4">
            Guided Meditations
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto">
            Experience Soichu's guided meditations for cellular regeneration and spiritual transformation, 
            available in English and Spanish on Spotify and YouTube.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' })
              setCurrentPage('meditations')}}
            className="px-8 py-3 bg-soichu-600 text-white rounded-lg hover:bg-soichu-700 transition duration-200 font-light"
          >
            Explore All Meditations
          </button>
          <a
            href="https://open.spotify.com/show/5Uv5Q2toxlK3b0MJ6i5FYz?si=d265ee45842f4972"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 text-gray-500 hover:text-gray-600 transition duration-200 font-light flex items-center space-x-2"
          >
            <span>Listen on Spotify</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Newsletter Signup */}
      {/* <div className="mt-16 bg-white rounded-lg p-12 shadow-sm border border-gray-200 text-center">
        <h2 className="text-3xl font-sans font-thin text-gray-600 mb-4">
          Stay Connected
        </h2>
        <p className="text-lg text-gray-500 font-light mb-8 max-w-2xl mx-auto">
          Receive notifications when new content is added to our free library, 
          plus exclusive insights and early access to special offerings.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-soichu-500 font-light"
          />
          <button className="px-8 py-3 bg-soichu-600 text-white rounded-lg hover:bg-soichu-700 transition duration-200 font-light whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Library;