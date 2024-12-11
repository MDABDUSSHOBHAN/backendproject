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
exports.StudentServices = void 0;
const order_model_1 = require("../order.model");
const student_models_1 = __importDefault(require("../student.models"));
const createStudentIntoDB = (studentData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_models_1.default.create(studentData);
    return result;
});
// this is for order sections
const orderStudentIntoDB = (studentData1) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.ordersection.create(studentData1);
    return result;
});
// Here we write business login for get request
const getAllStudentsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_models_1.default.find();
    return result;
});
const getAllorderFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.ordersection.find();
    return result;
});
// this logic is for aggregation of data ...
// const getsumStudentsFromDB = async () => {
//   const result = await ordersection.find();
//   return result;
// };
// id deya find korar service logic Here is emplement
const getSingelStudentFromDB = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_models_1.default.findOne({ _id });
    return result;
});
// this is for update id section
const updateUserFromDB = (_id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_models_1.default.findByIdAndUpdate({ _id }, data, {
        new: true,
    });
    return result;
});
//Here is the logic for deleteOne form DB----
const deleteUserFromDB = (_id) => {
    const result = student_models_1.default.deleteOne({ _id });
    return result;
};
exports.StudentServices = {
    createStudentIntoDB,
    deleteUserFromDB,
    //we export it
    getAllStudentsFromDB,
    getSingelStudentFromDB,
    updateUserFromDB,
    getAllorderFromDB,
    orderStudentIntoDB,
};
