import app from "./app";
import mongoose from "mongoose";
import Config from "./app/config";


main().catch(err => console.log(err));

async function main() {
    try {
        await mongoose.connect(Config.database_url as string);
        console.log("database connected successfully");



        app.listen(5000, () => {
            console.log(`Car Store listening on port ${Config.port}`);
        })
    } catch (error) {
        console.log(error);
    }
}




