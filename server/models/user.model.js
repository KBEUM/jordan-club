import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, trim: true, unique: 1, require: true },
  password: { type: String, require: true },
  token: { type: String },
});

const saltRounds = 10;

userSchema.pre("save", function (next) {
  const user = this;
  if (user.isModified("password")) {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

userSchema.methods.checkPassword = async function (plainPassword, cb) {
  console.log(plainPassword);
  console.log(this.password);
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    console.log(isMatch);
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

userSchema.methods.generateToken = function (cb) {
  const user = this;
  let token = jwt.sign(user._id.toHexString(), "secretToken");
  user.token = token;
  user.save(function (err, user) {
    if (err) return cb(err);
    cb(null, user);
  });
};

const User = mongoose.model("user", userSchema);

export default User;
