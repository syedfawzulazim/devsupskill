'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '@/components/common/Button';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white px-4 py-20 dark:from-gray-900 dark:to-gray-800 sm:px-6 lg:px-8">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute h-96 w-96 rounded-full bg-blue-200 opacity-20 blur-3xl -top-10 -left-10 dark:bg-blue-900"></div>
        <div className="absolute h-96 w-96 rounded-full bg-green-200 opacity-20 blur-3xl -bottom-10 -right-10 dark:bg-green-900"></div>
      </div>

      <motion.div
        className="mx-auto max-w-4xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900 dark:text-blue-200">
            🚀 Welcome to DevSupSkill
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl"
        >
          Master Modern Software Development
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="mb-8 text-lg text-gray-600 dark:text-gray-400 sm:text-xl"
        >
          Comprehensive online courses designed for the German-Bangladeshi community. Learn from industry experts and build real-world projects.
        </motion.p>

        {/* Features */}
        <motion.div
          variants={itemVariants}
          className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {[
            { icon: '📚', label: 'Expert-Led Courses', desc: 'Learn from industry professionals' },
            { icon: '🌍', label: 'Multi-Language', desc: 'Available in German & Bengali' },
            { icon: '💼', label: 'Career Ready', desc: 'Real-world projects & guidance' },
          ].map((feature, i) => (
            <div
              key={i}
              className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="text-2xl mb-2">{feature.icon}</div>
              <h3 className="font-semibold text-gray-900 dark:text-white">{feature.label}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-4 sm:flex-row sm:justify-center"
        >
          <Link href="/courses">
            <Button variant="primary" size="lg">
              Explore Courses
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Get Started
            </Button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 border-t border-gray-200 pt-12 dark:border-gray-700"
        >
          {[
            { number: '50+', label: 'Courses' },
            { number: '10K+', label: 'Students' },
            { number: '95%', label: 'Success Rate' },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.number}</p>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
