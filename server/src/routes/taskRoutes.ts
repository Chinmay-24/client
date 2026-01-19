import { Router } from "express";
import { createTask , getTasks , updateTaskStatus, } from "../controllers/taskController.js";
import { getUserTasks } from "../controllers/taskController.js";

const router = Router();

router.get("/", getTasks);
router.post("/", createTask);
router.patch("/:taskId/status", updateTaskStatus);
router.get("/user/:userId", getUserTasks)

export default router;
