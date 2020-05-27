module.exports =function(sequelize, Datatypes) {
    return sequelize.define('test',{ //argument1 'test' will become a table called 'tests' in Postgres
        testdata: Datatypes.STRING //argument2 {} is object, key:value
    });
};