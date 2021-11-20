'use strict';
var express = require('express');
var router = express.Router();
const noblox = require("./noblox_modules");

/* GET home page. */
router.get('/', function (req, res) {    
    res.render('login', { auth_token: process.env.COOKIE_RBLX });
});

router.post('/', function (req, res) {
    var auth_token = req.body.auth_token || "";
    noblox.getUser(auth_token).then(user => {
        console.log(`User is ${user}`);        
        res.redirect('/home');
    });
    
});

router.get('/home', async function (req, res) {
    var user = await noblox.getUser()
    var friends = await noblox.getFriends(user.UserID)
    res.render('home', { "friends" : friends.data });
});


module.exports = router;

