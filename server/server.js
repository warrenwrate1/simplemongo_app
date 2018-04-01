const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js')

var app = express();

//use body-parser .json to read json values
app.use(bodyParser.json());

//post data
app.post('/todo', (req, res) => {
    //body is stored by body-parser
    //console.log(req.body);
    todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });

}, (err)=>{
    console.log("error occurred", err);
});

app.get('/todo', (req, res) => {
    Todo.find().then( (todo) =>{
        res.send({todo});
    }, (err)=>{
        res.status(400).send(err);
    })
})



app.listen(3000, ()=>{
    console.log(`connected to port ${3000}`);
});


