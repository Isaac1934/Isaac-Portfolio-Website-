import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { ThemeProvider } from './components/ThemeContext';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col font-sans selection:bg-primary selection:text-white">
          <Navbar />
          <main className="flex-grow w-full max-w-2xl mx-auto px-6 pt-24 pb-12">
             <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/projects" element={<Projects />} />
               <Route path="/contact" element={<Contact />} />
             </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;