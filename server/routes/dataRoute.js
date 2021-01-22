import express from 'express';
import * as dataController from '../controllers/dataController';

const router = express.Router();

router.get('/', dataController.getData);

export default router;
