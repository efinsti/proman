


const fastify = require('fastify');
const path = require("path");
const connect = require("./db/db")


// const bikin = require('./db/init.js');

const daftar = require('./auth/daftar')
 const login = require('./auth/login')
// const gate = require('./api/gate')


connect().catch(err => console.log(err));


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
// app.post('/api/gate', gate)


app.get('/', (abrakadabracilukbaaaaaaa, res) => {
    res.view("/dist/index.pug", { Be: "Being" });
})


app.listen({ port: 3000 }, (err, address) => {

    if (err) {
        app.log.error(err)
        process.exit(1)
    }
    app.log.info(`server listening on ${address}`)
})


 
//const {gen} = require("./auth/genhash")
// var word = " "


// gen(word).then(hash=>{
//     console.log(hash)})


