"use strict";
// this is for joi sehema
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
// Main schema for Student
const studentSchema = joi_1.default.object({
    //new validator data with JOI
    name: joi_1.default.string(),
    brand: joi_1.default.string(),
    price: joi_1.default.number().positive(),
    type: joi_1.default.string().valid("Mountain", "Road", "Hybrid", "BMX", "Electric"),
    description: joi_1.default.string(),
    quantity: joi_1.default.number(),
    inStock: joi_1.default.boolean(),
});
exports.default = studentSchema;
