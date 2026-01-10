import { Router } from "express";
import { createTask, getTasks, updateTaskStatus } from "../controllers/taskController.js";
const router = Router();
router.get("/", getTasks);
router.post("/", createTask);
router.patch("/:taskId/status", updateTaskStatus);
export default router;
//# sourceMappingURL=taskRoutes.js.map