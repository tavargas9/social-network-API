const { Schema, Types, model } = require('mongoose');

// Schema to create a user model
const userSchema = new Schema(

);

const User = model('user', userSchema);

module.exports = User;
