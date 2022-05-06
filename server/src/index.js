import 'colors'
import 'dotenv/config'

import connectDB from './utils/connectdb.js'
import app from './app.js'
/**
 * Connection to MongoDB
 */
connectDB()

/**
 * Exposed port number
 */

const PORT = process.env.PORT || 1337

/**
 * Listen on the exposed port
 */
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`.blue.bold)
})
