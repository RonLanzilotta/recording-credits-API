import mongoose from 'mongoose'
import data from './credits.json' assert { type: 'json' }
import Entry from '../models/Entry.js'


let entryData = data.map(item => {
    const entry = {}
    entry.artist = item.artist
    entry.album = item.album
    entry.songs = item.songs
    entry.writingCredits = item.writingCredits
    entry.roles = item.roles
    entry.year = item.year
    entry.recordLabel = item.recordLabel
    entry.display = item.display
    entry.img = item.img
    entry.link = item.link
    return entry
})

Entry
    .deleteMany({})
    .then(() => Entry.create(entryData))
    .then(() => console.log("Done! Data seeded"))
    .then(() => mongoose.disconnect())
    .catch(error => console.log("Error", error))