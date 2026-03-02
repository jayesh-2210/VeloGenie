import React, { useState } from 'react';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';
import styles from './TechnicalAudit.module.css';
import { supabase } from '../lib/supabase';

const TechnicalAudit = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        website: '',
        painPoints: ''
    });
    const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        try {
            const { error } = await supabase
                .from('technical_audits')
                .insert([
                    {
                        name: formData.name,
                        email: formData.email,
                        website: formData.website,
                        pain_points: formData.painPoints
                    }
                ]);

            if (error) {
                console.error('Supabase insert error:', error);
                throw new Error(error.message || 'Failed to submit audit request. Please try again.');
            }

            setStatus('success');
            // Optional: reset form
            // setFormData({ name: '', email: '', website: '', painPoints: '' });
        } catch (err) {
            console.error('Error submitting form:', err);
            setStatus('error');
            setErrorMessage(err.message || 'An unexpected error occurred.');
        }
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

                    {status === 'success' ? (
                        <div className={styles.successMessage}>
                            <h3>🚀 Audit Request Received!</h3>
                            <p>Our Genies are already analyzing your digital footprint. We'll be in touch shortly.</p>
                            <Button href="/" variant="secondary">Back to Home</Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className={styles.form}>
                            {status === 'error' && (
                                <div className={styles.errorMessage} style={{ color: 'red', marginBottom: '1rem', padding: '1rem', backgroundColor: '#ffebee', borderRadius: '4px' }}>
                                    {errorMessage}
                                </div>
                            )}
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
                                    disabled={status === 'submitting'}
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
                                    disabled={status === 'submitting'}
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
                                    disabled={status === 'submitting'}
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
                                    disabled={status === 'submitting'}
                                ></textarea>
                            </div>
                            <Button type="submit" variant="primary" className={styles.submitBtn} disabled={status === 'submitting'}>
                                {status === 'submitting' ? 'Requesting...' : 'Request Audit'}
                            </Button>
                        </form>
                    )}
                </ScrollReveal>
            </div>
        </section>
    );
};

export default TechnicalAudit;
