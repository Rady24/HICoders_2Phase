import { Router } from "express";
import {
  getPosts,
  getPostById,
  createPost,
} from "../repository/posts-repository.js";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const posts = await getPosts();
    res.json(posts);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const post = await getPostById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newPost = await createPost(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
});

export default router;
