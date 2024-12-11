//
import express from "express";
import { StudentControllers } from "./student.controller";

const route = express.Router();

// route.post("/", StudentControllers.createStudent);

route.post("/", StudentControllers.createStudent);
route.post("/orders", StudentControllers.orderStudent);

route.get("/", StudentControllers.getAllStudents);

route.get("/order", StudentControllers.getAllorders);
route.put("/:productId", StudentControllers.getUpdateStudents);

// find Onestudent by using studentID
route.get("/:studentID", StudentControllers.getSingleStudents);

// this is the route for delete user
route.delete("/:studentID", StudentControllers.getDeleteeStudents);

//getDeleteeStudents

export const studentRoutes = route;
