const nJwt = require("njwt")
const db = require("../db/db")
const service = require("../db/service")
const _ = require("lodash")

 
class fail {
    constructor(err, errCode) {
        this.message = err;
        this.success = 0;
        this.status = errCode;
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
    console.log("headers ", req.headers, "mf", req.headers.middlefinger2u)

    const mf = req.headers.middlefinger2u

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

                    console.log("allbody", req.body)
                    console.log(jwt)

                    var tellme = () => console.log("jwt vs headers ---->", jwt.body.mf, mf)
                    if (jwt.body.mf == mf) {

                        tellme()

                        service(req, res)
                    } else {
                        tellme()

                        res.send(new fail("Unauthorized!!!", 403))
                    }


                }
            });
        })





}