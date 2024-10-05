import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import GeomatixLogo from './GeomatixLogo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-primary-white/80 dark:bg-primary-black/80 backdrop-blur-sm z-50 shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <GeomatixLogo className="w-32 h-32" />
        </div>
        <nav className="hidden md:flex space-x-6">
          <button onClick={() => scrollToSection('about')} className="text-primary-black dark:text-primary-white hover:text-primary-orange transition-colors">About</button>
          <button onClick={() => scrollToSection('services')} className="text-primary-black dark:text-primary-white hover:text-primary-orange transition-colors">Services</button>
          <button onClick={() => scrollToSection('solutions')} className="text-primary-black dark:text-primary-white hover:text-primary-orange transition-colors">Solutions</button>
          <button onClick={() => scrollToSection('success-stories')} className="text-primary-black dark:text-primary-white hover:text-primary-orange transition-colors">Success Stories</button>
          <button onClick={() => scrollToSection('team')} className="text-primary-black dark:text-primary-white hover:text-primary-orange transition-colors">Team</button>
          <button onClick={() => scrollToSection('contact')} className="text-primary-black dark:text-primary-white hover:text-primary-orange transition-colors">Contact</button>
        </nav>
        <div className="flex items-center space-x-4">
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-secondary-gray dark:hover:bg-secondary-dark-gray transition-colors">
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2 rounded-full hover:bg-secondary-gray dark:hover:bg-secondary-dark-gray transition-colors">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-primary-white dark:bg-primary-black border-t border-secondary-gray dark:border-secondary-dark-gray">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button onClick={() => scrollToSection('about')} className="text-primary-black dark:text-primary-white hover:text-primary-orange transition-colors">About</button>
            <button onClick={() => scrollToSection('services')} className="text-primary-black dark:text-primary-white hover:text-primary-orange transition-colors">Services</button>
            <button onClick={() => scrollToSection('solutions')} className="text-primary-black dark:text-primary-white hover:text-primary-orange transition-colors">Solutions</button>
            <button onClick={() => scrollToSection('success-stories')} className="text-primary-black dark:text-primary-white hover:text-primary-orange transition-colors">Success Stories</button>
            <button onClick={() => scrollToSection('team')} className="text-primary-black dark:text-primary-white hover:text-primary-orange transition-colors">Team</button>
            <button onClick={() => scrollToSection('contact')} className="text-primary-black dark:text-primary-white hover:text-primary-orange transition-colors">Contact</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;