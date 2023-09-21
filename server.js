const fastify = require('fastify');
require("dotenv").config()

const path = require("path");
const connect = require("./db/db")

const daftar = require('./api/daftar')
const login = require('./api/login')
const gate = require('./api/gate')
const auth1 = require('./auth/authone')

var nyambung = false


const app = fastify({
    logger: {
        level: 'info'
    }
})

app.register(require('@fastify/static'), {
    root: path.join(__dirname, 'dist'),
    prefix: '/'
})


app.post('/api/daftar', daftar)
app.post('/api/login', login)
app.post('/api/gate', gate)
app.post('/api/auth1', auth1)


app.get('/', (abrakadabracilukbaaaaaaa, res) => {


    // res.send({hello:"world"})

    //    res.view("/dist/wait.pug", { so: "Sally can wait"});

    if (nyambung) {
        res.sendFile("index.html");
    } else {
        res.sendFile("wait.html");
    }

});

 

connect()
    .then(smartTheo => {
        nyambung = smartTheo;
        app.listen({ port: process.env.PORT }, (err, address) => {

            if (err) {
                app.log.error(err)
                process.exit(1)
            }
            app.log.info(`server listening on ${address}`)
        })


    })
    .catch(err => console.log(err));









const { gen } = require("./auth/genhash")
var word = "password"


gen(word).then(hash => {
    console.log(hash)
})


