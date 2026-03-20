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

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    {children}
  </motion.div>
)

function AppContent() {
  const location = useLocation();

  return (
    <div className="bg-black text-white selection:bg-primary/30 selection:text-primary min-h-screen relative">
      <AnimatedBackground />
      <MouseGlow />
      <SectionScrollHandler />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/privacy" element={<PageWrapper><Privacy /></PageWrapper>} />
          <Route path="/terms" element={<PageWrapper><Terms /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
