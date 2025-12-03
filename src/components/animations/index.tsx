'use client';

import { motion, HTMLMotionProps, Variants } from 'framer-motion';
import React, { ReactNode } from 'react';

// ============================================
// ANIMATION VARIANTS
// ============================================

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const fadeUpSmallVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

export const slideInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const slideInRightVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const zoomInVariants: Variants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.7, ease: 'easeOut' }
  }
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

// ============================================
// ANIMATION WRAPPER COMPONENTS
// ============================================

interface AnimationWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
}

// FadeUp - Main animation wrapper for headings and sections
export const FadeUp = ({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.6,
  once = true,
  amount = 0.3
}: AnimationWrapperProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once, amount }}
    transition={{ duration, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

// FadeUpSmall - For paragraphs and smaller text
export const FadeUpSmall = ({ 
  children, 
  className = '', 
  delay = 0.2,
  duration = 0.5,
  once = true,
  amount = 0.3
}: AnimationWrapperProps) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once, amount }}
    transition={{ duration, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

// FadeIn - Simple fade without movement
export const FadeIn = ({ 
  children, 
  className = '', 
  delay = 0,
  duration = 0.5,
  once = true,
  amount = 0.3
}: AnimationWrapperProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once, amount }}
    transition={{ duration, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

// ScaleIn - Scale animation for cards and images
export const ScaleIn = ({ 
  children, 
  className = '', 
  delay = 0,
  duration = 0.5,
  once = true,
  amount = 0.3
}: AnimationWrapperProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once, amount }}
    transition={{ duration, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

// SlideInLeft - Slide from left
export const SlideInLeft = ({ 
  children, 
  className = '', 
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.3
}: AnimationWrapperProps) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once, amount }}
    transition={{ duration, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

// SlideInRight - Slide from right
export const SlideInRight = ({ 
  children, 
  className = '', 
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.3
}: AnimationWrapperProps) => (
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once, amount }}
    transition={{ duration, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

// ZoomIn - For images with zoom effect
export const ZoomIn = ({ 
  children, 
  className = '', 
  delay = 0,
  duration = 0.7,
  once = true,
  amount = 0.3
}: AnimationWrapperProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 1.05 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once, amount }}
    transition={{ duration, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

// ============================================
// STAGGER CONTAINERS
// ============================================

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
  once?: boolean;
  amount?: number;
}

// StaggerContainer - For staggered animations of child elements
export const StaggerContainer = ({ 
  children, 
  className = '',
  staggerDelay = 0.1,
  delayChildren = 0,
  once = true,
  amount = 0.2
}: StaggerContainerProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once, amount }}
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerDelay,
          delayChildren
        }
      }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// StaggerItem - Child element for StaggerContainer
export const StaggerItem = ({ 
  children, 
  className = '' 
}: { children: ReactNode; className?: string }) => (
  <motion.div
    variants={staggerItemVariants}
    className={className}
  >
    {children}
  </motion.div>
);

// ============================================
// INTERACTIVE COMPONENTS
// ============================================

interface HoverScaleProps {
  children: ReactNode;
  className?: string;
  scale?: number;
}

// HoverScale - For interactive hover effects on buttons/cards
export const HoverScale = ({ 
  children, 
  className = '',
  scale = 1.02
}: HoverScaleProps) => (
  <motion.div
    whileHover={{ scale }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    className={className}
  >
    {children}
  </motion.div>
);

// HoverLift - For card hover with lift effect
export const HoverLift = ({ 
  children, 
  className = '' 
}: { children: ReactNode; className?: string }) => (
  <motion.div
    whileHover={{ y: -5, boxShadow: '0 20px 40px -10px rgba(10, 31, 68, 0.2)' }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className={className}
  >
    {children}
  </motion.div>
);

// FloatAnimation - For team cards and floating elements
export const FloatAnimation = ({ 
  children, 
  className = '' 
}: { children: ReactNode; className?: string }) => (
  <motion.div
    animate={{ y: [0, -8, 0] }}
    transition={{ 
      duration: 3, 
      repeat: Infinity, 
      ease: 'easeInOut' 
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// ============================================
// ANIMATED TEXT COMPONENTS
// ============================================

interface AnimatedTextProps extends HTMLMotionProps<'h1'> {
  children: ReactNode;
  className?: string;
  delay?: number;
}

// AnimatedHeading - For H1, H2 headings
export const AnimatedHeading = ({ 
  children, 
  className = '', 
  delay = 0,
  ...props
}: AnimatedTextProps) => (
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    className={className}
    {...props}
  >
    {children}
  </motion.h2>
);

// AnimatedParagraph - For paragraphs
export const AnimatedParagraph = ({ 
  children, 
  className = '', 
  delay = 0.2 
}: { children: ReactNode; className?: string; delay?: number }) => (
  <motion.p
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.p>
);

// ============================================
// ANIMATED BUTTON
// ============================================

interface AnimatedButtonProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  onClick?: () => void;
}

export const AnimatedButton = ({ 
  children, 
  className = '', 
  delay = 0.3,
  onClick
}: AnimatedButtonProps) => (
  <motion.div
    initial={{ opacity: 0, y: 10, scale: 0.98 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    className={className}
    onClick={onClick}
  >
    {children}
  </motion.div>
);

// ============================================
// ANIMATED IMAGE
// ============================================

export const AnimatedImage = ({ 
  children, 
  className = '', 
  delay = 0 
}: { children: ReactNode; className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 1.05 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

// ============================================
// PAGE TRANSITION WRAPPER
// ============================================

export const PageTransition = ({ 
  children, 
  className = '' 
}: { children: ReactNode; className?: string }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className={className}
  >
    {children}
  </motion.div>
);

// ============================================
// SECTION REVEAL
// ============================================

export const SectionReveal = ({ 
  children, 
  className = '',
  delay = 0
}: { children: ReactNode; className?: string; delay?: number }) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.7, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.section>
);

// ============================================
// CARD ANIMATIONS
// ============================================

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  index?: number;
  hoverEffect?: boolean;
}

export const AnimatedCard = ({ 
  children, 
  className = '',
  index = 0,
  hoverEffect = true
}: AnimatedCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ 
      duration: 0.5, 
      delay: index * 0.1, 
      ease: 'easeOut' 
    }}
    whileHover={hoverEffect ? { 
      y: -5, 
      boxShadow: '0 20px 40px -10px rgba(10, 31, 68, 0.15)' 
    } : undefined}
    className={className}
  >
    {children}
  </motion.div>
);

// ============================================
// COUNTER ANIMATION
// ============================================

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  className?: string;
  suffix?: string;
}

export const AnimatedCounter = ({ 
  from = 0, 
  to, 
  duration = 2, 
  className = '',
  suffix = ''
}: CounterProps) => {
  const [count, setCount] = React.useState(from);
  const [hasAnimated, setHasAnimated] = React.useState(false);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => {
        if (!hasAnimated) {
          setHasAnimated(true);
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / (duration * 1000), 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(from + (to - from) * easeOut));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      }}
    >
      {count.toLocaleString()}{suffix}
    </motion.span>
  );
};

export default {
  FadeUp,
  FadeUpSmall,
  FadeIn,
  ScaleIn,
  SlideInLeft,
  SlideInRight,
  ZoomIn,
  StaggerContainer,
  StaggerItem,
  HoverScale,
  HoverLift,
  FloatAnimation,
  AnimatedHeading,
  AnimatedParagraph,
  AnimatedButton,
  AnimatedImage,
  PageTransition,
  SectionReveal,
  AnimatedCard,
  AnimatedCounter
};

