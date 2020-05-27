const router = require('express').Router();
const User = require('../db').import('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//SIGNUP
router.post('/signup', (req, res) => {
    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)// instead of typing only 'req.body.password', use hashSync() function to generate hash salt.
    })
    .then(
        createSuccess = (user) => {
            let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24}) //payload(here, it is'id'.) can be email as well.
            res.json({
                user: user,
                message: 'user created',
                sessionToken: token
            })
        },
        createError = err => res.send(500, err)
    )
    .catch(err => res.status(500).json({
        error: err
    }))

})

//SIGNIN
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }//findOneとは、データベースの中にある何かひとつを探すように指示するメソッド。wereオブジェクトの中のプロパティー（email）でデータベースの中を指す。
    })
        .then(user => {
            if(user){//bcryptで今度は暗号を解読（decrypt）し、さらにcompareでデータベースに保存済みパスワードと今回ユーザーから与えられたパスワードとを比較する。
                bcrypt.compare(req.body.password, user.password, (err, matches) => {
                    if(matches){
                        let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24})
                        res.json({
                            user: user,
                            message: 'user successfully logged in',
                            sessionToken: token 
                        })
                    } else {
                        res.status(502).send({error: 'bad gateway'})
                    }
                })
            } else {
                res.status(500).send({error: 'failed to authenticate'})
            }
        }, err => res.status(501).send({error: 'failed to process'}))
})

module.exports = router;