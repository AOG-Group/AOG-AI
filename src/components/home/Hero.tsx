import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-[72px]">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-600/6 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-800/4 rounded-full blur-[100px]" />
      </div>

      <div className="section-container w-full">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-gray-800/60 bg-navy-900/40 mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 bg-brand-500 rounded-full" />
            <span className="text-sm font-medium text-gray-400">
              Part of <span className="text-gray-300">Ad On Group</span>
            </span>
            <span className="text-gray-700">|</span>
            <span className="text-sm font-medium text-gray-500">Managed AI Enablement</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 animate-fade-in-up">
            Make Every Embedded BPO Team<br />
            Member More Productive With<br />
            <span className="gradient-text">Practical AI Enablement.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl mb-10 animate-fade-in-up animate-delay-100">
            A managed monthly program combining structured AI education,
            accountability, and hands-on micro-implementation. Designed for
            BPO employees embedded in your business. Measured by outcomes,
            not activity.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up animate-delay-200">
            <Link to="/contact" className="btn-primary text-base">
              Book a Strategy Call
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/program" className="btn-secondary text-base">
              See the Program
            </Link>
          </div>

          {/* Trust signals */}
          <div className="animate-fade-in-up animate-delay-300">
            <p className="text-xs text-gray-600 uppercase tracking-wider font-medium mb-3">
              Structured enablement model
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                'Monthly live sessions + self-paced modules',
                'Built-in accountability and assessment',
                'Workflow-level micro-implementation',
                'Informed by Ad On Workforce',
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 text-xs font-medium text-gray-400 border border-gray-800/50 rounded-full bg-navy-900/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
