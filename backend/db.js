const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Rishit@123",
    database: "studentdb"
});

connection.connect((err)=>{
    if(err){
        console.log("Connection failed");
    }
    else{
        console.log("Database connected");
    }
});

module.exports = connection;