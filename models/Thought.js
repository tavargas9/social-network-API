const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const formatDate = require('../helpers/formatDate');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlenght: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAt => formatDate(createdAt),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  }, 
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false,
  }
)

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
