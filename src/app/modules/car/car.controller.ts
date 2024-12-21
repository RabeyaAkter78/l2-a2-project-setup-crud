import { CarServices } from "./car.service";
import { Request, Response } from "express";

const createCar = async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        const carData = req.body;
        const result = await CarServices.createCarIntoDB(carData);

        res.status(200).json({
            success: true,
            message: "car created successfully",
            data: result
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "something went wrong",
            error
        })
    }
};
const getAllCars = async (req: Request, res: Response) => {
    try {
        const result = await CarServices.getAllCarsFromDB();
        res.status(200).json({
            status: true,
            message: "cars are retrieved successfully",
            data: result
        })
    } catch (error: any) {
        res.status(500).json({
            status: false,
            message: "something went wrong",
            error
        })
    }
};

const getSIngleCar = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const result = await CarServices.getSIngleCarFromDB(id);
        res.status(200).json({
            status: true,
            message: "car retrieved successfully",
            data: result
        })


    } catch (error) {
        res.status(500).json({
            status: false,
            message: "something went wrong",
            error
        })
    }
}

export const CarController = {
    createCar,
    getAllCars,
    getSIngleCar,
};