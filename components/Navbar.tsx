'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-lg border-b border-white/10"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20 md:h-24">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center cursor-pointer"
                        onClick={() => scrollToSection('home')}
                    >
                        <h1 className="text-2xl md:text-3xl font-display font-black text-white">
                            <span className="text-primary">Dumbbell</span> Den
                        </h1>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {['Home', 'Programs', 'Pricing', 'Contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className="text-gray-300 hover:text-primary transition-colors font-medium"
                            >
                                {item}
                            </button>
                        ))}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.open('tel:9392488297')}
                            className="bg-primary hover:bg-primary-light text-black font-bold px-6 py-2.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-primary/50"
                        >
                            Join Now
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white p-2"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden pb-4"
                    >
                        {['Home', 'Programs', 'Pricing', 'Contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className="block w-full text-left px-4 py-3 text-gray-300 hover:text-primary hover:bg-dark-lighter transition-colors"
                            >
                                {item}
                            </button>
                        ))}
                        <button
                            onClick={() => window.open('tel:9392488297')}
                            className="w-full mt-2 bg-primary hover:bg-primary-light text-black font-bold px-6 py-3 rounded-lg transition-all"
                        >
                            Join Now
                        </button>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
}
