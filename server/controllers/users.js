import Users from "../models/users.js";
import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";
const checkDuplicateValue = async (req, res) => {
  try {
    const { field, value } = req.params;
    const user = await Users.findOne({
      [field]: value,
    });
    if (user) {
      res.status(400).json({
        message: "field reserved",
      });
    } else {
      res.status(200).json({
        message: "field avaliable",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error",
    });
  }
};

const getHashedString = async (string) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(string, salt);
};

const checkValidation = (req, res) => {
  if (!validationResult(req).isEmpty()) {
    res.status(400).json({
      message: "validation failed",
    });
  }
};

const register = async (req, res) => {
  try {
    const { body } = req;
    body.password = await getHashedString(body.password);
    checkValidation(req, res);
    const user = new Users(body);
    const newUser = await user.save();
    if (newUser) res.status(200).json({ message: "created" });
    else res.status(500).json({ message: "error" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error",
    });
  }
};

export { checkDuplicateValue, register };
