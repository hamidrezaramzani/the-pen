import express from "express";
const router = express.Router();
import { urlGoogle } from "../controllers/google-until.js";

router.get("/google", (req, res) => {
  res.redirect(urlGoogle());
});

router.get("/google-auth", () => {
  console.log("user");
});

export default router;
