
var express = require('express')
var router = express.Router()
var cat = require('../models/cat')



router.post('/dogName', function(req, res) {
    var dogName = req.body.name;
    console.log("PARAMETER FROM FORM")

    cat.findOne({ 'name': catName }, function(err, data) {
        if (err) {
            console.log(err)
            res.end("SOME ERROR OCCURED")
        }
        console.log(data)

        res.json(data)
    })

})

router.post('/registerNewcaty',function(req,res){
    var cat1 = new cat({'name':req.body.name,
        'age':req.body.age,
        'collar_id':req.body.collar_id})

    console.log("--------"+cat1)
    cat1.save(function(err,data){
        if(err){
            console.log(err)
        }
        res.json(data)
    })
})

router.get('/listofcaty',function(req,res){
    cat.find(function(err,data){
        if (err) {
            console.log(err)
            res.end("SOME ERROR OCCURED")
        }
        res.json(data)
    })
})


module.exports = router;