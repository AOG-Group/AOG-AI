import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const credentials = [
  'Australian-Owned',
  'Part of Ad On Group',
  'Informed by BPO Operations',
  'Accountability Built In',
  'Measured by Outcomes',
]

export default function TrustStrip() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-10 border-t border-b border-gray-800/30 relative">
      <div className="section-container">
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex items-center gap-2 mr-2">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Ad On Group</span>
            <span className="text-gray-700">/</span>
            <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider">Ad On AI</span>
          </div>
          <span className="hidden sm:block w-px h-4 bg-gray-800" />
          <div className="flex flex-wrap items-center justify-center gap-2">
            {credentials.map((item) => (
              <span key={item} className="px-3 py-1 text-xs font-medium text-gray-500 border border-gray-800/40 rounded-full bg-navy-900/20">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
