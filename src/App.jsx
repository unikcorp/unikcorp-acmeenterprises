import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingHotline from './components/FloatingHotline';
import CookieConsent from './components/CookieConsent';

// Primary Page Views
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SectorsPage from './pages/SectorsPage';
import ShutdownEpicPage from './pages/ShutdownEpicPage';
import ClientsPage from './pages/ClientsPage';
import SisterConcernsPage from './pages/SisterConcernsPage';
import ContactPage from './pages/ContactPage';
import QuotePage from './pages/QuotePage';

// Statutory & Legal Page Views
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsConditionsPage from './pages/TermsConditionsPage';
import CookiePolicyPage from './pages/CookiePolicyPage';

import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/sectors" element={<SectorsPage />} />
            <Route path="/shutdown-epic" element={<ShutdownEpicPage />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/sister-concerns" element={<SisterConcernsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/quote" element={<QuotePage />} />

            {/* Statutory Legal & Compliance Routes */}
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-conditions" element={<TermsConditionsPage />} />
            <Route path="/terms" element={<TermsConditionsPage />} />
            <Route path="/terms-of-condition" element={<TermsConditionsPage />} />
            <Route path="/cookie-policy" element={<CookiePolicyPage />} />
            <Route path="/cookies" element={<CookiePolicyPage />} />

            {/* Catch-all fallback */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingHotline />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;