'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import Logo from './Logo';

export default function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-white/95 backdrop-blur-sm py-4'
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Logo variant="dark" size="md" />
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
            >
              <Link
                href={link.href}
                className={cn(
                  'relative px-4 py-2 text-[15px] font-medium text-navy-600 transition-colors duration-200 rounded-lg',
                  'hover:text-gold-500 hover:bg-gold-50',
                  pathname === link.href && 'text-gold-500 bg-gold-50'
                )}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="hidden items-center gap-4 lg:flex"
        >
          <a
            href="tel:+919587211700"
            className="flex items-center gap-2 text-navy-600 hover:text-gold-500 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm font-medium">+91 9587211700</span>
          </a>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              asChild
              className="bg-gradient-solar text-white font-semibold px-6 py-2.5 rounded-lg shadow-gold hover:shadow-gold-lg transition-all"
            >
              <Link href="/contact">Enquire Now</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-navy-600 hover:bg-gold-50 rounded-lg"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm bg-white border-l-0 p-0">
              <div className="flex h-full flex-col">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <Logo variant="dark" size="sm" />
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="text-navy-600 hover:bg-gold-50 rounded-lg">
                      <X className="w-5 h-5" />
                    </Button>
                  </SheetClose>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex flex-col p-6 flex-1 space-y-2">
                  {NAV_LINKS.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          'flex items-center px-4 py-3 text-base font-medium rounded-lg transition-colors',
                          pathname === link.href
                            ? 'bg-gold-50 text-gold-500'
                            : 'text-navy-600 hover:bg-gold-50 hover:text-gold-500'
                        )}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <div className="p-6 border-t border-gray-100 space-y-3">
                  <a
                    href="tel:+919587211700"
                    className="flex items-center gap-2 text-navy-600 text-sm font-medium"
                  >
                    <Phone className="w-4 h-4" />
                    +91 9587211700
                  </a>
                  <SheetClose asChild>
                    <Button
                      asChild
                      className="w-full bg-gradient-solar text-white font-semibold py-3 rounded-lg shadow-gold"
                    >
                      <Link href="/contact">Enquire Now</Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
