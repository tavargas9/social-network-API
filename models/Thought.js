const { Schema, Types, model } = require('mongoose');

const thoughtSchema = new Schema({

})

const Thought = model('thought', thoughtSchema);

module.exports = thoughtSchema;
