const dbcon = require("../../config/db.config");

var employee = function (employee) {
  this.firstName = employee.firstName;
  this.lastName = employee.lastName;
  this.email = employee.email;
  this.phone = employee.phone;
  //   this.designation = employee.designation;
  this.organization = employee.organization;
  this.salary = employee.salary;
  this.createdOn = new Date();
  this.updatedOn = new Date();
};

//get all employees
employee.getAllEmployee = (result) => {
  dbcon.query("SELECT * FROM employee", (err, res) => {
    if (err) {
      console.log("Error for fetching data", err);
      result(null, err);
    } else {
      console.log("Employee fetched Successfully");
      result(null, res);
    }
  });
};

//get Emp By ID
employee.getEmployeeByID = (id, result) => {
  dbcon.query("SELECT * FROM employee WHERE id=?", id, (err, res) => {
    if (err) {
      console.log("Error while fetching employee By ID");
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

//create New Employee
employee.createNewEmployee = (employeeRequestData, result) => {
  dbcon.query("INSERT INTO employee SET ?", employeeRequestData, (err, res) => {
    if (err) {
      console.log("Error while inserting data");
      result(null, err);
    } else {
      console.log("Employee created Successfully");
      result(null, res);
    }
  });
};

//update employee
employee.updateEmployee = (id, employeeRequestData, result) => {
  dbcon.query(
    "Update employee SET firstName=?, lastName=?, email=?,phone=?,organization=?,salary=?,updatedOn=? WHERE id=?",
    [
      employeeRequestData.firstName,
      employeeRequestData.lastName,
      employeeRequestData.email,
      employeeRequestData.phone,
      employeeRequestData.organization,
      employeeRequestData.salary,

      id,
    ],
    (err, res) => {
      if (err) {
        console.log("Error while updating record");
        result(null, err);
      } else {
        console.log("employee updated");
        result(null, res);
      }
    }
  );
};

//delete Employee
employee.deleteEmployee = (id, result) => {
  dbcon.query("DELETE FROM employee WHERE ID=?", id, (err, res) => {
    if (err) {
      console.log("Error while deleting data");
      result(null, err);
    } else {
      console.log("Employee deleted Successfully");
      result(null, res);
    }
  });
};

module.exports = employee;
