import mongoose from 'mongoose';

const entrySchema = new mongoose.Schema({
    artist: String,
    album: String,
    songs: Array,
    writingCredits: Boolean,
    roles: Array,
    year: Number,
    recordLabel: String,
    display: Boolean,
    img: String,
    link: String
})

export default mongoose.model('Entry', entrySchema)

