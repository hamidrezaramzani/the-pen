import Users from "../models/users.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";
import _ from "lodash";
import config from "config";
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

const login = async (req, res) => {
  try {
    const { body } = req;
    checkValidation(req, res);
    const user = await Users.findOne({ email: body.email });
    const isPassword =
      user && (await bcrypt.compare(body.password, user.password));
    if (user && isPassword) {
      const token = jwt.sign(
        {
          level: user.level,
          fullname: user.fullname,
        },
        config.get("USER_SECRET")
      );
      const data = _.pick(user, ["fullname", "level", "email"]);
      res.status(200).send({
        message: "logged",
        user: {
          ...data,
          token,
        },
      });
    } else {
      res.status(401).send({
        message: "email or password is invalid",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error",
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

export { checkDuplicateValue, register, login };
