import express from "express";
import {
  checkDuplicateValue,
  register,
  login,
  getUser,
  updateProfile,
  changePassword,
} from "../controllers/users.js";
import { authentication } from "../controllers/authentications.js";
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
router.get("/user/:id", authentication, getUser);

router.post("/update-profile", authentication, updateProfile);
router.patch("/change-password", authentication, changePassword);
export default router;
