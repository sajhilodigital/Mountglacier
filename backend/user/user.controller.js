import express from "express";
import UserTable from "./user.model.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/user/register", async (req, res) => {
  const newUser = req.body;

  const user = await UserTable.findOne({ email: newUser.email });

  //  if user, throw error

  if (user) {
    return res.status(409).send({ message: "user already exists." });
  }

  const plainPassword = newUser.password;
  const saltround = 10;
  const hashedPassword = await bcrypt.hash(plainPassword, saltround);

  newUser.password = hashedPassword;

  await UserTable.create(newUser);

  return res.status(201).send({ message: "User is registered successfully." });
});

router.post("/user/login", (req, res) => {
  return res.status(200).send({ message: "login...." });
});

export { router as userController };
