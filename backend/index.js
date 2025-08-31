import express from "express";
import connectDB from "./DBconnection.js";
import { userController } from "./user/user.controller.js";

const app = express();
app.use(express.json());

connectDB();

app.use(userController);

const PORT = 8000;

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
