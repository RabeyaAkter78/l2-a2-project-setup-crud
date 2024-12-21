import express from 'express';
import { CarController } from './car.controller';

const router = express.Router();

router.post('/cars', CarController.createCar);
router.get('/', CarController.getAllCars);

export const CarRoutes = router;