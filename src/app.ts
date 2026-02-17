import express from 'express';
import healthRoutes from './routes/health';

const app = express();

app.use(express.json());

app.use(healthRoutes);

export default app;

// import express from 'express';
// import routes from './routes';

// const app = express();

// app.use(express.json());
// app.use('/api', routes);

// export default app;
