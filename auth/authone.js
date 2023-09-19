
require("dotenv").config()


const check = require("./passcheck")
 
const darkMatter = process.env.SECRET2
 
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
      
        
       
            reply
   
            .send(new success("sukses", 200))

        } else {
            reply.send(new fail("not authorized!", 403)) // access denied
        }
    })

}