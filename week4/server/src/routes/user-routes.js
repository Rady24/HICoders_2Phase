import { Router } from "express";
import {
  getUsers,
  getUserById,
  createUser,
} from "../repository/users-repository.js";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const users = await getUserById(req.params.id);
    if (!users) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newUser = await createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});

export default router;
