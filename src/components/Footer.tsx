import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import GeomatixLogo from './GeomatixLogo';

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer className="bg-primary-black dark:bg-primary-white py-12 text-primary-white dark:text-primary-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <div className="flex items-center space-x-2 mb-2">
              <GeomatixLogo className="w-32 h-32" />
            </div>
            <p className="text-secondary-gray dark:text-secondary-dark-gray">Revolutionizing geospatial data analysis</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4 text-primary-orange">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-secondary-gray dark:text-secondary-dark-gray hover:text-primary-orange transition-colors">About</a></li>
              <li><a href="#services" className="text-secondary-gray dark:text-secondary-dark-gray hover:text-primary-orange transition-colors">Services</a></li>
              <li><a href="#solutions" className="text-secondary-gray dark:text-secondary-dark-gray hover:text-primary-orange transition-colors">Solutions</a></li>
              <li><a href="#success-stories" className="text-secondary-gray dark:text-secondary-dark-gray hover:text-primary-orange transition-colors">Success Stories</a></li>
              <li><a href="#team" className="text-secondary-gray dark:text-secondary-dark-gray hover:text-primary-orange transition-colors">Team</a></li>
              <li><a href="#contact" className="text-secondary-gray dark:text-secondary-dark-gray hover:text-primary-orange transition-colors">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-4 text-primary-orange">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-gray dark:text-secondary-dark-gray hover:text-primary-orange transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-secondary-gray dark:text-secondary-dark-gray hover:text-primary-orange transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-secondary-gray dark:text-secondary-dark-gray hover:text-primary-orange transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-secondary-gray dark:text-secondary-dark-gray hover:text-primary-orange transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-secondary-dark-gray dark:border-secondary-gray text-center text-secondary-gray dark:text-secondary-dark-gray">
          <p>&copy; {new Date().getFullYear()} Geomatix Innovative Systems Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;