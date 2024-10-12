import { EmployeesServices } from "../services/index.js";
import { validateEmployee } from "../models/employees.js";
import { BuilderError } from "../utils/errorBuilder.js";

const services = new EmployeesServices();
export class employeesController {
  async getEmployees(req, res) {
    const employees = await services.getEmployees();
    if (employees.length === 0) {
      return res.status(204).json({ message: "No employees found" });
    }

    return res.json(employees);
  }

  async getEmployeeByID(req, res) {
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

    const employees = await services.getEmployeesByID({ id });

    if (!employees)
      return res.status(204).json({ message: "No employees found" });

    return res.json(employees);
  }

  async addEmployees(req, res) {
    const newEmployee = req.body;

    const valid = validateEmployee({ employees: newEmployee });
    if (!valid.success) return res.status(400).json(valid);

    const result = await services.addEmployees({ newEmployee: valid });
    return res.status(201).json(result);
  }
}
