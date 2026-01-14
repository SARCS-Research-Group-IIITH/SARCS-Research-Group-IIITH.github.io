/**
 * Contact Page
 * 
 * Purpose: Dedicated contact page with contact information and open positions.
 * Separated from blog for better organization.
 */

import type { Metadata } from 'next';
import { PageHeader, Section, SectionHeader } from '@/components/ui';
import { ContactInfo, OpeningsSection } from '@/components/blog';
import type { Opening } from '@/types';

// Import data
import openingsData from '@/data/openings.json';
import labInfoData from '@/data/lab-info.json';

const openings = openingsData as Opening[];
const labInfo = labInfoData.lab;

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with SARCS Lab. Find contact information and explore opportunities to join our research team.',
};

/**
 * Contact Page Component
 * 
 * Stacked vertical layout with:
 * - Contact information (top)
 * - Open positions (bottom)
 * Both sections centered
 */
export default function ContactPage() {
  return (
    <>
      <div className="bg-surface-100 dark:bg-surface-900">
        <div className="container-page py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {/* Left: Title and Description */}
            <div>
              <h1 className="mb-4 text-3xl font-bold text-surface-900 dark:text-surface-50 md:text-4xl lg:text-5xl">
                Contact Us
              </h1>
              <p className="text-lg text-surface-600 dark:text-surface-400">
                Get in touch with our lab or explore opportunities to join our research team.
              </p>
            </div>
            
            {/* Right: Contact Information */}
            <div className="flex items-start md:justify-end">
              <ContactInfo
                address={labInfo.address}
                email={labInfo.email}
                phone={labInfo.phone}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Openings Section */}
      <Section className="pt-0">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            title="Join Our Team"
            subtitle="Current openings and opportunities."
            align="center"
          />
          <OpeningsSection openings={openings} />
        </div>
      </Section>
    </>
  );
}
