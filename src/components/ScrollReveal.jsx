import React from 'react';
import { motion } from 'framer-motion';

const variants = {
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.6 } }
    },
    slideUp: {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    },
    slideLeft: {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    },
    slideRight: {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    },
    zoomIn: {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    }
};

const ScrollReveal = ({ children, variant = 'slideUp', delay = 0, className = '' }) => {
    return (
        <motion.div
            variants={variants}
            initial={variants[variant].hidden}
            whileInView={variants[variant].visible}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
