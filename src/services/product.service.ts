import { prisma } from '../lib/prisma';

export function findAllProducts() {
  return prisma.product.findMany();
}
