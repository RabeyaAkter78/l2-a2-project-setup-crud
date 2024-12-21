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
const getSIngleCarFromDB = async (id: string) => {
    const result = await CarModel.findOne(id);
    return result
};
const updateCarIntoDB = async (id: string, carData: Car) => {
    console.log(id, carData)
    try {
        const result = await CarModel.findByIdAndUpdate(
            id,
            { $set: carData },
            { new: true }
        );
        return {
            status: true,
            message: "car updated successfully",
            data: result
        };
    } catch (error) {
        return {
            status: false,
            message: "something went wrong",
            error
        };
    }
};

export const CarServices = {
    createCarIntoDB,
    getAllCarsFromDB,
    getSIngleCarFromDB,
    updateCarIntoDB
};