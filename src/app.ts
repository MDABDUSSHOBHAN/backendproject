// import express, { Application, Request, Response } from 'express';
import cors from "cors";
import express from "express";
import { studentRoutes } from "./app/module/student/student.route";
import { ordersection } from "./app/module/order.model";

const app = express();

// // parsers
app.use(express.json());
app.use(cors());

// application route
app.use("/api/products", studentRoutes);
app.use("/api", studentRoutes);

app.get("/", studentRoutes);
app.post("/", studentRoutes);

app.get("/api/orders/revenue", async (req, res) => {
  try {
    // Call the method to get data from the database

    const result = await ordersection.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$totalPrice" },
        },
      },
    ]);

    res.status(200).json({
      message: "Revenue calculated successfully",
      status: true,
      data: result,
    });
  } catch (err) {
    console.error("Error retrieving students:", err);
    res.status(500).json({
      success: false,
      message: "An error occurred while retrieving students",
    });
  }
});

export default app;
