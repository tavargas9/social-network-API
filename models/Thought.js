const { Schema, Types, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema({
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlenght: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: () => {}
    }
})

const Thought = model('thought', thoughtSchema);

module.exports = thoughtSchema;
