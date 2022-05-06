import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
/**
 * Import middlewares
 */
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'

if (process.env.NODE_ENV !== 'production') {
  // Load environment variables from .env file in non prod environments
  dotenv.config()
}

const app = express()

//Add the client URL to the CORS policy
const whitelist = process.env.WHITELISTED_DOMAINS
  ? process.env.WHITELISTED_DOMAINS.split(',')
  : []

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },

  credentials: true,
}

app.use(bodyParser.json())
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(cors(corsOptions))
app.use(morgan('common'))
app.use(helmet({ contentSecurityPolicy: false }))

app.get('/', function (req, res) {
  res.send({ status: 'success' })
})

export default app
