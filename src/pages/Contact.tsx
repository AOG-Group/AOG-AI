import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <>
      <PageHeader
        label="Get Started"
        title="Book a Strategy Call"
        subtitle="Tell us about your business and your team. We'll walk you through the program, assess your current workflows, and show you exactly how managed AI enablement fits your operation."
      />

      <section ref={ref} className="section-padding relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800/60 to-transparent" />
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="card border-gray-700/40 bg-navy-950/60">
                <h3 className="text-lg font-bold text-white mb-1">Get Started</h3>
                <p className="text-sm text-gray-500 mb-6">
                  Fill out the form and we&apos;ll be in touch within one business day.
                </p>

                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-400 mb-1.5">First Name</label>
                      <input type="text" id="firstName" placeholder="First name" className="w-full px-4 py-3 bg-navy-900/80 border border-gray-700/60 rounded-lg text-white placeholder-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-400 mb-1.5">Last Name</label>
                      <input type="text" id="lastName" placeholder="Last name" className="w-full px-4 py-3 bg-navy-900/80 border border-gray-700/60 rounded-lg text-white placeholder-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1.5">Business Email</label>
                    <input type="email" id="email" placeholder="you@company.com.au" className="w-full px-4 py-3 bg-navy-900/80 border border-gray-700/60 rounded-lg text-white placeholder-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-1.5">Business Name</label>
                    <input type="text" id="company" placeholder="Your business" className="w-full px-4 py-3 bg-navy-900/80 border border-gray-700/60 rounded-lg text-white placeholder-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all" />
                  </div>
                  <div>
                    <label htmlFor="seats" className="block text-sm font-medium text-gray-400 mb-1.5">How Many Employees to Enrol?</label>
                    <select id="seats" className="w-full px-4 py-3 bg-navy-900/80 border border-gray-700/60 rounded-lg text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all appearance-none">
                      <option value="">Select</option>
                      <option value="1-3">1 to 3 employees</option>
                      <option value="4-10">4 to 10 employees</option>
                      <option value="11-20">11 to 20 employees</option>
                      <option value="20+">20+ employees</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1.5">Anything Else? (Optional)</label>
                    <textarea id="message" rows={3} placeholder="Tell us about your team, their roles, or what you're looking to improve" className="w-full px-4 py-3 bg-navy-900/80 border border-gray-700/60 rounded-lg text-white placeholder-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none" />
                  </div>
                  <button type="submit" className="btn-primary w-full mt-2">
                    Book My Strategy Call
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>

            {/* Info side */}
            <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">What Happens Next</h3>
                  <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-brand-500/10 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-brand-400">1</span>
                      <p>We&apos;ll review your submission and get back to you within one business day.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-brand-500/10 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-brand-400">2</span>
                      <p>We&apos;ll book a free 30-minute strategy call to discuss your team, assess current workflows, and identify where AI enablement can add the most value.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-brand-500/10 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-brand-400">3</span>
                      <p>If it&apos;s a good fit, we&apos;ll propose a rollout plan: which employees to start with, the enablement focus, and what the first month looks like.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <Phone className="w-4 h-4 text-brand-400" />
                    <span>Free 30-minute strategy call</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <Mail className="w-4 h-4 text-brand-400" />
                    <span>hello@adonai.com.au</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <MapPin className="w-4 h-4 text-brand-400" />
                    <span>Sydney, Australia</span>
                  </div>
                </div>

                <div className="rounded-xl border border-gray-800/50 bg-navy-900/30 p-5">
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Ad On AI is a specialist AI enablement division within the{' '}
                    <span className="text-gray-400 font-medium">Ad On Group</span> ecosystem,
                    informed by operational experience from{' '}
                    <span className="text-gray-400 font-medium">Ad On Workforce</span>.
                    Australian-owned. Based in Sydney.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
