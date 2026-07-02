'use client'

import { Award, Shield, Clock, Users, DollarSign, Leaf, CheckCircle, Star } from 'lucide-react'

const features = [
  {
    icon: Award,
    img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80',
    title: '25+ Years Experience',
    description: 'Over 25 years of specialized waterproofing expertise in Central India&apos;s challenging climate conditions.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Shield,
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=600&q=80',
    title: 'Warranty*',
    description: 'Warranty coverage depends on the specific waterproofing material and system used for your project.',
    gradient: 'from-emerald-500 to-green-500',
  },
  {
    icon: Clock,
    img: 'https://images.unsplash.com/photo-1621886292650-520f76c747d6?auto=format&fit=crop&w=600&q=80',
    title: 'Timely Service',
    description: 'We respect your time. Our team arrives on schedule and completes projects within the agreed timeframe.',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: Users,
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    title: 'Certified Professionals',
    description: 'Our team comprises certified waterproofing applicators trained in latest technologies and materials.',
    gradient: 'from-purple-500 to-violet-500',
  },
  {
    icon: DollarSign,
    img: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=600&q=80',
    title: 'Transparent Pricing',
    description: 'No hidden costs. Detailed quotations with material specifications provided upfront.',
    gradient: 'from-rose-500 to-pink-500',
  },
  {
    icon: Leaf,
    img: 'https://images.unsplash.com/photo-1545165375-75df4a3d6c7a?auto=format&fit=crop&w=600&q=80',
    title: 'Eco-Friendly Solutions',
    description: 'Environmentally responsible waterproofing systems with low VOC emissions and sustainable materials.',
    gradient: 'from-teal-500 to-emerald-500',
  },
]

const stats = [
  { value: '5000+', label: 'Projects Completed', icon: CheckCircle },
  { value: '25+', label: 'Years Experience', icon: Award },
  { value: '100%', label: 'Satisfaction', icon: Star },
  { value: 'Warranty*', label: 'As Per Material', icon: Shield },
]

export default function WhyChooseUs() {
  return (
    <section
      className="py-20 lg:py-32 bg-white relative overflow-hidden"
      aria-labelledby="why-choose-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-50 via-transparent to-transparent pointer-events-none" />

      <div className="container-custom relative">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">Why Choose Us</span>
          <h2 id="why-choose-heading" className="section-title">
            Why Central India <span className="gradient-text">Waterproofing</span>?
          </h2>
          <p className="section-subtitle">
            Trusted by thousands of homeowners, builders, and commercial clients across Central India 
            for reliable, guaranteed waterproofing solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-16 lg:mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative group p-6 lg:p-8 bg-gradient-to-br from-white to-blue-50/50 rounded-2xl border border-blue-100/50 text-center hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-200">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group relative bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/80 hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="relative -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 overflow-hidden rounded-t-2xl h-40">
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      const target = e.currentTarget
                      target.style.display = 'none'
                      const parent = target.parentElement
                      if (parent) {
                        parent.classList.add('flex', 'items-center', 'justify-center', `bg-gradient-to-br`, feature.gradient)
                        parent.innerHTML = `<div class="text-white/80 text-center px-4"><svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 mx-auto mb-1 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg><p class="text-xs font-medium opacity-80">Trusted</p></div>`
                      }
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}