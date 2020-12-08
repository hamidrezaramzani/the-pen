import express from "express";
import { checkDuplicateValue, register } from "../controllers/users.js";
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
router.get("/check-field/:field/:value", checkDuplicateValue);
export default router;
