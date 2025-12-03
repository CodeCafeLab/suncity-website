'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';

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
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Logo variant={isScrolled ? 'dark' : 'light'} size="md" />
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
            >
              <Link
                href={link.href}
                className={cn(
                  'relative text-[15px] font-medium transition-all duration-300 hover:text-solar-500',
                  isScrolled
                    ? pathname === link.href
                      ? 'text-solar-500'
                      : 'text-navy-600'
                    : pathname === link.href
                    ? 'text-solar-400'
                    : 'text-white'
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span 
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-solar-500 rounded-full" 
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hidden items-center gap-4 lg:flex"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              asChild
              className={cn(
                'font-semibold px-6 py-3 rounded-full transition-all duration-300',
                isScrolled
                  ? 'bg-gradient-solar text-white shadow-orange hover:shadow-orange-lg'
                  : 'bg-white text-navy-600 hover:bg-solar-500 hover:text-white'
              )}
            >
              <Link href="/contact" className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Let&apos;s Talk Energy
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    'rounded-full w-12 h-12',
                    isScrolled 
                      ? 'text-navy-600 hover:bg-gray-100' 
                      : 'text-white hover:bg-white/20'
                  )}
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </motion.div>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm bg-white border-l-0 p-0">
              <div className="flex h-full flex-col">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <Logo variant="dark" size="sm" />
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="rounded-full text-navy-600 hover:bg-gray-100">
                      <X className="w-5 h-5" />
                    </Button>
                  </SheetClose>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex flex-col p-6 flex-1 space-y-1">
                  {NAV_LINKS.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <SheetClose asChild>
                        <Link
                          href={link.href}
                          className={cn(
                            'flex items-center px-4 py-4 text-base font-medium rounded-xl transition-all duration-200',
                            pathname === link.href
                              ? 'bg-solar-50 text-solar-600 border-l-4 border-solar-500'
                              : 'text-navy-600 hover:bg-gray-50'
                          )}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <div className="p-6 border-t border-gray-100">
                  <SheetClose asChild>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        asChild
                        className="w-full bg-gradient-solar text-white font-semibold py-4 rounded-full shadow-orange"
                      >
                        <Link href="/contact" className="flex items-center justify-center gap-2">
                          <MessageCircle className="w-5 h-5" />
                          Let&apos;s Talk Energy
                        </Link>
                      </Button>
                    </motion.div>
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
