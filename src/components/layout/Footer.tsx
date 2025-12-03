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
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

export default function Footer() {
  return (
    <footer className="bg-navy-600">
      {/* Newsletter Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="border-b border-white/10"
      >
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold text-white mb-2">Stay Updated, Subscribe Now!</h3>
              <p className="text-white/60">Get the latest solar insights and offers delivered to your inbox.</p>
            </motion.div>
            <motion.form 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex gap-3 w-full lg:w-auto"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-full px-6 w-full lg:w-80"
              />
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Button className="h-12 bg-gradient-solar text-white font-semibold px-6 rounded-full shadow-orange hover:shadow-orange-lg">
                  Subscribe
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            </motion.form>
          </div>
        </div>
      </motion.div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            {/* Tagline */}
            <p className="text-lg text-white font-medium mb-6 leading-relaxed">
              We don&apos;t wait for the future. At <span className="text-solar-400">Suncity Solar</span>, we build it with clean, intelligent energy.
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
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gradient-solar transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
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
                    className="text-white/60 hover:text-solar-400 text-sm flex items-center gap-2 transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Helpful Resources */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-white mb-6">Helpful Resources</h3>
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
                    className="text-white/60 hover:text-solar-400 text-sm flex items-center gap-2 transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-white mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-start gap-3"
                whileHover={{ x: 3 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <MapPin className="w-5 h-5 text-solar-400 mt-0.5 flex-shrink-0" />
                <p className="text-white/60 text-sm leading-relaxed">
                  3rd Floor, Plot No. A-317A, Dr. Rajendra Prasad Nagar, Gopalpura Bypass, Jaipur-302020
                </p>
              </motion.li>
              <motion.li
                whileHover={{ x: 3 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <a
                  href="mailto:info@suncitysolar.in"
                  className="flex items-center gap-3 text-white/60 hover:text-solar-400 text-sm transition-colors"
                >
                  <Mail className="w-5 h-5 text-solar-400 flex-shrink-0" />
                  info@suncitysolar.in
                </a>
              </motion.li>
              <motion.li
                whileHover={{ x: 3 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <a
                  href={`tel:${CONTACT_DETAILS.phone}`}
                  className="flex items-center gap-3 text-white/60 hover:text-solar-400 text-sm transition-colors"
                >
                  <Phone className="w-5 h-5 text-solar-400 flex-shrink-0" />
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
            <p className="text-white/40 text-sm text-center md:text-left">
              Suncity Solar, {new Date().getFullYear()} © All Rights Reserved by Shree Chandramangal Suncity Marketing Pvt. Ltd.
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
                    className="text-white/40 hover:text-solar-400 text-sm transition-colors"
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
