import tutoringCenters from '@/content/landing-pages/tutoring-centers.json';
import company from '@/content/shared/company.json';

export type LandingContent = typeof tutoringCenters;

export const landingPages = {
  'tutoring-centers': tutoringCenters as LandingContent,
};

export const companyContent = company;
