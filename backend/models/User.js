const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 30
    },
    name: {
        type: String
    },
    description: {
        type: String
    }
},
{ timestamps: true });

//timestamps creates createdAt and updatedAt fields with type of 

UserSchema.pre('save', function(next) {  //arrow function would change the scope of this
    var user = this;    //subject of middleware
    if (!user.isModified('password')) { next(); }

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
          if (err) { next(err) };
          user.password = hash;
            next();
        });
      });

});

const User = mongoose.model('User', UserSchema);

module.exports = User;
