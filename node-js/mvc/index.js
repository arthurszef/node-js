const express = require('express');
const sessions = require('express-session');
const path = require('path');
const routes = require('./controllers/router')
let app = express();


//session middleware
app.use(sessions({
    secret: "thisismysecrctekey",
    saveUninitialized: false,
    cookie: { secure: false},
    resave: false
}));

//encode les données du formulaire en url
app.use(express.urlencoded({ extended: false }));

app.use(express.json()) //format json

app.set('view engine', 'ejs'); //moteur de template ejs

app.set('views', path.join(__dirname, 'views')); //defini repertoire views

app.use('/', routes); //definir les routes du controller "router" sur les routes

app.listen(3000)
