/**
 * Publications Page
 * 
 * Purpose: Searchable list of all lab publications.
 * Features client-side filtering by title, author, tag, and venue.
 */

import type { Metadata } from 'next';
import { PageHeader, Section } from '@/components/ui';
import { PublicationFilters } from '@/components/publications';
import type { Publication } from '@/types';

// Import data
import publicationsData from '@/data/publications.json';

// Sort publications by year (most recent first)
const publications = (publicationsData as Publication[]).sort((a, b) => b.year - a.year);

export const metadata: Metadata = {
  title: 'Publications',
  description: 'Browse our publications in computer architecture, in-memory computing, RISC-V, and AI systems.',
};

/**
 * Publications Page Component
 * 
 * Publication listing with:
 * - Search functionality
 * - Filter by year, type, and topic
 * - Chronological listing
 */
export default function PublicationsPage() {
  return (
    <>
      <PageHeader
        title="Publications"
        description=""
        compact
      />
      <div className="container-page py-6">
        <PublicationFilters publications={publications} />
      </div>
    </>
  );
}
