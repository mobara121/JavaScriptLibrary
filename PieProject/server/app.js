require('dotenv').config()

const express = require('express');
const app = express();

const pies = require('./controllers/piecontrollers');
const user = require('./controllers/usercontroller');

//database
const sequelize = require('./db');
sequelize.sync();//to drop tables ---> {force true} inside sync()
app.use(express.json());
app.use(require('./middleware/headers'));

//listen
app.listen(process.env.PORT, () => console.log(`app is listening on ${process.env.PORT}`));

//routes
app.use('/auth', user);
app.use(require('./middleware/validate-session'));// bouncer
app.use('/pies', pies);
//app.use(express.static(__dirname + '/public'));
//console.log(__dirname);

//app.get('/', (req, res) => res.render('index'));