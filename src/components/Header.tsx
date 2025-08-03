import React, { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';

interface HeaderProps {
  onFreeTrialClick: () => void;
  onDemoClick: () => void;
}

export default function Header({ onFreeTrialClick, onDemoClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-2 rounded-lg">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              BrokerMint
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className={`font-medium transition-colors hover:text-blue-600 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>
              Features
            </a>
            <a href="#technology" className={`font-medium transition-colors hover:text-blue-600 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>
              Technology
            </a>
            <a href="#benefits" className={`font-medium transition-colors hover:text-blue-600 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>
              Benefits
            </a>
            <a href="#pricing" className={`font-medium transition-colors hover:text-blue-600 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>
              Pricing
            </a>
            <button 
              onClick={onFreeTrialClick}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Request Demo
            </button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
                Features
              </a>
              <a href="#technology" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
                Technology
              </a>
              <a href="#benefits" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
                Benefits
              </a>
              <a href="#pricing" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
                Pricing
              </a>
              <button 
                onClick={onFreeTrialClick}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors w-full"
              >
                Request Demo
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}