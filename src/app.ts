
import express, { Application, Request, Response } from "express"
import cors from "cors"
import { CarRoutes } from "./app/modules/car/car.route";
import { OrderRoutes } from "./app/modules/order/order.route";

const app: Application = express()

// parser:
app.use(express.json());
app.use(cors());

// Application routes:
app.use('/api/cars', CarRoutes);
app.use('/api/orders', OrderRoutes)


export default app;
