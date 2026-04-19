import React from 'react';
import Button from '../components/Button';
import styles from './Footer.module.css';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <div className={styles.logo}>
                            <img src="/assets/logo-transparent.png" alt="VeloGenie Tech Solutions" className={styles.logoImg} />
                        </div>
                        <p className={styles.tagline}>The Magic of Speed. The Power of Logic</p>
                    </div>

                    <div className={styles.links}>
                        <div className={styles.column}>
                            <h4>Services</h4>
                            <a href="/services">Starter</a>
                            <a href="/services">Growth</a>
                            <a href="/services">Enterprise</a>
                        </div>
                        <div className={styles.column}>
                            <h4>Company</h4>
                            <a href="/about">About Us</a>
                            <a href="/case-studies">Case Studies</a>
                            <a href="/careers">Careers</a>
                        </div>
                        <div className={styles.column}>
                            <h4>Contact</h4>
                            <p style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.6' }}>
                                <strong>Registered Office:</strong><br />
                                2104, Sunscape, Sobha Hillview Apartment,<br />
                                Thalagattapura, Bengaluru,<br />
                                Karnataka, India - 560062
                            </p>
                        </div>
                        <div className={styles.column}>
                            <h4>Connect</h4>
                            <div className={styles.socials}>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} VeloGenie Tech Solutions. All rights reserved.</p>
                </div>
            </div>

            {/* Sticky Request Quote Button (Mobile optimized but visible everywhere) */}
            <div className={styles.stickyCta}>
                <Button
                    href="https://wa.me/9016664663"
                    className={styles.stickyButton}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaWhatsapp size={20} style={{ marginRight: '8px' }} />
                    Chat With Us
                </Button>
            </div>
        </footer>
    );
};

export default Footer;
