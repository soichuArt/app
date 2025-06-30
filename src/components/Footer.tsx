import React, { useState } from 'react';
import { ExternalLink, Facebook, Instagram, Youtube, Music, Linkedin, X } from 'lucide-react';

const Footer = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  const PrivacyPolicyModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-geomanist font-ultralight text-gray-500 geomanist-ultra-thin">
            Privacy Policy
          </h2>
          <button
            onClick={() => setShowPrivacyPolicy(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <p className="text-sm text-gray-500 font-light leading-relaxed">
            At Soichu, we are committed to protecting your privacy and ensuring that your personal data is handled with care and respect. This privacy policy explains how we collect, use, and protect your information when you interact with our website or services.
          </p>

          <div>
            <h3 className="text-lg font-geomanist font-ultralight text-gray-500 mb-3 geomanist-ultra-thin">
              1. Data We Collect
            </h3>
            <p className="text-sm text-gray-500 font-light leading-relaxed mb-2">
              We may collect personal information such as your name, email address, and country of residence when you:
            </p>
            <ul className="text-sm text-gray-500 font-light space-y-1 ml-4">
              <li>• Contact us through forms or email</li>
              <li>• Subscribe to our newsletter</li>
              <li>• Purchase or inquire about our services</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-geomanist font-ultralight text-gray-500 mb-3 geomanist-ultra-thin">
              2. How We Use Your Data
            </h3>
            <p className="text-sm text-gray-500 font-light leading-relaxed mb-2">
              Your information is used only to:
            </p>
            <ul className="text-sm text-gray-500 font-light space-y-1 ml-4 mb-2">
              <li>• Respond to your messages and requests</li>
              <li>• Send you relevant updates, only if you have subscribed</li>
              <li>• Improve our services and understand our audience</li>
            </ul>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              We do not sell, rent, or share your personal data with third parties.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geomanist font-ultralight text-gray-500 mb-3 geomanist-ultra-thin">
              3. Legal Basis (EU Residents)
            </h3>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              For individuals in the European Union, we process your data based on your consent (Article 6.1(a) GDPR) and/or our legitimate interests (Article 6.1(f) GDPR), such as communicating with you and improving our services.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geomanist font-ultralight text-gray-500 mb-3 geomanist-ultra-thin">
              4. Your Rights
            </h3>
            <p className="text-sm text-gray-500 font-light leading-relaxed mb-2">
              You have the right to:
            </p>
            <ul className="text-sm text-gray-500 font-light space-y-1 ml-4 mb-2">
              <li>• Access your data</li>
              <li>• Request correction or deletion</li>
              <li>• Withdraw your consent at any time</li>
              <li>• Lodge a complaint with your local data protection authority</li>
            </ul>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              To exercise these rights, please contact us at{' '}
              <a href="mailto:info@soichu.com" className="text-soichu-600 hover:text-soichu-700">
                info@soichu.com
              </a>.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geomanist font-ultralight text-gray-500 mb-3 geomanist-ultra-thin">
              5. Data Security
            </h3>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              We use appropriate technical and organizational measures to protect your data against unauthorized access, loss, or misuse.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geomanist font-ultralight text-gray-500 mb-3 geomanist-ultra-thin">
              6. Cookies
            </h3>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              This website may use cookies to enhance your browsing experience. You can adjust your browser settings to decline cookies if you prefer.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geomanist font-ultralight text-gray-500 mb-3 geomanist-ultra-thin">
              7. Changes to This Policy
            </h3>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              We may update this privacy policy from time to time. The latest version will always be available on this page.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geomanist font-ultralight text-gray-500 mb-3 geomanist-ultra-thin">
              8. Contact
            </h3>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              If you have any questions or concerns regarding this policy or your data, please contact us at:
            </p>
            <div className="mt-2">
              <p className="text-sm font-medium text-gray-600">Soichu</p>
              <p className="text-sm text-gray-500 font-light">
                Email:{' '}
                <a href="mailto:info@soichu.com" className="text-soichu-600 hover:text-soichu-700">
                  info@soichu.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Acknowledgment Banner */}
      <div className="bg-soichu-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2">
            <h3 className="text-sm font-geomanist font-ultralight geomanist-ultra-thin">
              SOICHU acknowledges the Traditional Owners of Country throughout Australia and their continuing connection to land, sea and community.
            </h3>
            <h3 className="text-sm font-geomanist font-ultralight geomanist-ultra-thin">
              SOICHU also acknowledges the Indigenous communities throughout Argentina and the rest of Latin America as the Traditional owners of their territories.
            </h3>
            <h3 className="text-sm font-geomanist font-ultralight geomanist-ultra-thin">
              SOICHU pays its respects to them and their cultures, to the Elders past, present, and emerging.
            </h3>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-500 font-light text-sm">
                ® SOICHU.ART 2025
              </p>
            </div>

            {/* Social Media */}
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.facebook.com/soichu.art"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-soichu-600 transition duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/soichu.art"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-soichu-600 transition duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/@soichuart"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-soichu-600 transition duration-200"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://open.spotify.com/show/5Uv5Q2toxlK3b0MJ6i5FYz?si=d265ee45842f4972"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-soichu-600 transition duration-200"
                aria-label="Spotify"
              >
                <Music className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/fabian-perez-arias/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-soichu-600 transition duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>

            {/* Privacy Policy */}
            <div className="text-center md:text-right">
              <button 
                onClick={() => setShowPrivacyPolicy(true)}
                className="text-gray-500 hover:text-gray-600 transition duration-200 font-light text-sm"
              >
                Privacy Policy
              </button>
            </div>
          </div>

          {/* Additional Footer Content */}
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-400 font-light">
              10% of Soichu's profits will be donated to aligned nonprofit organizations.
            </p>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacyPolicy && <PrivacyPolicyModal />}
    </>
  );
};

export default Footer;