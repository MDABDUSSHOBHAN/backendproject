// this is for joi sehema

import Joi from "joi";

// Main schema for Student
const studentSchema = Joi.object({
  //new validator data with JOI

  name: Joi.string(),
  brand: Joi.string(),
  price: Joi.number().positive(),
  type: Joi.string().valid("Mountain", "Road", "Hybrid", "BMX", "Electric"),
  description: Joi.string(),
  quantity: Joi.number(),
  inStock: Joi.boolean(),
}).unknown(true);

export default studentSchema;
