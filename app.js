const express = require('express');
const hbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require ('connect-flash');
const passport = require('passport');
const path = require('path');
const routes = require('./routes/routes')
const notesRoutes = require('./routes/notes')
require('dotenv').config( {path: 'variables.env'})

// INICIALIZAR EXPRESS
const app = express();

// CONFIGURATION TEMPLATE ENGINE
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', hbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: 'hbs',
}));
app.set('view engine', '.hbs');

// SERVER MIDDLEWARE
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

// EXPRESS SESSIONS
app.use(session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true
}));

// STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
app.use('/', routes);
app.use('/notes', notesRoutes);



// EXPORT MODULE
module.exports = app;