import { prisma } from '../lib/prisma';

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

export const getCategories = async () => {
  return prisma.category.findMany();
};
