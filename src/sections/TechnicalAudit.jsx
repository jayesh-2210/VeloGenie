import React, { useState } from 'react';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';
import styles from './TechnicalAudit.module.css';

const TechnicalAudit = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        website: '',
        painPoints: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setSubmitted(true);
        }, 1000);
    };

    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <ScrollReveal variant="slideUp" className={styles.content}>
                    <h1 className={styles.title}>Get Your Free Technical Audit</h1>
                    <p className={styles.subtitle}>
                        Discover the hidden bottlenecks slowing down your business.
                        Our experts will analyze your architecture, performance, and security.
                    </p>

                    {submitted ? (
                        <div className={styles.successMessage}>
                            <h3>🚀 Audit Request Received!</h3>
                            <p>Our Genies are already analyzing your digital footprint. We'll be in touch shortly.</p>
                            <Button href="/" variant="secondary">Back to Home</Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="email">Work Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@company.com"
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="website">Website URL</label>
                                <input
                                    type="url"
                                    id="website"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleChange}
                                    required
                                    placeholder="https://yourcompany.com"
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="painPoints">Current Pain Points (Optional)</label>
                                <textarea
                                    id="painPoints"
                                    name="painPoints"
                                    value={formData.painPoints}
                                    onChange={handleChange}
                                    placeholder="Slow load times, mobile issues, etc."
                                    rows="4"
                                ></textarea>
                            </div>
                            <Button type="submit" variant="primary" className={styles.submitBtn}>
                                Request Audit
                            </Button>
                        </form>
                    )}
                </ScrollReveal>
            </div>
        </section>
    );
};

export default TechnicalAudit;
