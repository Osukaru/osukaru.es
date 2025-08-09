export interface Experience {
  id: string;
  company: string;
  logo: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    id: 'dokify',
    company: 'Dokify',
    logo: '/images/companies/dokify-logo.png',
    position: 'PHP Backend Developer',
    startDate: '2014',
    endDate: 'Actualidad',
    description: 'Desarrollo de una plataforma web que ofrece soluciones para la coordinación de actividades empresariales, homologación de proveedores, mantenimientos preventivos, etc.',
  },
  {
    id: 'experience-2',
    company: 'StartupHub',
    logo: '/images/companies/startuphub-logo.png',
    position: 'Lead Developer',
    startDate: '2020-03',
    endDate: '2021-12',
    description: 'Desarrollo de MVP y prototipos para startups emergentes. Implementé arquitecturas escalables y optimicé el rendimiento de aplicaciones críticas. Colaboré estrechamente con equipos de diseño y producto.',
  },
  {
    id: 'experience-3',
    company: 'Digital Innovations',
    logo: '/images/companies/digitalinnovations-logo.png',
    position: 'Frontend Developer',
    startDate: '2018-06',
    endDate: '2020-02',
    description: 'Desarrollo de interfaces de usuario responsivas y accesibles. Trabajé en proyectos para clientes internacionales, implementando las mejores prácticas de UX/UI y optimización de rendimiento.',
  }
];
