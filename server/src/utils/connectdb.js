import mongoose from 'mongoose'

const URL = process.env.MONGO_DB_CONNECTION_STRING

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log(`Connected to DB: ${conn.connection.host}`.yellow.bold)
  } catch (err) {
    console.log(`DB Connection Failed: ${err.message}`.red)
    process.exit(1)
  }
}

export default connectDB
