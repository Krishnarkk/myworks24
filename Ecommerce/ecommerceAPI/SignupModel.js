const mongoose = require("mongoose");

const signUpModel = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
});

const SignUp = mongoose.model("signUp", signUpModel);
module.exports = SignUp;
