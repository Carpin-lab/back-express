export class EmployeesServices {
  async getEmployees() {
    return [
      {
        id: 1,
        name: "John Doe",
        email: "breinerCarpintero@gmai.com",
      },
      {
        id: 2,
        name: "Jane Doe",
        email: "Hola@gmail.com",
      },
    ];
  }

  async getEmployeesByID({ id }) {
    return {
      id,
      name: "John Doe",
      email: "breinerCarpintero@gmai.com",
    };
  }

  async addEmployees({ newEmployee }) {
    return newEmployee;
  }
}
