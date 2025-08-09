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
    endDate: 'Act.',
    description: 'Desarrollo de una plataforma web que ofrece soluciones para la coordinación de actividades empresariales, homologación de proveedores, mantenimientos preventivos, etc.',
  },
  {
    id: 'acilia',
    company: 'Acilia',
    logo: '/images/companies/acilia-logo.png',
    position: 'PHP Backend Developer',
    startDate: '2012',
    endDate: '2014',
    description: 'Desarrollo de las webs de FOX y National Geographic de más de 30 países.'
  },
  {
    id: 'blaffin',
    company: 'Blaffin',
    logo: '/images/companies/blaffin-logo.png',
    position: 'PHP Backend Developer',
    startDate: '2012',
    endDate: '2012',
    description: 'Desarrollo de red social para compartir vídeos e imágenes con retos, competiciones, rankings, etc.',
  },
  {
    id: 'arista',
    company: 'Arista',
    logo: '/images/companies/arista-logo.png',
    position: 'Analista / Programador Oracle',
    startDate: '2008',
    endDate: '2012',
    description: 'Desarrollo web de las páginas de la Agencia Estatal de Seguridad Aérea dentro del Ministerio de Fomento y desarrollo de Forms y Reports con Oracle.',
  },
  {
    id: 'capgemini',
    company: 'Capgemini',
    logo: '/images/companies/capgemini-logo.png',
    position: 'Analista / Programador Oracle',
    startDate: '2008',
    endDate: '2008',
    description: 'Desarrollo de aplicaciones con el ERP Oracle Financials para Iberia.',
  },
  {
    id: 'atos-origin',
    company: 'Atos Origin',
    logo: '/images/companies/atos-origin-logo.png',
    position: 'Analista / Programador Oracle',
    startDate: '2007',
    endDate: '2008',
    description: 'Desarrollo de aplicaciones con el ERP Oracle Financials para diversos clientes.',
  },
  {
    id: 'ibermatica',
    company: 'Ibermática',
    logo: '/images/companies/ibermatica-logo.png',
    position: 'Analista / Programador Oracle',
    startDate: '2006',
    endDate: '2007',
    description: 'Desarrollo de diferentes aplicaciones en Java, Oracle Forms y PL/SQL.',
  },
  {
    id: 'coritel',
    company: 'Coritel',
    logo: '/images/companies/coritel-logo.png',
    position: 'Analista / Programador Oracle',
    startDate: '2006',
    endDate: '2006',
    description: 'Desarrollo con Oracle Forms y PL/SQL para Eroski.',
  },
  {
    id: 'goiatz',
    company: 'Goiatz',
    logo: '/images/companies/goiatz-logo.png',
    position: 'Analista / Programador',
    startDate: '2004',
    endDate: '2005',
    description: 'Desarrollo de aplicaciones multimedia en DVD (juegos, apps, etc.)',
  }
];
