import { Router } from 'express';
import categoryRouter from './category.routes.js';

const baseUrl = '/api/v1';
const router = Router();

router.use(`${baseUrl}/category`, categoryRouter);

export default router;
