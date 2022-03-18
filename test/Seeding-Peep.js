require('dotenv').config()
const db = require('../models')

const createPeep = async () => {
    console.log('seeding database')
    await db.Peep.create({
        message:'not a real message, like in real life. Stop being on your computers and go outside',
        createdAt: new Date('2021', '4', '3', '10', '30'),
        updatedAt: new Date('2021', '4', '3', '10', '30'),
        
        User: {
            email:"Regin",
            passwordHash:"$2a$10$E6VfvgsC6BcDtf/X3i0uD.daR71o62ZTI1uZQH4QAJ10ytvqEVxfu ",
            createdAt: new Date('2021', '4', '3', '10', '45'),
            updatedAt: new Date('2021', '4', '3', '10', '45'),
        }
    }, {
        include: [{
            association: db.Peep.User
        }]
    });
}

module.exports = createPeep;