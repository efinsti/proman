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
  pemda_ref: String,
  created_by: String

})

const taSchema = new Schema({
  kode: { type: String, unique: true }, // String is shorthand for {type: String}
  nama: String,
  contact: String,
  created_by: String

})

const taskSchema = new Schema({
  // id
  
  level: Number,
  idTask: { type: String, unique: true }, //kodePemda/keg if TA code plus ObjectID
  // idLevel: String,
   
  name: String,
   
  start: Date,
  end: Date,
  progress: Number,
  dependencies: String,
  created_by: String,
   


})

const liburSchema = new Schema({
  date: String,
  day: String,
  month: String,
  year: String,
  holiday: String,
  datetime_ms: Number,
})

const logSchema = new Schema({
  username: String,
  method: String,
  desc: Object,

  timestamp: { type: Date, default: Date.now},
})


const userModel = mongoose.model('user', userSchema);
const signonModel = mongoose.model('signon', signonSchema);
const pemdaModel = mongoose.model('pemda', pemdaSchema);
const kegModel = mongoose.model('kegiatan', kegiatanSchema);
const taModel = mongoose.model('ta', taSchema);
const taskModel = mongoose.model('task', taskSchema);
const liburModel = mongoose.model('libur', liburSchema);
const logModel = mongoose.model('log', logSchema);


module.exports = { userModel, signonModel, pemdaModel, kegModel, taModel, taskModel, liburModel, logModel }

