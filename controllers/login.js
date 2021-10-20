
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const User = require('../models/users')

loginRouter.post('/', async (req,res) => {
    const body = req.body

    const user = await User.findOne({ username: body.username })

    const rightPassword = user === null 
        ? false 
        : await bcrypt.compare(body.password, user.passwordHash)


    if (!(user && rightPassword)){
        return res.status(401).json({
            error: "Invalid login"
        })
    }

    const userForToken = {
        username: user.username,
        id: user.id,
    }

    const token = jwt.sign(userForToken, process.env.SECRET)

    return res.status(200).send({ token, username: user.username, name: user.name })
})

module.exports = loginRouter