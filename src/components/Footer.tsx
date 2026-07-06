'use client'

import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#locations', label: 'Locations' },
    { href: '#contact', label: 'Contact' },
  ]

  const services = [
    'SEALROOF CETROOF Treatment',
    'Roof & Terrace Waterproofing',
    'Spray Waterproofing Coating',
    'Roller Applied Roof Coating',
    'Roof Crack Repair Treatment',
    'Membrane Sheet Waterproofing',
  ]

  const locations = [
    { name: 'Nagpur', type: 'Head Office' },
    { name: 'Akola', type: 'Branch' },
    { name: 'Chandrapur', type: 'Branch' },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-700' },
  ]

  return (
    <footer className="bg-gray-950 relative overflow-hidden" role="contentinfo">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="container-custom relative py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12 lg:mb-16">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold shadow-lg">CI</span>
              <div>
                <span className="text-lg font-bold text-white block leading-tight">CENTRAL INDIA</span>
                <span className="text-sm font-semibold text-blue-400">WATERPROOFING</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              Maharashtra&apos;s #1 rated roof waterproofing company with 25+ years of excellence. 
              Best waterproofing services in Nagpur, Akola &amp; Chandrapur. 
              Specialized in SEALROOF CETROOF Treatment, terrace waterproofing, spray coating &amp; membrane sheet waterproofing with warranty.
            </p>
            <div className="space-y-3">
              <a href="tel:+918975138745" className="flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors group">
                <span className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                  <Phone className="w-4 h-4" />
                </span>
                <span className="text-sm">+91 89751 38745</span>
              </a>
              <a href="mailto:yusuftagala1983@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors group">
                <span className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                  <Mail className="w-4 h-4" />
                </span>
                <span className="text-sm">yusuftagala1983@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400 group">
                <span className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </span>
                <address className="not-italic text-sm leading-relaxed">
                  Babu Manzil, Plot No. 56 Lahanji Layout,<br />
                  Old Ring Road Mankapur, opp. Maqbul Masjid<br />
                  Nagpur - 440030, Maharashtra
                </address>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Locations</h4>
            <ul className="space-y-3 mb-6">
              {locations.map((loc) => (
                <li key={loc.name}>
                  <a href="#locations" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center justify-between">
                    <span>{loc.name}</span>
                    <span className="text-xs text-blue-400">{loc.type}</span>
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Follow Us</h4>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`w-10 h-10 rounded-xl bg-gray-800 text-gray-400 flex items-center justify-center ${social.color} hover:text-white transition-all hover:-translate-y-0.5`}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Central India Waterproofing Agency. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a href="#contact" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
              <a href="#contact" className="hover:text-gray-300 transition-colors">Terms of Service</a>
              <a href="tel:+918975138745" className="hover:text-gray-300 transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}