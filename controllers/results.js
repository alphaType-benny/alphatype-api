
const resultsRouter = require("express").Router()
const Results = require('../models/results')
const User = require('../models/users')
const jwt = require('jsonwebtoken')

const getToken = req => {
    const authorization = req.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
      return authorization.substring(7)
    }
    return null
}

resultsRouter.get("/", async (req,res) => {

    const results = await Results.find({}).populate('user', {username:1})

    res.json(results)
})

resultsRouter.post("/", async (req,res) => {
    const body = req.body
    const token = getToken(req)
    const decodedToken = jwt.verify(token, process.env.SECRET)

    if (!(token && decodedToken.id)) {
        return res.status(401).json({ error: 'token missing or invalid' })
    }

    //Prevent macro input; Tested minimum speed to type 26 keys is ~0.85s. 
    if (body.score <= 0.85) {
        return res.status(406).json({ error: 'invalid result' })
    }

    const user = await User.findById(decodedToken.id)
    
    const result = new Results({
        totalTime: body.score.toFixed(3),
        user: user.id
    })
  
    const savedResult = await result.save()
    
    user.results = user.results.concat(savedResult.id)
    await user.save()

    res.json(savedResult)
})


module.exports = resultsRouter
