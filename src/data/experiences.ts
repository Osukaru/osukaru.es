export interface Experience {
  id: string;
  company: string;
  logo: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies?: string[];
}

export const experiences: Experience[] = [
  {
    id: 'experience-1',
    company: 'TechCorp Solutions',
    logo: '/images/companies/techcorp-logo.png',
    position: 'Senior Full Stack Developer',
    startDate: '2022-01',
    endDate: '2023-12',
    description: 'Desarrollo de aplicaciones web modernas utilizando React, Node.js y TypeScript. Lideré un equipo de 5 desarrolladores en la creación de una plataforma de e-commerce que procesó más de 1M de transacciones mensuales.',
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS']
  },
  {
    id: 'experience-2',
    company: 'StartupHub',
    logo: '/images/companies/startuphub-logo.png',
    position: 'Lead Developer',
    startDate: '2020-03',
    endDate: '2021-12',
    description: 'Desarrollo de MVP y prototipos para startups emergentes. Implementé arquitecturas escalables y optimicé el rendimiento de aplicaciones críticas. Colaboré estrechamente con equipos de diseño y producto.',
    technologies: ['Vue.js', 'Python', 'Django', 'MongoDB', 'Docker']
  },
  {
    id: 'experience-3',
    company: 'Digital Innovations',
    logo: '/images/companies/digitalinnovations-logo.png',
    position: 'Frontend Developer',
    startDate: '2018-06',
    endDate: '2020-02',
    description: 'Desarrollo de interfaces de usuario responsivas y accesibles. Trabajé en proyectos para clientes internacionales, implementando las mejores prácticas de UX/UI y optimización de rendimiento.',
    technologies: ['JavaScript', 'CSS3', 'HTML5', 'Angular', 'Sass']
  }
];
