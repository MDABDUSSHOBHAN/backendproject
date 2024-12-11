"use strict";
//controller function request nibe and response pathabe
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
exports.StudentControllers = void 0;
const student_service_1 = require("./student.service");
const student_validation_1 = __importDefault(require("./student.validation"));
const orderSchema_1 = __importDefault(require("../orderSchema"));
// this is for create statement
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Creating a schema validation using Joi
        const student = req.body;
        const { error, value } = student_validation_1.default.validate(student);
        console.log({ error }, { value });
        if (error) {
            res.status(400).json({
                success: false,
                message: "Validation failed",
                error: error.details, // More informative error response
            });
        }
        const result = yield student_service_1.StudentServices.createStudentIntoDB(student);
        res.status(201).json({
            message: "Bicycle created successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        console.error(error); // Log error for debugging
        res.status(500).json({
            message: "Validation failed",
            success: false,
            error: error,
        });
    }
});
// this is the end of create statement
// Here is the logic of get statement
const getAllStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Call the method to get data from the database
        const data = yield student_service_1.StudentServices.getAllStudentsFromDB();
        res.status(200).json({
            message: "Bicycle retrieved successfully",
            status: true,
            data: data,
        });
    }
    catch (error) {
        console.error(error); // Log error for debugging
        res.status(500).json({
            message: "Validation failed",
            success: false,
            error: error,
        });
    }
});
// end of get all data steatment
// Here is the logic for update statement
const getUpdateStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Call the method to get data from the database
        const id = req.params.studentID;
        // ami je data demu ta update korbe ai sala...
        const body = req.body;
        const result = yield student_service_1.StudentServices.updateUserFromDB(id, body);
        res.status(200).json({
            message: "Bicycle updated successfully",
            status: true,
            data: result,
        });
    }
    catch (err) {
        console.error("Error update students:", err);
        res.status(500).json({
            success: false,
            message: "An error occurred while updating students",
            error: err,
        });
    }
});
// Here is the end of update statement
// Here is the logic for find one statement
const getSingleStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Call the method to get data from the database
        const id = req.params.studentID;
        const result = yield student_service_1.StudentServices.getSingelStudentFromDB(id);
        res.status(200).json({
            message: "Bicycle retrieved successfully",
            status: true,
            data: result,
        });
    }
    catch (err) {
        console.error("Error retrieving students:", err);
        res.status(500).json({
            success: false,
            message: "An error occurred while retrieving students",
            error: err,
        });
    }
});
// Here is the end for find one statement
// Here is the logic for delete statement
const getDeleteeStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Call the method to get data from the database
        const id = req.params.studentID;
        const result = yield student_service_1.StudentServices.deleteUserFromDB(id);
        res.status(200).json({
            message: "Bicycle deleted successfully",
            status: true,
            data: result,
        });
    }
    catch (err) {
        console.error("Error delete students:", err);
        res.status(500).json({
            success: false,
            message: "An error occurred while deleteing students",
            error: err,
        });
    }
});
// Here is the end for delete statement
// part ____ 0002 >>>> Order_Section
// L2 This is the logic for order_table (ref. POST )
const orderStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Creating a schema validation using Joi
        const student = req.body;
        const { error, value } = orderSchema_1.default.validate(student);
        console.log({ error }, { value });
        if (error) {
            res.status(400).json({
                success: false,
                message: "Validation error",
                error: error, // More informative error response
            });
        }
        const result = yield student_service_1.StudentServices.orderStudentIntoDB(student);
        res.status(201).json({
            message: "Order created successfully",
            status: true,
            data: result,
        });
    }
    catch (error) {
        console.error(error); // Log error for debugging
        res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
});
// End of L2 the logic for order_table
// Here is the logic for getAll Order
const getAllorders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Call the method to get data from the database
        const result = yield student_service_1.StudentServices.getAllorderFromDB();
        res.status(200).json({
            success: true,
            message: "order created successfully",
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
});
// End of the logic for getAll Order
exports.StudentControllers = {
    createStudent,
    getAllStudents,
    getSingleStudents,
    getUpdateStudents,
    getDeleteeStudents,
    orderStudent,
    getAllorders,
};
