import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { ArrowRight } from 'lucide-react'

const loopSteps = [
  {
    label: 'Learn',
    title: 'Live Session + Self-Paced Modules',
    description: 'Each employee receives structured AI education through a monthly live session and five hours of self-paced enablement modules.',
  },
  {
    label: 'Prove',
    title: 'Monthly Assessment',
    description: 'A knowledge and application test ensures learning is retained and being translated into practical capability.',
  },
  {
    label: 'Apply',
    title: 'Nominated Application Area',
    description: 'The employee nominates one area in their workflow to apply what they have learned. The team assists if needed with use case selection and workflow shaping.',
  },
  {
    label: 'Build',
    title: 'Micro-Implementation',
    description: 'A scope-capped implementation is deployed directly into the employee\u2019s workflow. Playbooks, templates, automations, or process tools.',
  },
  {
    label: 'Report',
    title: 'Monthly Impact Summary',
    description: 'The client receives a clear report showing what was done, what changed, and what to focus on next. Full visibility, every month.',
  },
]

export default function WhatsIncluded() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/20 to-transparent -z-10" />
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block text-sm font-semibold text-brand-400 uppercase tracking-wider mb-4">
              Core Differentiator
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
              The Accountability Loop
            </h2>
            <div className="space-y-4 text-[15px] text-gray-400 leading-relaxed">
              <p>
                Most AI training programs stop at education. Employees attend
                a session, receive some materials, and go back to their desks.
                Nothing changes. Nobody checks. Nothing compounds.
              </p>
              <p>
                Ad On AI is built around a structured accountability loop.
                Every month, employees learn, prove retention through assessment,
                nominate a real application area, receive implementation support,
                and the client sees a measured outcome.
              </p>
              <p className="text-white font-medium">
                Accountability is the mechanism that turns training into
                operational performance improvement.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="space-y-0">
              {loopSteps.map((step, i) => (
                <div key={step.label} className="relative pl-8 pb-8 last:pb-0">
                  {/* Connector line */}
                  {i < loopSteps.length - 1 && (
                    <div className="absolute left-[11px] top-7 bottom-0 w-px bg-gray-800/60" />
                  )}
                  {/* Dot */}
                  <div className="absolute left-0 top-1 w-[23px] h-[23px] rounded-full border-2 border-brand-500/30 bg-navy-950 flex items-center justify-center">
                    <span className="w-2 h-2 bg-brand-500 rounded-full" />
                  </div>
                  {/* Content */}
                  <div>
                    <span className="text-[10px] font-bold text-brand-400 uppercase tracking-widest">{step.label}</span>
                    <h4 className="text-sm font-semibold text-white mt-0.5 mb-1">{step.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                  </div>
                  {/* Arrow between steps */}
                  {i < loopSteps.length - 1 && (
                    <ArrowRight className="absolute left-[7px] bottom-1 w-[9px] h-[9px] text-gray-700 rotate-90" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
