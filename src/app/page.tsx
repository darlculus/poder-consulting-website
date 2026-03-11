'use client'

import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import TrustIndicators from '@/components/sections/TrustIndicators'
import AboutUs from '@/components/sections/AboutUs'
import ServicesCarousel from '@/components/sections/ServicesCarousel'
import HowItWorks from '@/components/sections/HowItWorks'
import Values from '@/components/sections/Values'
import Comparison from '@/components/sections/Comparison'
import TargetUsers from '@/components/sections/TargetUsers'
import FAQs from '@/components/sections/FAQs'
import ContactForm from '@/components/sections/ContactForm'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/ui/ScrollToTop'
import GetStartedModal from '@/components/ui/GetStartedModal'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <TrustIndicators />
        <AboutUs />
        <ServicesCarousel />
        <HowItWorks />
        <Values />
        <Comparison />
        <TargetUsers />
        <FAQs />
        <ContactForm />
        <Footer />
      </main>
      <ScrollToTop />
    </>
  )
}
