import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Preloader.module.css';

const Preloader = ({ limit = 100, onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                const diff = Math.random() * 10;
                const newProgress = Math.min(prev + diff, limit);

                if (newProgress >= limit) {
                    clearInterval(timer);
                    setTimeout(onComplete, 500); // Slight delay before unmounting
                    return limit;
                }
                return newProgress;
            });
        }, 100);

        return () => clearInterval(timer);
    }, [limit, onComplete]);

    return (
        <motion.div
            className={styles.preloader}
            initial={{ y: 0 }}
            exit={{
                y: '-100%',
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            }}
        >
            <div className={styles.logoContainer}>
                <motion.h1
                    className={styles.logoText}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Velo<span className={styles.secondaryText}>Genie</span>
                </motion.h1>
            </div>

            <div className={styles.progressContainer}>
                <motion.div
                    className={styles.progressBar}
                    style={{ width: `${progress}%` }}
                />
            </div>

            <div className={styles.percentage}>
                {Math.round(progress)}%
            </div>
        </motion.div>
    );
};

export default Preloader;
