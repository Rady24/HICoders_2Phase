import { Router } from "express";
import postRoutes from "./post-routes.js";
import commentRoutes from "./comment-routes.js";
import userRoutes from "./user-routes.js";

const router = Router();

router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);
router.use("/users", userRoutes);

export default router;
