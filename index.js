const express = require("express");
const bodyparser = require("body-parser");

// create express app

const app = express();

//setup the server port
const port = process.env.port || 5000;

//parse request data content type applications x-www-forms-url encoded
app.use(bodyparser.urlencoded({ extended: false }));
//parse request data content type application/json
app.use(bodyparser.json());

//root route server
app.get("/", (req, res) => {
  res.send("Hello World");
});

//import emp routes
const empRoutes = require("./src/routes/employee.route");

//create employee routes
app.use("/api/v1/employee", empRoutes);

app.listen(port, (req, res) => {
  console.log(`Server is live @PORT : ${port}`);
});
