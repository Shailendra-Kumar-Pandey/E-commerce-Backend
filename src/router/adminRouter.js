import express from 'express';
import { changeStatusSellerController, getAllSellerProfile } from '../controller/adminController.js';
import authentication from '../middleware/authentication.js';

const router = express.Router();


router.get('/getAllSeller', authentication , getAllSellerProfile)


router.put('/changeStatusSeller/:profileID', authentication , changeStatusSellerController)



export default router;