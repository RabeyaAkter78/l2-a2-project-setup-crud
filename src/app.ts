
import express, { Application, Request, Response } from "express"
import cors from "cors"
import { CarRoutes } from "./app/modules/car/car.route";

const app: Application = express()

// parser:
app.use(express.json());
app.use(cors());

// Application routes:
app.use('/api', CarRoutes )


export default app;
