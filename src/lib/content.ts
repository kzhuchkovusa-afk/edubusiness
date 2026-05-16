import tutoringCenters from '@/content/landing-pages/tutoring-centers.json';

export type LandingContent = typeof tutoringCenters;

export const landingPages = {
  'tutoring-centers': tutoringCenters as LandingContent,
};
