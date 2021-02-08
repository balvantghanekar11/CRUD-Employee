const express = require("express");

const router = express.Router();

const employeeController = require("../controllers/employee.controller");

//get all emp
router.get("/", employeeController.getEmployeeList);

//get emp By ID
router.get("/:id", employeeController.getEmployeeByID);

//create new emp
router.post("/", employeeController.creatNewEmployee);

//Update emp
router.put("/:id", employeeController.updateEmployee);

//Delete emp
router.delete("/:id", employeeController.deleteEmployee);

module.exports = router;
