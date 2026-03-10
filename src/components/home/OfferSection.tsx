import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const whatItIs = [
  'A managed, ongoing AI enablement program for embedded BPO employees',
  'Structured monthly cycle: live sessions, self-paced modules, assessments, and implementation',
  'Accountability built in through monthly testing and nominated application areas',
  'Hands-on micro-implementations deployed directly into each employee\u2019s workflow',
  'Monthly Impact Summary so you can see exactly what changed and what improved',
]

const whatItIsNot = [
  'Not a generic online course or pre-recorded webinar',
  'Not a chatbot demo or AI showcase',
  'Not a massive custom software build',
  'Not a one-off workshop or consultant engagement',
  'Not AI agents running your business autonomously',
]

export default function OfferSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800/60 to-transparent" />
      <div className="section-container">
        <div className={`max-w-3xl mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-sm font-semibold text-brand-400 uppercase tracking-wider mb-4">
            The Program
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
            What Ad On AI Is.<br className="hidden sm:block" />
            And What It Isn&apos;t.
          </h2>
          <p className="text-[15px] text-gray-500 leading-relaxed max-w-xl">
            Ad On AI is a managed AI enablement and accountability program
            for BPO employees embedded in your business. It combines
            structured education, practical assessment, and monthly
            implementation to produce measurable, compounding productivity gains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* What it is */}
          <div className={`card transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              What this is
            </h3>
            <div className="space-y-3.5">
              {whatItIs.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What it is not */}
          <div className={`card transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              What this is not
            </h3>
            <div className="space-y-3.5">
              {whatItIsNot.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <span className="w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
                  </span>
                  <span className="text-sm text-gray-500">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`mt-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link
            to="/program"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors group"
          >
            See full program details
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
