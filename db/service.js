const db = require('./db')

class success {
  constructor(content) {
    this.message = content
    this.success = 1
    this.status = 200
  }
}

class fail {
  constructor(err, errCode) {
    this.message = err
    this.success = 0
    this.status = errCode
  }
}

class service {
  constructor(tableName, id, json) {
    this.tableName = tableName
    this.id = id
    this.json = json
  }

  async getAll() {
    const a = await db(this.tableName)
    return a
  }

  async getById() {
    const b = await db(this.tableName).where('id', this.id)
    return b
  }

  async create() {
    const c = await db(this.tableName).insert(this.json)
    return c
  }
  async update() {
    const d = await db(this.tableName).where('id', this.id).update(this.json)
    return d
  }
  async delete() {
    const e = await db(this.tableName).where('id', this.id).del()
    return e
  }

}

var controller = (req, res) => {
  var method = req.body.method
  var tableName = req.body.tableName
  var id = req.body.id
  var json = req.body.json

  if (method == 'getAll') {
    var rtn = new service(tableName)
    rtn
      .getAll()

      .then(data => {
        console.log(data)
        if (data.length > 0) {
          res.send(new success(data))
        } else {
          res.send(new fail('table empty', 204))
        }
      })
  }

  else if (method == 'getById') {
    var rtn = new service(tableName, id)
    rtn.getById().then(data => {
      console.log(data)
      if (data.length > 0) {
        res.send(new success(data))
      } else {
        res.send(new fail('table empty', 204))
      }
    })
  }

  else if (method == 'create') {
    var rtn = new service(tableName, null, json)
    rtn.create().then(data => {
      console.log(data)
      if (data.length > 0) {
        res.send(new success(data))
      } else {
        res.send(new fail('insert fail', 503))
      }
    })
  }

  else if (method == 'update') {
    var rtn = new service(tableName, id, json)
    rtn.update().then(data => {
      console.log(data)
      if (data) {
        res.send(new success(data))
      } else {
        res.send(new fail('update failed', 503))
      }
    })
  }

  else if (method == 'delete') {
    var rtn = new service(tableName, id)
    rtn.delete().then(data => {
      console.log(data)
      if (data) {
        res.send(new success(data))
      } else {
        res.send(new fail('delete fail', 403))
      }
    })
  }

}

module.exports = controller
