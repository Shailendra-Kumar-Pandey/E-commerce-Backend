import express from 'express';
import { loginController, registrationController } from '../controller/authController.js';


const router = express.Router();


router.post('/registration', registrationController )

router.post('/logIN', loginController)

export default router;