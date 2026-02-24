import express from 'express';
import { createProfileController } from '../controller/sellerController.js';

const router = express.Router();


router.post('/createProfile', createProfileController)

export default router;