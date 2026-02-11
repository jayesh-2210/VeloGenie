import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import heroImage from '../assets/hero-image.png';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.container}`}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h1
                        className={styles.headline}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Complexity Simplified. <br />
                        <span className={styles.highlight}>Speed Delivered.</span>
                    </motion.h1>
                    <motion.p
                        className={styles.subheadline}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        We build high-performance digital ecosystems for businesses of all sizes—from local startups to global enterprises.
                    </motion.p>
                    <div className={styles.ctaGroup}>
                        <Button href="/audit" variant="primary">Get a Free Technical Audit</Button>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.visual}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
                >
                    <div className={styles.imageWrapper}>
                        <img src={heroImage} alt="High-performance digital ecosystem" className={styles.heroImage} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
