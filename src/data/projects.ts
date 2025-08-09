export interface Project {
  id: string;
  name: string;
  logo: string;
  description: string;
  url?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'osukaru-web',
    name: 'Osukaru.es',
    logo: '/images/projects/osukaru-web-logo.png',
    description: 'Mi web personal con diseño retro inspirado en el Sinclair Spectrum ZX 128K +2A. Desarrollada con Astro, TypeScript y CSS personalizado para recrear la estética de los años 80.',
    url: 'https://www.osukaru.es',
    githubUrl: 'https://github.com/Osukaru/osukaru.es'
  },
  {
    id: 'osukaru-web2',
    name: 'Osukaru.es',
    logo: '/images/projects/osukaru-web-logo.png',
    description: 'Mi web personal con diseño retro inspirado en el Sinclair Spectrum ZX 128K +2A. Desarrollada con Astro, TypeScript y CSS personalizado para recrear la estética de los años 80.',
    url: 'https://www.osukaru.es',
    githubUrl: 'https://github.com/Osukaru/osukaru.es'
  },
  {
    id: 'osukaru-web3',
    name: 'Osukaru.es',
    logo: '/images/projects/osukaru-web-logo.png',
    description: 'Mi web personal con diseño retro inspirado en el Sinclair Spectrum ZX 128K +2A. Desarrollada con Astro, TypeScript y CSS personalizado para recrear la estética de los años 80.',
    url: 'https://www.osukaru.es',
    githubUrl: 'https://github.com/Osukaru/osukaru.es'
  }
];
