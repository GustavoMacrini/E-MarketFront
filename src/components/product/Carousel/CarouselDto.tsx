/** Produto vindo da API / Home */
export type ProductDto = {
  id: string;
  name: string;
  price: number;
  description: string;
};

/** O que a Home passa para o Carousel */
export type CarouselDto = {
  title: string;
  products: ProductDto[];
};

export type CarouselModalDto = {
  open: boolean;
  productTitle: string;
  price: number;
  image: string;
  description: string;
};
