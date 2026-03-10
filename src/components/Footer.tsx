import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import AdOnAILogo from './AdOnAILogo'

const footerLinks = {
  program: [
    { label: 'How It Works', href: '/program' },
    { label: 'For AOW Clients', href: '/aow' },
    { label: 'Proof & Results', href: '/proof' },
    { label: 'FAQ', href: '/faq' },
  ],
  company: [
    { label: 'Book a Strategy Call', href: '/contact' },
    { label: 'Ad On Group', href: '#', external: true },
    { label: 'Ad On Workforce', href: '#', external: true },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-gray-800/40">
      <div className="section-container">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <AdOnAILogo size={32} />
              <span className="text-lg font-bold text-white tracking-tight">
                Ad On <span className="text-brand-400">AI</span>
              </span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm mb-5">
              Managed AI enablement for BPO employees embedded in
              Australian businesses. Structured learning, built-in
              accountability, and monthly micro-implementation.
            </p>
            <div className="rounded-lg border border-gray-800/40 bg-navy-900/20 p-4 max-w-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Ad On Group</span>
                <span className="text-gray-700">/</span>
                <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider">Ad On AI</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                A specialist AI enablement division within the Ad On Group
                ecosystem, informed by Ad On Workforce operational experience.
              </p>
            </div>
          </div>

          {/* Program */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Program</h4>
            <ul className="space-y-3">
              {footerLinks.program.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a href={link.href} className="text-sm text-gray-500 hover:text-gray-300 transition-colors inline-flex items-center gap-1">
                      {link.label}
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link to={link.href} className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-gray-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p className="text-xs text-gray-600">
              &copy; {new Date().getFullYear()} Ad On AI. All rights reserved.
            </p>
            <span className="hidden sm:block text-gray-800">|</span>
            <p className="text-xs text-gray-600">Australian-owned. Part of Ad On Group.</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
