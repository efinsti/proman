const fastify = require('fastify');
const path = require("path");
const mysql = require('mysql');
const bikin = require('./db/init.js');

var connect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: 'venice'
});

connect.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) {
        bikin(() => console.log('DB created with "users" table'))
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
    root: path.join(__dirname,'client'),
    prefix:'/client/',
})

app.get('/test', (request, reply) => {
    reply.sendFile('./index.html')
})

 app.listen({ port: 3000 }, (err, address) => {
    if (err) {
        app.log.error(err)
        process.exit(1)
    }
    app.log.info(`server listening on ${address}`)
})

 
