import { Request, Response } from 'express';
import { findAllProducts } from '../services/product.service';

export async function getProducts(_req: Request, res: Response) {
  const products = await findAllProducts();
  res.json(products);
}
