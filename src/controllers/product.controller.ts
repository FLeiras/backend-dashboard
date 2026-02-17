import { Request, Response } from 'express';

import { createProduct } from '../services/product.service';
import { findAllProducts } from '../services/product.service';

export async function getProducts(_req: Request, res: Response) {
  const products = await findAllProducts();
  res.json(products);
}

export async function createProductController(req: Request, res: Response) {
  try {
    const product = await createProduct(req.body);
    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Error creating product' });
  }
}
