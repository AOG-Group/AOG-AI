import Hero from '../components/home/Hero'
import TrustStrip from '../components/home/TrustStrip'
import OfferSection from '../components/home/OfferSection'
import ProblemsSection from '../components/home/ProblemsSection'
import HowItWorks from '../components/home/HowItWorks'
import WhatsIncluded from '../components/home/WhatsIncluded'
import MicroImplementation from '../components/home/MicroImplementation'
import ProofSection from '../components/home/ProofSection'
import ToolsStrip from '../components/home/ToolsStrip'
import FitSection from '../components/home/FitSection'
import CTASection from '../components/home/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <OfferSection />
      <HowItWorks />
      <ProblemsSection />
      <WhatsIncluded />
      <MicroImplementation />
      <ProofSection />
      <ToolsStrip />
      <FitSection />
      <CTASection />
    </>
  )
}
