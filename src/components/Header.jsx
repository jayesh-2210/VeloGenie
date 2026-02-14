import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Keep Link for accessibility, but prevent default
import { useTransition } from '../context/TransitionContext';
import styles from './Header.module.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
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
        <header className={styles.header} style={{
            padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
            background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.9)'
        }}>
            <a href="/" onClick={(e) => handleNavClick(e, '/')} className={styles.logo}>
                VeloGenie
            </a>

            <nav className={styles.nav}>
                <a href="/about" onClick={(e) => handleNavClick(e, '/about')} className={styles.navLink}>About</a>
                <a href="/#why-speed-matters" onClick={(e) => handleNavClick(e, '/#why-speed-matters')} className={styles.navLink}>Why Speed Matters</a>
                <a href="/services" onClick={(e) => handleNavClick(e, '/services')} className={styles.navLink}>The Genie Tiers</a>
                <a href="/audit" onClick={(e) => handleNavClick(e, '/audit')} className={styles.navLink}>Technical Audit</a>
                <a href="/careers" onClick={(e) => handleNavClick(e, '/careers')} className={styles.navLink}>Careers</a>
                <a href="/quote" onClick={(e) => handleNavClick(e, '/quote')} className={styles.ctaButton}>Get a Quote</a>
            </nav>
        </header>
    );
};

export default Header;
