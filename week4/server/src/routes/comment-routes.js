import { Router } from "express";
import {
  getComments,
  getCommentById,
  createComment,
} from "../repository/comments-repository.js";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const Comments = await getComments();
    res.json(Comments);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const comment = await getCommentById(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.json(comment);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newComment = await createComment(req.body);
    res.status(201).json(newComment);
  } catch (error) {
    next(error);
  }
});

export default router;
