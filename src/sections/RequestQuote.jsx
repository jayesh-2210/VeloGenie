import React, { useState } from 'react';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';
import styles from './RequestQuote.module.css';

const RequestQuote = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        serviceType: 'LaunchPad',
        budget: '',
        details: ''
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
                    <h1 className={styles.title}>Start Your Transformation</h1>
                    <p className={styles.subtitle}>
                        Tell us about your vision. We'll engineer the logic to make it magical.
                    </p>

                    {submitted ? (
                        <div className={styles.successMessage}>
                            <h3>✨ Quote Request Sent!</h3>
                            <p>We've received your project details. A VeloGenie strategist will contact you within 24 hours.</p>
                            <Button href="/" variant="primary">Return Home</Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.row}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Jane Smith"
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="jane@company.com"
                                    />
                                </div>
                            </div>

                            <div className={styles.row}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="company">Company</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Company Ltd."
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="serviceType">Interested Service</label>
                                    <select
                                        id="serviceType"
                                        name="serviceType"
                                        value={formData.serviceType}
                                        onChange={handleChange}
                                    >
                                        <option value="LaunchPad">LaunchPad (Small Biz)</option>
                                        <option value="ScaleUp">ScaleUp (Medium Biz)</option>
                                        <option value="Enterprise Forge">Enterprise Forge</option>
                                        <option value="Custom">Other / Custom</option>
                                    </select>
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="budget">Estimated Budget</label>
                                <select
                                    id="budget"
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                >
                                    <option value="">Select a range</option>
                                    <option value="<5k">&lt; $5,000</option>
                                    <option value="5k-20k">$5,000 - $20,000</option>
                                    <option value="20k-50k">$20,000 - $50,000</option>
                                    <option value="50k+">$50,000+</option>
                                </select>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="details">Project Details</label>
                                <textarea
                                    id="details"
                                    name="details"
                                    value={formData.details}
                                    onChange={handleChange}
                                    placeholder="Describe your project, goals, and timeline..."
                                    rows="5"
                                    required
                                ></textarea>
                            </div>

                            <Button type="submit" variant="primary" className={styles.submitBtn}>
                                Submit Request
                            </Button>
                        </form>
                    )}
                </ScrollReveal>
            </div>
        </section>
    );
};

export default RequestQuote;
