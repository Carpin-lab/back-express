import express from "express";
import { tasksController } from "../controller/index.js";

const controller = new tasksController();
const routes = express.Router();

routes.get("/:id", async (req, res) => {
  return await controller.getTaskByID(req, res); //no le importa que va a pasar
});

routes.get("/", async (req, res) => {
  return await controller.getTasks(req, res);
});

routes.post("/", async (req, res) => {
  return await controller.addTasks(req, res);
});

routes.put("/:id", async (req, res) => {
  return await controller.updateTask(req, res);
});

export default routes;
