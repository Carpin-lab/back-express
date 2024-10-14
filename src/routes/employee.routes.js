import express from "express";
import { employeesController } from "../controller/index.js";

const controller = new employeesController();
const routes = express.Router();

routes.get("/:id", async (req, res) => {
  return await controller.getEmployeeByID(req, res);
});

routes.get("/", async (req, res) => {
  return await controller.getEmployees(req, res);
});

routes.post("/", async (req, res) => {
  return await controller.addEmployees(req, res);
});

export default routes;
