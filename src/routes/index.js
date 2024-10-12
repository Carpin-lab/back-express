import express from "express";
import EmpleadoRoutes from "./employee.routes.js";

const routes = express.Router();

routes.use("/employees", EmpleadoRoutes);

export default routes;
