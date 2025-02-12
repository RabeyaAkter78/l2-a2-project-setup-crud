import { model, Schema } from "mongoose";
import { IUSer } from "./user.interface";
import bcrypt from "bcrypt"

const userSchema = new Schema<IUSer>({
    name: {
        type: String,
        required: [true, "name is required"],
        maxlength: 50,
        minlength: 3
    },
    age: {
        type: Number,
        required: false
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (value: string) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: "Invalid email format"
        },
        immutable: true
    },
    password: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        default: null
    },
    role: {
        type: String,
        enum: {
            values: ["user", "admin"],
            message: "{VALUE} is not supported"
        },
        default: "user"
    },
    userStatus: {
        type: String,
        enum: {
            values: ["active", "inactive"],
            message: "{VALUE} is not supported"
        },
        default: "active"
    }
}, {
    timestamps: true,
});

userSchema.pre('save', async function (next) {
    const user = this;
    // hashing password and save into DB
    user.password = await bcrypt.hash(
        user.password,
        10

    );
    next();
}),

    // set '' after saving password
    userSchema.post('save', function (doc, next) {
        doc.password = '';
        next();
    })
const User = model<IUSer>('User', userSchema);
export default User