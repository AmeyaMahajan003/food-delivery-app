import express from 'express';
import { listOrders, placeOrder, updateStatus, userOrders, verifyOrder } from '../controllers/orderController.js';
import authMiddleware from '../middleware/auth.js';

const orderRouter = express.Router();

orderRouter.post('/place',authMiddleware,placeOrder);
orderRouter.post('/verify',verifyOrder);
orderRouter.post('/userOrders',authMiddleware,userOrders);

//admin
orderRouter.get('/list',listOrders);

//admin
orderRouter.post('/status',updateStatus);

export default orderRouter;