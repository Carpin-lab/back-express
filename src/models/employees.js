import { z } from "zod";
import { BuilderError } from "../utils/errorBuilder.js";

const employeeAddSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});

export function validateEmployee({ employees }) {
  const valid = employeeAddSchema.safeParse(employees);

  if (!valid.success)
    return BuilderError({
      datail: valid.error.issues,
    });

  return {
    success: true,
    data: valid.data,
  };
}
