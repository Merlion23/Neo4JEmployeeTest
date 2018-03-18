var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
const neo4j = require('neo4j-driver').v1;

var app = express();

//View Engine
app.set('views' , path.join(__dirname, 'views'));
app.set('view engine' , 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

const driver = neo4j.driver('bolt://http://ec2-34-228-20-122.compute-1.amazonaws.com:7687', neo4j.auth.basic('neo4j', 'admin'));
const session = driver.session();

app.get('/', function(req, res){
    session
    .run('MATCH(n:Employees) RETURN n LIMIT 25')
    .then(function(result){
        var empArr = [];
        result.records.forEach(function(record){
            empArr.push({
                id:record._fields[0].identity.low,
                name:record._fields[0].properties.name,
                emp_id:record._fields[0].properties.emp_id
            })
        });
        res.render('index', {
            employees: empArr
        });
    })
    .catch(function(err){
        console.log(err);
    });
});

app.post('/employees/add',function(req, res){
    var name = req.body.name;
    var emp_id = req.body.emp_id;

        session
            .run('CREATE(n:Employees {name:{nameParam},emp_id:{emp_idParam}}) RETURN n.name', {nameParam:name, emp_idParam:emp_id})
            .then(function(result){
                res.redirect('/');
                session.close();
            })
            .catch(function(err){
                console.log(err);
            });
    
    res.redirect('/');
});

app.listen(3000)
console.log('Server Started on Port 3000');

module.exports = app;
