import express from "express";
import usersList from "../data/usersData.js";

const router = express.Router();

router.get("/", (req, res) => {
  try {
    res.status(200).json(usersList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/:id", (req, res) => {
  try {
    const usersId = req.params.id;
    const users = usersList.find((a) => a.id == usersId);

    if (!users) {
      res.status(404).json({ message: "users not found" });
    } else {
      res.status(200).json({ users });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
