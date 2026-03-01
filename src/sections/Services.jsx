import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import styles from './Services.module.css';

const tiers = [
    {
        title: 'Starter',
        subtitle: 'For Individuals & Startups',
        description: 'Launch your idea with a professional landing page.',
        features: ['One Page Website', 'Mobile Friendly', 'Basic SEO', 'Fast Delivery'],
        price: 'Starting at ₹5,000',
        color: '#0066cc',
        icon: '/src/assets/service-launchpad.png',
        delay: 0
    },
    {
        title: 'Growth',
        subtitle: 'For Growing Businesses',
        description: 'Expand with a full-featured website or online store.',
        features: ['Multiple Pages / CMS', 'E-commerce Ready', 'Analytics Integration', 'Blog Setup'],
        price: 'Custom Quote',
        color: '#333333',
        featured: true,
        icon: '/src/assets/service-scaleup.png',
        delay: 0.2
    },
    {
        title: 'Enterprise',
        subtitle: 'For Large Organizations',
        description: 'Custom solutions for complex requirements at scale.',
        features: ['Custom Application', 'Advanced Security', 'High Performance', 'Dedicated Support'],
        price: 'Custom Quote',
        color: '#000000',
        icon: '/src/assets/service-enterprise.png',
        delay: 0.4
    }
];

const Services = () => {
    return (
        <section className={styles.section} id="services">
            <div className={`container ${styles.container}`}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className={styles.title}>The Genie Tiers</h2>
                    <p className={styles.subtitle}>Choose the perfect magic for your business size.</p>
                </motion.div>

                <div className={styles.grid}>
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            className={`${styles.card} ${tier.featured ? styles.featured : ''}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05, y: -10 }}
                            viewport={{ once: true }}
                            transition={{ delay: tier.delay, type: 'spring', stiffness: 300, damping: 20 }}
                        >
                            <div className={styles.cardContent}>
                                <div style={{ height: '80px', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                                    <img src={tier.icon} alt={tier.title} style={{ height: '100%', objectFit: 'contain' }} />
                                </div>
                                <h3 className={styles.tierTitle}>{tier.title}</h3>
                                <span className={styles.tierSubtitle}>{tier.subtitle}</span>
                                <p className={styles.description}>{tier.description}</p>
                                <ul className={styles.features}>
                                    {tier.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                                <div className={styles.footer}>
                                    <p className={styles.price}>{tier.price}</p>
                                    <Button href="/quote" variant={tier.featured ? 'primary' : 'secondary'} className={styles.button}>
                                        Get Started
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
