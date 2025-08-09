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
    technologies: ['PHP', 'Symfony'],
    rating: 9
  },
  {
    id: 'frontend',
    category: 'FRONTEND',
    technologies: ['JS', 'Angular', 'ReactJS'],
    rating: 9
  },
  {
    id: 'databases',
    category: 'DATABASES',
    technologies: ['MySQL', 'Oracle', 'MongoDB'],
    rating: 9
  },
  {
    id: 'tools',
    category: 'TOOLS',
    technologies: ['Git', 'Vagrant', 'Docker', 'PHPStorm'],
    rating: 9
  },
  {
    id: 'performance',
    category: 'PERFORMANCE',
    technologies: ['Redis', 'RabbitMQ', 'ElasticSearch'],
    rating: 7
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
    technologies: ['MVC', 'DDD', 'CQRS', 'REST', 'Microservices'],
    rating: 9
  }
];
