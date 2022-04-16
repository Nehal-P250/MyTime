import { Router } from "express";
import { getPosts } from "../controllers/posts.js";
const router = new Router();

router.get("/", getPosts);

export default router;