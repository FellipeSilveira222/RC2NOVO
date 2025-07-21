import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SocialProof from './components/SocialProof';
import WhatYouWillFind from './components/WhatYouWillFind';
import CalviceStages from './components/CalviceStages';
import IdentificationFilter from './components/IdentificationFilter';
import Testimonials from './components/Testimonials';
import GuaranteeSection from './components/GuaranteeSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <SocialProof />
      <WhatYouWillFind />
      <CalviceStages />
      <IdentificationFilter />
      <Testimonials />
      <GuaranteeSection />
      <Footer />
      <WhatsAppButton />
    </>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
      </Routes>
    </div>
  );
}

export default App;