const bcrypt = require('bcrypt')
const usersRouter = require("express").Router()
const User = require('../models/users')

usersRouter.get("/", async (req,res) => {
    
    const users = await User.find({}).populate('results')

    res.json(users)

})

usersRouter.post("/", async (req,res) => {
    const body = req.body   
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    if (body.password.length || body.username.length < 3){
        return res.status(400).json({
            error: "Invalid login/password"
        })
    }

    const user = new User({
        username: body.username,
        passwordHash
    })
  
    const savedUser = await user.save()

    res.json(savedUser)
})

module.exports = usersRouter
