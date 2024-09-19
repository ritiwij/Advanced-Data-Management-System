import mysql from "mysql2";

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Singh@123", // Replace with your actual password
  database: "employeems",
});

con.connect((err) => {
  if (err) {
    console.error("Connection error:", err.code);
    console.error("Error message:", err.message);
    console.error("Error stack trace:", err.stack);
    return;
  }
  console.log("Connected to MySQL database");
});

export default con;
