import mongoose from 'mongoose'
import passportLocalMongoose from 'passport-local-mongoose'

const Schema = mongoose.Schema

const Session = new Schema({
  refreshToken: {
    type: String,
    default: '',
  },
})

const User = new Schema({
  firstName: {
    type: String,
    default: '',
  },
  lastName: {
    type: String,
    default: '',
  },
  authStrategy: {
    type: String,
    default: 'local',
  },
  points: {
    type: Number,
    default: 50,
  },
  refreshToken: {
    type: [Session],
  },
})

// Remove refresh token from the response
User.set('toJSON', {
  transform: (doc, ret, options) => {
    delete ret.refreshToken
    return ret
  },
})

User.plugin(passportLocalMongoose)

const model = mongoose.model('User', User)

export default model
