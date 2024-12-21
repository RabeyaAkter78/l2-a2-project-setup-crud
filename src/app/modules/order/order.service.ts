import { stat } from "fs";
import { CarModel } from "../car/car.models";
import { Order } from "./order.interface";
import { OrderModel } from "./order.models";

const createOrder = async (orderData: Order) => {
    const carData = await CarModel.findById(orderData.car);
    console.log(carData, "carData");
    if (carData?.inStock === true) {

        const result = await OrderModel.create(orderData);
        if (result._id) {
            const updatedQuantity = carData.quantity - orderData.quantity;
            if (updatedQuantity === 0) {
                await CarModel.findByIdAndUpdate(orderData.car, { quantity: updatedQuantity, inStock: false });
            } else {

                await CarModel.findByIdAndUpdate(orderData.car, { quantity: updatedQuantity });
            }
        }

        return result;
    } else {
        return {
            status: false,
            message: "out of stock"

        }

    }
}
export const OrderServices = {
    createOrder
}