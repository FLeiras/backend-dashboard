import { Request, Response } from 'express';
import * as productService from '../services/';

export async function getProducts(_req: Request, res: Response) {
  const products = await productService.findAllProducts();
  res.json(products);
}

export async function createProductController(req: Request, res: Response) {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Error creating product' });
  }
}

export const updateProductController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: 'Invalid product id' });
    }

    const product = await productService.updateProduct(id, req.body);

    res.json(product);
  } catch (error) {
    res.status(404).json({ message: 'Product not found' });
  }
};

export const deleteProductController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: 'Invalid product id' });
    }

    await productService.deleteProduct(id);

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(404).json({ message: 'Product not found' });
  }
};
