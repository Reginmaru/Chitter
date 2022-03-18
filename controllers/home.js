
const express = require('express')
//const bcrypt = require('bcryptjs')
const router = express.Router({mergeParams : true})

const { User, Peep } = require ('../models')

router.get('/', async(req,res) =>{
    const users = await User.findAll({
        include: {
            all:true
        },
        order: [
            ['createdAt', 'DESC'],
            [Peep, 'createdAt', 'DESC'],
        ]
    })
    res.render('home', {users:users})
})

router.get('/', async function (req, res) {
    const user = await User.findOne({ where: { id: req.params.UserId } })
    res.render('/home', { user:user })
  })

router.post('/peep/:id', async(req, res) => {
    console.log(Peep)
    await Peep.create({
        message: req.body.message,
        
        UserId: req.params.id
    })
    res.redirect('/home')
})




module.exports = router