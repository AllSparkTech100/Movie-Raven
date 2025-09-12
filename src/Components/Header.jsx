/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'HOME', active: true },
    { name: 'MOVIE' },
    { name: 'TV SHOW' },
    { name: 'PRICING' },
    { name: 'BLOG' },
    { name: 'CONTACTS' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#181B20] shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-16 px-8 md:px-3">
        <div className="flex items-center gap-2">
          <span>{/* Movie reel icon */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="18" fill="#E6C800" />
              <circle cx="14" cy="16" r="2" fill="#181B20" />
              <circle cx="26" cy="16" r="2" fill="#181B20" />
              <circle cx="20" cy="24" r="2" fill="#181B20" />
              <circle cx="20" cy="20" r="1" fill="#181B20" />
              <path d="M6 28 Q20 38 34 28" stroke="#E6C800" strokeWidth="2" fill="none" />
            </svg>
          </span>
          <span className="text-white text-xl font-bold tracking-wide">Movflix</span>
        </div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href="#"
              className={`${
                link.active
                  ? 'text-[#E6C800] font-bold text-base'
                  : 'text-white font-bold text-base opacity-85 hover:text-[#E6C800] transition'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 text-white"
          aria-label="Open menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <line x1="4" y1="7" x2="20" y2="7" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="17" x2="20" y2="17" />
          </svg>
        </button>
        <div className="flex items-center gap-4">
          <span className="flex items-center justify-center w-8 h-8">
            <svg width="20" height="20" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
          <span className="w-px h-6 bg-[#2c2f34] mx-2" />
          <span className="flex items-center gap-1 text-white font-bold text-base">
            <svg width="18" height="18" fill="#E6C800" viewBox="0 0 18 18">
              <circle cx="9" cy="9" r="8" stroke="#E6C800" strokeWidth="2" fill="none" />
              <circle cx="9" cy="9" r="3" fill="#E6C800" />
            </svg>
            <span>EN</span>
            <span className="text-xs ml-1">&#9660;</span>
          </span>
          <button className="border-2 border-[#E6C800] rounded-full px-6 py-1 font-bold text-white text-base transition hover:bg-[#E6C800] hover:text-[#181B20]">SIGN IN</button>
        </div>
      </div>
      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className={`md:hidden bg-[#181B20] shadow-lg w-full absolute top-16 left-0 z-40 animate-fade-in`}>
          <nav className="flex flex-col gap-2 py-4 px-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href="#"
                className={`${
                  link.active
                    ? 'text-[#E6C800] font-bold text-base py-2'
                    : 'text-white font-bold text-base opacity-85 hover:text-[#E6C800] transition py-2'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;