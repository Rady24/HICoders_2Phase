import { Router } from "express";
import {
  getPosts,
  getPostById,
  createPost,
  getPostWithComments,
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

router.get("/:postId/comments", async (req, res) => {
  try {
    const postWithComments = await getPostWithComments(req.params.postId);
    if (!postWithComments) {
      return res.status(404).send("Post not found");
    }

    return res.json(postWithComments.Comments || []);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

export default router;
