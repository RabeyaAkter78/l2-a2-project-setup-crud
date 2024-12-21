import { Car } from "./car.interface";
import { CarModel } from "./car.models";



const createCarIntoDB = async (carData: Car) => {
    console.log(carData);
    const result = await CarModel.create(carData);
    return result
};
const getAllCarsFromDB = async () => {
    const result = await CarModel.find({});
    return result
};

export const CarServices = {
    createCarIntoDB,
    getAllCarsFromDB
};