//controller function request nibe and response pathabe

import { Request, Response } from "express";
import { StudentServices } from "./student.service";

import studentSchema from "./student.validation";
import orderSchema from "../orderSchema";

// this is for create statement
const createStudent = async (req: Request, res: Response): Promise<void> => {
  try {
    // Creating a schema validation using Joi
    const student = req.body;
    const { error, value } = studentSchema.validate(student);

    console.log({ error }, { value });

    if (error) {
      res.status(400).json({
        success: false,
        message: "Validation failed",
        error: error.details, // More informative error response
      });
    }

    const result = await StudentServices.createStudentIntoDB(student);

    res.status(201).json({
      message: "Bicycle created successfully",
      success: true,
      data: result,
    });
  } catch (error: any) {
    console.error(error); // Log error for debugging
    res.status(500).json({
      message: "Validation failed",
      success: false,
      error: error,
    });
  }
};
// this is the end of create statement

// Here is the logic of get statement
const getAllStudents = async (req: Request, res: Response) => {
  try {
    // Call the method to get data from the database
    const data = await StudentServices.getAllStudentsFromDB();

    res.status(200).json({
      message: "Bicycle retrieved successfully",
      status: true,
      data: data,
    });
  } catch (error: any) {
    console.error(error); // Log error for debugging
    res.status(500).json({
      message: "Validation failed",
      success: false,
      error: error,
    });
  }
};
// end of get all data steatment

// Here is the logic for update statement
const getUpdateStudents = async (req: Request, res: Response) => {
  try {
    // Call the method to get data from the database
    const id = req.params.studentID;
    // ami je data demu ta update korbe ai sala...
    const body = req.body;

    const result = await StudentServices.updateUserFromDB(id, body);

    res.status(200).json({
      message: "Bicycle updated successfully",
      status: true,
      data: result,
    });
  } catch (err) {
    console.error("Error update students:", err);
    res.status(500).json({
      success: false,
      message: "An error occurred while updating students",
      error: err,
    });
  }
};
// Here is the end of update statement

// Here is the logic for find one statement
const getSingleStudents = async (req: Request, res: Response) => {
  try {
    // Call the method to get data from the database
    const id = req.params.studentID;

    const result = await StudentServices.getSingelStudentFromDB(id);

    res.status(200).json({
      message: "Bicycle retrieved successfully",
      status: true,
      data: result,
    });
  } catch (err) {
    console.error("Error retrieving students:", err);
    res.status(500).json({
      success: false,
      message: "An error occurred while retrieving students",
      error: err,
    });
  }
};
// Here is the end for find one statement

// Here is the logic for delete statement
const getDeleteeStudents = async (req: Request, res: Response) => {
  try {
    // Call the method to get data from the database
    const id = req.params.studentID;

    const result = await StudentServices.deleteUserFromDB(id);

    res.status(200).json({
      message: "Bicycle deleted successfully",
      status: true,
      data: result,
    });
  } catch (err) {
    console.error("Error delete students:", err);
    res.status(500).json({
      success: false,
      message: "An error occurred while deleteing students",
      error: err,
    });
  }
};
// Here is the end for delete statement

// part ____ 0002 >>>> Order_Section

// L2 This is the logic for order_table (ref. POST )
const orderStudent = async (req: Request, res: Response): Promise<void> => {
  try {
    // Creating a schema validation using Joi
    const student = req.body;
    const { error, value } = orderSchema.validate(student);

    console.log({ error }, { value });

    if (error) {
      res.status(400).json({
        success: false,
        message: "Validation error",
        error: error, // More informative error response
      });
    }

    const result = await StudentServices.orderStudentIntoDB(student);

    res.status(201).json({
      message: "Order created successfully",
      status: true,
      data: result,
    });
  } catch (error: any) {
    console.error(error); // Log error for debugging
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
// End of L2 the logic for order_table

// Here is the logic for getAll Order
const getAllorders = async (req: Request, res: Response) => {
  try {
    // Call the method to get data from the database
    const result = await StudentServices.getAllorderFromDB();

    res.status(200).json({
      success: true,
      message: "order created successfully",
      data: result,
    });
  } catch (err) {
    console.error("Error retrieving students:", err);
    res.status(500).json({
      success: false,
      message: "An error occurred while retrieving students",
    });
  }
};
// End of the logic for getAll Order

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudents,
  getUpdateStudents,
  getDeleteeStudents,
  orderStudent,
  getAllorders,
};
