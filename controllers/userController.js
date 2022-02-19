const User = require("../models/User")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {loginValidate,registerValidate} = require('./validate')

const userController = {
    register: async function (req, res) {
        

        const {error} = registerValidate(req.body)
        if(error){res.status(400).send(error.message)}

        const selectedUser = await User.findOne({email: req.body.email})
        if(selectedUser) return res.status(400).send('ja tem esse email')
        //Non-repeatable Email


        //body é transmitido como json para todas rotas no app.js
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password),
        })
        try {
            const savedUser = await user.save()
            res.send(savedUser)
        } catch (err) { res.status(400).send(err) }



    },

    login: async function (req, res) {

        
        const {error} = registerValidate(req.body)
        if(error){res.status(400).send(error.message)}

const selectedUser = await User.findOne({email: req.body.email})
if(!selectedUser){res.send('Email or Password incorrect')}

const passwordAndUserMatch = bcrypt.compareSync(req.body.password, selectedUser.password)
if(!passwordAndUserMatch){res.send('Email or Password incorrect')}
res.send(" Logado.")

const token = jwt.sign({_id: selectedUser._id, admin: selectedUser.admin},process.env.TOKEN_SECRET)

res.header('authorization-token',token)

}




}

module.exports = userController