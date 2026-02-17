import { Router } from 'express';
import * as productController from '../controllers/';

const router = Router();

router.get('/', productController.getProducts);
router.post('/', productController.createProductController);
router.patch('/:id', productController.updateProductController);
router.delete('/:id', productController.deleteProductController);

export default router;
