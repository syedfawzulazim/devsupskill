'use client';

import React from 'react';
import Link from 'next/link';
import { SITE_NAME } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: 'Courses', href: '/courses' },
      { label: 'Features', href: '/features' },
      { label: 'Pricing', href: '/pricing' },
    ],
    Company: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
    Legal: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  };

  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Footer Links */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">{SITE_NAME}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Modern software development courses for the German-Bangladeshi market.
            </p>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                {category}
              </h4>
              <ul className="mt-3 space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-200 dark:border-gray-800" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {currentYear} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {/* Social Links */}
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
              aria-label="Twitter"
            >
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.29 20a11.007 11.007 0 0011.25-11.26 7.94 7.94 0 001.957-2.03 7.898 7.898 0 01-2.25.616A3.93 3.93 0 0019.713 2.5a7.904 7.904 0 01-2.51.972A3.93 3.93 0 0014.982 2c-2.166 0-3.916 1.75-3.916 3.91 0 .306.035.608.103.9A11.144 11.144 0 011.392 2.9a3.924 3.924 0 001.213 5.229A3.903 3.903 0 01.96 8a3.91 3.91 0 003.138 3.838 3.916 3.916 0 01-1.768.067 3.916 3.916 0 003.66 2.716A7.868 7.868 0 010 17.29a11.082 11.082 0 006.002 1.76" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
              aria-label="LinkedIn"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.447 16.447h-2.769v-4.339c0-1.04-.369-1.75-1.312-1.75-.716 0-1.141.481-1.329 1.047a1.77 1.77 0 00-.089.536v4.505h-2.77V7.976h2.77v.66h.039c.386-.581 1.331-1.193 2.743-1.193 2.865 0 5.075 1.878 5.075 5.914v4.09zM3.896 6.788a1.608 1.608 0 110-3.216 1.608 1.608 0 010 3.216zm1.39 9.659H2.506V7.976h2.78v8.471zM17.668 0H.332C.15 0 0 .147 0 .328v19.344C0 19.853.15 20 .332 20h17.336c.182 0 .332-.147.332-.328V.328C18 .147 17.85 0 17.668 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
