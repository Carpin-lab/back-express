import express from "express";
import EmpleadoRoutes from "./employee.routes.js";
import TaskRoutes from "./task.routes.js";
import Authentication from "./auth.js";
import { verifyToken } from "../utils/jwt.js";

const routes = express.Router();

routes.use("/employees", verifyToken, EmpleadoRoutes);
routes.use("/task", verifyToken, TaskRoutes);
routes.use("/auth", Authentication);

routes.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});
export default routes;
