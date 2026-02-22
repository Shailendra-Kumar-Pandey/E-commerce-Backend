import express from 'express';
import { getAllSellerProfile } from '../controller/adminController.js';
import authentication from '../middleware/authentication.js';

const router = express.Router();


router.get('/getAllSeller', authentication , getAllSellerProfile)



export default router;