import { Router } from 'express';
import { upload } from '../middlewares/upload';
import * as productController from '../controllers/';

const router = Router();

router.get('/', productController.getProducts);
router.post(
  '/',
  upload.single('image'),
  productController.createProductController,
);
router.patch('/:id', productController.updateProductController);
router.delete('/:id', productController.deleteProductController);

export default router;
