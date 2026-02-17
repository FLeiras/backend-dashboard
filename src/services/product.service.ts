import { prisma } from '../lib/prisma';

type CreateProductDTO = {
  title: string;
  description: string;
  price: number;
  categoryId: number;
  image?: string;
};

export function findAllProducts() {
  return prisma.product.findMany();
}

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

interface UpdateProductDTO {
  title?: string;
  description?: string;
  price?: number;
  image?: string;
  categoryId?: number;
}

export const updateProduct = async (id: number, data: UpdateProductDTO) => {
  return prisma.product.update({
    where: { id },
    data,
  });
};

export const deleteProduct = async (id: number) => {
  return prisma.product.delete({
    where: { id },
  });
};
