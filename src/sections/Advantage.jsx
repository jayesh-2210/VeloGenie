import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import styles from './Advantage.module.css';

const stats = [
    { label: 'LCP (Largest Contentful Paint)', value: '< 1.2s', desc: 'Lightning fast loading' },
    { label: 'FID (First Input Delay)', value: '< 50ms', desc: 'Instant interactivity' },
    { label: 'CLS (Cumulative Layout Shift)', value: '0', desc: 'Rock-solid stability' },
    { label: 'Uptime Guarantee', value: '99.9%', desc: 'Enterprise-grade reliability' }
];

const Advantage = () => {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        The VeloGenie Advantage
                    </motion.h2>
                    <motion.p
                        className={styles.description}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        We don't just build websites; we engineer high-performance digital assets.
                        Our architecture ensures your business runs at the speed of light, with logic that scales.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <Button variant="primary" href="/why-speed-matters">Why Speed Matters</Button>
                    </motion.div>
                </div>

                <div className={styles.statsGrid}>
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className={styles.statCard}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h3 className={styles.statValue}>{stat.value}</h3>
                            <p className={styles.statLabel}>{stat.label}</p>
                            <span className={styles.statDesc}>{stat.desc}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Advantage;
