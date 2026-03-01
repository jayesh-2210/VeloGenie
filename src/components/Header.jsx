import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Keep Link for accessibility, but prevent default
import { motion } from 'framer-motion';
import { useTransition } from '../context/TransitionContext';
import styles from './Header.module.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { startTransition } = useTransition();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, path) => {
        e.preventDefault();
        setMobileMenuOpen(false); // Close menu when a link is clicked on mobile

        if (path.startsWith('/#')) {
            const hash = path.substring(1); // #section
            const targetId = hash.substring(1); // section

            if (window.location.pathname === '/') {
                const element = document.getElementById(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    return;
                }
            }
        }

        startTransition(path);
    };

    return (
        <motion.header
            className={styles.header}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
            style={{
                padding: scrolled && window.innerWidth > 768 ? '1rem 2rem' : (window.innerWidth > 768 ? '1.5rem 2rem' : undefined),
                background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.9)'
            }}
        >
            <a href="/" onClick={(e) => handleNavClick(e, '/')} className={styles.logo} style={{ zIndex: 1001 }}>
                <img src="/assets/logo-transparent.png" alt="VeloGenie Tech Solutions" className={styles.logoImg} />
            </a>

            <button
                className={`${styles.hamburger} ${mobileMenuOpen ? styles.open : ''}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav className={`${styles.nav} ${mobileMenuOpen ? styles.open : ''}`}>
                <a href="/about" onClick={(e) => handleNavClick(e, '/about')} className={styles.navLink}>About</a>
                <a href="/#why-speed-matters" onClick={(e) => handleNavClick(e, '/#why-speed-matters')} className={styles.navLink}>Why Speed Matters</a>
                <a href="/services" onClick={(e) => handleNavClick(e, '/services')} className={styles.navLink}>The Genie Tiers</a>
                <a href="/audit" onClick={(e) => handleNavClick(e, '/audit')} className={styles.navLink}>Technical Audit</a>
                <a href="/careers" onClick={(e) => handleNavClick(e, '/careers')} className={styles.navLink}>Careers</a>
                <a href="/quote" onClick={(e) => handleNavClick(e, '/quote')} className={styles.ctaButton}>Get a Quote</a>
            </nav>
        </motion.header>
    );
};

export default Header;
