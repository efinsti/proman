var r = require('./ref/ref')

const fastify = require('fastify');
const path = require("path");
const mysql = require('mysql');
const bikin = require('./db/init.js');
const genHash = require('./auth/genhash.js')
const daftar = require('./auth/daftar')
const login = require('./auth/login')


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

app.post('/api/hashit', (req, res) => {
    console.log(req)
    var pwd = req.body.pwd
   
    try {
         genHash.gen(pwd).then(data => {
            console.log("theForce", data)
            res.send(data);
            r.hash = null;
        })

    }
    catch (err) {
        throw (err)
    }
    finally {
        console.log('finally')
    }
})

app.get('/', (request, res) => {
    res.view("/dist/index.pug", { Hamung: "Sang Hyang Agung Katresnan" });
})

const opts = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    hello: { type: 'string' }
                }
            }
        }
    }
}



app.post('/skala/:params', opts, function (request, reply) {
    console.log(request.body)
    console.log(request.query)
    console.log(request.params)
    console.log(request.headers)

    console.log(request.ip)

    console.log(request.hostname)
    console.log(request.protocol)
    console.log(request.url)

    request.log.info('some info')
    reply.send({ hello: 'world' })
})

app.listen({ port: 3000 }, (err, address) => {

    if (err) {
        app.log.error(err)
        process.exit(1)
    }
    app.log.info(`server listening on ${address}`)
})


console.log('"auto"')
