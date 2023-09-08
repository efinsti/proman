const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
   
  username: { type: String , unique:true},
  fullname: String,
  email: { type: String , unique:true},
  pwd:  String,
  role:  String,
  modified_by:  String,
  created_at:  Date,
  modified_at:  Date,

});

const signonSchema = new Schema({
  signing_key: String, // String is shorthand for {type: String}
  token: String,
 
});

const pemdaSchema = new Schema ({
  kode: { type: String , unique:true}, // String is shorthand for {type: String}
  nama: String,
})

const kegiatanSchema = new Schema ({
  kode: { type: String , unique:true}, // String is shorthand for {type: String}
  nama: String,
})

const taSchema = new Schema ({
  kode: { type: String , unique:true}, // String is shorthand for {type: String}
  nama: String,
})

const taskSchema = new Schema ({
  id: { type: String , unique:true},
  name: String,
  start: Date,
  end: Date,
  progress: Number,
  dependencies: String,

})


const userModel = mongoose.model('user', userSchema);
const signonModel = mongoose.model('signon', signonSchema);
const pemdaModel = mongoose.model('pemda', pemdaSchema)

 


module.exports = {userModel, signonModel, pemdaModel}

