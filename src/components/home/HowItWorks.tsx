import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const steps = [
  {
    number: '01',
    title: 'Live Interactive Session',
    description: 'Each enrolled employee attends a 45 to 60 minute live session covering AI techniques and methods specific to their role. Interactive, practical, and immediately applicable. Client representatives are welcome to attend.',
  },
  {
    number: '02',
    title: 'Self-Paced Enablement Modules',
    description: 'Five hours of structured self-paced content each month, accessed through the Ad On AI enablement terminal. The module library is continuously evolving, with topics tailored to operational roles and real workflow challenges.',
  },
  {
    number: '03',
    title: 'Monthly Knowledge Assessment',
    description: 'A monthly test covering both knowledge retention and practical application. This ensures learning is translating into capability, and gives both the employee and the client visibility into progress.',
  },
  {
    number: '04',
    title: 'Nominated Application Area',
    description: 'Each participant nominates one area in their workflow where they will apply what they have learned. The Ad On AI team assists with use case selection, workflow shaping, and initial implementation if needed.',
  },
  {
    number: '05',
    title: 'Micro-Implementation',
    description: 'One scope-capped implementation deployed directly into the employee\u2019s workflow each month. This could be a prompt template, a light automation, a reporting shortcut, a playbook, or a process tool.',
  },
  {
    number: '06',
    title: 'Monthly Impact Summary',
    description: 'A clear report delivered to the client each month: what was implemented, what changed, what improved, and what the next focus area should be. Accountability and transparency, every cycle.',
  },
]

export default function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800/60 to-transparent" />
      <div className="section-container">
        <div className={`max-w-3xl mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-sm font-semibold text-brand-400 uppercase tracking-wider mb-4">
            Monthly Cycle
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
            How the Program Works Each Month
          </h2>
          <p className="text-[15px] text-gray-500 leading-relaxed max-w-xl">
            Every enrolled employee goes through this structured cycle each
            month. It is designed for compound improvement with built-in
            accountability at every stage.
          </p>
        </div>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 md:gap-8 py-8 transition-all duration-700 ${
                i < steps.length - 1 ? 'border-b border-gray-800/40' : ''
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="text-2xl font-bold text-brand-500/40 font-mono">
                {step.number}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed max-w-xl">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
