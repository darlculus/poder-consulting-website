'use client'

import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import TaxCarousel from '@/components/sections/TaxCarousel'
import AboutUs from '@/components/sections/AboutUs'
import ServicesCarousel from '@/components/sections/ServicesCarousel'
import HowItWorks from '@/components/sections/HowItWorks'
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
        <TaxCarousel />
        <AboutUs />
        <ServicesCarousel />
        <HowItWorks />
        <FAQs />
        <ContactForm />
        <Footer />
      </main>
      <ScrollToTop />
    </>
  )
}
