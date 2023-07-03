const check = require("./passcheck").cek
const db = require('../db/db')
const nJwt = require("njwt")

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

class ObjectID {
    constructor() {
        var tss = Math.floor(Date.now() / 1000)
        var genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
        this.id = tss.toString(16) + genRanHex(16)
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
                console.log(d)

                check(dbObj.pwd, d.pwd).then(hsl => {
                    if (hsl) {



                        var signingKey = new ObjectID().id
                        console.log(signingKey)
                        var claims = {

                            username: d.username,    // The UID of the user in your system
                            fullname: d.fullname,
                            role: d.role
                        }

                        var jwt = nJwt.create(claims, signingKey);
                        jwt.setExpiration(new Date().getTime() + (60*60*1000)); 
                        console.log(jwt)
                        var token = jwt.compact();
                        console.log(token);

                        var dbObj = {
                            signing_key : signingKey, token : token
                        }
                        db('signon').insert(dbObj).then(hsl=>{

                            if(hsl){
                                  Object.assign(claims, {token:token})
                            reply.send(new success(claims))
                            } else {
                                reply.send(new fail("internal error 500"))
                            }
                          
                        })

                        



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