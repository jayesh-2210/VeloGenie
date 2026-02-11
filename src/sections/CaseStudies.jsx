import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import styles from './CaseStudies.module.css';

const projects = [
    {
        title: 'Ecommerce Giant Replatform',
        category: 'Enterprise Forge',
        description: 'Migrated a monolithic Magento store to a headless Next.js architecture. Reduced load time by 65% and increased mobile conversions by 40%.',
        image: '/src/assets/case-ecommerce.png',
        stats: [
            { label: 'Load Time', value: '-65%' },
            { label: 'Conversion', value: '+40%' }
        ]
    },
    {
        title: 'FinTech Dashboard',
        category: 'ScaleUp',
        description: 'Real-time analytics dashboard for a crypto trading platform. Implemented WebSocket connections for sub-millisecond data updates.',
        image: '/src/assets/case-fintech.png',
        stats: [
            { label: 'Latency', value: '<50ms' },
            { label: 'Uptime', value: '99.99%' }
        ]
    },
    {
        title: 'Artisan Coffee Roasters',
        category: 'LaunchPad',
        description: 'Single-page application for a local coffee brand. Integrated custom booking form for workshops and SEO optimization for local search.',
        image: '/src/assets/case-coffee.png',
        stats: [
            { label: 'Traffic', value: '+200%' },
            { label: 'Leads', value: '15/mo' }
        ]
    }
];

const CaseStudies = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className={styles.title}>Success Stories</h1>
                    <p className={styles.subtitle}>
                        Real results for real businesses. See how VeloGenie transforms
                        digital presence into digital dominance.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.imagePlaceholder} style={{ background: 'none', padding: 0, overflow: 'hidden' }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                />
                            </div>
                            <div className={styles.cardContent}>
                                <span className={styles.cardCategory}>{project.category}</span>
                                <h3 className={styles.cardTitle}>{project.title}</h3>
                                <p className={styles.cardDescription}>{project.description}</p>
                                <div className={styles.statsRow}>
                                    {project.stats.map((stat, i) => (
                                        <div key={i} className={styles.stat}>
                                            <h5>{stat.value}</h5>
                                            <span>{stat.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '80px' }}>
                    <h3 style={{ color: '#e6f1ff', marginBottom: '20px' }}>Ready to be our next success story?</h3>
                    <Button href="/quote" variant="primary">Start Your Project</Button>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
