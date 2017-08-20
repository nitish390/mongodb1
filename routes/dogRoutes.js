
var express = require('express')
var router = express.Router()
var dog = require('../models/dog')



router.post('/dogName', function(req, res) {
    var dogName = req.body.name;
    console.log("PARAMETER FROM FORM")

    dog.findOne({ 'name': dogName }, function(err, data) {
        if (err) {
            console.log(err)
            res.end("SOME ERROR OCCURED")
        }
        console.log(data)

        res.json(data)
    })

})

router.post('/registerNewDogy',function(req,res){
    var dog1 = new dog({'name':req.body.name,
        'age':req.body.age,
        'collar_id':req.body.collar_id})

    console.log("--------"+dog1)
    dog1.save(function(err,data){
        if(err){
            console.log(err)
        }
        res.json(data)
    })
})

router.get('/listofdogy',function(req,res){
    dog.find(function(err,data){
        if (err) {
            console.log(err)
            res.end("SOME ERROR OCCURED")
        }
        res.json(data)
    })
})


module.exports = router;