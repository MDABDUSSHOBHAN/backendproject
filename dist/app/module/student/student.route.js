"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentRoutes = void 0;
//
const express_1 = __importDefault(require("express"));
const student_controller_1 = require("./student.controller");
const route = express_1.default.Router();
// route.post("/", StudentControllers.createStudent);
route.post("/", student_controller_1.StudentControllers.createStudent);
route.post("/orders", student_controller_1.StudentControllers.orderStudent);
route.get("/", student_controller_1.StudentControllers.getAllStudents);
route.get("/order", student_controller_1.StudentControllers.getAllorders);
route.put("/:productId", student_controller_1.StudentControllers.getUpdateStudents);
// find Onestudent by using studentID
route.get("/:studentID", student_controller_1.StudentControllers.getSingleStudents);
// this is the route for delete user
route.delete("/:studentID", student_controller_1.StudentControllers.getDeleteeStudents);
//getDeleteeStudents
exports.studentRoutes = route;
