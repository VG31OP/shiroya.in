import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import LabNavDock from './components/LabNavDock';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Footer from './components/Footer';
import LabCanvas from './components/LabCanvas';

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

function AppContent() {
  const location = useLocation();

  return (
    <div className="bg-[#08080A] text-white selection:bg-[#20E070] selection:text-black min-h-screen relative overflow-x-hidden">
      {/* Interactive Background Particle Physics Canvas */}
      <LabCanvas />

      {/* Floating Spatial Command Dock */}
      <LabNavDock />

      {/* Page Route Transitions */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/privacy" element={<PageWrapper><Privacy /></PageWrapper>} />
          <Route path="/terms" element={<PageWrapper><Terms /></PageWrapper>} />
        </Routes>
      </AnimatePresence>

      {/* Spatial Tool Lab Footer */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
