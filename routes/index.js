var express = require('express');
var router = express.Router();
var ToDo = require('../models/todo');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ToDo App' });
});

router.get('/todos', function(req, res) {
  ToDo.find({})
  .sort({date: -1})
  .exec(function(err, todos) {
    if(err) {
      res.send(err);
    } else {
      res.json(todos);
    }
  });
});

router.post('/todos', function(req, res) {
  var todo = new ToDo();
  todo.body = req.body.body;
  
  todo.save(function(err) {
    if(err) {
      res.send(err);
    } else {
      ToDo.find({})
      .sort({date: -1})
      .exec(function(err, todos) {
        if(err) {
          res.send(err);
        } else {
          res.json(todos);
        }
      });
    }
  });
});

router.delete('/todos/:todo_id', function(req, res) {
  ToDo.remove({
    _id: req.params.todo_id
  }, function(err, todo) {
    if(err) {
      res.send(err);
    } else {
      ToDo.find({})
      .sort({date: -1})
      .exec(function(err, todos) {
        if(err) {
          res.send(err);
        } else {
          res.json(todos);
        }
      });
    }
  });
});

module.exports = router;
