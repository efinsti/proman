const check = require("../auth/passcheck").cek
const { userModel, signonModel } = require('../db/schema')
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

function delete_token(token) {

    signonModel.findOneAndDelete({ 'token': token })
    .then(hsl=>{console.log(hsl)})
}

function clear_token(user, token) {

    console.log(user, token)
    signonModel.find().then(data => {
        console.log(data)
        data.forEach(tkn => {

            nJwt.verify(tkn.token, tkn.signing_key, function (err, jwt) {
                if (err) {
                    console.log(err); // Token has expired, has been tampered with, etc
                    delete_token(tkn.token)
                } else {
                    console.log(jwt); // Will contain the header and body
                    if (tkn.token !== token && jwt.body.username == user) {
                        delete_token(tkn.token)
                    }
                }
            });

        });
    })
}


module.exports = (req, reply) => {

    console.log("in the body", req.body)
    var dbObj = req.body

    userModel.find({'username':dbObj.username})
 
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
                            role: d.role,
                            mf: dbObj.middlefinger2u
                        }

                        var jwt = nJwt.create(claims, signingKey);
                        jwt.setExpiration(new Date().getTime() + (720 * 60 * 1000));
                        console.log(jwt)
                        var token = jwt.compact();
                        console.log(token);

                        var toDB = {
                            signing_key: signingKey, token: token
                        }

                        signonModel.create(toDB)

                       .then(hsl => {

                            if (hsl) {
                                Object.assign(claims, { token: token })
                                Object.assign(claims, { id: d._id })
                                clear_token(claims.username, token)
                                reply.send(new success(claims))

                            } else {
                                reply.send(new fail("internal error 500"))
                            }
                        })

                    } else {
                        reply.send(new fail("password salah atau username tidak ada"))
                    }
                })

            } else {
                reply.send(new fail("password salah atau username tidak ada"))
            }
        })

}