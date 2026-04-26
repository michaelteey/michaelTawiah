export interface Client {
  name: string;
  sector?: string;
  url?: string;
  note?: string;
}

export const clients: Client[] = [
  {
    name: 'tiktok',
    sector: 'app installs',
    note: 'influencer-led app install activation across paid marketing platforms.',
  },
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
    name: 'vanquish fitness',
    sector: 'd2c / e-commerce',
    note: 'head of paid digital — end-to-end performance marketing across all channels, budgets upwards of £300k / mth.',
  },
  {
    name: 'mvf',
    sector: 'b2b lead generation',
    note: 'spearheaded the emerging paid media team — scaled the b2b region from zero to £200k / mth.',
  },
  {
    name: 'the care side',
    sector: 'healthcare',
    note: 'responsible for paid search and paid social — broke through paid social as a viable channel.',
  },
];
