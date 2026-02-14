import React from 'react';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';
import heroImage from '../assets/hero-3d.png';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
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
