/**
 * Hero Section Component
 * 
 * Purpose: Main hero section for the home page with lab logo, name,
 * and mission statement. Creates strong first impression.
 */

import Image from 'next/image';
import { Button } from '@/components/ui';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  labName: string;
  fullName: string;
  mission: string;
  logoSrc: string;
  /** PLACEHOLDER: Add your own background image path */
  backgroundImage?: string;
}

/**
 * HeroSection Component
 * 
 * Full-width hero section featuring:
 * - Lab logo
 * - Lab name and full title
 * - Mission statement
 * - Call-to-action buttons
 * - Subtle gradient background
 */
export function HeroSection({ labName, fullName, mission, logoSrc, backgroundImage = '/images/bg_img.png' }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden min-h-[60vh] flex items-center">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-900/80 via-surface-900/70 to-surface-900/90 dark:from-surface-950/90 dark:via-surface-950/80 dark:to-surface-950/95" />
      
      <div className="container-page relative py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Lab Logo */}
          <div className="mb-8 flex justify-center">
            <img src="/images/SARCS_Logo.png" alt="SARCS Logo" className="h-24 w-auto md:h-32" />
          </div>

          {/* Lab Name */}
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            {labName}
          </h1>

          {/* Full Name */}
          <p className="mb-6 text-xl text-primary-300 md:text-2xl">
            {fullName}
          </p>

          {/* Mission Statement */}
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-surface-200">
            {mission}
          </p>
        </div>
      </div>
    </section>
  );
}
