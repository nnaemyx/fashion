const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('./models/user')

app.use(cors())
app.use(express.json())

app.post('/api/register', async (req, res) => {
    console.log(req.body)
    try {
        const newPassword = await bcrypt.hash(req.body.password, 10)
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: newPassword,
            location: req.body.location,
        })
        res.json({status:'ok'})
    }catch (err){
        res.json({status:'error', error: 'duplicate email'})
    }
})
app.post('/api/login', async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
    })

    if (!user) {
        return{ status:'error', error:'invalid login'}
    }

    const isPasswordValid = await bcrypt.compare(req.body.password, user.password)


    if (isPasswordValid) {

        const token = jwt.sign(
            {
                email: user.email,
                password: user.password
            },
            'secret123'
        )
        return res.json({status:'ok', user: token})
    } else {
        return res.json({ status: 'error', user: false })
    }
})

app.listen(1500, () => {
    console.log('server is running on port 1500')
})

// link mongodb
mongoose.connect('mongodb://localhost:27017/mma-inspire-register')