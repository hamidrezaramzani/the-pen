import express from "express";
import { newPost  , posts} from "../controllers/posts.js";

const router = express.Router();

router.post("/new-post", newPost);
router.get("/posts", posts);

export default router;
