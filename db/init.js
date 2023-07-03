var mysql = require('mysql');
 

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root"
});

var bikin = (cabac) => con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE venice", function (err, result) {
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
