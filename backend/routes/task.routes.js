
import express from 'express';
import { getTaskCatalog } from '../controllers/task.controller.js';

const router = express.Router();

router.get('/', getTaskCatalog);

export default router;
