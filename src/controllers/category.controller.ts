import { Request, Response } from 'express';
import { createCategory, getCategories } from '../services/category.service';

export const createCategoryController = async (req: Request, res: Response) => {
  const { key, nameEn, nameEs } = req.body;

  if (!key || !nameEn || !nameEs) {
    return res.status(400).json({
      message: 'key, nameEn and nameEs are required',
    });
  }

  const category = await createCategory({ key, nameEn, nameEs });
  res.status(201).json(category);
};

export const getCategoriesController = async (_: Request, res: Response) => {
  const categories = await getCategories();
  res.json(categories);
};
