import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function CTASection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800/60 to-transparent" />
      <div className="section-container">
        <div
          className={`relative overflow-hidden rounded-3xl transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-900/60 via-navy-900 to-navy-950 -z-10" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-600/8 rounded-full blur-[100px] -z-10" />
          <div className="absolute inset-0 border border-brand-500/10 rounded-3xl -z-10" />

          <div className="px-6 sm:px-12 lg:px-16 py-16 lg:py-20 text-center">
            <span className="inline-block text-sm font-semibold text-brand-400 uppercase tracking-wider mb-4">
              Ready to Start?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
              Get More From Every Seat.<br />
              Start With a Conversation.
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
              Book a free strategy call. We&apos;ll walk you through the program,
              discuss your team structure, and show you exactly how managed
              AI enablement fits into your existing operation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link to="/contact" className="btn-primary text-base">
                Book a Strategy Call
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/program" className="btn-secondary text-base">
                See the Program
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-gray-500">
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                <span>Free 30-minute strategy call</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-500 rounded-full" />
                <span>No obligations</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-500 rounded-full" />
                <span>Managed monthly program</span>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10 max-w-xl mx-auto">
              <p className="text-xs text-gray-500">
                Ad On AI is a specialist division of{' '}
                <span className="text-gray-400 font-medium">Ad On Group</span>
                . An Australian business ecosystem spanning workforce, operations, and technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
