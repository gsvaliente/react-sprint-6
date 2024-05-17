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

export const DATA: DataType[] = [
  {
    id: 1,
    title: "seo",
    description: "This is the descriptions that will be shown",
    price: 300,
  },
  {
    id: 2,
    title: "ads",
    description: "This is the descriptions that will be shown",
    price: 400,
  },
  {
    id: 3,
    title: "web",
    description: "This is the descriptions that will be shown",
    price: 500,
  },
];

export const WEB_EXTRAS: WebExtraType = {
  options: {
    pages: 0,
    languages: 0,
  },
};
