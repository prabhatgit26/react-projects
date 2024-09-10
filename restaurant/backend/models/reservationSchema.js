// import mongoose from "mongoose";
// import validator from "validator";

// const reservationSchema = new mongoose.Schema({
//     firstName: { // Corrected from firtsName to firstName
//         type: String,
//         required: true,
//         minLength: [3, "First name must contain at least 3 characters!"],
//         maxLength: [30, "First name cannot exceed 30 characters!"],
//     },
//     lastName: {
//         type: String,
//         required: true,
//         minLength: [3, "Last name must contain at least 3 characters!"],
//         maxLength: [30, "Last name cannot exceed 30 characters!"],
//     },
//     email: {
//         type: String,
//         required: true,
//         validate: [validator.isEmail, "Provide a valid Email"],
//     },
//     phone: {
//         type: String,
//         required: true,
//         minLength: [10, "Phone number must contain exactly 10 digits!"],
//         maxLength: [10, "Phone number must contain exactly 10 digits!"],
//     },
//     time: {
//         type: String,
//         required: true,
//     },
//     date: {
//         type: String,
//         required: true,
//     },
// });

// export const Reservation = mongoose.model("reservation", reservationSchema);



import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        minLength: [3, "First name must contain at least 3 characters"],
        maxLength: [30, "First name cannot exceed 30 characters"],
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        minLength: [3, "Last name must contain at least 3 characters"],
        maxLength: [30, "Last name cannot exceed 30 characters"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: [validator.isEmail, "Provide a valid email address"],
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"],
        length: [10, "Phone number must be exactly 10 digits"],
    },
    time: {
        type: String,
        required: [true, "Reservation time is required"],
    },
    date: {
        type: String,
        required: [true, "Reservation date is required"],
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
