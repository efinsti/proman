const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({

  username: { type: String, unique: true },
  fullname: String,
  email: { type: String, unique: true },
  pwd: String,
  role: String,
  modified_by: String,
  created_at: Date,
  modified_at: Date,

});

const signonSchema = new Schema({
  signing_key: String, // String is shorthand for {type: String}
  token: String,

});

const pemdaSchema = new Schema({
  kode: { type: String, unique: true }, // String is shorthand for {type: String}
  nama: String,
  created_by: String

})

const kegiatanSchema = new Schema({
  kode: { type: String, unique: true }, // String is shorthand for {type: String}
  nama: String,
  pemda_ref : String,
  created_by: String

})

const taSchema = new Schema({
  kode: { type: String, unique: true }, // String is shorthand for {type: String}
  nama: String,
  created_by: String

})

const taskSchema = new Schema({
  // id
  idTask: { type: String, unique: true },
  level : Number,
  idLevel : { type: String, unique: true },
 // name: String,
  start: Date,
  end: Date,
  progress: Number,
  dependencies: String,
  created_by: String


})

const logSchema = new Schema({
  username: String,
  desc: Object,

})


const userModel = mongoose.model('user', userSchema);
const signonModel = mongoose.model('signon', signonSchema);
const pemdaModel = mongoose.model('pemda', pemdaSchema);
const kegModel = mongoose.model('kegiatan', kegiatanSchema);
const taModel = mongoose.model('ta', taSchema);
const taskModel = mongoose.model('task', taskSchema);
const logModel = mongoose.model('log', logSchema);






module.exports = { userModel, signonModel, pemdaModel, kegModel, taModel, taskModel, logModel }

