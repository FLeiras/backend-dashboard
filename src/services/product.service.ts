import { prisma } from '../lib/prisma';

type CreateProductDTO = {
  title: string;
  description: string;
  price: number;
  categoryId: number;
  image?: string;
};

export async function createProduct(data: CreateProductDTO) {
  if (!data.image) {
    throw new Error('Image is required');
  }

  return prisma.product.create({
    data: {
      title: data.title,
      description: data.description,
      price: data.price,
      image: data.image,
      category: {
        connect: {
          id: data.categoryId,
        },
      },
    },
  });
}

export function findAllProducts() {
  return prisma.product.findMany();
}
