var mysql = require('mysql');
require("dotenv").config()

var db = process.env.DB_NAME
 
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root"
});

var bikin = (cabac) => con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE "+ db, function (err, result) {
        if (err) {
            throw err;

        } else {
            console.log("Database created", result);

            con.destroy()
            cabac()

   
        }
    });
});

module.exports = bikin;
