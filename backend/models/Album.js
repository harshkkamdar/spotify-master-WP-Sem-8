const mongoose = require('mongoose');

const AlbumSchema = new mongoose.Schema({
    id:{
        type: Number,
        trim: true,
    },
    name: {
        type: String,
        trim: true,
    },
    songs: {
        type: Array,
        trim: true,
    },
});

const Album = mongoose.model('Album', AlbumSchema)

module.exports = Album;