export interface Client {
  name: string;
  sector?: string;
  url?: string;
  note?: string;
}

export interface Metric {
  label: string;
  from: string;
  to: string;
}

export interface CaseStudy {
  name: string;
  /** Optional image in /public/logos — falls back to a styled wordmark. */
  logo?: string;
  mark: 'tiktok' | 'vanquish' | 'thirtythreemm' | 'mvf';
  role: string;
  summary: string;
  highlights: string[];
  metrics?: Metric[];
}

export const caseStudies: CaseStudy[] = [
  {
    name: '33mm',
    logo: '/logos/33mm.png',
    mark: 'thirtythreemm',
    role: 'performance & growth lead',
    summary:
      'took them from a five-figure to a seven-figure a month business — owning paid end-to-end and the analysis around it.',
    metrics: [
      { label: 'monthly ad spend', from: '£10k', to: '£250k' },
      { label: 'monthly revenue', from: '£40k', to: '£900k' },
    ],
    highlights: [
      'scaled spend 25x while holding efficiency',
      'blended cac, roas and contribution — not just platform-reported numbers',
      'ongoing engagement',
    ],
  },
  {
    name: 'tiktok',
    mark: 'tiktok',
    role: 'agency partner',
    summary:
      'drove app installs across google and facebook using influencer-led creative.',
    highlights: [
      'influencer content as the primary creative engine',
      'install volume scaled across paid social and search',
    ],
  },
  {
    name: 'vanquish fitness',
    mark: 'vanquish',
    role: 'head of paid social',
    summary:
      'ran six-figure monthly end-to-end budgets, with a hand in every analytical part of the business.',
    highlights: [
      'six-figure monthly budgets across paid social',
      'performance, stock, analysis and finance — analytics across departments',
      'owned strategy, creative direction and day-to-day optimisation',
    ],
  },
  {
    name: 'mvf',
    mark: 'mvf',
    role: 'senior emergent paid media specialist',
    summary:
      'led the b2b side of the emergent paid media function, building a revenue line from close to nothing.',
    metrics: [{ label: 'new b2b revenue', from: 'sub £10k', to: '£500k+' }],
    highlights: [
      'built the b2b revenue function in roughly six months',
      'scaled emergent channels — pinterest, snapchat, twitter and facebook',
    ],
  },
];

export const clients: Client[] = [
  {
    name: 'the care side',
    sector: 'lead generation',
    note: 'paid search and paid social — broke through paid social as a viable channel.',
  },
  {
    name: 'world vision',
    sector: 'lead generation',
    note: 'paid acquisition for one of the largest international charities.',
  },
  {
    name: 'active content',
    sector: 'lead generation',
    note: 'driving lead performance across paid channels.',
  },
  {
    name: 'emma j shipley',
    sector: 'd2c / e-commerce',
    note: 'luxury hand-drawn homeware and accessories — wallpaper, fabrics, fine china and jewellery.',
  },
  {
    name: 'runna',
    sector: 'app installs',
    note: 'scaling app install activity on facebook.',
  },
  {
    name: 'socios.com',
    sector: 'app installs',
    note: 'facebook app install strategy.',
  },
  {
    name: 'livescore',
    sector: 'app installs',
    note: 'european facebook app install strategy.',
  },
];
