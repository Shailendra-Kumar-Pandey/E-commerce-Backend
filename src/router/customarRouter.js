import express from 'express';
import authentication from '../middleware/authentication.js';
import { completeProfileController } from '../controller/customarController.js';

const router = express.Router();

router.post('/completeProfile', authentication, completeProfileController)

export default router;