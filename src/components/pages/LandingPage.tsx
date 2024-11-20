
import { Hero } from './Hero'
import Features from '../common/Features'
import Work from '../common/Work'
import Pricing from '../common/Pricing'


export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
    <main className="flex-grow">
      <Hero />
      <Features />
      <Work />
      <Pricing />
    </main>
  </div>
  )
}
