'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const Logo = ({ 
  className, 
  variant = 'default', 
  size = 'md',
  showText = true 
}: LogoProps) => {
  const sizes = {
    sm: { logo: 40, text: 'text-lg', tagline: 'text-[9px]' },
    md: { logo: 48, text: 'text-xl', tagline: 'text-[10px]' },
    lg: { logo: 56, text: 'text-2xl', tagline: 'text-xs' },
  };

  const textColors = {
    default: 'text-navy-600',
    light: 'text-white',
    dark: 'text-navy-600',
  };

  const taglineColors = {
    default: 'text-suncity-green',
    light: 'text-solar-400',
    dark: 'text-suncity-green',
  };

  return (
    <Link
      href="/"
      aria-label="Suncity Solar Home"
      className={cn('flex items-center gap-3 group', className)}
    >
      {/* Logo Image */}
      <div className="relative flex-shrink-0">
        <Image
          src="/logo.svg"
          alt="Suncity Solar Logo"
          width={sizes[size].logo}
          height={sizes[size].logo}
          className="object-contain group-hover:scale-105 transition-transform duration-300"
          priority
        />
      </div>
      
      {showText && (
        <div className="flex flex-col leading-tight">
          <span
            className={cn(
              sizes[size].text,
              'font-bold tracking-tight transition-colors duration-300',
              textColors[variant]
            )}
          >
            Suncity Solar
          </span>
          <span
            className={cn(
              sizes[size].tagline,
              'font-semibold uppercase tracking-widest transition-colors duration-300',
              taglineColors[variant]
            )}
          >
            Powering Bharat&apos;s Future
          </span>
        </div>
      )}
    </Link>
  );
};

export default Logo;
