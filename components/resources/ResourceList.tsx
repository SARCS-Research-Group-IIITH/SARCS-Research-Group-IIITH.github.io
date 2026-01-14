/**
 * ResourceList Component
 * 
 * Purpose: Display resources grouped by category.
 */

'use client';

import { ResourceCard } from './ResourceCard';
import type { Resource, ResourceCategory } from '@/types';

interface ResourceListProps {
  resources: Resource[];
}

export function ResourceList({ resources }: ResourceListProps) {
  // Group resources by category
  const groupedResources = resources.reduce((acc, resource) => {
    const category = resource.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(resource);
    return acc;
  }, {} as Record<ResourceCategory, Resource[]>);

  const categories = Object.keys(groupedResources) as ResourceCategory[];

  return (
    <div className="space-y-12">
      {categories.map((category) => (
        <div key={category}>
          <h2 className="mb-6 text-xl font-semibold text-surface-900 dark:text-surface-50">
            {category}
          </h2>
          <div className="space-y-4">
            {groupedResources[category].map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
