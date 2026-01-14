/**
 * ResourceCard Component
 * 
 * Purpose: Display a single resource item with icon, title, description, and link.
 */

import { Card } from '@/components/ui';
import { Github, FileText, Database, Wrench, BookOpen, ExternalLink } from 'lucide-react';
import type { Resource } from '@/types';

interface ResourceCardProps {
  resource: Resource;
}

const typeIcons = {
  github: Github,
  pdf: FileText,
  dataset: Database,
  tool: Wrench,
  documentation: BookOpen,
  external: ExternalLink,
};

export function ResourceCard({ resource }: ResourceCardProps) {
  const Icon = typeIcons[resource.type] || ExternalLink;

  return (
    <Card hover className="flex gap-4">
      {/* Icon */}
      <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-primary-50 dark:bg-primary-900/20">
        <Icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <h3 className="font-semibold text-primary-600 dark:text-primary-400">
          <a
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {resource.title}
          </a>
        </h3>
        <p className="mt-1 text-sm text-surface-600 dark:text-surface-400">
          {resource.description}
        </p>
        
        {/* Tags */}
        {resource.tags && resource.tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {resource.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-surface-100 px-2 py-0.5 text-xs text-surface-600 dark:bg-surface-700 dark:text-surface-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Link */}
      <a
        href={resource.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 self-start text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
      >
        <span className="flex items-center gap-1 text-sm font-medium">
          View Resource <ExternalLink className="h-4 w-4" />
        </span>
      </a>
    </Card>
  );
}
