import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';

import heroImage1 from '../assets/hero-3d.png';
import heroImage2 from '../assets/hero-image.png';
import heroImage3 from '../assets/service-enterprise.png';
import styles from './Hero.module.css';

const bgImages = [heroImage1, heroImage2, heroImage3];

const Hero = () => {
    const [currentBg, setCurrentBg] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % bgImages.length);
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section className={styles.hero}>
            <AnimatePresence>
                <motion.div
                    key={currentBg}
                    className={styles.bgImage}
                    style={{ backgroundImage: `url(${bgImages[currentBg]})` }}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />
            </AnimatePresence>
            <div className={styles.overlay}></div>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <ScrollReveal variant="slideUp">
                        <h1 className={styles.headline}>
                            Complexity Simplified. <br />
                            <span className={styles.highlight}>Speed Delivered.</span>
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal variant="slideUp" delay={0.2}>
                        <p className={styles.subheadline}>
                            We build high-performance digital ecosystems for businesses of all sizes—from local startups to global enterprises.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal variant="slideUp" delay={0.4}>
                        <div className={styles.ctaGroup}>
                            <Button href="/audit" variant="primary">Get a Free Technical Audit</Button>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default Hero;
