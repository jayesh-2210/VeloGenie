import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import styles from './Careers.module.css';

const jobs = [
    {
        title: 'Senior Frontend Engineer',
        type: 'Full-time',
        location: 'Remote',
        department: 'Engineering'
    },
    {
        title: 'Performance Optimization Specialist',
        type: 'Contract',
        location: 'Remote',
        department: 'Consulting'
    },
    {
        title: 'UX/UI Designer',
        type: 'Full-time',
        location: 'New York / Remote',
        department: 'Design'
    }
];

const Careers = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className={styles.title}>Join the VeloGenie Team</h1>
                    <p className={styles.subtitle}>
                        We're looking for obsessive optimizers, creative coders, and digital architects
                        who believe speed is a feature, not an afterthought.
                    </p>
                </motion.div>

                <motion.div
                    className={styles.cultureGrid}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.cultureItem}>
                        <span className={styles.cultureIcon}>⚡</span>
                        <h3 className={styles.cultureTitle}>Speed First</h3>
                        <p className={styles.cultureText}>We obsess over milliseconds. If it can be faster, we make it faster.</p>
                    </div>
                    <div className={styles.cultureItem}>
                        <span className={styles.cultureIcon}>🌍</span>
                        <h3 className={styles.cultureTitle}>Remote Native</h3>
                        <p className={styles.cultureText}>Work from anywhere. We care about output, not hours in a chair.</p>
                    </div>
                    <div className={styles.cultureItem}>
                        <span className={styles.cultureIcon}>🧠</span>
                        <h3 className={styles.cultureTitle}>Deep Logic</h3>
                        <p className={styles.cultureText}>We solve hard problems with elegant, scalable code.</p>
                    </div>
                </motion.div>

                <h2 style={{ textAlign: 'center', color: '#e6f1ff', marginBottom: '40px' }}>Open Positions</h2>

                <div className={styles.jobsList}>
                    {jobs.map((job, index) => (
                        <motion.div
                            key={index}
                            className={styles.jobCard}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.jobInfo}>
                                <h3>{job.title}</h3>
                                <div className={styles.jobMeta}>
                                    <span>{job.department}</span>
                                    <span>•</span>
                                    <span>{job.type}</span>
                                    <span>•</span>
                                    <span>{job.location}</span>
                                </div>
                            </div>
                            <Button href="#" className={styles.applyButton}>Apply Now</Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Careers;
