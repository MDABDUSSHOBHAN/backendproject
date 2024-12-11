import mongoose, { Schema, Document } from "mongoose";
import { Order, Student } from "./student/student.interface";

const OrderSchema: Schema = new Schema<Order>(
  {
    email: { type: String },
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    quantity: { type: Number },
    totalPrice: { type: Number },
  },

  { timestamps: true }
);

export const ordersection = mongoose.model<Student>("Order", OrderSchema);
