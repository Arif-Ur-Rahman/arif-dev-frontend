'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function EnhancedFooter() {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { href: '#services-section', label: 'Services' },
    { href: '#works-section', label: 'Works' },
    { href: '#resume-section', label: 'Resume' },
    { href: '#skills-section', label: 'Skills' },
    { href: '#testimonials-section', label: 'Testimonials' },
    { href: '#contact-section', label: 'Contact' },
  ];

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
      text: 'mail@gerolddesign.com',
      href: 'mailto:mail@gerolddesign.com'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      ),
      text: 'Your City, Country',
      href: '#'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
      ),
      text: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    }
  ];

  const socialLinks = [
    { href: 'https://github.com', icon: 'github', label: 'GitHub' },
    { href: 'https://linkedin.com', icon: 'linkedin', label: 'LinkedIn' },
    { href: 'https://twitter.com', icon: 'twitter', label: 'Twitter' },
    { href: 'https://dribbble.com', icon: 'dribbble', label: 'Dribbble' },
    { href: 'https://behance.net', icon: 'behance', label: 'Behance' },
  ];

  const getSocialIcon = (platform: string) => {
    const icons = {
      github: (
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      ),
      linkedin: (
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      ),
      twitter: (
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      ),
      dribbble: (
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.434 6.417c1.336 0 2.418 1.082 2.418 2.418 0 1.336-1.082 2.418-2.418 2.418-1.336 0-2.418-1.082-2.418-2.418 0-1.336 1.082-2.418 2.418-2.418zM12 21.6c-5.301 0-9.6-4.299-9.6-9.6S6.699 2.4 12 2.4s9.6 4.299 9.6 9.6-4.299 9.6-9.6 9.6zm5.434-11.885c-.682-.148-1.354-.22-2.017-.22-1.25 0-2.447.27-3.536.76-.12.054-.238.11-.355.168-.95.48-1.8 1.14-2.536 1.95-.12.13-.238.26-.355.39.63.27 1.28.5 1.95.68.12-1.25.39-2.47.81-3.63.12-.39.26-.76.41-1.12.9.22 1.8.33 2.71.33.68 0 1.35-.07 2-.19z"/>
      ),
      behance: (
        <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.466v1.813H2.546v2.725h3.586v1.773H2.546v3.656h3.92v1.812z"/>
      )
    };
    return icons[platform as keyof typeof icons] || icons.github;
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/assets/img/logo/logo.png" 
                alt="Logo" 
                width={140} 
                height={45}
                className="h-11 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              A passionate developer creating amazing digital experiences. 
              Let&apos;s build something extraordinary together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-600 text-gray-300 hover:text-white p-2 rounded-lg transition-all duration-300 transform hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    {getSocialIcon(social.icon)}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-0.5 flex-shrink-0">
                    {item.icon}
                  </span>
                  <a 
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              &copy; {currentYear} All rights reserved by{' '}
              <a 
                href="https://yourportfolio.com" 
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Your Name
              </a>
            </div>

            {/* Additional Links */}
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>

            {/* Back to Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-all duration-300 transform hover:-translate-y-1"
              aria-label="Back to top"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>

          </div>
        </div>
      </div>
    </footer>
  );
}