import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import styles from './ProblemSolution.module.css';

const ProblemSolution = () => {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <ScrollReveal variant="slideUp">
                        <h2 className={styles.title}>
                            Stop Losing Customers to Slow Websites
                        </h2>
                    </ScrollReveal>
                </div>

                <div className={styles.comparison}>
                    <ScrollReveal variant="slideLeft" className={`${styles.card} ${styles.problem}`}>
                        <div className={styles.cardHeader}>
                            <h3>The Old Way</h3>
                            <span className={styles.icon}>🐢</span>
                        </div>
                        <ul className={styles.list}>
                            <li>Slow, legacy monolithic code</li>
                            <li>Unscalable architecture</li>
                            <li>Poor Core Web Vitals</li>
                            <li>High bounce rates</li>
                        </ul>
                    </ScrollReveal>

                    <ScrollReveal variant="zoomIn" delay={0.2} className={`${styles.card} ${styles.solution}`}>
                        <div className={styles.cardHeader}>
                            <h3>The VeloGenie Way</h3>
                            <span className={styles.icon}>⚡</span>
                        </div>
                        <ul className={styles.list}>
                            <li><strong>Microservice-based</strong> architecture</li>
                            <li>Lightning-fast <strong>React/Java</strong> stack</li>
                            <li>99+ Google PageSpeed Scores</li>
                            <li>Seamless scalability</li>
                        </ul>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;
