import express from "express";
import { newPost  , posts , postsByUserId , postSlides} from "../controllers/posts.js";

const router = express.Router();

router.post("/new-post", newPost);
router.get("/posts", posts);
router.get("/post-slides", postSlides);
router.get("/user_posts/:userid",postsByUserId);

export default router;
