import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Rituals from './pages/Rituals';
import Shop from './pages/Shop';
import Library from './pages/Library';
import Premium from './pages/Premium';
import Calendar from './pages/Calendar';
import Resources from './pages/Resources';
import Community from './pages/Journal';
import Contact from './pages/Contact';
import Essence from './pages/Essence';
import Experiences from './pages/Experiences';
import Meditations from './pages/Meditations';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About setCurrentPage={setCurrentPage} />;
      case 'rituals':
        return <Rituals setCurrentPage={setCurrentPage} />;
      case 'shop':
        return <Shop setCurrentPage={setCurrentPage} />;
      case 'library':
        return <Library setCurrentPage={setCurrentPage} />;
      case 'premium':
        return <Premium setCurrentPage={setCurrentPage} />;
      case 'calendar':
        return <Calendar setCurrentPage={setCurrentPage} />;
      case 'resources':
        return <Resources setCurrentPage={setCurrentPage} />;
      case 'community':
        return <Community setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <Contact setCurrentPage={setCurrentPage} />;
      case 'essence':
        return <Essence setCurrentPage={setCurrentPage} />;
      case 'experiences':
        return <Experiences setCurrentPage={setCurrentPage} />;
      case 'meditations':
        return <Meditations setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="transition-all duration-300 ease-in-out">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;