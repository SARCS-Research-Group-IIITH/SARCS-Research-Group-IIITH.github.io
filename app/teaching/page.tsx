/**
 * Teaching Page
 * 
 * Purpose: Display courses taught by faculty organized by academic year and semester.
 * Features a hierarchical, visually appealing structure.
 */

import type { Metadata } from 'next';
import { PageHeader, Section } from '@/components/ui';
import { TeachingSection } from '@/components/teaching';

// Import data
import teachingData from '@/data/teaching.json';

export const metadata: Metadata = {
  title: 'Teaching',
  description: 'Explore the courses taught by our faculty across academic years and semesters.',
};

/**
 * Teaching Page Component
 * 
 * Course listing with:
 * - Academic year sections
 * - Semester subsections (Monsoon & Spring)
 * - Course details with instructor info
 */
export default function TeachingPage() {
  return (
    <>
      <PageHeader
        title="Teaching"
        description=""
        className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/30 dark:via-purple-950/20 dark:to-pink-950/20"
      />

      <Section>
        <TeachingSection data={teachingData} />
      </Section>
    </>
  );
}
