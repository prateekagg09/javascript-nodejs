var express = require('express');

var app = express();
app.set('view engine', 'ejs');

//app.get('/', function(req, res){
  //  res.sendFile(__dirname + '/index.html');
//});
app.get('/contact', function(req, res){
    console.log(req.query);
    res.render('contact');

});

app.get('/profile/:name', function(req, res){
    var data = {age: 29, job: 'student', hobbies: ['eating', 'fishing', 'drinking']};
    res.render('profile', {person: req.params.name, data: data});
});


app.listen(3000);
