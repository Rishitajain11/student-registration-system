const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());


// Add Student API
app.post("/students", (req, res) => {

    const {
        name,
        enrollment_number,
        email,
        mobile_number,
        branch
    } = req.body;

    const sql =
    "INSERT INTO students(name,enrollment_number,email,mobile_number,branch) VALUES(?,?,?,?,?)";

    db.query(
        sql,
        [name, enrollment_number, email, mobile_number, branch],
        (err, result) => {

            if (err) {
                res.send("Error");
            }
            else {
                res.send("Student added successfully");
            }

        });

});


// Get all students API

app.get("/students", (req, res) => {

    const sql = "SELECT * FROM students";

    db.query(sql, (err, result) => {

        if (err) {
            res.send("Error");
        }
        else {
            res.json(result);
        }

    });

});


app.listen(5000, () => {
    console.log("Server running on port 5000");
});