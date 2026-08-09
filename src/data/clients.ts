export interface Client {
  name: string;
  sector?: string;
  url?: string;
  note?: string;
}

export interface CaseStudy {
  name: string;
  /** Optional image in /public/logos — e.g. '/logos/tiktok.svg'. Falls back to a styled wordmark. */
  logo?: string;
  /** CSS font-stack flavour for the wordmark fallback */
  mark: 'tiktok' | 'vanquish' | 'thirtythreemm' | 'mvf';
  role: string;
  summary: string;
  highlights: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    name: '33mm',
    logo: '/logos/33mm.png',
    mark: 'thirtythreemm',
    role: 'performance & growth lead',
    summary:
      'my main client — running end-to-end performance marketing and growth for the company.',
    highlights: [
      'full ownership of paid strategy, execution and reporting',
      'growth remit beyond paid — blended cac, roas and budget allocation',
      'ongoing engagement',
    ],
  },
  {
    name: 'tiktok',
    mark: 'tiktok',
    role: 'paid marketing specialist',
    summary:
      'helped spearhead influencer-led tiktok campaigns, driving app installs through paid marketing platforms.',
    highlights: [
      'influencer-led creative strategy at platform scale',
      'app install activation across paid channels',
    ],
  },
  {
    name: 'vanquish fitness',
    mark: 'vanquish',
    role: 'head of paid digital',
    summary:
      'solely responsible for end-to-end performance marketing across all channels.',
    highlights: [
      'managed six-figure monthly end-to-end budgets',
      'owned strategy, creative direction and optimisation across meta, google and more',
    ],
  },
  {
    name: 'mvf',
    mark: 'mvf',
    role: 'head of emerging paid media',
    summary:
      'headed the emerging paid media (epm) team at one of the uk\'s biggest lead-gen businesses.',
    highlights: [
      'built and led the epm function',
      'scaled the b2b region from zero to £200k / mth',
    ],
  },
];

export const clients: Client[] = [
  {
    name: 'livescore',
    sector: 'app installs',
    note: 'european paid app install activation.',
  },
  {
    name: 'socials.com',
    sector: 'app installs',
    note: 'paid app install activation, similar shape to livescore.',
  },
  {
    name: 'runna',
    sector: 'app installs',
    note: 'scaling app install activity on paid social.',
  },
  {
    name: 'the care side',
    sector: 'healthcare',
    note: 'responsible for paid search and paid social — broke through paid social as a viable channel.',
  },
];
