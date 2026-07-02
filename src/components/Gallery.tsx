'use client'

import { useState } from 'react'

const projects = [
  {
    src: 'https://images.unsplash.com/photo-1541888946425-d81bb3c3e7b8?auto=format&fit=crop&w=600&q=80',
    title: 'Roof Waterproofing',
    desc: 'Bitumen membrane application for terrace & roof leak protection',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=80',
    title: 'Terrace Treatment',
    desc: 'SEALROOF CETROOF thermal insulation & waterproofing coating',
    gradient: 'from-emerald-500 to-green-500',
  },
  {
    src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
    title: 'Basement Waterproofing',
    desc: 'Crystalline technology for underground structure protection',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    src: 'https://images.unsplash.com/photo-1624969862644-791f3dc98927?auto=format&fit=crop&w=600&q=80',
    title: 'Wall Seepage Treatment',
    desc: 'External & internal wall dampness solution',
    gradient: 'from-purple-500 to-violet-500',
  },
  {
    src: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80',
    title: 'Bathroom Waterproofing',
    desc: 'Liquid membrane coating for wet areas & bathrooms',
    gradient: 'from-rose-500 to-pink-500',
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=600&q=80',
    title: 'Expansion Joint Treatment',
    desc: 'PU sealant & waterbar joint waterproofing',
    gradient: 'from-teal-500 to-cyan-500',
  },
]

function FallbackSVG({ gradient, title }: { gradient: string; title: string }) {
  return (
    <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${gradient} opacity-20`}>
      <svg className="w-16 h-16 text-white" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
        <path d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
        <path d="M12 10v4" />
      </svg>
    </div>
  )
}

function ImageWithFallback({ src, title, gradient }: { src: string; title: string; gradient: string }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
      {failed ? (
        <FallbackSVG gradient={gradient} title={title} />
      ) : (
        <img
          src={src}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}

export default function Gallery() {
  return (
    <section
      className="py-20 lg:py-32 section-gradient relative overflow-hidden"
      aria-labelledby="gallery-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent pointer-events-none" />

      <div className="container-custom relative">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">Our Work</span>
          <h2 id="gallery-heading" className="section-title">
            Our <span className="gradient-text">Waterproofing</span> Projects
          </h2>
          <p className="section-subtitle">
            5000+ successful waterproofing projects completed across Central India with guaranteed quality and warranty as per material used.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-300/60 transition-all duration-500 hover:-translate-y-1"
            >
              <ImageWithFallback src={p.src} title={p.title} gradient={p.gradient} />
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${p.gradient}`} />
                  <h3 className="font-bold text-gray-900">{p.title}</h3>
                </div>
                <p className="text-sm text-gray-500">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}