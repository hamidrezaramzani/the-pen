import express from "express";
import { newPost } from "../controllers/posts";

const router = express.Router();

router.post("/new-post", newPost);

export default router;
