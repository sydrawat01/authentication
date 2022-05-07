import passport from 'passport-local'
import LocalStrategy from 'passport-local/lib/strategy.js'

import User from '../models/user.js'

// Called during login/sign up
passport.use(new LocalStrategy(User.authenticate()))

// Called while after logging in / signing up to set user details in req.user
passport.serializeUser(User.serializeUser())
