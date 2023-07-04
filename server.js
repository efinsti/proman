var r = require('./ref/ref')

const fastify = require('fastify');
const path = require("path");
const mysql = require('mysql');
const bikin = require('./db/init.js');

const daftar = require('./auth/daftar')
const login = require('./auth/login')
const gate = require('./api/gate')


var connect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: 'venice'
});

connect.query('SELECT 1212 + 2014 AS solution', function (error, results, fields) {
    if (error) {
        bikin(() => console.log('DB created'))
    } else {
        console.log('DB exists, the solution is: ', results[0].solution);
    }
    connect.destroy();
});

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


app.get('/', (abrakadabracilukbaaaaaaa, res) => {
    res.view("/dist/index.pug", { Hamung: "Sang Hyang Agung Katresnan" });
})


app.listen({ port: 3000 }, (err, address) => {

    if (err) {
        app.log.error(err)
        process.exit(1)
    }
    app.log.info(`server listening on ${address}`)
})


 
