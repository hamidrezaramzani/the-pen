import express from "express";
import { checkDuplicateValue, register, login , getUser } from "../controllers/users.js";
import { body } from "express-validator";
const router = express.Router();
router.post(
  "/register",
  [
    body("fullname").isString(),
    body("email").isEmail().isString(),
    body("password").isString(),
  ],
  register
);
router.post(
  "/login",
  [body("email").isEmail().isString(), body("password").isString()],
  login
);
router.get("/check-field/:field/:value", checkDuplicateValue);
router.get("/user/:id",getUser);
export default router;
