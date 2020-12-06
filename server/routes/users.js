import express from "express";
import { checkDuplicateValue } from "../controllers/users.js";
const router = express.Router();
router.get("/check-field/:field/:value", checkDuplicateValue);
export default router;
