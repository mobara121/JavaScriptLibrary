require('dotenv').config();

var express = require('express');
var app = express();
var test = require('./controllers/testcontroller');
var authTest = require('./controllers/authtestcontroller');

var user = require('./controllers/usercontroler')
var sequelize = require('./db');//create a sequelize variable that imports the db file.

sequelize.sync(); //tip: pass in {force: true} for resetting tables
app.use(express.json());
app.use(require('./middleware/headers'));//refer to module 'server-update'
/**********************
 * EXPOSED ROUTES
 ************************/
app.use('/test', test);
app.use('/api/user', user);

/*************************
 * PROTECTED ROUTES
 *************************/
app.use(require('./middleware/validate-session'));
app.use('/authtest', authTest);

app.use('/api/user', require('./controllers/usercontroler'));

app.listen(3000, function(){
    console.log('App is listening on 3000.')
});


app.use('/api/test', function(req, res){
    res.send("This is data from the /api/test endpoint. It's from the server.");
});


