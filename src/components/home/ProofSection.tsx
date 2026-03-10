import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const proofCards = [
  { stat: '$319,800', label: 'Annualised savings from AI workflow automation and software rationalisation' },
  { stat: 'Up to 20x', label: 'Output increases observed across enabled teams' },
  { stat: '3 Years', label: 'Applied AI inside Ad On Group operations' },
  { stat: 'BPO DNA', label: 'Informed by Ad On Workforce. Real process, real scale.' },
]

const inPractice = [
  'Reporting workflows compressed from multiple days to under one hour through templated, AI-assisted processes',
  'Content production scaled output significantly while maintaining quality controls through human-in-the-loop workflows',
  'CRM rebuilt on a lower-cost platform without losing operational capability, reducing software costs and improving adoption',
]

export default function ProofSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800/60 to-transparent" />
      <div className="section-container">
        {/* Heading */}
        <div className={`max-w-3xl mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-sm font-semibold text-brand-400 uppercase tracking-wider mb-4">
            Proof &amp; Credibility
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
            Built Inside Real Operations.<br className="hidden sm:block" />
            Designed to Work Every Day.
          </h2>
          <p className="text-[15px] text-gray-500 leading-relaxed max-w-xl">
            Ad On AI grew out of three years building and deploying AI workflows
            inside Ad On Group. Not experiments. Reliable, simple systems adopted
            by real teams: content, SEO, admin, and client operations. The savings
            come from time recovered and software costs eliminated.
          </p>
        </div>

        {/* Proof cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14">
          {proofCards.map((point, i) => (
            <div
              key={point.label}
              className={`card text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(i + 2) * 100}ms` }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">{point.stat}</div>
              <p className="text-xs text-gray-500 leading-snug">{point.label}</p>
            </div>
          ))}
        </div>

        {/* In practice block */}
        <div className={`max-w-3xl rounded-xl border border-gray-800/50 bg-navy-900/30 p-6 sm:p-8 mb-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-5">
            What this looked like in practice
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

        {/* Link */}
        <div className={`transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link
            to="/proof"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors group"
          >
            See detailed proof and approach
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
