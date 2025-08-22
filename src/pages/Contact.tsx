import React, { useState } from 'react';
import { MessageCircle, Mail, Instagram, ExternalLink, MapPin, Phone } from 'lucide-react';

interface ContactProps {
  setCurrentPage: (page: string) => void;
}

const Contact = ({ setCurrentPage }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    interest: 'general',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <MessageCircle className="h-16 w-16 text-soichu-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-geomanist font-ultralight text-gray-500 mb-4 tracking-wide geomanist-ultra-thin">
          contact soichu
        </h1>
        <p className="text-lg text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
          If you have any questions, collaboration proposals, or simply want to connect,
          please leave your message here. We're here to listen and support your journey.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
          <h2 className="text-2xl font-geomanist font-ultralight text-gray-500 mb-6 geomanist-ultra-thin">
            Send us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-light text-gray-500 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-soichu-500 font-light"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-light text-gray-500 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-soichu-500 font-light"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-light text-gray-500 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+123 4567 890"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-soichu-500 font-light"
                />
              </div>
            </div>

            <div>
              <label htmlFor="interest" className="block text-sm font-light text-gray-500 mb-2">
                I'm interested in
              </label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-soichu-500 font-light"
              >
                <option value="general">General Inquiry</option>
                <option value="rituals">Rituals & Readings</option>
                <option value="workshops">Workshops</option>
                <option value="experiences">Experiences</option>
                <option value="premium">Premium Membership</option>
                <option value="collaboration">Collaboration</option>
                <option value="press">Press & Media</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-light text-gray-500 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                placeholder="Write your message…"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-soichu-500 font-light resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-soichu-600 text-white rounded-lg hover:bg-soichu-700 transition duration-200 font-light"
            >
              Send Message
            </button>
          </form>

          {/* WhatsApp Contact */}
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-500 font-light mb-4">Or start a conversation on:</p>
            <a
              href="https://wa.me/61490666858?text=Hello%20Soichu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200 font-light"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Contact Information & Community */}
        <div className="space-y-8">
          {/* Contact Details */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <h3 className="text-xl font-geomanist font-ultralight text-gray-500 mb-6 geomanist-ultra-thin">
              Get in Touch
            </h3>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-soichu-500" />
                <div>
                  <p className="font-light text-gray-600 text-sm">Email</p>
                  <a
                    href="mailto:info@soichu.com"
                    className="text-gray-500 font-light hover:text-soichu-600 transition duration-200"
                  >
                    info@soichu.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MessageCircle className="h-5 w-5 text-soichu-500" />
                <div>
                  <p className="font-light text-gray-600 text-sm">WhatsApp</p>
                  <a
                    href="https://wa.me/61490666858"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 font-light hover:text-soichu-600 transition duration-200"
                  >
                    +61 490 666 858
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin className="h-5 w-5 text-soichu-500" />
                <div>
                  <p className="font-light text-gray-600 text-sm">Location</p>
                  <p className="text-gray-500 font-light text-sm">Bali, Indonesia</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="h-5 w-5 text-soichu-500" />
                <div>
                  <p className="font-light text-gray-600 text-sm">Response Time</p>
                  <p className="text-gray-500 font-light text-sm">Within 24-48 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <h3 className="text-xl font-geomanist font-ultralight text-gray-500 mb-6 geomanist-ultra-thin">
              Connect with Us
            </h3>

            <div className="space-y-4">
              <a
                href="https://soichu.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-200"
              >
                <div className="flex items-center space-x-3">
                  <ExternalLink className="h-5 w-5 text-soichu-600" />
                  <span className="font-light text-gray-600 text-sm">Official Website</span>
                </div>
                <span className="text-gray-500 font-light text-sm">soichu.com</span>
              </a>

              <a
                href="https://www.instagram.com/soichu.art"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-200"
              >
                <div className="flex items-center space-x-3">
                  <Instagram className="h-5 w-5 text-soichu-600" />
                  <span className="font-light text-gray-600 text-sm">Instagram</span>
                </div>
                <span className="text-gray-500 font-light text-sm">@soichu.art</span>
              </a>

              <a
                href="https://www.facebook.com/soichu.art"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-200"
              >
                <div className="flex items-center space-x-3">
                  <ExternalLink className="h-5 w-5 text-soichu-600" />
                  <span className="font-light text-gray-600 text-sm">Facebook</span>
                </div>
                <span className="text-gray-500 font-light text-sm">@soichu.art</span>
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-soichu-50 to-cream-50 rounded-lg p-8">
            <h3 className="text-xl font-geomanist font-ultralight text-gray-500 mb-4 geomanist-ultra-thin">
              Stay Connected
            </h3>
            <p className="text-gray-500 font-light mb-6 text-sm">
              Receive updates about new offerings, upcoming events, and sacred insights
              delivered to your inbox with love and intention.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-soichu-500 font-light text-sm"
              />
              <button className="px-6 py-3 bg-soichu-600 text-white rounded-lg hover:bg-soichu-700 transition duration-200 font-light whitespace-nowrap text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Notice */}
      <div className="mt-16 text-center">
        <p className="text-xs text-gray-400 font-light">
          Your information is protected and will only be used to respond to your message.
        </p>
      </div>

      {/* Community Guidelines */}
      <div className="mt-16 bg-white rounded-lg p-12 shadow-sm border border-gray-200">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-geomanist font-ultralight text-gray-500 mb-4 geomanist-ultra-thin">
            Our Sacred Community
          </h2>
          <p className="text-base text-gray-500 font-light max-w-2xl mx-auto">
            We cultivate a space of respect, authenticity, and spiritual growth.
            All interactions are guided by love, compassion, and sacred intention.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-soichu-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-8 w-8 text-soichu-600" />
            </div>
            <h3 className="text-lg font-geomanist font-ultralight text-gray-500 mb-2 geomanist-ultra-thin">
              Respectful Communication
            </h3>
            <p className="text-gray-500 font-light text-sm">
              We honor all spiritual paths and communicate with kindness and understanding.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-soichu-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <ExternalLink className="h-8 w-8 text-soichu-600" />
            </div>
            <h3 className="text-lg font-geomanist font-ultralight text-gray-500 mb-2 geomanist-ultra-thin">
              Authentic Sharing
            </h3>
            <p className="text-gray-500 font-light text-sm">
              We encourage genuine expression and vulnerability in our sacred space.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-soichu-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Instagram className="h-8 w-8 text-soichu-600" />
            </div>
            <h3 className="text-lg font-geomanist font-ultralight text-gray-500 mb-2 geomanist-ultra-thin">
              Supportive Growth
            </h3>
            <p className="text-gray-500 font-light text-sm">
              We support each other's spiritual journey with encouragement and wisdom.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;