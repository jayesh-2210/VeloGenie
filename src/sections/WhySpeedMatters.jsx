import React from 'react';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';
import styles from './WhySpeedMatters.module.css';

const WhySpeedMatters = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <ScrollReveal variant="slideUp" className={styles.header}>
                    <h1 className={styles.title}>Speed is Currency</h1>
                    <p className={styles.subtitle}>
                        In the digital economy, milliseconds translate directly to revenue.
                        Your customers won't wait, and neither will Google.
                    </p>
                </ScrollReveal>

                <div className={styles.grid}>
                    <ScrollReveal variant="slideUp" delay={0.1} className={styles.card}>
                        <h3 className={styles.cardTitle}>🚀 SEO Dominance</h3>
                        <p className={styles.cardText}>
                            Core Web Vitals are now a major ranking factor. Google prioritizes
                            fast-loading sites because they offer better user experiences.
                            Slow sites get buried on page 2.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal variant="slideUp" delay={0.2} className={styles.card}>
                        <h3 className={styles.cardTitle}>💎 User Retention</h3>
                        <p className={styles.cardText}>
                            53% of mobile users abandon sites that take longer than 3 seconds to load.
                            A snappy interface builds trust and keeps users engaged with your content longer.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal variant="slideUp" delay={0.3} className={styles.card}>
                        <h3 className={styles.cardTitle}>💰 Conversion Rates</h3>
                        <p className={styles.cardText}>
                            Every 100ms delay in load time can hurt conversion rates by 7%.
                            For an e-commerce site, speed optimization is the highest ROI investment you can make.
                        </p>
                    </ScrollReveal>
                </div>

                <ScrollReveal variant="zoomIn" className={styles.cta}>
                    <h2 className={styles.ctaText}>Ready to Accelerate?</h2>
                    <Button href="/quote" variant="secondary">
                        Get a Free Speed Audit
                    </Button>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default WhySpeedMatters;
