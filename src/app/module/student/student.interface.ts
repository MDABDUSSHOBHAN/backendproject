import { Model } from "mongoose";

//   fatherOccupation: string;
//   fatherContactNo: string;
//   motherName: string;
//   motherOccupation: string;
//   motherContactNo: string;
// };
// export type Username = {
//   firstName: string;
//   middleName: string;
//   lastName: string;
// };

// export type LocalGardian = {
//   name: string;
//   occupation: string;
//   contactNo: string;
//   address: string;
// };

// enum BicycleType {
//   Mountain = "Mountain",
//   Road = "Road",
//   Hybrid = "Hybrid",
//   BMX = "BMX",
//   Electric = "Electric",
// }

//create interface representing document in mongoDB

export type Student = {
  name: string;
  brand: string;
  price: number;
  type: string;
  description: string;
  quantity: number;
  inStock: boolean;
};

export type Order = {
  email?: string; // Optional field for order
  product?: string; // ObjectId as a string (optional for order)
  quantity: number;
  totalPrice?: number; // Optional field for order
};
//

// next state interface ar upor base kore schema toire kora....

export type StudentMethods = {
  isUserExiest(id: string): Promise<Student | Order | null>;
};

export type StudentModel = Model<
  Student,
  Record<string, never>,
  StudentMethods
>;
