import express from "express";
const router = express.Router();
router.get("/", () => {
  console.log("get users");
});

export default router;
