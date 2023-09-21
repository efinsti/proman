const fastify = require('fastify');
require("dotenv").config()

const path = require("path");
const connect = require("./db/db")

const daftar = require('./auth/daftar')
const login = require('./auth/login')
const gate = require('./api/gate')
const auth1 = require('./auth/authone')

var nyambung = false

connect()
.then(smartTheo=>{
    nyambung = smartTheo
})
.catch(err => console.log(err));




const app = fastify({
    logger: {
        level: 'info'
    }
})

app.register(require('@fastify/static'), {
    root: path.join(__dirname, 'dist'),
    prefix: '/'
})


app.register(require("@fastify/view"), {
    engine: {
        pug: require("pug"),
    },
});

app.post('/api/daftar', daftar)
app.post('/api/login', login)
app.post('/api/gate', gate)
app.post('/api/auth1', auth1)


app.get('/', (abrakadabracilukbaaaaaaa, res) => {

//    res.view("/dist/wait.pug", { so: "Sally can wait"});
 
    if(nyambung){
       res.view("/dist/index.pug", { so: "Sally can't wait"}); 
    }  else {
        res.view("/dist/wait.pug", { so: "Sally can wait"}); 
    }
        
})


app.listen({ port: process.env.PORT }, (err, address) => {

    if (err) {
        app.log.error(err)
        process.exit(1)
    }
    app.log.info(`server listening on ${address}`)
})



const {gen} = require("./auth/genhash")
var word = "password"


gen(word).then(hash=>{
    console.log(hash)})


