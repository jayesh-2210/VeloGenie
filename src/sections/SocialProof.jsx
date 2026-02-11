import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import styles from './SocialProof.module.css';

// Placeholder logos for partners
const partners = ['TechCorp', 'InnoSys', 'GlobalVentures', 'StartupHub', 'NextGen'];

const caseStudies = [
    {
        title: 'Garage Booking Marketplace',
        category: 'Marketplace',
        result: '300% Increase in Bookings',
        desc: 'A high-performance PWA for booking garage services, built with React and Node.js microservices.'
    },
    {
        title: 'FinTech Dashboard',
        category: 'Enterprise App',
        result: 'Real-time Data Processing',
        desc: 'Secure financial dashboard handling millions of transactions with sub-second latency.'
    }
];

const SocialProof = () => {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>

                {/* Trusted Partners */}
                <div className={styles.partnersSection}>
                    <p className={styles.partnersLabel}>Trusted by industry leaders</p>
                    <div className={styles.logoStrip}>
                        {partners.map((partner, index) => (
                            <span key={index} className={styles.partnerLogo}>{partner}</span>
                        ))}
                    </div>
                </div>

                {/* Proof of Magic (Case Studies) */}
                <div className={styles.caseStudiesSection}>
                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Proof of Magic
                    </motion.h2>

                    <div className={styles.grid}>
                        {caseStudies.map((study, index) => (
                            <motion.div
                                key={index}
                                className={styles.card}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <div className={styles.cardContent}>
                                    <span className={styles.category}>{study.category}</span>
                                    <h3 className={styles.studyTitle}>{study.title}</h3>
                                    <p className={styles.result}>{study.result}</p>
                                    <p className={styles.desc}>{study.desc}</p>
                                    <a href="#" className={styles.link}>Read Case Study →</a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SocialProof;
