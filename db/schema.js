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

const userModel = mongoose.model('user', userSchema);
const signonModel = mongoose.model('signon', signonSchema);
 


module.exports = {userModel, signonModel}

