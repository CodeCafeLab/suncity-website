'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

type PageHeaderProps = {
  title: string;
  breadcrumb: string;
  description?: string;
};

export default function PageHeader({ title, breadcrumb, description }: PageHeaderProps) {
  return (
    <section className="relative bg-navy-600 overflow-hidden py-0">
      {/* Decorative Background Elements */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" 
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-400/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" 
      />

      {/* Main Content Container with Rounded Bottom */}
      <div className="relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="pt-24 pb-12 text-center">
            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4"
            >
              {title}
            </motion.h1>

            {/* Breadcrumb */}
            <motion.nav 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="flex items-center justify-center gap-2 text-sm md:text-base"
            >
              <Link
                href="/"
                className="text-white/70 hover:text-gold-400 transition-colors font-medium"
              >
                Home
              </Link>
              <span className="text-white/50">–</span>
              <span className="text-gold-400 font-medium">{breadcrumb}</span>
            </motion.nav>

            {/* Description */}
            {description && (
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="max-w-2xl mx-auto text-base md:text-lg text-white/70 mt-4"
              >
                {description}
              </motion.p>
            )}
          </div>
        </div>

        {/* Curved Bottom Edge */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              d="M0 120L1440 120L1440 0C1440 0 1140 80 720 80C300 80 0 0 0 0L0 120Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
