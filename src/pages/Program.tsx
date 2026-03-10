import { Link } from 'react-router-dom'
import { ArrowRight, Check, BookOpen, Monitor, ClipboardCheck, Target, Wrench, FileText } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const cycle = [
  {
    icon: BookOpen,
    number: '01',
    title: 'Live Interactive Session',
    time: '45\u201360 minutes, monthly',
    description: 'A live, facilitated session covering practical AI techniques relevant to the employee\u2019s role. Not a webinar. Interactive, hands-on, and immediately applicable to real workflow.',
  },
  {
    icon: Monitor,
    number: '02',
    title: 'Self-Paced Enablement Modules',
    time: '5 \u00d7 1-hour modules per month',
    description: 'Online, self-directed modules delivered through a purpose-built enablement terminal. Content evolves as AI capabilities and best practices develop. Module topics are continuously updated.',
  },
  {
    icon: ClipboardCheck,
    number: '03',
    title: 'Monthly Knowledge Assessment',
    time: 'End of each month',
    description: 'A short, structured test to confirm understanding and retention. This is the accountability checkpoint that separates managed enablement from passive learning.',
  },
  {
    icon: Target,
    number: '04',
    title: 'Nominated Application Area',
    time: 'Selected each month',
    description: 'Each participant nominates one specific area of their workflow to apply what they\u2019ve learned. Our team assists with use case selection, workflow shaping, and initial implementation if needed.',
  },
  {
    icon: Wrench,
    number: '05',
    title: 'Micro-Implementation',
    time: 'Deployed within the month',
    description: 'One scope-capped implementation delivered directly into the employee\u2019s workflow. Practical, immediately useful tools that compound over time. Templates, automations, playbooks, or process tools.',
  },
  {
    icon: FileText,
    number: '06',
    title: 'Monthly Impact Summary',
    time: 'Delivered to the client',
    description: 'A clear report showing what was learned, what was tested, what was implemented, and what improved. This is how the client sees the value without needing to manage the process.',
  },
]

const milestones = [
  {
    month: 'Month 3',
    items: [
      'Each enrolled employee has completed 3 full enablement cycles',
      'At least 3 micro-implementations deployed per person',
      'Baseline productivity patterns established and documented',
      'Initial Impact Summary trends visible to the client',
    ],
  },
  {
    month: 'Month 6',
    items: [
      'Compound improvements clearly measurable across enrolled employees',
      'AI playbooks tailored to each role and workflow',
      'Workflow-level efficiency gains documented and reported',
      'Client has 6 months of Impact Summary data showing trajectory',
    ],
  },
]

const scopeIn = [
  'Prompt templates and AI-assisted drafting workflows',
  'Light automations for reporting, admin, or data processing',
  'AI playbooks tailored to specific roles and tasks',
  'Process tools, checklists, and standard operating procedures',
  'Communication templates for client-facing or internal workflows',
  'CRM hygiene workflows and pipeline accuracy improvements',
]

const scopeOut = [
  'Custom integrations or API development',
  'Full system architecture or platform builds',
  'Bespoke software development',
  'Multi-month engineering projects',
]

export default function Program() {
  const { ref: cycleRef, isVisible: cycleVisible } = useScrollAnimation()
  const { ref: milestonesRef, isVisible: milestonesVisible } = useScrollAnimation()
  const { ref: modulesRef, isVisible: modulesVisible } = useScrollAnimation()
  const { ref: scopeRef, isVisible: scopeVisible } = useScrollAnimation()

  return (
    <>
      <PageHeader
        label="The Program"
        title="Managed AI Enablement for Embedded Teams"
        subtitle="A structured monthly program combining live sessions, self-paced modules, built-in accountability, and hands-on micro-implementation. Designed for BPO employees embedded in your business."
      />

      {/* Monthly cycle */}
      <section ref={cycleRef} className="section-padding relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800/60 to-transparent" />
        <div className="section-container">
          <div className={`mb-14 transition-all duration-700 ${cycleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block text-sm font-semibold text-brand-400 uppercase tracking-wider mb-4">Monthly Cycle</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              How Each Month Works
            </h2>
            <p className="text-[15px] text-gray-400 leading-relaxed max-w-2xl">
              Every enrolled employee moves through a complete enablement cycle each month.
              The structure ensures learning translates into measurable, practical improvement.
            </p>
          </div>

          <div className="space-y-6">
            {cycle.map((step, i) => (
              <div
                key={step.number}
                className={`grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 md:gap-8 transition-all duration-700 ${
                  cycleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="flex items-start gap-4 md:flex-col md:items-center">
                  <span className="text-2xl font-bold text-brand-500/40 font-mono">{step.number}</span>
                </div>
                <div className="card card-hover flex items-start gap-5">
                  <div className="w-10 h-10 bg-brand-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-5 h-5 text-brand-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">{step.title}</h3>
                    <p className="text-xs text-brand-400/70 font-medium mb-2">{step.time}</p>
                    <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section ref={milestonesRef} className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/20 to-transparent -z-10" />
        <div className="section-container">
          <div className={`mb-14 transition-all duration-700 ${milestonesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block text-sm font-semibold text-brand-400 uppercase tracking-wider mb-4">Milestones</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              What Progress Looks Like
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {milestones.map((milestone, i) => (
              <div
                key={milestone.month}
                className={`card transition-all duration-700 ${milestonesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(i + 1) * 150}ms` }}
              >
                <h3 className="text-lg font-bold text-white mb-5">{milestone.month}</h3>
                <div className="space-y-3">
                  {milestone.items.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Module library */}
      <section ref={modulesRef} className="section-padding relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800/60 to-transparent" />
        <div className="section-container">
          <div className={`max-w-3xl mx-auto text-center transition-all duration-700 ${modulesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block text-sm font-semibold text-brand-400 uppercase tracking-wider mb-4">Enablement Modules</span>
            <h2 className="text-3xl font-bold text-white leading-tight mb-5">
              Module Library
            </h2>
            <p className="text-[15px] text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto">
              Self-paced modules are delivered through an online enablement terminal.
              Content is continuously updated as AI tools and best practices evolve.
              Specific module topics are being developed and will be published when available.
            </p>
            <div className="rounded-xl border border-gray-800/50 bg-navy-900/30 p-6 max-w-lg mx-auto">
              <p className="text-sm text-gray-500 leading-relaxed">
                <span className="text-white font-medium">Content note:</span> Module topics
                are deliberately not listed in advance. The AI landscape changes rapidly, and
                we update content to reflect what is practical and current rather than locking
                in a fixed curriculum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scope */}
      <section ref={scopeRef} className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/20 to-transparent -z-10" />
        <div className="section-container">
          <div className={`mb-14 transition-all duration-700 ${scopeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block text-sm font-semibold text-brand-400 uppercase tracking-wider mb-4">Scope Boundaries</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              What Is (and Isn&apos;t) Included
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className={`card transition-all duration-700 ${scopeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
                Included in the monthly program
              </h3>
              <div className="space-y-3">
                {scopeIn.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`card transition-all duration-700 delay-100 ${scopeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
                Scoped separately
              </h3>
              <div className="space-y-3">
                {scopeOut.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <span className="w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
                    </span>
                    <span className="text-sm text-gray-500 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-600 mt-5 leading-relaxed">
                Larger builds are scoped and delivered as separate engagements. This keeps the
                monthly program focused and predictable.
              </p>
            </div>
          </div>

          <div className={`text-center transition-all duration-700 delay-300 ${scopeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
