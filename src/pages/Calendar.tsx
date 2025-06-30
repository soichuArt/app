import React, { useState } from 'react';
import { Calendar as CalendarIcon, Filter, MapPin, Clock, Users } from 'lucide-react';

const Calendar = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const eventFilters = [
    { id: 'all', label: 'All Events' },
    { id: 'rituals', label: 'Rituals' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'ceremonies', label: 'Ceremonies' },
    { id: 'global', label: 'Global Events' },
  ];

  const events = [
    {
      id: 1,
      title: 'New Moon Ritual Circle',
      type: 'rituals',
      date: '2025-01-15',
      time: '7:00 PM',
      duration: '90 min',
      location: 'Online',
      capacity: 20,
      registered: 12,
      description: 'Sacred ceremony to honor the new moon energy and set intentions for the lunar cycle.',
      price: 'Free',
    },
    {
      id: 2,
      title: 'Sacred Art Workshop',
      type: 'workshops',
      date: '2025-01-18',
      time: '2:00 PM',
      duration: '3 hours',
      location: 'Melbourne Studio',
      capacity: 8,
      registered: 6,
      description: 'Hands-on workshop creating sacred art pieces using natural materials and intention.',
      price: '$85',
    },
    {
      id: 3,
      title: 'Global Meditation for Peace',
      type: 'global',
      date: '2025-01-21',
      time: '8:00 PM',
      duration: '60 min',
      location: 'Worldwide',
      capacity: 1000,
      registered: 347,
      description: 'Join thousands worldwide in a synchronized meditation for global peace and healing.',
      price: 'Free',
    },
    {
      id: 4,
      title: 'Elemental Ceremony',
      type: 'ceremonies',
      date: '2025-01-25',
      time: '6:30 PM',
      duration: '2 hours',
      location: 'Sacred Grove',
      capacity: 15,
      registered: 11,
      description: 'Outdoor ceremony connecting with the four elements through ritual and art.',
      price: '$65',
    },
    {
      id: 5,
      title: 'Angel Channeling Session',
      type: 'rituals',
      date: '2025-01-28',
      time: '7:30 PM',
      duration: '75 min',
      location: 'Online',
      capacity: 12,
      registered: 8,
      description: 'Group session receiving angelic guidance and messages through sacred art.',
      price: '$45',
    },
    {
      id: 6,
      title: 'Spring Equinox Celebration',
      type: 'global',
      date: '2025-03-20',
      time: '6:00 AM',
      duration: '4 hours',
      location: 'Multiple Locations',
      capacity: 500,
      registered: 89,
      description: 'Global celebration of the spring equinox with synchronized rituals and art creation.',
      price: 'Free',
    },
  ];

  const filteredEvents = selectedFilter === 'all' 
    ? events 
    : events.filter(event => event.type === selectedFilter);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <CalendarIcon className="h-16 w-16 text-soichu-500" />
        </div>
        <h1 className="text-4xl md:text-6xl font-sans font-thin text-gray-600 mb-4 tracking-wide">
          Ritual Calendar & Global Events
        </h1>
        <p className="text-xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
          Join our global community in sacred ceremonies, art rituals, and spiritual celebrations. 
          Filter by theme or date to find events that resonate with your journey.
        </p>
      </div>

      {/* Event Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {eventFilters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setSelectedFilter(filter.id)}
            className={`px-6 py-2 rounded-lg transition duration-200 font-light ${
              selectedFilter === filter.id
                ? 'bg-soichu-600 text-white'
                : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Events Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-md transition duration-200"
          >
            <div className="flex items-center justify-between mb-4">
              <span className={`px-3 py-1 rounded-lg text-xs font-light ${
                event.type === 'global' 
                  ? 'bg-soichu-100 text-soichu-700' 
                  : event.type === 'ceremonies'
                  ? 'bg-cream-100 text-cream-700'
                  : 'bg-sage-100 text-sage-700'
              }`}>
                {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
              </span>
              <span className="text-lg font-light text-gray-500">
                {event.price}
              </span>
            </div>

            <h3 className="text-xl font-sans font-thin text-gray-600 mb-3">
              {event.title}
            </h3>
            
            <p className="text-gray-500 font-light mb-6 leading-relaxed">
              {event.description}
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-sm text-gray-500">
                <CalendarIcon className="h-4 w-4" />
                <span className="font-light">{formatDate(event.date)}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-500">
                <Clock className="h-4 w-4" />
                <span className="font-light">{event.time} ({event.duration})</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-500">
                <MapPin className="h-4 w-4" />
                <span className="font-light">{event.location}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-500">
                <Users className="h-4 w-4" />
                <span className="font-light">
                  {event.registered}/{event.capacity} registered
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <button className="w-full py-3 bg-soichu-600 text-white rounded-lg hover:bg-soichu-700 transition duration-200 font-light">
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Global Events */}
      <div className="mt-16 bg-gradient-to-r from-soichu-50 to-cream-50 rounded-lg p-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-sans font-thin text-gray-600 mb-4">
            Upcoming Global Celebrations
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto">
            Join thousands of practitioners worldwide in synchronized ceremonies marking 
            sacred seasons and celestial events.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-sans font-thin text-gray-600 mb-2">
              Spring Equinox Ceremony
            </h3>
            <p className="text-gray-500 font-light mb-3">
              March 20, 2025 • Global Synchronization
            </p>
            <p className="text-gray-500 font-light">
              Celebrate the balance of light and dark with art creation and ritual practice.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-sans font-thin text-gray-600 mb-2">
              Summer Solstice Festival
            </h3>
            <p className="text-gray-500 font-light mb-3">
              June 21, 2025 • 24-Hour Celebration
            </p>
            <p className="text-gray-500 font-light">
              Honor the peak of solar energy with continuous art ceremonies and meditation.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <button className="px-8 py-3 bg-soichu-600 text-white rounded-lg hover:bg-soichu-700 transition duration-200 font-light">
            View Full Calendar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calendar;