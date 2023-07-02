
require("dotenv").config()


const check = require("./passcheck")
const gen = require("./genhash").gen
const darkMatter = process.env.SECRET
const db = require('../db/db')

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

    check.cek(req.body.secret, darkMatter).then(data => {
        console.log(data)
        if (data) {
            var dbObj = req.body
            delete dbObj["pwd2"]
            delete dbObj["secret"]


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