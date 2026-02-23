import express from 'express';
import authentication from '../middleware/authentication.js';
import { compliteProfileController } from '../controller/customarController.js';

const router = express.Router();

router.post('/compliteProfile', authentication, compliteProfileController)

export default router;