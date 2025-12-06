'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Youtube, Mail, Phone, MapPin, ArrowRight, Send } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/blogs', label: 'Case Studies' },
];

const helpfulResources = [
  { href: '/projects', label: 'Case Studies' },
  { href: '/faq', label: 'FAQ' },
  { href: '/performance-guarantee', label: 'Performance Guarantee' },
  { href: '/blogs', label: 'Video Tutorials' },
  { href: '/about', label: 'Industry Certifications' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0
  }
};

export default function Footer() {
  return (
    <footer className="bg-navy-600 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}>
            <h3 className="font-serif font-bold text-xl text-white mb-6">Suncity Solar</h3>
            <p className="text-white/70 mb-6 leading-relaxed text-sm">
              Empowering Bharat with sustainable solar energy solutions. Made in India, for India.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-gradient-gold hover:text-navy-600 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}>
            <h3 className="font-serif font-bold text-lg text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-gold-500 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Helpful Resources */}
          <motion.div variants={itemVariants} transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}>
            <h3 className="font-serif font-bold text-lg text-white mb-6">Resources</h3>
            <ul className="space-y-3">
              {helpfulResources.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-gold-500 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}>
            <h3 className="font-serif font-bold text-lg text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-start gap-3"
                whileHover={{ x: 3 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <MapPin className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                <p className="text-white/70 text-sm leading-relaxed">
                  3rd Floor, Plot No. A-317A, Dr. Rajendra Prasad Nagar, Gopalpura Bypass, Jaipur-302020
                </p>
              </motion.li>
              <motion.li
                whileHover={{ x: 3 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <a
                  href="mailto:info@suncitysolar.in"
                  className="flex items-center gap-3 text-white/70 hover:text-gold-500 text-sm transition-colors"
                >
                  <Mail className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  info@suncitysolar.in
                </a>
              </motion.li>
              <motion.li
                whileHover={{ x: 3 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <a
                  href={`tel:${CONTACT_DETAILS.phone}`}
                  className="flex items-center gap-3 text-white/70 hover:text-gold-500 text-sm transition-colors"
                >
                  <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  {CONTACT_DETAILS.phone}
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="border-t border-white/10"
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Suncity Solar. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              {['Terms & Conditions', 'Privacy Policy', 'FAQ'].map((item, index) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <Link 
                    href={item === 'FAQ' ? '/faq' : '/terms'} 
                    className="text-white/50 hover:text-gold-500 text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
