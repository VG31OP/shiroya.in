import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Values from '../components/Values'
import Seo from '../components/Seo'

const Home = () => {
  return (
    <main>
      <Seo />
      <Hero />
      <Features />
      <HowItWorks />
      <Values />
    </main>
  )
}

export default Home
