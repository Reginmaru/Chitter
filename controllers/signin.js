const express = require('express')
const router = express.Router({mergeParams : true})
const bcrypt = require('bcryptjs')

const { User } = require('../models')
router.get('/', async(req,res) => {
    const user = await User.findAll({})
    
    res.render('signin', {user:user})

})
router.post('/', async(req,res) => {
    const user = await User.findOne({
        where: {
            email:req.body.email
        }
    })
    if (user && bcrypt.compareSync(req.body.passwordHash, user.passwordHash)){
        req.session.UserId = user.id
        res.redirect('/home')
    }else{
        res.render('signin')
    }
})

module.exports = router