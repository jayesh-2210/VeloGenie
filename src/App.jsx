import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './styles/GlobalStyles.css';
import Header from './components/Header';
import Hero from './sections/Hero';
import Services from './sections/Services';
import ProblemSolution from './sections/ProblemSolution';
import CaseStudies from './sections/CaseStudies';
import Advantage from './sections/Advantage';
import Footer from './sections/Footer';
import TechnicalAudit from './sections/TechnicalAudit';
import RequestQuote from './sections/RequestQuote';
import WhySpeedMatters from './sections/WhySpeedMatters';
import AboutUs from './sections/AboutUs';
import Careers from './sections/Careers';

import Preloader from './components/Preloader';
import { TransitionProvider, useTransition } from './context/TransitionContext';

function Layout() {
    return (
        <div className="app">
            <Hero />
            <ProblemSolution />
            <Services />
            <Advantage />
            <Footer />
        </div>
    );
}

function AuditPage() {
    return (
        <div className="app">
            <TechnicalAudit />
            <Footer />
        </div>
    );
}

function QuotePage() {
    return (
        <div className="app">
            <RequestQuote />
            <Footer />
        </div>
    );
}

function SpeedPage() {
    return (
        <div className="app">
            <WhySpeedMatters />
            <Footer />
        </div>
    );
}

function AboutPage() {
    return (
        <div className="app">
            <AboutUs />
            <Footer />
        </div>
    );
}

function CaseStudiesPage() {
    return (
        <div className="app">
            <CaseStudies />
            <Footer />
        </div>
    );
}

function CareersPage() {
    return (
        <div className="app">
            <Careers />
            <Footer />
        </div>
    );
}

// Create a wrapper component to consume the context
const AppContent = () => {
    const { isLoading, completedTransition } = useTransition();

    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isLoading]);

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <Preloader key="preloader" onComplete={completedTransition} />
                )}
            </AnimatePresence>
            {!isLoading && (
                <>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Layout />} />
                        <Route path="/audit" element={<AuditPage />} />
                        <Route path="/quote" element={<QuotePage />} />
                        <Route path="/why-speed-matters" element={<SpeedPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/case-studies" element={<CaseStudiesPage />} />
                        <Route path="/careers" element={<CareersPage />} />
                    </Routes>
                </>
            )}
        </>
    );
};

function App() {
    return (
        <TransitionProvider>
            <AppContent />
        </TransitionProvider>
    );
}

export default App;
