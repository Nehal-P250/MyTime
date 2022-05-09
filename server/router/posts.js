import { Router } from "express";
import { getPosts, createPost, updatePost } from "../controllers/posts.js";
const router = new Router();

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);

export default router;