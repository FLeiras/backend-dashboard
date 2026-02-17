import { Router } from 'express';
import {
  createProductController,
  getProducts,
} from '../controllers/product.controller';

const router = Router();

router.get('/', getProducts);
router.post('/', createProductController);

export default router;
