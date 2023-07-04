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