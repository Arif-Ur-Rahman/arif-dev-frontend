'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#services-section', label: 'Services' },
    { href: '#works-section', label: 'Works' },
    { href: '#resume-section', label: 'Resume' },
    { href: '#skills-section', label: 'Skills' },
    { href: '#testimonials-section', label: 'Testimonials' },
    { href: '#contact-section', label: 'Contact' },
  ];

  return (
    <>
      {/* Absolute Header (Visible initially) */}
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between py-4">
            
            {/* Logo */}
            <div className="logo-box">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/assets/img/logo/logo.png" 
                  alt="Logo" 
                  width={120} 
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            {/* Email Info - Hidden on mobile */}
            <div className="hidden md:inline-block">
              <ul className="flex items-center space-x-6">
                <li>
                  <a 
                    href="mailto:mail@gerolddesign.com" 
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    mail@gerolddesign.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden lg:block">
              <ul className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a 
                      href={item.href}
                      className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Hire Me Button - Hidden on mobile */}
            <div className="hidden lg:block">
              <a 
                href="#contact-section" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Hire me!
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex flex-col space-y-1 p-2"
                aria-label="Toggle menu"
              >
                <span className={`w-6 h-0.5 bg-gray-700 transition-transform ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}></span>
                <span className={`w-6 h-0.5 bg-gray-700 transition-opacity ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`w-6 h-0.5 bg-gray-700 transition-transform ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky Header (Appears on scroll) */}
      <header className={`fixed top-0 left-0 w-full z-40 bg-white shadow-lg transition-all duration-300 ${
        isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between py-3">
            
            {/* Logo */}
            <div className="logo-box">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/assets/img/logo/logo.png" 
                  alt="Logo" 
                  width={100} 
                  height={35}
                  className="h-8 w-auto"
                />
              </Link>
            </div>

            {/* Email Info - Hidden on mobile */}
            <div className="hidden md:inline-block">
              <ul className="flex items-center space-x-6">
                <li>
                  <a 
                    href="mailto:mail@gerolddesign.com" 
                    className="text-gray-700 hover:text-blue-600 transition-colors text-sm"
                  >
                    mail@gerolddesign.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden lg:block">
              <ul className="flex items-center space-x-6">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a 
                      href={item.href}
                      className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Hire Me Button - Hidden on mobile */}
            <div className="hidden lg:block">
              <a 
                href="#contact-section" 
                className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
              >
                Hire me!
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex flex-col space-y-1 p-2"
                aria-label="Toggle menu"
              >
                <span className={`w-6 h-0.5 bg-gray-700 transition-transform ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}></span>
                <span className={`w-6 h-0.5 bg-gray-700 transition-opacity ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`w-6 h-0.5 bg-gray-700 transition-transform ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-30 bg-white transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {/* Mobile Navigation */}
          <nav className="text-center">
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-semibold text-gray-700 hover:text-blue-600 transition-colors block py-2"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Contact Info */}
          <div className="text-center">
            <a 
              href="mailto:mail@gerolddesign.com" 
              className="text-lg text-gray-600 hover:text-blue-600 transition-colors block mb-4"
            >
              mail@gerolddesign.com
            </a>
            <a 
              href="#contact-section" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              Hire me!
            </a>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-4 right-4 p-2 text-gray-700"
          aria-label="Close menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </>
  );
}