import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const TransitionContext = createContext();

export const TransitionProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true); // Initial load is true
    const navigate = useNavigate();
    const location = useLocation();

    const [pendingPath, setPendingPath] = useState(null);

    const startTransition = (to) => {
        if (location.pathname === to) return;
        setPendingPath(to);
        setIsLoading(true);
    };

    const completedTransition = () => {
        if (pendingPath) {
            navigate(pendingPath);
            setPendingPath(null);
            // Wait a tick for navigation to happen, then hide preloader
            setTimeout(() => {
                setIsLoading(false);
            }, 100);
        } else {
            // Initial load finished
            setIsLoading(false);
        }
    };

    return (
        <TransitionContext.Provider value={{ isLoading, startTransition, completedTransition }}>
            {children}
        </TransitionContext.Provider>
    );
};

export const useTransition = () => useContext(TransitionContext);
