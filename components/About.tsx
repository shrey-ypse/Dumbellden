'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-20 md:py-32 bg-dark-lighter">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                    >
                        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-primary/20 shadow-2xl">
                            {/* Real gym photo */}
                            <img
                                src="/praveen.png"
                               alt="Praveen - Head Trainer at Dumbbell Den"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                            {/* Caption */}
                            <div className="absolute bottom-6 left-6 right-6">
                               <p className="text-white font-semibold text-lg">Praveen - Your Fitness Guide</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.h2
                            className="text-4xl md:text-5xl font-display font-black mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            About <span className="text-primary">Dumbbell Den</span>
                        </motion.h2>

                        <motion.p
                            className="text-lg text-gray-300 leading-relaxed mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Dumbbell Den is a results-focused local gym in Shaikpet, Hyderabad. With quality equipment, supportive trainers, and a strong training environment, we help members build strength, lose weight, and stay consistent.
                        </motion.p>

                        <motion.div
                            className="grid grid-cols-3 gap-6 mt-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-primary mb-2">500+</div>
                                <div className="text-sm text-gray-400">Members</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-primary mb-2">5+</div>
                                <div className="text-sm text-gray-400">Years</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-primary mb-2">100%</div>
                                <div className="text-sm text-gray-400">Dedicated</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

