import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'
import MouseGlow from './components/MouseGlow'
import useSectionNavigation from './hooks/useSectionNavigation'

const SectionScrollHandler = () => {
    // This component will handle scrolling when state changes during navigation
    useSectionNavigation();
    return null;
}

function App() {
  return (
    <Router>
      <div className="bg-black text-white selection:bg-primary/30 selection:text-primary min-h-screen relative">
        <AnimatedBackground />
        <SectionScrollHandler />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
