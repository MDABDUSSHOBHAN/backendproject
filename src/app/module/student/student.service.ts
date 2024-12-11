import { ordersection } from "../order.model";
import Student1 from "../student.models";
import { Order, Student } from "./student.interface";

const createStudentIntoDB = async (studentData: Student) => {
  const result = await Student1.create(studentData);
  return result;
};

// this is for order sections
const orderStudentIntoDB = async (studentData1: Order) => {
  const result = await ordersection.create(studentData1);
  return result;
};

// Here we write business login for get request

const getAllStudentsFromDB = async () => {
  const result = await Student1.find();
  return result;
};

const getAllorderFromDB = async () => {
  const result = await ordersection.find();
  return result;
};

// this logic is for aggregation of data ...
// const getsumStudentsFromDB = async () => {
//   const result = await ordersection.find();
//   return result;
// };

// id deya find korar service logic Here is emplement

const getSingelStudentFromDB = async (_id: string) => {
  const result = await Student1.findOne({ _id });

  return result;
};

// this is for update id section

const updateUserFromDB = async (_id: string, data: Student) => {
  const result = await Student1.findByIdAndUpdate({ _id }, data, {
    new: true,
  });

  return result;
};

//Here is the logic for deleteOne form DB----

const deleteUserFromDB = (_id: string) => {
  const result = Student1.deleteOne({ _id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  deleteUserFromDB,
  //we export it
  getAllStudentsFromDB,
  getSingelStudentFromDB,
  updateUserFromDB,
  getAllorderFromDB,
  orderStudentIntoDB,
};
