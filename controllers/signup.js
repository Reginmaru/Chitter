const express = require('express')
const router = express.Router({mergeParams : true})
const bcrypt = require('bcryptjs')

const { User } = require('../models')

router.get('/', async(req,res) => {
    const user = await User.findAll({})
    console.log(user)
    res.render('signup', {user:user})
})

router.post('/',async(req,res) =>{
    const passwordhash = bcrypt.hashSync(req.body.passwordHash);
    const user = await User.findOrCreate({ 
        where:{ 
            email:req.body.email
        },defaults:{
        passwordHash:passwordhash
        }
       
        
    }).then((user) => {
        req.session.userId = user[0].id
    })
  
    res.redirect('/home')
})

module.exports = router