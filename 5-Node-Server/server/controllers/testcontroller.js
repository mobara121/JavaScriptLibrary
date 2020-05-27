var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var TestModel = sequelize.import('../models/test.js')

// router.get('/', function(req, res){
//     res.send('Hey!!! This is a test route!');
// });

// router.get('/about', function(req, res){
//     res.send('This is an about route!');
// });

// router.get('/contact', function(req, res){
//     res.send({
//         "user":"Mizue",
//         "email": "mizueo121@gmail.com"
//     });
// });
// router.get('/projects', function(req, res){
//     res.send([
//         "Project 1",
//         "Project 2"
//     ]);
// });
// router.get('/mycontacts', function(req, res){
//     res.send([
//         {
//             "user":"Mizue",
//             "email": "mizueo121@gmail.com"
//         },
//         {
//             "user":"M",
//             "email": "miz121@gmail.com"
//         }
//     ]);
// });

/*********************************************
 * Controller Method #1: Simple Response
 *********************************************/

 router.post('/one', function(req, res){
     res.send("test 1 went through!")
 });

/*********************************************
 * Controller Method #2: Persisting Data
 *********************************************/
 router.post('/two', function(req, res){
     let testData = "Test data for endopoint two";

     TestModel
        .create({
            testdata: testData
        }).then(dataFromDatabase => {
            res.send("Test two went through!")
        })
 });

/*********************************************
 * Controller Method #3: req.body
 *********************************************/
router.post('/three', function(req, res){ 

    var testData = req.body.testdata.item;

    TestModel.create({
        testdata: testData
    })
    res.send("Test three went through!")
    console.log("Test three went through!")
});
//STEP 4 - Use this with Postman
router.post('/four', function (req, res){
    var testData = req.body.testdata.item;
    TestModel
    .create({
        testdata: testData
    })
    .then(
        function messsage() {
            res.send("Test 4 went through!")
        }
    )
})
/*********************************************
 * Route 5: Return data in a Promise
 *********************************************/
router.post('/five', function(req, res){ 

    var testData = req.body.testdata.item;

    TestModel.create({
        testdata: testData
    })
    .then(
        function message(data){
        res.send(data);
        }
    );
});
/*********************************************
 * Route 6: Return response as JSON
 *********************************************/
router.post('/six', function(req, res){ 

    var testData = req.body.testdata.item;

    TestModel.create({
        testdata: testData
    })
    .then(
        function message(testdata){
        res.json({
            testdata: testdata
        });
        }
    );
});
/*********************************************
 * Route 7: Handle errors
 *********************************************/
router.post('/seven', function(req, res){ 

    var testData = req.body.testdata.item;

    TestModel.create({
        testdata: testData
    })
    .then(
        function createSuccess(testdata){
        res.json({
            testdata: testdata
        });
        },
        function createError(err){
            res.send(500, err.message);
        }
    );
});

/**************************************
 * GET: Get simple from server
 ****************************/
router.get('/helloclient', function(req, res){
    res.send('This is a message from the server to the client.')
})

/**************************************
 * GET: /one
 ****************************/
router.get('/one', function(req, res){

    TestModel
    .findAll({
        attributes: ['id', 'testdata']//２つのカラムから選択可
    })
    .then(
        function findAllSuccess(data){
            console.log('Controller data:', data);
            res.json(data);
        },
        function findAllError(err) {
            res.send(500, err.message);
        }
    );
});

module.exports = router;