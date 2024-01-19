import express from "express";
import postsList from "../data/postsData.js";

const router = express.Router();

router.get("/", (req, res) => {
  try {
    res.status(200).json(postsList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/:id", (req, res) => {
  try {
    const postsId = req.params.id;
    const posts = postsList.find((a) => a.id == postsId);

    if (!posts) {
      res.status(404).json({ message: "posts not found" });
    } else {
      res.status(200).json({ posts });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
