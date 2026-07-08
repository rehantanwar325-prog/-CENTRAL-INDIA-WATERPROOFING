'use client'

import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'

const services = [
  {
    img: '/images/services/sealroof.png',
    title: 'SEALROOF CETROOF Treatment',
    description: 'Advanced thermal insulation & waterproofing coating system. Provides permanent leak-proof protection with warranty as per material used.',
    features: ['Warranty*', 'Thermal Insulation', 'UV Resistant', 'Eco-Friendly'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    img: '/images/services/terrace.png',
    title: 'Roof & Terrace Waterproofing',
    description: 'Complete waterproofing for flat roofs, sloped roofs, and terraces using premium liquid and sheet membranes.',
    features: ['Liquid Membrane', 'Sheet Membrane', 'Polyurethane Coating', 'Crack Bridging'],
    gradient: 'from-emerald-500 to-green-500',
  },
  {
    img: '/images/services/bathroom.png',
    title: 'Bathroom & Wet Area Waterproofing',
    description: 'Professional waterproofing for bathrooms, toilets, kitchens, and wet areas. Prevents internal water seepage, dampness, and mold growth in walls and floor tiles.',
    features: ['Seepage Prevention', 'Mold Resistance', 'Seamless Barrier', 'Tile Friendly'],
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    img: '/images/services/roller_coating.png',
    title: 'Roller Applied Roof Coating',
    description: 'Professional roller-applied white waterproofing coating for flat rooftops. Provides excellent heat reflection, UV protection, and long-lasting leak-proof surface finish.',
    features: ['Heat Reflective', 'UV Protection', 'Leak-Proof Finish', 'Professional Application'],
    gradient: 'from-purple-500 to-violet-500',
  },
  {
    img: '/images/services/wall_seepage.jpg',
    title: 'Wall Seepage & Dampness Treatment',
    description: 'Professional treatment for interior and exterior wall seepage, dampness, and paint peeling. Prevents moisture ingress and structural damage in residential and commercial buildings.',
    features: ['Seepage Control', 'Dampness Treatment', 'Anti-Fungal Barrier', 'Paint Protection'],
    gradient: 'from-teal-500 to-emerald-500',
  },
  {
    img: '/images/services/basement.png',
    title: 'Basement & Foundation Waterproofing',
    description: 'Professional basement and foundation waterproofing services. Prevents underground water seepage, moisture entry, and dampness in concrete walls and floors.',
    features: ['Foundation Protection', 'Seepage Prevention', 'Underground Barrier', 'Moisture Control'],
    gradient: 'from-rose-500 to-pink-500',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 lg:py-32 section-gradient relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent pointer-events-none" />
      
      <div className="container-custom relative">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">Our Waterproofing Services</span>
          <h2 id="services-heading" className="section-title">
            Professional <span className="gradient-text">Waterproofing Services</span> in Nagpur
          </h2>
          <p className="section-subtitle">
            Best waterproofing services in Nagpur, Akola &amp; Chandrapur, India. 
            From residential homes to commercial &amp; industrial buildings, we provide guaranteed leak-proof protection with warranty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group relative bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/80 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="relative -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 overflow-hidden rounded-t-2xl h-44">
                  <img
                    src={service.img}
                    alt={`${service.title} Nagpur - Central India Waterproofing`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      const target = e.currentTarget
                      target.style.display = 'none'
                      const parent = target.parentElement
                      if (parent) {
                        parent.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br')
                        if (service.gradient) {
                          parent.classList.add(...service.gradient.split(' ').filter(Boolean))
                        }
                        parent.innerHTML = `<div class="text-white/80 text-center px-4"><svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 mx-auto mb-2 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg><p class="text-xs font-medium opacity-80">Waterproofing</p></div>`
                      }
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">{service.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span key={feature} className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-50 text-gray-600 text-xs font-medium rounded-full border border-gray-100">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      {feature}
                    </span>
                  ))}
                </div>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm group/link"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="#contact"
            className="btn-primary text-lg px-10 py-4 inline-flex items-center gap-3"
          >
            Get Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}