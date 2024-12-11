"use strict";
// this is for joi sehema
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
// Main schema for Student
const orderSchema = joi_1.default.object({
    email: joi_1.default.string().email(), // Ensure email is a string in valid email format
    product: joi_1.default.string(), // Validate as MongoDB ObjectId
    quantity: joi_1.default.number(), // Must be a positive integer
    totalPrice: joi_1.default.number(), // Must be a positive number
});
exports.default = orderSchema;
