import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import styles from './WhySpeedMatters.module.css';

const WhySpeedMatters = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className={styles.title}>Speed is Currency</h1>
                    <p className={styles.subtitle}>
                        In the digital economy, milliseconds translate directly to revenue.
                        Your customers won't wait, and neither will Google.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    <motion.div
                        className={styles.card}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h3 className={styles.cardTitle}>🚀 SEO Dominance</h3>
                        <p className={styles.cardText}>
                            Core Web Vitals are now a major ranking factor. Google prioritizes
                            fast-loading sites because they offer better user experiences.
                            Slow sites get buried on page 2.
                        </p>
                    </motion.div>

                    <motion.div
                        className={styles.card}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className={styles.cardTitle}>💎 User Retention</h3>
                        <p className={styles.cardText}>
                            53% of mobile users abandon sites that take longer than 3 seconds to load.
                            A snappy interface builds trust and keeps users engaged with your content longer.
                        </p>
                    </motion.div>

                    <motion.div
                        className={styles.card}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <h3 className={styles.cardTitle}>💰 Conversion Rates</h3>
                        <p className={styles.cardText}>
                            Every 100ms delay in load time can hurt conversion rates by 7%.
                            For an e-commerce site, speed optimization is the highest ROI investment you can make.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    className={styles.cta}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className={styles.ctaText}>Ready to Accelerate?</h2>
                    <Button href="/quote" variant="primary">
                        Get a Free Speed Audit
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default WhySpeedMatters;
