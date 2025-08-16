export interface Knowledge {
  id: string;
  category: string;
  technologies: string[];
  rating: number; // Número de estrellas (1-10)
}

export const knowledge: Knowledge[] = [
  {
    id: 'backend',
    category: 'BACKEND',
    technologies: ['PHP', 'Symfony', 'Typescript'],
    rating: 10
  },
  {
    id: 'frontend',
    category: 'FRONTEND',
    technologies: ['ReactJS', 'NextJS', 'Astro', 'TailwindCSS'],
    rating: 7
  },
  {
    id: 'databases',
    category: 'DATABASES',
    technologies: ['MySQL', 'Oracle', 'MongoDB', 'PostgreSQL'],
    rating: 9
  },
  {
    id: 'tools',
    category: 'TOOLS',
    technologies: ['Git', 'Docker', 'PHPStorm', 'Cursor', 'Playwright'],
    rating: 9
  },
  {
    id: 'performance',
    category: 'PERFORMANCE',
    technologies: ['Redis', 'RabbitMQ', 'ElasticSearch'],
    rating: 8
  },
  {
    id: 'cloud',
    category: 'CLOUD',
    technologies: ['Amazon S3', 'Google Cloud', 'Kubernetes'],
    rating: 5
  },
  {
    id: 'patterns',
    category: 'PATTERNS',
    technologies: ['DDD', 'CQRS', 'REST', 'Microservices'],
    rating: 9
  }
];
