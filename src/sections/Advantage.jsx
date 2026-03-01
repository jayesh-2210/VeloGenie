import React from 'react';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';
import styles from './Advantage.module.css';
import advantageSpeedImg from '../assets/advantage-speed.png';

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
                    <ScrollReveal variant="slideLeft">
                        <h2 className={styles.title}>The VeloGenie Advantage</h2>
                        <p className={styles.description}>
                            We don't just build websites; we engineer high-performance digital assets.
                            Our architecture ensures your business runs at the speed of light, with logic that scales.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal variant="zoomIn" delay={0.2} className={styles.imageWrapper}>
                        <img
                            src={advantageSpeedImg}
                            alt="Speed Advantage"
                            style={{ width: '100%', display: 'block' }}
                        />
                    </ScrollReveal>

                    <ScrollReveal variant="slideUp" delay={0.3}>
                        <Button variant="primary" href="/why-speed-matters">Why Speed Matters</Button>
                    </ScrollReveal>
                </div>

                <div className={styles.statsGrid}>
                    {stats.map((stat, index) => (
                        <ScrollReveal
                            key={index}
                            variant="zoomIn"
                            delay={index * 0.1 + 0.2}
                            className={styles.statCard}
                        >
                            <h3 className={styles.statValue}>{stat.value}</h3>
                            <span className={styles.statLabel}>{stat.label}</span>
                            <span className={styles.statDesc}>{stat.desc}</span>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Advantage;
