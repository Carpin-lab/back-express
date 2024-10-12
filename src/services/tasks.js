export class TasksServices {
  async getTasks() {
    return [
      {
        id: 3,
        title: "Team meeting",
        description: "Prepare the presentation for the upcoming team meeting.",
        dueDate: "2024-10-20",
        status: "pending",
      },
      {
        id: 4,
        title: "Doctor's appointment",
        description: "Annual health check-up with Dr. Smith.",
        dueDate: "2024-10-22",
        status: "completed",
      },
    ];
  }

  async getTasksByID({ id }) {
    return {
      id,
      title: "Car maintenance",
      description: "Take the car to the mechanic for a routine check-up.",
      dueDate: "2024-10-25",
      status: "pending",
    };
  }

  async addTasks({ newTask }) {
    return newTask;
  }

  async updateTasks({ id, updatedTask }) {
    return {
      id,
      ...updatedTask,
    };
  }
}
