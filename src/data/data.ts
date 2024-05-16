export interface DataType {
  id: number;
  title: string;
  description: string;
  price: number;
}

export const DATA: DataType[] = [
  {
    id: 1,
    title: 'SEO',
    description: 'This is the descriptions that will be shown',
    price: 300,
  },
  {
    id: 2,
    title: 'ADS',
    description: 'This is the descriptions that will be shown',
    price: 400,
  },
  {
    id: 3,
    title: 'WEB',
    description: 'This is the descriptions that will be shown',
    price: 500,
  },
];
