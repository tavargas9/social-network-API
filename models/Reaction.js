const { Schema, Types } = require('mongoose');
const formatDate = require('../helpers/formatDate');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
            minlenght: 1,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: () => formatDate(Date.now()),
        },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false,
    },
)

module.exports = reactionSchema;