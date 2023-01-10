import data from './credits.json' assert { type: 'json' }

let entryData = data.map(item => {
    const entry = {}
    entry.artist = item.artist
    entry.album = item.album
    entry.writingCredits = item.writingCredits
    entry.roles = item.roles
    entry.year = item.year
    entry.recordLabel = item.recordLabel
    entry.display = item.display
    entry.img = item.img
    entry.link = item.link
    return entry
})

console.log(entryData)