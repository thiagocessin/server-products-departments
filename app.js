const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();
const department_controller = require('./department_controller')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());


mongoose.connect('mongodb://127.0.0.1:27017/http_app',{useNewUrlParser:true});

//app.use('/departments',department_controller);
//app.use('/products',product_controller);

app.listen(9000,function(){
    console.log('listening on port 9000');
});
