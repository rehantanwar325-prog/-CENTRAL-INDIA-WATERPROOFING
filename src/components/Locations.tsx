'use client'

import { MapPin, Phone, Building2, ArrowRight } from 'lucide-react'

const locations = [
  { 
    city: 'Nagpur',
    img: '/images/nagpur.png', 
    state: 'Maharashtra', 
    type: 'Head Office',
    address: 'Babu Manzil, Plot No. 56 Lahanji Layout, Old Ring Road Mankapur, opp. Maqbul Masjid Nagpur - 440030',
    phones: ['8975138745'],
    mapsQuery: 'Babu+Manzil+Plot+No+56+Lahanji+Layout+Old+Ring+Road+Mankapur+Nagpur+440030',
    gradient: 'from-blue-500 to-cyan-500',
  },
  { 
    city: 'Akola',
    img: '/images/akola.png', 
    state: 'Maharashtra', 
    type: 'Branch',
    address: 'Near Sana Kirana, Shadab Nagar, Akot Faile, Akola',
    phones: ['9075298447'],
    mapsQuery: 'Near+Sana+Kirana+Shadab+Nagar+Akot+Faile+Akola',
    gradient: 'from-emerald-500 to-green-500',
  },
  { 
    city: 'Chandrapur',
    img: '/images/chandrapur.png', 
    state: 'Maharashtra', 
    type: 'Branch',
    address: 'Bagad Khidki, Near Rubi Fabrication Works, Chandrapur 442 402',
    phones: ['9421717595', '9370706752'],
    mapsQuery: 'Bagad+Khidki+Near+Rubi+Fabrication+Works+Chandrapur+442402',
    gradient: 'from-purple-500 to-violet-500',
  },
]

export default function Locations() {
  return (
    <section
      id="locations"
      className="py-20 lg:py-32 section-gradient relative overflow-hidden"
      aria-labelledby="locations-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-emerald-100/30 via-transparent to-transparent pointer-events-none" />
      
      <div className="container-custom relative">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-6">Waterproofing Offices in India</span>
          <h2 id="locations-heading" className="section-title">
            Our Offices in <span className="gradient-text">Nagpur, Akola &amp; Chandrapur</span>
          </h2>
          <p className="section-subtitle">
            Head office in Nagpur with branches in Akola and Chandrapur. Best waterproofing agency across Vidarbha, India. Visit us or call for a free inspection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {locations.map((location) => (
            <article
              key={location.city}
              className="group relative bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/80 hover:-translate-y-2 overflow-hidden"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${location.gradient} opacity-60`} />
              
              <div className="relative z-10">
                <div className="relative -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-5 overflow-hidden rounded-t-2xl h-36">
                  <img
                    src={location.img}
                    alt={`Waterproofing Office in ${location.city}, Maharashtra - Central India Waterproofing`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      const target = e.currentTarget
                      target.style.display = 'none'
                      const parent = target.parentElement
                      if (parent) {
                        parent.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br')
                        if (location.gradient) {
                          parent.classList.add(...location.gradient.split(' ').filter(Boolean))
                        }
                        parent.innerHTML = `<div class="text-white/80 text-center px-4"><svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 mx-auto mb-1 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg><p class="text-xs font-medium opacity-80">${location.city}</p></div>`
                      }
                    }}
                  />
                </div>
                <div className="flex items-start gap-4 mb-5">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${location.gradient} flex items-center justify-center shadow-lg`}>
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-gray-900 text-lg">{location.city}</h3>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-600">{location.type}</span>
                    </div>
                    <p className="text-sm text-gray-500">{location.state}</p>
                  </div>
                </div>

                <div className="mb-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="flex items-start gap-3 text-sm text-gray-600">
                    <Building2 className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{location.address}</span>
                  </div>
                </div>

                {location.phones && location.phones.length > 0 && (
                  <div className="mb-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100 flex flex-col gap-2">
                    {location.phones.map((phone) => (
                      <a key={phone} href={`tel:+91${phone}`} className="flex items-center gap-3 text-sm font-semibold text-green-700 hover:text-green-800 transition-colors">
                        <Phone className="w-4 h-4" />
                        <span>+91 {phone}</span>
                      </a>
                    ))}
                  </div>
                )}

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${location.mapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-blue-600 font-medium text-sm group/link"
                >
                  Get Directions
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="tel:+918975138745"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-2xl shadow-xl shadow-blue-600/25 hover:shadow-2xl hover:shadow-blue-600/30 transition-all hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5" />
            Call Us: +91 89751 38745
          </a>
        </div>
      </div>
    </section>
  )
}