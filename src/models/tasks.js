import { z } from "zod";
import { BuilderError } from "../utils/errorBuilder.js";

const taskAddSchema = z.object({
  title: z.string(),
  description: z.string(),
  dueDate: z.string(),
  status: z.string(),
});

export function validateTask({ tasks }) {
  const valid = taskAddSchema.safeParse(tasks);

  if (!valid.success)
    return BuilderError({
      datail: valid.error.issues,
    });

  return {
    success: true,
    data: valid.data,
  };
}
