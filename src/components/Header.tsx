import { ExternalLink } from 'lucide-react';
// import NotificationSystem from './NotificationSystem';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <div className="relative">
             <img 
  src={`${import.meta.env.BASE_URL}logo-solo-cuadrado.png`} 
  alt="Soichu Logo" 
  className="h-12 w-12 object-contain"
/>
            </div>
            <div>
              <h1 className="text-2xl font-sans font-thin text-gray-500 tracking-wide">SOICHU</h1>
              <p className="text-xs text-gray-300 font-thin -mt-1 tracking-wider">art as a living presence</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* <NotificationSystem /> */}
            <a
              href="https://soichu.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2 text-sm font-light text-gray-500 bg-white hover:bg-gray-50 border border-gray-300 rounded-full hover:shadow-md transition duration-200"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Visit Website
            </a>
            {/* <div className="hidden sm:flex items-center space-x-2">
              <div className="w-2 h-2 bg-soichu-400 rounded-full"></div>
              <div className="w-2 h-2 bg-soichu-500 rounded-full"></div>
              <div className="w-2 h-2 bg-soichu-600 rounded-full"></div>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
