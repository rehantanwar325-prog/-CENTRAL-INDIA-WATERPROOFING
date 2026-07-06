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
      {/* Deep 3D Background */}
      <div className="absolute inset-0 bg-slate-950 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden">
        {/* Animated 3D Liquid Waves */}
        <div className="absolute inset-x-0 bottom-0 h-full w-full perspective-3d-sea pointer-events-none opacity-40">
          <svg className="waves waves-3d" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z" />
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(14,165,233,0.15)" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(56,189,248,0.1)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(16,185,129,0.08)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(14,165,233,0.25)" />
            </g>
          </svg>
        </div>

        {/* Large Floating 3D Glowing Orbs */}
        <div className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] animate-orb-1 pointer-events-none" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] animate-orb-2 pointer-events-none" />
        <div className="absolute top-[30%] right-[15%] w-[300px] h-[300px] bg-cyan-500/15 rounded-full blur-[90px] animate-orb-1 pointer-events-none" style={{ animationDelay: '-5s' }} />

        {/* Floating 3D Glass Rings and Circles */}
        <div className="absolute top-1/4 left-[10%] w-32 h-32 border-2 border-white/5 rounded-full animate-float pointer-events-none shadow-[0_0_50px_rgba(255,255,255,0.02)]" />
        <div className="absolute bottom-1/4 right-[8%] w-48 h-48 border border-white/5 rounded-full animate-float-delayed pointer-events-none" />
      </div>

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
            Best Roof Waterproofing
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-cyan-300 to-emerald-300">
              Company in Maharashtra
            </span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-blue-100/80 max-w-3xl mx-auto mb-10 animate-fade-in-up leading-relaxed" style={{ animationDelay: '200ms' }}>
            Maharashtra&apos;s #1 rated waterproofing experts serving <strong className="text-white font-semibold">Nagpur, Akola &amp; Chandrapur</strong>. 
            Specialized in <strong className="text-white font-semibold">SEALROOF CETROOF Treatment</strong> with guaranteed leak-proof protection &amp; warranty.
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
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="font-medium">5 Star Rated</span>
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