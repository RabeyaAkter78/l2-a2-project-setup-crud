import express from 'express';
import { CarController } from './car.controller';

const router = express.Router();

router.post('/cars', CarController.createCar);
router.get('/', CarController.getAllCars);
router.get('/cars/:carId', CarController.getSIngleCar);
router.put('/cars/:carId', CarController.updateCar);

export const CarRoutes = router;