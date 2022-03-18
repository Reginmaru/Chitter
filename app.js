require('dotenv').config()

//const Users = db['Users']
//const bcrypt = require('bcryptjs')
const session = require('express-session')
const express = require('express')
const methodOverride = require('method-override')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.use(session({
    secret: 'My secret',
    resave: false,
    saveUninitialized: true,
}))

app.use(async (req, res, next) => {
    res.locals.currentUser = (req.session.userId ? await User.findOne({
      where: {
        id: req.session.userId
      }
    }) : undefined)
    res.locals.errors = []
    next()
  })
const { User } = require('./models')
const indexController = require('./controllers/index.js')
const signupController = require('./controllers/signup.js')
const signinController = require('./controllers/signin.js')
const homeController = require('./controllers/home.js')
const authenticator = (req, res, next) => {
    if (req.session.userId === undefined) {
      res.redirect('/')
    } else {
      next()
    }
  }

app.use('/home',homeController)
app.use('/signin',signinController)
app.use('/signup',signupController)
app.use('/', indexController)

app.listen(port, ()=>{
    console.log(`listening on ${port}`)
})
