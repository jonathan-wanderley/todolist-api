import { Request, Response } from "express";
import {
  createTaskService,
  getTaskService,
  findAllTasksService,
  deleteTaskService
} from "../services";

class TaskController {
  async store(req: Request, res: Response) {
    const { description } = req.body;

    const newTask = await createTaskService.execute(description);

    res.status(201).json(newTask);
  }

  async get(req: Request, res: Response) {
    const { id } = req.params;

    const foundTask = await getTaskService.execute(id);

    return res.json(foundTask);
  }

  async index(req: Request, res: Response) {
    const taskList = await findAllTasksService.execute();

    return res.json(taskList);
  }

  async destroy(req: Request, res: Response) {
    const { id } = req.params;

    await deleteTaskService.execute(id);

    return res.status(204).json('');
  }
}

export default new TaskController();
