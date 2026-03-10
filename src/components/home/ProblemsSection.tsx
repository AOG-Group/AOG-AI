import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { Eye, BarChart3, Users, BookOpen, Wrench, ClipboardCheck, FileText, Target } from 'lucide-react'

const clientGets = [
  { icon: BarChart3, title: 'Monthly Impact Summary', description: 'A clear report each month showing what was implemented, what changed, and what improved. Full visibility, no guesswork.' },
  { icon: Eye, title: 'Visibility Into AI Adoption', description: 'See which employees are progressing, where AI is being applied, and what results are compounding over time.' },
  { icon: Users, title: 'Optional Session Attendance', description: 'Client representatives can attend any live session to see exactly what is being taught and how employees are engaging.' },
  { icon: Target, title: 'Measurable Seat ROI', description: 'The same team, the same hours, meaningfully more output. Productivity gains measured against real operational baselines.' },
]

const employeeGets = [
  { icon: BookOpen, title: '1 Live Interactive Session per Month', description: 'A 45 to 60 minute live session covering AI techniques specific to their role. Interactive, practical, immediately applicable.' },
  { icon: FileText, title: '5 Self-Paced Enablement Modules', description: 'Five hours of structured self-paced content each month, accessed through the Ad On AI enablement terminal. Module library is evolving.' },
  { icon: ClipboardCheck, title: 'Monthly Knowledge Assessment', description: 'A monthly test covering both knowledge and practical application. Accountability that ensures learning translates into action.' },
  { icon: Wrench, title: 'Micro-Implementation in Their Workflow', description: 'One scope-capped implementation deployed directly into their workflow each month. Templates, automations, playbooks, or process tools.' },
]

export default function ProblemsSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/20 to-transparent -z-10" />
      <div className="section-container">
        <div className={`max-w-3xl mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-sm font-semibold text-brand-400 uppercase tracking-wider mb-4">
            Two Perspectives, One Outcome
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
            What the Client Gets.<br className="hidden sm:block" />
            What the Employee Gets.
          </h2>
          <p className="text-[15px] text-gray-500 leading-relaxed max-w-xl">
            The buyer sees accountability, ROI, and monthly proof of improvement.
            The employee receives structured enablement, hands-on tools,
            and practical implementation support.
          </p>
        </div>

        {/* Client gets */}
        <div className={`mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
            What the client gets
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {clientGets.map((item, i) => (
              <div
                key={item.title}
                className={`card card-hover flex items-start gap-5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="w-10 h-10 bg-brand-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-brand-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1.5">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Employee gets */}
        <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
            What the employee gets
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {employeeGets.map((item, i) => (
              <div
                key={item.title}
                className={`card card-hover flex items-start gap-5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(i + 4) * 100}ms` }}
              >
                <div className="w-10 h-10 bg-brand-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-brand-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1.5">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
