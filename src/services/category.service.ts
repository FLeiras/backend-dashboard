import slugify from 'slugify';
import { prisma } from '../lib/prisma';

type CreateCategoryDTO = {
  nameEn: string;
  nameEs: string;
};

export const getCategories = async () => {
  return prisma.category.findMany();
};

function generateKey(nameEn: string) {
  return nameEn.toLowerCase().trim().replace(/\s+/g, '-');
}

export async function createCategory(data: CreateCategoryDTO) {
  const key = slugify(data.nameEn, { lower: true });

  return prisma.category.create({
    data: {
      key,
      nameEn: data.nameEn,
      nameEs: data.nameEs,
    },
  });
}

export const updateCategory = async (id: number, data: CreateCategoryDTO) => {
  return prisma.category.update({
    where: { id },
    data,
  });
};

export const deleteCategory = async (id: number) => {
  const productsCount = await prisma.product.count({
    where: { categoryId: id },
  });

  if (productsCount > 0) {
    throw new Error('Category has products');
  }

  return prisma.category.delete({
    where: { id },
  });
};
