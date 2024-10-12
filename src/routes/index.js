import express from "express";
import EmpleadoRoutes from "./employee.routes.js";
import TaskRoutes from "./task.routes.js";
const routes = express.Router();

routes.use("/employees", EmpleadoRoutes);
routes.use("/task", TaskRoutes);
routes.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});
export default routes;
