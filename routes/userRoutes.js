const { query } = require('express');
var express = require('express');
var router = express.Router();
const usersControlers = require('../controllers')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


//Get User Routers
router.get('/get',async function(req, res, next){
  const query=req.query;
  console.log(query);

  try{
    const result = await usersControlers.getAllUsers(query);
    res.status(200).send(result)
  }
  catch(error){
    res.status(500).send(error);
  }

});

//add User Routers
router.post('/adduser',async function(req, res, next){
  const body=req.body;
  try{
    const result = await usersControlers.addUser(body);
    res.status(200).send(result)
  }
  catch(error){
    res.status(500).send(error);
  }
});


module.exports = router;

