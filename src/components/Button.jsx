import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const Button = ({ children, variant = 'primary', onClick, href, className = '', ...rest }) => {
    const isInternal = href && href.startsWith('/');
    const Component = isInternal ? Link : (href ? motion.a : motion.button);
    const props = isInternal ? { to: href } : (href ? { href } : { onClick });

    return (
        <Component
            {...props}
            {...rest}
            className={`${styles.button} ${styles[variant]} ${className}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </Component>
    );
};

export default Button;
