const check = require("./passcheck").cek
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
    var dbObj = req.body

    db.select('*')
        .from('users')
        .where('username', dbObj.username)
        .then(data => {
            if (data.length > 0) {
                var d = data[0]

                check(dbObj.pwd, d.pwd).then(hsl => {
                    if (hsl) {

                        reply.send(new success("berhasil login"))
                        

                    } else {
                        reply.send(new fail("password salah atau username tidak ada"))
                    }
                })

            }
        })

    // check.cek(req.body.pwd, darkMatter).then(data => {
    //     console.log(data)
    //     if (data) {




    //         gen(dbObj.pwd).then(hash => {
    //             dbObj.pwd = hash
    //             Object.assign(dbObj, { role: "admin", modified_by: "system(modul daftar)" })
    //             console.log(dbObj)
    //             db.select('*')
    //                 .from('users')
    //                 .where('email', dbObj.email)
    //                 .then(hsl => {
    //                     if (hsl.length == 0) {
    //                         db('users').insert(dbObj).then(result => {
    //                             console.log(result)
    //                             reply
    //                                 .code(200)
    //                                 .header('Content-Type', 'application/json; charset=utf-8')
    //                                 .send(new success("insert " + result.length + " row"))

    //                         })
    //                     } else {
    //                         reply.send(new fail("email sudah terdaftar", 403))
    //                     }
    //                 })




    //         })

    //     }
    // })

}