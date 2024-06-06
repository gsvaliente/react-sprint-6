export interface DataType {
  id: number;
  title: string;
  description: string;
  price: number;
}

// export interface WebExtraType {
//   options: {
//     pages: number;
//     languages: number;
//   };
// }

export interface BudgetCardType {
  name: string;
  telephone: string;
  email: string;
  services: BudgetType;
  total: number;
}

export interface BudgetType {
  seo: number;
  ads: number;
  web: number;
  pages: number;
  languages: number;
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

// export const WEB_EXTRAS: WebExtraType = {
//   options: {
//     pages: 0,
//     languages: 0,
//   },
// };

export const SAMPLE_BUDGETS: BudgetCardType[] = [
  {
    name: 'Zeus',
    telephone: '123456789',
    email: '1@1',
    services: {
      ads: 400,
      seo: 300,
      web: 500,
      pages: 0,
      languages: 0,
    },
    total: 1200,
  },
  {
    name: 'Gabriel',
    telephone: '123456',
    email: 'g@gmail.com',
    services: {
      ads: 400,
      seo: 300,
      web: 0,
      pages: 0,
      languages: 0,
    },
    total: 700,
  },
  {
    name: 'Miguel',
    telephone: '123456',
    email: 'g@gmail.com',
    services: {
      ads: 400,
      seo: 0,
      web: 0,
      pages: 0,
      languages: 0,
    },
    total: 400,
  },
];
