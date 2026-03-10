import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const faqs = [
  {
    question: 'What exactly is Ad On AI?',
    answer: 'Ad On AI is a managed monthly AI enablement program for BPO employees embedded in your business. Each enrolled employee receives a monthly live session, self-paced enablement modules, a knowledge assessment, a nominated application area, and a scope-capped micro-implementation. The client receives a Monthly Impact Summary showing what changed and what improved.',
  },
  {
    question: 'How much does it cost?',
    answer: 'Pricing is provided on request. It is structured as a per-employee monthly fee, designed to represent a small fraction of the typical BPO seat cost while delivering measurable productivity improvement. Book a strategy call and we\u2019ll walk you through the pricing structure.',
  },
  {
    question: 'How is the monthly cadence structured?',
    answer: 'Each month follows a complete enablement cycle: one live interactive session (45\u201360 minutes), five one-hour self-paced modules through an online enablement terminal, a monthly knowledge assessment, a nominated application area, a micro-implementation, and a Monthly Impact Summary delivered to the client.',
  },
  {
    question: 'What are the self-paced modules?',
    answer: 'Modules are delivered through a purpose-built online enablement terminal. They cover practical AI techniques and workflows relevant to operational roles. Content is continuously updated as AI tools and best practices evolve. Specific module topics are being developed and will be published when available.',
  },
  {
    question: 'What is the monthly assessment?',
    answer: 'A short, structured test at the end of each month to confirm understanding and retention of the material covered. This is the accountability checkpoint that separates managed enablement from passive learning. Results feed into the Monthly Impact Summary.',
  },
  {
    question: 'What counts as a micro-implementation?',
    answer: 'Small, high-leverage solutions deployed directly into an employee\u2019s workflow. Examples include prompt templates, light automations, reporting shortcuts, AI playbooks, process checklists, or communication templates. The scope is deliberately kept small to ensure quality and quick deployment.',
  },
  {
    question: 'What if we need a bigger build?',
    answer: 'Anything that exceeds the scope of a micro-implementation becomes a separate project, scoped and delivered independently. Custom integrations, full system architecture, and bespoke software are not included in the monthly program. This keeps the program focused and predictable.',
  },
  {
    question: 'Can our representative attend the sessions?',
    answer: 'Yes. Client representatives are welcome to attend the monthly live session to observe the enablement process, stay across employee progress, and provide context about priorities or upcoming workflow changes.',
  },
  {
    question: 'What is the Monthly Impact Summary?',
    answer: 'A clear report delivered to the client each month showing what was learned, what was tested, what was implemented, and what improved. It provides visibility into the program\u2019s value without requiring the client to manage the process directly.',
  },
  {
    question: 'Is this a course or a webinar?',
    answer: 'No. Ad On AI is not a course, not a webinar, and not pre-recorded content. The live sessions are interactive and hands-on. The self-paced modules are delivered through a purpose-built enablement terminal. Everything is structured around practical application, not passive learning.',
  },
  {
    question: 'Do we need to be using Ad On Workforce?',
    answer: 'The program is designed primarily for businesses using Ad On Workforce BPO seats, but it can work with any embedded employee arrangement. The key requirement is that the employees are working within your business workflows on an ongoing basis.',
  },
  {
    question: 'How do you handle data and safe use of AI?',
    answer: 'We take a practical approach to AI safety. All implementations follow common-sense data handling practices. We don\u2019t send sensitive client data to AI tools without clear protocols, and we build workflows with appropriate human oversight. Specific data policies are discussed during onboarding.',
  },
  {
    question: 'What kind of businesses is this for?',
    answer: 'Australian SMEs with 5 to 50 staff, typically founder-led service businesses with embedded BPO employees who handle operational, administrative, or client-facing work. Businesses that want measurable outcomes and accountability, not impressive demos.',
  },
  {
    question: 'Is this a long-term commitment?',
    answer: 'The program is month-to-month. We recommend a minimum of three months to see compound improvements, but there are no lock-in contracts. The program earns its place by delivering visible, measurable value every month through the Impact Summary.',
  },
]

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-gray-800/40">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-6 text-left group"
      >
        <span className="text-base font-semibold text-white group-hover:text-brand-300 transition-colors">
          {question}
        </span>
        <ChevronDown className={`w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-sm text-gray-400 leading-relaxed pr-12">{answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const { ref, isVisible } = useScrollAnimation()

  return (
    <>
      <PageHeader
        label="FAQ"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about the Ad On AI managed enablement program and how it fits your business."
      />

      <section ref={ref} className="section-padding relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800/60 to-transparent" />
        <div className="section-container">
          <div className={`max-w-3xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}

            <div className="mt-14 text-center">
              <p className="text-sm text-gray-500 mb-6">
                Have a question that isn&apos;t answered here?
              </p>
              <Link to="/contact" className="btn-primary text-base">
                Book a Strategy Call
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
