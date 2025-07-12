import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('ideas');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);

      // Determine active section
      const sections = ['ideas', 'work', 'about', 'services', 'careers', 'contact'];
      const scrollPosition = currentScrollY + 100; // Offset for header height

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navigationItems = [
    { name: 'Work', href: '#work', section: 'work' },
    { name: 'About', href: '#about', section: 'about' },
    { name: 'Services', href: '#services', section: 'services' },
    { name: 'Ideas', href: '#ideas', section: 'ideas' },
    { name: 'Careers', href: '#careers', section: 'careers' },
    { name: 'Contact', href: '#contact', section: 'contact' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${lastScrollY > 50 ? 'bg-orange-500/90 backdrop-blur-sm' : 'bg-orange-500'}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('ideas')}
              className="focus:outline-none"
            >
              <img 
                src="/logo-suit-media.png" 
                alt="Suit Media" 
                className="h-10 w-auto"
              />
            </button>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.section)}
                className={`nav-link text-white text-sm transition-colors duration-200 focus:outline-none ${
                  activeSection === item.section
                    ? 'border-b-2 border-white pb-1' 
                    : 'hover:text-orange-200'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
