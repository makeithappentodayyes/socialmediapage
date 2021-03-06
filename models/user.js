const mongoose = require("mongoose");
const crypto = require('crypto');
const { v1: uuidv1 } = require('uuid');

const userSchema = new mongoose.Schema({
    name: {
       type: String, 
       trim: true,
       required: true
    },
    email: {
       type: String, 
       trim: true,
       required: true
    },
    hashed_password: {
       type: String, 
       trim: true,
       required: true
    },
    salt: String,
    created: {
        type: Date,
        default: Date.now()
    },

    updated: Date

})


/**
 * Virtual fields are additional field for a given model.
 * Theri values can be set manually or automatically with defindd functionality.
 * keep in mind: Virtual properties don't get persisted in the database
 * They only exist logically and are not written to the documents colleciton.
 */


 //virtual field
 userSchema.virtual('password')
 .set(function(password) {
     // create temporary variable called _password
     this._password = password
     // generate a timestamp
     this.salt = uuidv1()
     // encryptPassword()
     this.hashed_password = this.encryptPassword(password)
 })

 .get(function() {
     return this._password;
 })

// methods

userSchema.methods = {
  authenticate: function(plainText) {
    return this.encryptPassword(plainText) === this.hashed_password
  }, 
  
  encryptPassword: function(password) {
      if(!password) return "";
      try {
        return  crypto.createHmac('sha1', this.salt)
        .update(password)
        .digest('hex');
      } catch(err) {
        return ""
      }
  }
}

module.exports = mongoose.model("User", userSchema);