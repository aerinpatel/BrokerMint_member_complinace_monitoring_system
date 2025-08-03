import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import Technology from './components/Technology';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import FreeTrialModal from './components/FreeTrialModal';
import DemoModal from './components/DemoModal';

function App() {
  const [isFreeTrialModalOpen, setIsFreeTrialModalOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  // Listen for custom events from other components
  React.useEffect(() => {
    const handleOpenFreeTrialModal = () => setIsFreeTrialModalOpen(true);
    const handleOpenDemoModal = () => setIsDemoModalOpen(true);

    window.addEventListener('openFreeTrialModal', handleOpenFreeTrialModal);
    window.addEventListener('openDemoModal', handleOpenDemoModal);

    return () => {
      window.removeEventListener('openFreeTrialModal', handleOpenFreeTrialModal);
      window.removeEventListener('openDemoModal', handleOpenDemoModal);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onFreeTrialClick={() => setIsFreeTrialModalOpen(true)}
        onDemoClick={() => setIsDemoModalOpen(true)}
      />
      <Hero 
        onFreeTrialClick={() => setIsFreeTrialModalOpen(true)}
        onDemoClick={() => setIsDemoModalOpen(true)}
      />
      <ProblemSolution />
      <Features />
      <Technology />
      <Benefits />
      <Pricing onFreeTrialClick={() => setIsFreeTrialModalOpen(true)} />
      <Footer />
      
      <FreeTrialModal 
        isOpen={isFreeTrialModalOpen}
        onClose={() => setIsFreeTrialModalOpen(false)}
      />
      <DemoModal 
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </div>
  );
}

export default App;