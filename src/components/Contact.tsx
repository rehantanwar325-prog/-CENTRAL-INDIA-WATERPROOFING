'use client'

import { useState } from 'react'
import { Mail, MapPin, Phone, Clock, Send, Loader2, CheckCircle, AlertCircle, MessageSquare } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Enter a valid 10-digit mobile number'
    }
    if (!formData.service) newErrors.service = 'Please select a service'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setStatus('submitting')

    // Build WhatsApp message
    const whatsappMsg = `Hi, I am *${formData.name}*.\n\n*Service Required:* ${formData.service}\n*Phone:* ${formData.phone}\n*Message:* ${formData.message || 'N/A'}`
    const whatsappUrl = `https://wa.me/918975138745?text=${encodeURIComponent(whatsappMsg)}`

    // Also send to API for logging
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
    } catch {}

    setStatus('success')
    setFormData({ name: '', phone: '', service: '', message: '' })

    // Redirect to WhatsApp (avoids popup blocker)
    window.location.href = whatsappUrl
  }

  const contactInfo = [
    { icon: Phone, label: 'Call Us', value: '+91 89751 38745', href: 'tel:+918975138745', gradient: 'from-blue-500 to-cyan-500' },
    { icon: Mail, label: 'Email', value: 'yusuftagala1983@gmail.com', href: 'mailto:yusuftagala1983@gmail.com', gradient: 'from-purple-500 to-violet-500' },
    { icon: MapPin, label: 'Head Office', value: 'Babu Manzil, Plot No. 56, Lahanji Layout, Old Ring Road Mankapur, Opp. Maqbul Masjid, Nagpur - 440030', href: '#', gradient: 'from-emerald-500 to-green-500' },
    { icon: Clock, label: 'Working Hours', value: 'Mon - Sat: 9:00 AM - 7:00 PM\nSunday: 10:00 AM - 4:00 PM', href: '#', gradient: 'from-amber-500 to-orange-500' },
  ]

  const services = [
    'SEALROOF CETROOF Treatment',
    'Roof & Terrace Waterproofing',
    'Bathroom & Wet Area Waterproofing',
    'Roller Applied Roof Coating',
    'Roof Crack Repair Treatment',
    'Membrane Sheet Waterproofing',
    'Other / General Inquiry',
  ]

  return (
    <section
      id="contact"
      className="py-20 lg:py-32 bg-white relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-50 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-emerald-50/50 via-transparent to-transparent pointer-events-none" />
      
      <div className="container-custom relative">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">Contact Best Waterproofing Agency</span>
          <h2 id="contact-heading" className="section-title">
            Get Your Free Roof <span className="gradient-text">Inspection</span> Today
          </h2>
          <p className="section-subtitle">
            Have a roof leak or planning waterproofing in Nagpur, Akola or Chandrapur? Contact India&apos;s most trusted roof waterproofing experts. 
            We offer free site inspections and transparent quotations.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 group hover:-translate-y-0.5"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg shadow-gray-200/50 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">{item.label}</h3>
                  <p className="text-gray-500 text-sm mt-0.5 whitespace-pre-line">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 lg:p-10 shadow-2xl shadow-gray-200/50" noValidate>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Request a Callback</h3>
                  <p className="text-sm text-gray-500">We&apos;ll call you within 2 hours</p>
                </div>
              </div>

              {status === 'success' && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-3 animate-fade-in" role="alert">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-emerald-800">Submitted Successfully!</p>
                    <p className="text-emerald-700 text-sm">We&apos;ll contact you within 2 hours.</p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-3 animate-fade-in" role="alert">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-red-800">Submission Failed</p>
                    <p className="text-red-700 text-sm">Please call us at +91 89751 38745</p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3.5 rounded-xl border-2 transition-all ${
                      errors.name ? 'border-red-300 bg-red-50 focus:border-red-500' : 'border-gray-200 bg-gray-50 focus:border-blue-500 focus:bg-white'
                    } focus:outline-none`}
                    placeholder="Your name"
                    disabled={status === 'submitting'}
                  />
                  {errors.name && <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-4 py-3.5 rounded-xl border-2 transition-all ${
                      errors.phone ? 'border-red-300 bg-red-50 focus:border-red-500' : 'border-gray-200 bg-gray-50 focus:border-blue-500 focus:bg-white'
                    } focus:outline-none`}
                    placeholder="10-digit mobile number"
                    disabled={status === 'submitting'}
                  />
                  {errors.phone && <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.phone}</p>}
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Required <span className="text-red-500">*</span>
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className={`w-full px-4 py-3.5 rounded-xl border-2 transition-all appearance-none bg-white ${
                    errors.service ? 'border-red-300 bg-red-50 focus:border-red-500' : 'border-gray-200 bg-gray-50 focus:border-blue-500 focus:bg-white'
                  } focus:outline-none`}
                  disabled={status === 'submitting'}
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.service && <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.service}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message / Describe Your Issue</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-gray-50 focus:border-blue-500 focus:bg-white focus:outline-none transition-all resize-none"
                  placeholder="Describe your waterproofing issue..."
                  disabled={status === 'submitting'}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed gap-3 rounded-xl"
              >
                {status === 'submitting' ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /> Submitting...</>
                ) : (
                  <><Send className="w-5 h-5" /> Request Callback</>
                )}
              </button>

              <p className="mt-5 text-center text-sm text-gray-400">By submitting, you agree to be contacted via phone/WhatsApp.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}