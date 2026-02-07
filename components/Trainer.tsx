'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Trainer() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-20 md:py-32 bg-dark-lighter">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-black mb-4">
                        Meet Your <span className="text-primary">Trainer</span>
                    </h2>
                    <p className="text-xl text-gray-400">
                        Expert guidance for your fitness journey
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-2xl mx-auto"
                >
                    <div className="bg-dark-card border border-primary/20 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                        {/* Background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />

                        <div className="relative z-10">
                            {/* Image placeholder */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center border-4 border-primary/30"
                            >
                                <svg className="w-24 h-24 text-dark" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                </svg>
                            </motion.div>

                            <h3 className="text-3xl md:text-4xl font-display font-black mb-2">
                                Praveen Kumar
                            </h3>

                            <div className="inline-block bg-primary/10 border border-primary/30 rounded-full px-6 py-2 mb-6">
                                <p className="text-primary font-semibold">Certified Fitness Trainer</p>
                            </div>

                            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl mx-auto">
                                Specialized in strength training, cardio optimization, and personal transformation.
                                With years of experience, Praveen helps members achieve their goals through
                                science-based training and personalized attention.
                            </p>

                            <div className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto">
                                <div className="text-center">
                                    <div className="text-2xl font-black text-primary mb-1">5+</div>
                                    <div className="text-xs text-gray-400">Years Experience</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-black text-primary mb-1">400+</div>
                                    <div className="text-xs text-gray-400">Clients Trained</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-black text-primary mb-1">100%</div>
                                    <div className="text-xs text-gray-400">Committed</div>
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => window.open('tel:9392488297')}
                                className="bg-primary hover:bg-primary-light text-black font-bold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-primary/50"
                            >
                                Call Praveen
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
