
require("dotenv").config()


const check = require("./passcheck")
const gen = require("./genhash").gen
const darkMatter = process.env.SECRET
const db = require('../db/db')

class ObjectID {
    constructor() {
        var tss = Math.floor(Date.now() / 1000)
        var genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
        this.id = tss.toString(16) + genRanHex(16)
    }
  }

class success {
    constructor(content) {
        this.message = content;
        this.success = 1;
        this.status = 200;
    }
}

class fail {
    constructor(err, errCode) {
        this.message = err;
        this.success = 0;
        this.status = errCode;
    }
}

module.exports = (req, reply) => {

    //  console.log("in the body", req.body)

    db.schema.hasTable("users").then(anaOra => {
        console.log("anaOra", anaOra)

        if (anaOra) {

            lanjut()
        } else {

            db.schema.createTable('users', function (table) {

                table.string("id").primary();
                table.string("username").notNullable().unique();
                table.string("fullname").notNullable();
                table.string("email").notNullable().unique();
                table.string("pwd").notNullable();
                table.string("role").notNullable();
                table.string("modified_by").notNullable();
                table.timestamps(true, true);

            }).then(() => {

                db.schema.createTable('signon', function (table) {

                    table.string("signing_key", 36).notNullable().primary();
                    table.text("token").notNullable().unique();

                }).then(() => {
                    lanjut();
                })
            })
        }


    })

    const lanjut = () => check.cek(req.body.secret, darkMatter).then(data => {
        console.log(data)
        if (data) {
            var dbObj = req.body
            delete dbObj["pwd2"]
            delete dbObj["secret"]
            var id = new ObjectID().id
            Object.assign(dbObj, {id})

            gen(dbObj.pwd).then(hash => {
                dbObj.pwd = hash
                Object.assign(dbObj, { role: "admin", modified_by: "system(modul daftar)" })
                console.log(dbObj)
                db.select('*')
                    .from('users')
                    .where('email', dbObj.email).orWhere('username', dbObj.username)
                    .then(hsl => {
                        if (hsl.length == 0) {
                            db('users').insert(dbObj).then(result => {
                                console.log(result)
                                reply
                                    .code(200)
                                    .header('Content-Type', 'application/json; charset=utf-8')
                                    .send(new success("insert " + result.length + " row"))

                            })
                        } else {
                            reply.send(new fail("username atau email sudah terdaftar", 403))
                        }
                    })

            })

        } else {
            reply.send(new fail("username atau email sudah terdaftar", 403)) // access denied
        }
    })

}