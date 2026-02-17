import { Router } from 'express';
import * as categoryController from '../controllers/';

const router = Router();

router.post('/', categoryController.createCategoryController);
router.get('/', categoryController.getCategoriesController);
router.patch('/:id', categoryController.updateCategoryController);
router.delete('/:id', categoryController.deleteCategoryController);

export default router;
