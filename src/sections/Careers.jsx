import React from 'react';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';
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
                <ScrollReveal variant="slideUp" className={styles.header}>
                    <h1 className={styles.title}>Join the VeloGenie Team</h1>
                    <p className={styles.subtitle}>
                        We're looking for obsessive optimizers, creative coders, and digital architects
                        who believe speed is a feature, not an afterthought.
                    </p>
                </ScrollReveal>

                <div className={styles.cultureGrid}>
                    <ScrollReveal variant="slideUp" delay={0.1} className={styles.cultureItem}>
                        <span className={styles.cultureIcon}>⚡</span>
                        <h3 className={styles.cultureTitle}>Speed First</h3>
                        <p className={styles.cultureText}>We obsess over milliseconds. If it can be faster, we make it faster.</p>
                    </ScrollReveal>
                    <ScrollReveal variant="slideUp" delay={0.2} className={styles.cultureItem}>
                        <span className={styles.cultureIcon}>🌍</span>
                        <h3 className={styles.cultureTitle}>Remote Native</h3>
                        <p className={styles.cultureText}>Work from anywhere. We care about output, not hours in a chair.</p>
                    </ScrollReveal>
                    <ScrollReveal variant="slideUp" delay={0.3} className={styles.cultureItem}>
                        <span className={styles.cultureIcon}>🧠</span>
                        <h3 className={styles.cultureTitle}>Deep Logic</h3>
                        <p className={styles.cultureText}>We solve hard problems with elegant, scalable code.</p>
                    </ScrollReveal>
                </div>

                <ScrollReveal variant="slideUp">
                    <h2 style={{ textAlign: 'center', color: 'var(--color-heading)', marginBottom: '40px' }}>Open Positions</h2>
                </ScrollReveal>

                <div className={styles.jobsList}>
                    {jobs.map((job, index) => (
                        <ScrollReveal
                            key={index}
                            variant="slideLeft"
                            delay={index * 0.1}
                            className={styles.jobCard}
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
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Careers;
