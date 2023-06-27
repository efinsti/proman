var mysql = require('mysql');
const db = require('./db.js')

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

            db.schema.createTable('users', function (table) {

                table.increments("id").primary();
                table.string("username").notNullable();
                table.string("fullname").notNullable();
                table.string("email").notNullable();
                table.string("pwd").notNullable();
                table.string("role").notNullable();
                table.timestamps(true, true);

            }).then(() => {

                cabac();
            })
        }
    });
});

module.exports = bikin;
