export interface UpdateProductDTO {
  title?: string;
  description?: string;
  price?: number;
  image?: string;
  categoryId?: number;
}

export type CreateProductDTO = {
  title: string;
  description: string;
  price: number;
  categoryId: number;
  image?: string;
};
