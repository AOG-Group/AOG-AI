import { Link } from 'react-router-dom'
import { ArrowRight, Shield, TrendingUp, Clock, Cpu } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const metrics = [
  { stat: '$319,800', label: 'Annualised savings from AI workflow automation and software rationalisation', icon: TrendingUp },
  { stat: 'Up to 20x', label: 'Output increases observed across enabled teams', icon: Cpu },
  { stat: '3 Years', label: 'Applied AI inside Ad On Group operations', icon: Clock },
  { stat: 'Anti-Hype', label: 'We focus on reliable, simple systems that work every day', icon: Shield },
]

const principles = [
  {
    title: 'Accountability Is the Differentiator',
    description: 'Most AI training ends at the session. Ours includes monthly assessments, nominated application areas, and Impact Summaries. Learning is verified, applied, and reported.',
  },
  {
    title: 'We Focus on Bottom-Line Outcomes',
    description: 'Every engagement is measured by its commercial impact: productivity gained, time saved, costs reduced. Not features shipped or demos delivered.',
  },
  {
    title: 'We Don\u2019t Overpromise AI',
    description: 'We\u2019re anti-hype and reality-based. AI is a tool, not magic. We use it where it works and we\u2019re honest about where it doesn\u2019t.',
  },
  {
    title: 'Simple, Reliable Systems',
    description: 'We design implementations that are reliable, simple, and fit how businesses actually operate. Not impressive demos that break in production.',
  },
  {
    title: 'Real Operational Experience',
    description: 'Our methods come from building and running AI solutions inside a live operational environment. Not from theory, labs, or conference talks.',
  },
  {
    title: 'Part of the Ad On Ecosystem',
    description: 'We understand BPO operations from the inside because we\u2019re part of the same business group that delivers them through Ad On Workforce.',
  },
]

const inPractice = [
  'Reporting workflows compressed from multiple days to under one hour through templated, AI-assisted processes',
  'Content production scaled output significantly while maintaining quality controls through human-in-the-loop workflows',
  'CRM rebuilt on a lower-cost platform without losing operational capability, reducing software costs and improving adoption',
  'Admin and data processing tasks automated to reduce manual handling, freeing staff for higher-value work',
]

export default function Proof() {
  const { ref: metricsRef, isVisible: metricsVisible } = useScrollAnimation()
  const { ref: practiceRef, isVisible: practiceVisible } = useScrollAnimation()
  const { ref: principlesRef, isVisible: principlesVisible } = useScrollAnimation()
  const { ref: casesRef, isVisible: casesVisible } = useScrollAnimation()

  return (
    <>
      <PageHeader
        label="Proof & Credibility"
        title="Built on Real Operational Experience"
        subtitle="Three years of AI implementation inside a live business environment. Measurable results. No hype."
      />

      {/* Metrics */}
      <section ref={metricsRef} className="section-padding relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800/60 to-transparent" />
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, i) => (
              <div
                key={metric.label}
                className={`card text-center transition-all duration-700 ${metricsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="w-10 h-10 bg-brand-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-5 h-5 text-brand-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{metric.stat}</div>
                <p className="text-xs text-gray-500 leading-snug">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In practice */}
      <section ref={practiceRef} className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/20 to-transparent -z-10" />
        <div className="section-container">
          <div className={`max-w-3xl transition-all duration-700 ${practiceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block text-sm font-semibold text-brand-400 uppercase tracking-wider mb-4">In Practice</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
              What This Looked Like<br className="hidden sm:block" />
              Inside Ad On Group
            </h2>
            <p className="text-[15px] text-gray-500 leading-relaxed mb-8 max-w-xl">
              Ad On AI grew out of three years building and deploying AI workflows inside
              Ad On Group. Not experiments. Reliable, simple systems adopted by real teams:
              content, SEO, admin, and client operations. The savings come from time
              recovered and software costs eliminated.
            </p>
          </div>

          <div className={`max-w-3xl rounded-xl border border-gray-800/50 bg-navy-900/30 p-6 sm:p-8 transition-all duration-700 delay-300 ${practiceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-5">
              Real examples from operations
            </h3>
            <div className="space-y-4">
              {inPractice.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-500 rounded-full flex-shrink-0 mt-[7px]" />
                  <p className="text-sm text-gray-400 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section ref={principlesRef} className="section-padding relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800/60 to-transparent" />
        <div className="section-container">
          <div className={`max-w-3xl mb-14 transition-all duration-700 ${principlesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block text-sm font-semibold text-brand-400 uppercase tracking-wider mb-4">Our Approach</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              What Makes Ad On AI Different
            </h2>
          </div>

          <div className="space-y-0">
            {principles.map((principle, i) => (
              <div
                key={principle.title}
                className={`grid grid-cols-1 md:grid-cols-[260px_1fr] gap-3 md:gap-8 py-8 transition-all duration-700 ${
                  i < principles.length - 1 ? 'border-b border-gray-800/40' : ''
                } ${principlesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              >
                <h3 className="text-base font-semibold text-white">{principle.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies placeholder */}
      <section ref={casesRef} className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/20 to-transparent -z-10" />
        <div className="section-container">
          <div className={`max-w-3xl mx-auto text-center transition-all duration-700 ${casesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block text-sm font-semibold text-brand-400 uppercase tracking-wider mb-4">Coming Soon</span>
            <h2 className="text-3xl font-bold text-white leading-tight mb-5">
              Client Case Studies
            </h2>
            <p className="text-[15px] text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto">
              We&apos;re currently documenting detailed case studies from our first
              wave of enrolled clients. In the meantime, book a call and we&apos;ll
              walk you through real examples and results.
            </p>
            <Link to="/contact" className="btn-primary text-base">
              Book a Strategy Call
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
