const express = require('express');

let router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {username: "John"});
})

const isAuth = (req, res, next) => {
    if (req.session.username) {
        return next();
    }
    return res.redirect('/')
}

router.get('/user', isAuth, (req, res) => {
    res.render('user', {username: req.session.username});
}).post('/user', (req, res) => {
    let username = req.body.username;
    req.session.username = username;
    res.redirect('/user');
})

module.exports = router;