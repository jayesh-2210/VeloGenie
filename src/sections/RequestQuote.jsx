import React, { useState } from 'react';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';
import styles from './RequestQuote.module.css';
import { supabase } from '../lib/supabase';

const RequestQuote = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        serviceType: 'LaunchPad',
        budget: '',
        details: ''
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
                .from('quotes')
                .insert([
                    {
                        name: formData.name,
                        email: formData.email,
                        company: formData.company,
                        service_type: formData.serviceType,
                        budget: formData.budget,
                        details: formData.details
                    }
                ]);

            if (error) {
                console.error('Supabase insert error:', error);
                throw new Error(error.message || 'Failed to submit quote request. Please try again.');
            }

            setStatus('success');
            // Optional: reset form
            // setFormData({ name: '', email: '', company: '', serviceType: 'LaunchPad', budget: '', details: '' });
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
                    <h1 className={styles.title}>Start Your Transformation</h1>
                    <p className={styles.subtitle}>
                        Tell us about your vision. We'll engineer the logic to make it magical.
                    </p>

                    {status === 'success' ? (
                        <div className={styles.successMessage}>
                            <h3>✨ Quote Request Sent!</h3>
                            <p>We've received your project details. A VeloGenie strategist will contact you within 24 hours.</p>
                            <Button href="/" variant="primary">Return Home</Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className={styles.form}>
                            {status === 'error' && (
                                <div className={styles.errorMessage} style={{ color: 'red', marginBottom: '1rem', padding: '1rem', backgroundColor: '#ffebee', borderRadius: '4px' }}>
                                    {errorMessage}
                                </div>
                            )}
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
                                        disabled={status === 'submitting'}
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
                                        disabled={status === 'submitting'}
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
                                        disabled={status === 'submitting'}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="serviceType">Interested Service</label>
                                    <select
                                        id="serviceType"
                                        name="serviceType"
                                        value={formData.serviceType}
                                        onChange={handleChange}
                                        disabled={status === 'submitting'}
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
                                    disabled={status === 'submitting'}
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
                                    disabled={status === 'submitting'}
                                ></textarea>
                            </div>

                            <Button type="submit" variant="primary" className={styles.submitBtn} disabled={status === 'submitting'}>
                                {status === 'submitting' ? 'Submitting...' : 'Submit Request'}
                            </Button>
                        </form>
                    )}
                </ScrollReveal>
            </div>
        </section>
    );
};

export default RequestQuote;
