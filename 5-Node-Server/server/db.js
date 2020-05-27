const Sequelize = require('sequelize');//Import the Sequelize package.

const sequelize = new Sequelize('workoutlog', 'postgres', 'RomeoOhRomeo', {
  host: 'localhost',
  dialect: 'postgres'
});
sequelize.authenticate().then(
    function() {
        console.log('Connected to workoutlog postgres database');
    },
    function(err){
        console.log(err);
    }
);

module.exports = sequelize;//export the module