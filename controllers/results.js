
const resultsRouter = require("express").Router()
const Results = require('../models/results')
const User = require('../models/users')
const usersRouter = require('./users')

resultsRouter.get("/", async (req,res) => {
    // const results = Results.find({}).populate('users')
    // results.then(results=>res.json(results))

    const results = await Results.find({}).populate('user', {username:1, id:1})

    res.json(results)
})

resultsRouter.post("/", async (req,res) => {
    const body = req.body

    const user = await User.findById(body.userId)

    const result = new Results({
        totalTime: body.totalTime,
        user: user.id
    })
  
    const savedResult = await result.save()
    
    user.results = user.results.concat(savedResult.id)
    await user.save()

    res.json(savedResult)
})


module.exports = resultsRouter
