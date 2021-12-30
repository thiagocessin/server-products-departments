var express = require('express');
var router = express.Router();
var Department = require('./department');

router.post('/',function(req,res){
    console.log(req.body);

    let d = Department({name:req.body.name});
    d.save((err,dep)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(dep);
        }
    });
})

router.get('/',function(req,res){
    console.log(req.body);

    Department.find().exec((err, deps)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(deps);
        }

    });
})
