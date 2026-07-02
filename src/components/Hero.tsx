'use client'

import Link from 'next/link'
import { Phone, ArrowRight, ShieldCheck, Star, ChevronDown, Droplets } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background with image fallback */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb3c3e7b8?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-blue-900/92 to-slate-900/95" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-400/10 via-transparent to-transparent" />
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="absolute top-1/4 right-1/4 w-20 h-20 border border-blue-400/20 rounded-full animate-float" />
      <div className="absolute bottom-1/3 left-1/4 w-32 h-32 border border-emerald-400/10 rounded-full animate-float-delayed" />
      <div className="absolute top-1/3 left-1/3 w-4 h-4 bg-blue-400/30 rounded-full animate-float" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 right-1/3 w-6 h-6 bg-emerald-400/20 rounded-full animate-float-delayed" />

      <div className="container-custom relative py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-8 backdrop-blur-sm animate-fade-in-up">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>25+ Years of Excellence in Waterproofing</span>
          </div>

          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up"
            style={{ animationDelay: '100ms' }}
          >
            The Permanent & Guaranteed
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-cyan-300 to-emerald-300">
              Waterproofing Solution
            </span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-blue-100/80 max-w-3xl mx-auto mb-10 animate-fade-in-up leading-relaxed" style={{ animationDelay: '200ms' }}>
            Protect your property with Central India&apos;s most trusted waterproofing experts. 
            Specialized in <strong className="text-white font-semibold">SEALROOF CETROOF Treatment</strong> for lasting protection.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <Link
              href="#contact"
              className="btn-primary text-lg px-8 py-4 gap-3 w-full sm:w-auto shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/40"
            >
              Get a Free Inspection
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+918975138745"
              className="btn-secondary text-lg px-8 py-4 gap-3 w-full sm:w-auto"
            >
              <Phone className="w-5 h-5" />
              <span>Call Mo. Yusuf Tagala: 89751 38745</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="flex items-center gap-2 text-blue-200">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="font-medium">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2 text-blue-200">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span className="font-medium">Trusted by 5000+ Clients</span>
            </div>
            <div className="flex items-center gap-2 text-blue-200">
              <Droplets className="w-5 h-5 text-cyan-400" />
              <span className="font-medium">Warranty* as per Material</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/40" />
      </div>
    </section>
  )
}