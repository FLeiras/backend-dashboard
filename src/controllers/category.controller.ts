import { Request, Response } from 'express';
import * as CategoryService from '../services';

export const getCategoriesController = async (_: Request, res: Response) => {
  const categories = await CategoryService.getCategories();
  res.json(categories);
};

export const createCategoryController = async (req: Request, res: Response) => {
  const { key, nameEn, nameEs } = req.body;

  if (!key || !nameEn || !nameEs) {
    return res.status(400).json({
      message: 'key, nameEn and nameEs are required',
    });
  }

  const category = await CategoryService.createCategory({ nameEn, nameEs });
  res.status(201).json(category);
};

export const updateCategoryController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: 'Invalid category id' });
    }

    const category = await CategoryService.updateCategory(id, req.body);

    res.json(category);
  } catch (error) {
    res.status(404).json({ message: 'Category not found' });
  }
};

export const deleteCategoryController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: 'Invalid category id' });
    }

    await CategoryService.deleteCategory(id);

    res.json({ message: 'Category deleted successfully' });
  } catch (error: any) {
    if (error.message === 'Category has products') {
      return res
        .status(400)
        .json({ message: 'Cannot delete category with products' });
    }

    res.status(404).json({ message: 'Category not found' });
  }
};
