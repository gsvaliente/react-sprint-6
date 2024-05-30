export interface DataType {
  id: number;
  title: string;
  description: string;
  price: number;
}

export interface WebExtraType {
  options: {
    pages: number;
    languages: number;
  };
}

export interface BudgetCardType {
  name: string;
  telephone: string;
  email: string;
  services: string[];
  total: number;
}

export const DATA: DataType[] = [
  {
    id: 1,
    title: 'seo',
    description: 'This is the descriptions that will be shown',
    price: 300,
  },
  {
    id: 2,
    title: 'ads',
    description: 'This is the descriptions that will be shown',
    price: 400,
  },
  {
    id: 3,
    title: 'web',
    description: 'This is the descriptions that will be shown',
    price: 500,
  },
];

export const WEB_EXTRAS: WebExtraType = {
  options: {
    pages: 0,
    languages: 0,
  },
};

export const SAMPLE_BUDGETS: BudgetCardType[] = [
  {
    name: 'Gabriel',
    telephone: '123456',
    email: 'g@gmail.com',
    services: ['seo', 'ads'],
    total: 500,
  },
  {
    name: 'Miguel',
    telephone: '123456',
    email: 'g@gmail.com',
    services: ['seo', 'ads'],
    total: 500,
  },
];
