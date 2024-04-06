const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
    id:{
        type: Number,
        trim: true,
    },
    name: {
        type: String,
        trim: true,
    },
    artist: {
        type: String,
        trim: true,
    },
    link: {
        type: String,
        trim: true,
    },
});

const Song = mongoose.model('Song', SongSchema)

module.exports = Song;