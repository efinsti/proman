const nJwt = require("njwt")
const db = require("../db/db")
const service = require("../db/service")

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
    db('signon')
        .where('token', token)
        .del().then(hsl => {
            console.log(hsl)
            return
        })
}


module.exports = (req, res) => {


    console.log(req.headers.authorization.slice(5))

    var token = req.headers.authorization.slice(5)
    db.select().from('signon')

        .where('token', token)
        .then(data => {
           
            nJwt.verify(token, data[0].signing_key, function (err, jwt) {
               
                if (err) {
                    console.log(err); // Token has expired, has been tampered with, etc
                    delete_token(tkn.token)
                    res.send(new fail("Unauthorized!", 403))
                } else {
                    console.log(jwt); 
                    console.log(req.body)

                  service(req, res)
                    








                }
            });
        })





}