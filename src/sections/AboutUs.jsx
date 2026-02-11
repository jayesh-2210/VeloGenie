import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import styles from './AboutUs.module.css';

const AboutUs = () => {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className={styles.title}>We Are VeloGenie</h1>
                    <p className={styles.subtitle}>
                        Architects of the digital future. We believe that speed, logic, and aesthetics
                        must coexist to create web experiences that truly perform.
                    </p>
                </motion.div>

                <div className={styles.content}>
                    <motion.div
                        className={styles.textWrapper}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
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
                    </motion.div>

                    <motion.div
                        className={styles.imageWrapper}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Placeholder for team/office image. Using a colored block for now or we could use generate_image later if requested */}
                        <div style={{
                            width: '100%',
                            height: '400px',
                            background: '#112240',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            border: '1px solid #233554'
                        }}>
                            <iframe
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0"
                                src="https://maps.google.com/maps?width=100%25&height=400&hl=en&q=IIM%20Bangalore&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                                style={{ filter: 'invert(90%) hue-rotate(180deg)' }}
                                title="VeloGenie HQ Location"
                            ></iframe>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className={styles.statsGrid}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.statItem}>
                        <h4>3+</h4>
                        <p>Years Experience</p>
                    </div>
                    <div className={styles.statItem}>
                        <h4>50+</h4>
                        <p>Projects Delivered</p>
                    </div>
                    <div className={styles.statItem}>
                        <h4>99%</h4>
                        <p>Client Retention</p>
                    </div>
                    <div className={styles.statItem}>
                        <h4>24/7</h4>
                        <p>Support</p>
                    </div>
                </motion.div>

                <div className={styles.teamSection}>
                    <motion.h3
                        style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#e6f1ff' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        The Neural Network
                    </motion.h3>
                    <p style={{ color: '#8892b0' }}>The minds behind the magic.</p>

                    <div className={styles.teamGrid}>
                        {['Varun Ahankari', 'Jayesh Gupta'].map((member, index) => (
                            <motion.div
                                key={index}
                                className={styles.teamMember}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    background: '#8892b0',
                                    margin: '0 auto 20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 'bold',
                                    color: '#0a192f',
                                    fontSize: '1.5rem'
                                }}>
                                    {member.split(' ').map(n => n[0]).join('')}
                                </div>
                                <h4 className={styles.memberName}>{member}</h4>
                                <p className={styles.memberRole}>Co-Founder</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div >
        </section >
    );
};

export default AboutUs;
