import React from 'react';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';
import styles from './AboutUs.module.css';

const AboutUs = () => {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <ScrollReveal variant="slideUp" className={styles.header}>
                    <h1 className={styles.title}>We Are VeloGenie</h1>
                    <p className={styles.subtitle}>
                        Architects of the digital future. We believe that speed, logic, and aesthetics
                        must coexist to create web experiences that truly perform.
                    </p>
                </ScrollReveal>

                <div className={styles.content}>
                    <ScrollReveal variant="slideLeft" className={styles.textWrapper}>
                        <h3>Our Mission</h3>
                        <p>
                            To democratize high-performance web engineering. We're tired of seeing
                            bloated, slow websites that frustrate users and hurt businesses.
                        </p>
                        <p>
                            VeloGenie was born from a simple idea: What if we treated every website
                            like a Formula 1 car? Every line of code optimized for speed, every
                            pixel placed for impact.
                        </p>
                        <Button href="/quote" variant="primary">Work With Us</Button>
                    </ScrollReveal>

                    <ScrollReveal variant="slideRight" className={styles.imageWrapper}>
                        <div style={{
                            width: '100%',
                            height: '400px',
                            background: '#f0f0f0',
                            borderRadius: '20px',
                            overflow: 'hidden',
                        }}>
                            <iframe
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0"
                                src="https://maps.google.com/maps?width=100%25&height=400&hl=en&q=Whitefield%20Bangalore&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                                style={{ filter: 'grayscale(20%)' }}
                                title="VeloGenie HQ Location"
                            ></iframe>
                        </div>
                    </ScrollReveal>
                </div>

                <div className={styles.statsGrid}>
                    <ScrollReveal variant="zoomIn" delay={0.1} className={styles.statItem}>
                        <h4>3+</h4>
                        <p>Years Experience</p>
                    </ScrollReveal>
                    <ScrollReveal variant="zoomIn" delay={0.2} className={styles.statItem}>
                        <h4>50+</h4>
                        <p>Projects Delivered</p>
                    </ScrollReveal>
                    <ScrollReveal variant="zoomIn" delay={0.3} className={styles.statItem}>
                        <h4>99%</h4>
                        <p>Client Retention</p>
                    </ScrollReveal>
                    <ScrollReveal variant="zoomIn" delay={0.4} className={styles.statItem}>
                        <h4>24/7</h4>
                        <p>Support</p>
                    </ScrollReveal>
                </div>

                <div className={styles.teamSection}>
                    <ScrollReveal variant="slideUp">
                        <h3
                            style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--color-heading)' }}
                        >
                            The Neural Network
                        </h3>
                        <p style={{ color: '#666' }}>The minds behind the magic.</p>
                    </ScrollReveal>

                    <div className={styles.teamGrid}>
                        {['Varun Ahankari', 'Vishal Ahankari'].map((member, index) => (
                            <ScrollReveal
                                key={index}
                                variant="slideUp"
                                delay={index * 0.1 + 0.2}
                                className={styles.teamMember}
                            >
                                <div style={{
                                    width: '100px',
                                    height: '100px',
                                    borderRadius: '50%',
                                    background: '#e0f2f1',
                                    margin: '0 auto 20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 'bold',
                                    color: 'var(--color-primary)',
                                    fontSize: '2rem'
                                }}>
                                    {member.split(' ').map(n => n[0]).join('')}
                                </div>
                                <h4 className={styles.memberName}>{member}</h4>
                                <p className={styles.memberRole}>Co-Founder</p>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div >
        </section >
    );
};

export default AboutUs;
