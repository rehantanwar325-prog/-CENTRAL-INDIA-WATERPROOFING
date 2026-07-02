'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, Menu, X } from 'lucide-react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#locations', label: 'Locations' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-gray-200/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            href="#home"
            className={`flex items-center gap-2 font-bold transition-colors ${
              isScrolled ? 'text-blue-900' : 'text-white'
            }`}
            aria-label="Central India Waterproofing - Home"
          >
            <span className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-xs font-bold shadow-lg">CI</span>
              <span className="hidden sm:block text-lg tracking-tight">CENTRAL INDIA <span className="text-blue-600">WATERPROOFING</span></span>
              <span className="sm:hidden text-lg">CIWA</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors text-sm tracking-wide ${
                  isScrolled ? 'text-gray-600 hover:text-blue-700' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+918975138745"
              className="btn-primary text-sm px-5 py-2.5 gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`flex flex-col gap-2 p-4 rounded-2xl ${
            isScrolled ? 'bg-white' : 'bg-white/10 backdrop-blur-lg'
          }`}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 font-medium rounded-xl transition-colors text-center ${
                  isScrolled ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-700' : 'text-white hover:bg-white/10'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+918975138745"
              className="btn-primary mx-4 mt-2 gap-2 justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Phone className="w-4 h-4" />
              +91 89751 38745
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}