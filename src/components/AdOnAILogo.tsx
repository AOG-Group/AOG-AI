export default function AdOnAILogo({ size = 36, className = '' }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="32" height="32" rx="8" fill="#4263eb" />
      <path d="M10 9L10 23L20 16Z" fill="white" opacity="0.9" />
      <circle cx="22" cy="10" r="2" fill="white" opacity="0.7" />
      <circle cx="22" cy="16" r="2" fill="white" />
      <circle cx="22" cy="22" r="2" fill="white" opacity="0.7" />
      <line x1="20" y1="16" x2="22" y2="10" stroke="white" strokeWidth="0.8" opacity="0.4" />
      <line x1="20" y1="16" x2="22" y2="22" stroke="white" strokeWidth="0.8" opacity="0.4" />
    </svg>
  )
}
