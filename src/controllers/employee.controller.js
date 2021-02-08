const employee = require("../models/employee.model");
const empModel = require("../models/employee.model");

//all emp list
exports.getEmployeeList = (req, res) => {
  //   console.log("all emp list");
  empModel.getAllEmployee((err, employee) => {
    // console.log("we are");
    if (err) res.send(err);
    console.log("Employee", employee);
    res.send(employee);
  });
};

//get employee BY ID
exports.getEmployeeByID = (req, res) => {
  //   console.log("get Emp By ID");
  empModel.getEmployeeByID(req.params.id, (err, employee) => {
    if (err) res.send(err);
    console.log("Employee By ID", employee);
    res.send(employee);
  });
};

//create new employee
exports.creatNewEmployee = (req, res) => {
  //console.log("Create New Emp", req.body);

  const employeeRequestData = new empModel(req.body);
  //   console.log(employeeRequestData);
  //check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .send(400)
      .send({ success: false, message: "Please fill all the fields" });
  } else {
    // console.log("valid data");

    empModel.createNewEmployee(employeeRequestData, (err, employee) => {
      if (err) res.send(err);
      res.json({
        status: true,
        message: "Employee Created Successfully",
        data: employee.insertId,
      });
    });
  }
};

//update employee
exports.updateEmployee = (req, res) => {
  //console.log("Creapdate Emp", req.body);

  const employeeRequestData = new empModel(req.body);
  console.log("employee update ", employeeRequestData);
  //check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .send(400)
      .send({ status: false, message: "Please fill all the fields" });
  } else {
    // console.log("valid data");

    empModel.updateEmployee(
      req.params.id,
      employeeRequestData,
      (err, employee) => {
        if (err) res.send(err);
        res.json({
          status: true,
          message: "Employee Updated Successfully",
        });
      }
    );
  }
};

//delete employee

exports.deleteEmployee = (req, res) => {
  empModel.deleteEmployee(req.params.id, (err, employee) => {
    if (err) res.send(err);
    res.json({ success: true, message: "Employee deleted Successfully" });
  });
};
