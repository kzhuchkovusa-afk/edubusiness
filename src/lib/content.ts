import tutoringCenters from '@/content/landing-pages/tutoring-centers.json';
import scratch from '@/content/programs/scratch.json';
import python from '@/content/programs/python.json';
import robotics from '@/content/programs/robotics.json';
import company from '@/content/shared/company.json';

export type LandingContent = typeof tutoringCenters;

export const landingPages = {
  'tutoring-centers': tutoringCenters as LandingContent,
};

export const programs = {
  scratch,
  python,
  robotics,
} as const;

export type ProgramSlug = keyof typeof programs;
export type ProgramDetail = (typeof programs)[ProgramSlug];

export function getProgram(slug: string): ProgramDetail | undefined {
  return (programs as Record<string, ProgramDetail>)[slug];
}

export function getProgramSlugs(): ProgramSlug[] {
  return Object.keys(programs) as ProgramSlug[];
}

export const companyContent = company;
