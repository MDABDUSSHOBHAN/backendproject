// this is for joi sehema

import Joi from "joi";

// Main schema for Student
const orderSchema = Joi.object({
  email: Joi.string().email(), // Ensure email is a string in valid email format
  product: Joi.string(), // Validate as MongoDB ObjectId
  quantity: Joi.number(), // Must be a positive integer
  totalPrice: Joi.number(), // Must be a positive number
});

export default orderSchema;
