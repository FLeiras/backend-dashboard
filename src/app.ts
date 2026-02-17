import express from 'express';
import cors from 'cors';
import productRoutes from './routes/product.routes';
import categoryRoutes from './routes/category.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);

export default app;
