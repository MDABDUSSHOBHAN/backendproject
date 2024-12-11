"use strict";
// ai file ar madhome je kono port onno je kono file a nite hobe ......
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join((process.cwd(), '.env')) });
//current dir ar sathe .env file add kora hoice ai file ar madhome ....
//what kind of voi do you have ??
// Nothing 
//Database url and port are install of this port---
exports.default = {
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL,
};
