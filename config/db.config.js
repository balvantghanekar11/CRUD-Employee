const mySQL = require("mysql");

//connection
const dbcon = mySQL.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crudemployee",
});

dbcon.connect((err) => {
  if (err) console.log(err);
  console.log("DB Connected  :)");
});

module.exports = dbcon;
