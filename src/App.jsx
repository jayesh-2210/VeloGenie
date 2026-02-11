import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './sections/Hero';
import ProblemSolution from './sections/ProblemSolution';
import Services from './sections/Services';
import Advantage from './sections/Advantage';
import SocialProof from './sections/SocialProof';
import Footer from './sections/Footer';
import TechnicalAudit from './sections/TechnicalAudit';
import RequestQuote from './sections/RequestQuote';
import WhySpeedMatters from './sections/WhySpeedMatters';
import AboutUs from './sections/AboutUs';
import CaseStudies from './sections/CaseStudies';
import Careers from './sections/Careers';

function Layout() {
    return (
        <div className="app">
            <Hero />
            <ProblemSolution />
            <Services />
            <Advantage />
            <SocialProof />
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

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="/audit" element={<AuditPage />} />
                <Route path="/quote" element={<QuotePage />} />
                <Route path="/why-speed-matters" element={<SpeedPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                <Route path="/careers" element={<CareersPage />} />
            </Routes>
        </Router>
    );
}

export default App;
