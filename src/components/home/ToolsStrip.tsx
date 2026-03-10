import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const tools = [
  'Google Workspace',
  'OpenAI',
  'Claude',
  'Gemini',
  'Monday.com',
  'SuiteDash',
  'Make',
  'Zapier',
  'Slack',
  'AWS',
  'WordPress',
  'Google Analytics',
  'SE Ranking',
  'Canva',
]

export default function ToolsStrip() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-14 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800/60 to-transparent" />
      <div className="section-container">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-xs text-gray-600 uppercase tracking-wider font-medium text-center mb-8">
            Tooling we work within
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-gray-500 border border-gray-800/40 rounded-full bg-navy-900/20 hover:border-gray-700/60 hover:text-gray-400 transition-colors"
              >
                <span className="w-[18px] h-[18px] rounded-[5px] bg-gray-800/80 flex items-center justify-center flex-shrink-0">
                  <span className="text-[9px] font-bold text-gray-500 leading-none select-none">
                    {tool.charAt(0)}
                  </span>
                </span>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
