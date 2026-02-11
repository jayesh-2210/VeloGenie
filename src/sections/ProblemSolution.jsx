import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProblemSolution.module.css';

const ProblemSolution = () => {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={styles.title}
                    >
                        Stop Losing Customers to Slow Websites
                    </motion.h2>
                </div>

                <div className={styles.comparison}>
                    <motion.div
                        className={`${styles.card} ${styles.problem}`}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
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
                    </motion.div>

                    <motion.div
                        className={`${styles.card} ${styles.solution}`}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
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
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;
