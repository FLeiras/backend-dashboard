import { prisma } from '../lib/prisma';
import { CreateProductDTO, UpdateProductDTO } from '../types/Products';

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

export const getProductById = async (id: number) => {
  return prisma.product.findUnique({
    where: { id },
  });
};

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
