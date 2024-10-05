import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Solutions from './components/Solutions';
import SuccessStories from './components/SuccessStories';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LogoShowcase from './components/LogoShowcase';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="bg-primary-white dark:bg-primary-black text-primary-black dark:text-primary-white">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Solutions />
          <SuccessStories />
          <LogoShowcase />
          <Team />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;