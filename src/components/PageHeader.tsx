import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface PageHeaderProps {
  label: string
  title: string
  subtitle: string
}

export default function PageHeader({ label, title, subtitle }: PageHeaderProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="pt-32 pb-16 md:pt-40 md:pb-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-950/30 via-transparent to-transparent -z-10" />
      <div className="section-container">
        <div className={`max-w-3xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-sm font-semibold text-brand-400 uppercase tracking-wider mb-4">
            {label}
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
            {title}
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}
