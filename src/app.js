import express from 'express';
import authRouter from './router/authRouter.js';
import adminRouter from './router/adminRouter.js';
import sellerRouter from './router/sellerRouter.js';
import customarRouter from './router/customarRouter.js';

const app = express();

// Build-IN Middleware
app.use(express.json());


// Router in Middleware
app.use('/auth', authRouter);
app.use('/admin', adminRouter);
app.use('/seller', sellerRouter);
app.use('/customar', customarRouter);

// Base-URL : http://127.0.0.1:9000/


export default app;