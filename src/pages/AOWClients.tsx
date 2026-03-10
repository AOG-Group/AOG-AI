import { Link } from 'react-router-dom'
import { ArrowRight, Check, Users, Layers, TrendingUp, Shield, Eye, Clock } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const benefits = [
  {
    icon: TrendingUp,
    title: 'More Output Per Seat',
    description: 'Your AOW employees learn AI techniques specific to their role, producing more work in the same hours without adding headcount.',
  },
  {
    icon: Layers,
    title: 'Better Quality, Less Rework',
    description: 'Structured prompts, templates, and micro-automations reduce errors, improve consistency, and cut the rework that eats your margin.',
  },
  {
    icon: Eye,
    title: 'Full Visibility via Impact Summary',
    description: 'Each month you receive a clear report showing what was learned, tested, implemented, and improved. No guesswork about value.',
  },
  {
    icon: Shield,
    title: 'Built-In Accountability',
    description: 'Monthly assessments and nominated application areas mean learning is verified and applied, not just consumed.',
  },
  {
    icon: Users,
    title: 'Optional Client Rep Attendance',
    description: 'Your representative can attend the monthly live session to stay across the enablement process and see how employees are progressing.',
  },
  {
    icon: Clock,
    title: 'Seamless AOW Integration',
    description: 'We\u2019re part of the same ecosystem. Ad On AI layers directly onto your existing AOW arrangement with no separate vendor management.',
  },
]

const idealRoles = [
  'Sales and account management support',
  'Project coordination and task management',
  'Client communication and relationship management',
  'Admin, reporting, and data processing',
  'Operations and process coordination',
  'CRM management and pipeline hygiene',
]

const rolloutOptions = [
  {
    label: 'Start Small',
    description: 'Enrol 1\u20133 employees to pilot the program and measure results before expanding.',
  },
  {
    label: 'Department Rollout',
    description: 'Enable an entire team or function at once for faster compound improvement.',
  },
  {
    label: 'Full Team',
    description: 'Enrol all embedded AOW employees for maximum operational leverage.',
  },
]

export default function AOWClients() {
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation()
  const { ref: howRef, isVisible: howVisible } = useScrollAnimation()
  const { ref: rolesRef, isVisible: rolesVisible } = useScrollAnimation()
  const { ref: rolloutRef, isVisible: rolloutVisible } = useScrollAnimation()

  return (
    <>
      <PageHeader
        label="For Ad On Workforce Clients"
        title="Managed AI Enablement for Your AOW Seats"
        subtitle="Already using Ad On Workforce? Ad On AI adds structured AI enablement, accountability, and monthly micro-implementation to your existing BPO arrangement."
      />

      {/* Benefits */}
      <section ref={benefitsRef} className="section-padding relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800/60 to-transparent" />
        <div className="section-container">
          <div className={`mb-14 transition-all duration-700 ${benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block text-sm font-semibold text-brand-400 uppercase tracking-wider mb-4">Why Add AI Enablement</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Why This Makes Your<br className="hidden sm:block" />
              AOW Seats More Valuable
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={benefit.title}
                className={`card card-hover flex items-start gap-5 transition-all duration-700 ${benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="w-10 h-10 bg-brand-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-5 h-5 text-brand-400" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it attaches */}
      <section ref={howRef} className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/20 to-transparent -z-10" />
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className={`transition-all duration-700 ${howVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="inline-block text-sm font-semibold text-brand-400 uppercase tracking-wider mb-4">
                How It Fits
              </span>
              <h2 className="text-3xl font-bold text-white leading-tight mb-6">
                A Simple Add-On to Your<br />
                Existing AOW Arrangement
              </h2>
              <div className="space-y-4 text-[15px] text-gray-400 leading-relaxed">
                <p>
                  Ad On AI is designed to layer directly on top of your existing
                  Ad On Workforce seats. No separate vendor, no additional complexity.
                </p>
                <p>
                  Each enrolled employee receives a full enablement cycle every month:
                  live sessions, self-paced modules, knowledge assessment, nominated
                  application, and a micro-implementation deployed into their workflow.
                </p>
                <p>
                  Pricing is provided on request and structured as a straightforward
                  per-employee monthly fee.
                </p>
                <p className="text-white font-medium">
                  Same team. Same management structure. Meaningfully more output.
                </p>
              </div>
            </div>

            <div className={`transition-all duration-700 delay-200 ${howVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="card">
                <h3 className="text-base font-semibold text-white mb-5">The Attach Model</h3>
                <div className="space-y-5">
                  {[
                    { step: 'Your AOW seats', desc: 'Employees already embedded in your business, handling operational work.' },
                    { step: '+ Ad On AI enablement', desc: 'Add managed AI enablement to selected employees on a monthly basis.' },
                    { step: '= Higher output, measured', desc: 'More productivity, better quality, and a monthly Impact Summary proving it.' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-brand-500/10 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold text-brand-400">
                        {i + 1}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white mb-0.5">{item.step}</p>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rollout options */}
      <section ref={rolloutRef} className="section-padding relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800/60 to-transparent" />
        <div className="section-container">
          <div className={`mb-14 transition-all duration-700 ${rolloutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block text-sm font-semibold text-brand-400 uppercase tracking-wider mb-4">Rollout Options</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Start Where It Makes Sense
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {rolloutOptions.map((option, i) => (
              <div
                key={option.label}
                className={`card text-center transition-all duration-700 ${rolloutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="w-10 h-10 bg-brand-500/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-sm font-bold text-brand-400">
                  {i + 1}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{option.label}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal roles */}
      <section ref={rolesRef} className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/20 to-transparent -z-10" />
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className={`transition-all duration-700 ${rolesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="inline-block text-sm font-semibold text-brand-400 uppercase tracking-wider mb-4">Best Fit Roles</span>
              <h2 className="text-3xl font-bold text-white leading-tight mb-4">
                Which AOW Employees<br />Benefit Most?
              </h2>
              <p className="text-[15px] text-gray-400 leading-relaxed">
                AI enablement works best for roles with repeatable workflows,
                high communication volume, or significant admin overhead.
              </p>
            </div>
            <div className={`space-y-3.5 transition-all duration-700 delay-200 ${rolesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {idealRoles.map((role) => (
                <div key={role} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">{role}</span>
                </div>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors group"
                >
                  Discuss your team structure
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming soon note */}
      <section className="pb-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-xl border border-gray-800/50 bg-navy-900/30 p-6 sm:p-8">
              <span className="inline-block text-xs font-semibold text-brand-400 uppercase tracking-wider mb-3">Coming Soon</span>
              <h3 className="text-base font-semibold text-white mb-3">AI Enablement for Internal Employees</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                The Ad On AI program is currently designed for BPO employees embedded
                through Ad On Workforce. We are developing an offering for businesses
                that want to enable their own internal team members with the same
                managed enablement model. Details will be published when available.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
