import mongoose from 'mongoose'

let mongooseConnectionConfig = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect('mongodb+srv://rLanz1010:abc123@cluster0.azsqvgf.mongodb.net/?retryWrites=true&w=majority', mongooseConnectionConfig)

mongoose.set('strictQuery', true);

mongoose.connection.on('connected', ()=> console.log("Connected to database"))
mongoose.connection.on('disconnected', ()=> console.log("Disconnected from database"))
mongoose.connection.on('error', error=> console.error("Database error", error))

export default mongoose.connection