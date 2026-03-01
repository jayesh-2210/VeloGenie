import React from 'react';
import { motion } from 'framer-motion';

const variants = {
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    },
    slideUp: {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    },
    slideLeft: {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
    },
    slideRight: {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 }
    },
    zoomIn: {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 }
    }
};

const ScrollReveal = ({ children, variant = 'slideUp', delay = 0, className = '' }) => {
    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
