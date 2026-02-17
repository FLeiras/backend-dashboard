import { prisma } from '../lib/prisma';

interface UpdateCategoryDTO {
  nameEn?: string;
  nameEs?: string;
}

export const getCategories = async () => {
  return prisma.category.findMany();
};

export const createCategory = async ({
  nameEn,
  nameEs,
}: {
  nameEn: string;
  nameEs: string;
}) => {
  return prisma.category.create({
    data: {
      nameEn: nameEn,
      nameEs: nameEs,
    },
  });
};

export const updateCategory = async (id: number, data: UpdateCategoryDTO) => {
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
