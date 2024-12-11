"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import express, { Application, Request, Response } from 'express';
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const student_route_1 = require("./app/module/student/student.route");
const order_model_1 = require("./app/module/order.model");
const app = (0, express_1.default)();
// // parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// application route
app.use("/api/products", student_route_1.studentRoutes);
app.use("/api", student_route_1.studentRoutes);
app.get("/", student_route_1.studentRoutes);
app.post("/", student_route_1.studentRoutes);
app.get("/api/orders/revenue", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Call the method to get data from the database
        const result = yield order_model_1.ordersection.aggregate([
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
    }
    catch (err) {
        console.error("Error retrieving students:", err);
        res.status(500).json({
            success: false,
            message: "An error occurred while retrieving students",
        });
    }
}));
exports.default = app;
