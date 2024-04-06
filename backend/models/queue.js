const mongoose = require('mongoose');

const QueueSchema = new mongoose.Schema({
    id:{
        type: Number,
        trim: true,
    },
    name: {
        type: String,
        trim: true,
    },
    link: {
        type: String,
        trim: true,
    },
});

const Queue = mongoose.model('Queue', QueueSchema)

module.exports = Queue;