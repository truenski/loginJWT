const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController')


router.get('/', auth, (req, res) => {

    if (req.user.admin) {
        res.send('visto apenas pelo Admin')
    } else {
        res.status(401).send('Access Denied');

    }
})

rouget.get('/free',auth, (req,res)=>{
    res.send('só pra quem esta logado')
})

module.exports = router;