import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { CheckCircle2 } from 'lucide-react'

const goodFit = [
  'Founder-led Australian SME with 5 to 50 staff',
  'Already using (or considering) Ad On Workforce BPO seats',
  'Want more productivity from existing headcount, not more headcount',
  'Open to structured AI enablement with built-in accountability',
  'Value measurable outcomes over impressive demos',
]

const notFit = [
  'Looking for a chatbot demo or generic AI showcase',
  'Want a large custom software build inside this program',
  'Not willing to commit to ongoing monthly enablement',
  'After a one-off workshop with no accountability or follow-through',
]

export default function FitSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/20 to-transparent -z-10" />
      <div className="section-container">
        <div className={`max-w-3xl mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-sm font-semibold text-brand-400 uppercase tracking-wider mb-4">
            Is This Right for You?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Built for a Specific Type of Business
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`card transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Great fit if you&apos;re a
            </h3>
            <div className="space-y-3.5">
              {goodFit.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`card transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Probably not the right fit if you
            </h3>
            <div className="space-y-3.5">
              {notFit.map((item) => (
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
      </div>
    </section>
  )
}
