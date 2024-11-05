"use client"

import React from 'react';
import { Menu, Croissant } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-orange-900/80 backdrop-blur-md shadow-lg' : 'bg-gradient-to-b from-black/40 to-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Croissant className="h-6 w-6 text-white" />
            <span className="text-xl font-serif text-white">Pão Do Pastor</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="text-white/90 hover:text-white px-3 py-2 rounded-md transition-colors hover:bg-white/10">
                Início
              </a>
              <a href="/historia" className="text-white/90 hover:text-white px-3 py-2 rounded-md transition-colors hover:bg-white/10">
                História
              </a>
              <a href="/menu" className="text-white/90 hover:text-white px-3 py-2 rounded-md transition-colors hover:bg-white/10">
                Menu
              </a>
              <a href="/ingredientes" className="text-white/90 hover:text-white px-3 py-2 rounded-md transition-colors hover:bg-white/10">
                Ingredientes
              </a>
              <a href="/contacto" className="text-white/90 hover:text-white px-3 py-2 rounded-md transition-colors hover:bg-white/10">
                Contacto
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-orange-900/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="text-white/90 hover:text-white block px-3 py-2 rounded-md transition-colors hover:bg-white/10">
              Início
            </a>
            <a href="/historia" className="text-white/90 hover:text-white block px-3 py-2 rounded-md transition-colors hover:bg-white/10">
              História
            </a>
            <a href="/menu" className="text-white/90 hover:text-white block px-3 py-2 rounded-md transition-colors hover:bg-white/10">
              Menu
            </a>
            <a href="/ingredientes" className="text-white/90 hover:text-white block px-3 py-2 rounded-md transition-colors hover:bg-white/10">
              Ingredientes
            </a>
            <a href="/contacto" className="text-white/90 hover:text-white block px-3 py-2 rounded-md transition-colors hover:bg-white/10">
              Contacto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}