'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const pricingPlans = [
    {
        name: 'Basic',
        duration: 'Monthly',
        price: '₹800',
        features: [
            'Access to all equipment',
            'Basic training support',
            'Flexible timing',
            'Locker facility',
        ],
        highlighted: false,
    },
    {
        name: 'Standard',
        duration: '3 Months',
        price: '₹2,100',
        popular: true,
        features: [
            'All Basic features',
            'Personalized workout plan',
            'Nutrition guidance',
            'Progress tracking',
            'Priority support',
        ],
        highlighted: true,
    },
    {
        name: 'Premium',
        duration: '1 Year',
        price: '₹5,000',
        features: [
            'All Standard features',
            'One-on-one training sessions',
            'Custom diet plans',
            'Body composition analysis',
            'Best value - Save ₹4,600',
        ],
        highlighted: false,
    },
];

export default function Pricing() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="pricing" ref={ref} className="py-20 md:py-32 bg-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-black mb-4">
                        Membership <span className="text-primary">Pricing</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-4">
                        Flexible plans to fit your budget and goals
                    </p>
                    <p className="text-sm text-gray-500">
                        Registration Fee: ₹150 (One-time)
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className={`relative bg-dark-card rounded-3xl p-8 ${plan.highlighted
                                    ? 'border-2 border-primary shadow-xl shadow-primary/20 md:scale-105'
                                    : 'border border-white/10'
                                } transition-all duration-300`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-primary text-black text-sm font-bold px-4 py-1 rounded-full">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                                <p className="text-gray-400 text-sm mb-4">{plan.duration}</p>
                                <div className="text-5xl font-black text-primary mb-2">{plan.price}</div>
                                <p className="text-gray-500 text-sm">
                                    {plan.duration === 'Monthly' ? 'per month' : plan.duration === '3 Months' ? '₹700/month' : '₹417/month'}
                                </p>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start">
                                        <svg
                                            className="w-6 h-6 text-primary mr-3 flex-shrink-0"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span className="text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => window.open('tel:9392488297')}
                                className={`w-full py-3 rounded-lg font-bold transition-all duration-300 ${plan.highlighted
                                        ? 'bg-primary hover:bg-primary-light text-black shadow-lg hover:shadow-primary/50'
                                        : 'bg-white/5 hover:bg-white/10 text-white border border-white/20'
                                    }`}
                            >
                                Get Started
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
