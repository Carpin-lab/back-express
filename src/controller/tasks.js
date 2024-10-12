import { TasksServices } from "../services/index.js";
import { validateTask } from "../models/tasks.js";
import { BuilderError } from "../utils/errorBuilder.js";

const services = new TasksServices();
export class tasksController {
  async getTasks(req, res) {
    const tasks = await services.getTasks();
    if (tasks.length === 0) {
      return res.status(204).json({ message: "No tasks found" });
    }
    return res.json(tasks);
  }

  async getTaskByID(req, res) {
    const id = parseInt(req.params.id);
    if (!id)
      return res.status(400).json(
        BuilderError({
          datail: {
            path: ["id"],
            expected: "number",
            received: typeof req.params.id,
          },
        })
      );

    const tasks = await services.getTasksByID({ id });

    if (!tasks) return res.status(204).json({ message: "No tasks found" });

    return res.json(tasks);
  }

  async addTasks(req, res) {
    const newTask = req.body;

    const valid = validateTask({ tasks: newTask });
    if (!valid.success) return res.status(400).json(valid);

    const result = await services.addTasks({ newTask: valid.data });
    return res.status(201).json(result);
  }

  async updateTask(req, res) {
    const id = parseInt(req.params.id);
    if (!id) {
      return res.status(400).json(
        BuilderError({
          datail: {
            path: ["id"],
            expected: "number",
            received: typeof req.params.id,
          },
        })
      );
    }
    const updatedTask = req.body;
    const valid = validateTask({ tasks: updatedTask });
    if (!valid.success) return res.status(400).json(valid);
    const result = await services.updateTasks({ id, updatedTask: valid.data });
    return res.status(200).json(result);
  }
}
