"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const studentSchema = new mongoose_1.Schema({
    name: { type: String }, // `required` is optional for this field
    brand: { type: String },
    price: { type: Number },
    type: {
        type: String, // Specify the type as String
        enum: ["Mountain", "Road", "Hybrid", "BMX", "Electric"], // Enum options
        // Required field
    },
    description: { type: String },
    quantity: { type: Number },
    inStock: { type: Boolean },
}, { timestamps: true });
// Define the Mongoose schema for orders
//
// email: { type: String }, // Email should be unique and immutable
// product: { type: String }, // Reference or a string identifier
// totalPrice: { type: String }, // Optional field
//method emplement of static type
// studentSchema.methods.isUserExiest = async function (id: string) {
//   const existingUser = await Student1.findOne({ id });
//   return existingUser;
//existingUser of mongoDB ____________________
// create model
const Student1 = (0, mongoose_1.model)("Student", studentSchema);
exports.default = Student1;
