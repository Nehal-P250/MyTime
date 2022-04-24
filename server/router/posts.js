import { Router } from "express";
import { getPosts, createPosts } from "../controllers/posts.js";
const router = new Router();

router.get("/", getPosts);
router.post("/", createPosts);

export default router;