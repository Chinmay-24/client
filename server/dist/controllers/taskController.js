import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const getTasks = async (req, res) => {
    const { projectId } = req.query;
    try {
        const tasks = await prisma.task.findMany({
            where: {
                projectId: Number(projectId),
            },
            include: {
                author: true,
                assignee: true,
                comments: true,
                attachments: true,
            }
        });
        res.json(tasks);
    }
    catch (error) {
        res
            .status(500)
            .json({ message: `Error retrieving projects: ${error.message}` });
    }
};
export const createTask = async (req, res) => {
    const { title, description, status, priority, tags, startDate, dueDate, points, projectId, authorUserId, assignedUserId, } = req.body;
    try {
        const newTask = await prisma.task.create({
            data: {
                title,
                description,
                status,
                priority,
                tags,
                startDate,
                dueDate,
                points,
                projectId,
                authorUserId,
                assignedUserId,
            }
        });
        res.status(201).json(newTask);
    }
    catch (error) {
        res
            .status(500)
            .json({ message: `Error creating a  task: ${error.message}` });
    }
};
export const updateTaskStatus = async (req, res) => {
    const { taskId } = req.params;
    const { status } = req.body;
    try {
        const updatedTask = await prisma.task.update({
            where: {
                id: Number(taskId),
            },
            data: {
                status: status,
            }
        });
        res.json(updatedTask);
    }
    catch (error) {
        res
            .status(500)
            .json({ message: `Error updating task: ${error.message}` });
    }
};
//# sourceMappingURL=taskController.js.map