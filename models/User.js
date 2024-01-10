const { Schema, Types, model } = require('mongoose');

// Schema to create a course model
const userSchema = new Schema(

);

const User = model('user', userSchema);

module.exports = User;
