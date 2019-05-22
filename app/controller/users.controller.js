const userModel = require('../model/user.model');

exports.getUsers = (request, response) => {
    userModel.find()
    .then(data => {
        response.send({
            data: data,
            message : "message"
        })
    }).catch(error => {
        
    })
}

exports.createUser = (req, res) => {
    if(Object.keys(req.body).length === 0 || req.body == '' || req.body == null || typeof req.body == 'undefined' || req.body.user_name == 'undefined'){
        res.render('createUser');
    }else{
        console.log("req.body");
        console.log(req.body);
        const user = new userModel(req.body);
        user.save().then(data=>{
            res.send({
                message : 'message',
                data: data
            });            
        })
    }
}

exports.getSingleUser = (req, res) => {
    let id = req.params.id;
    userModel.findById(id)
    .then(data => {
        res.send({
            data: data,
        })
    }).catch(error => {

    })
}

exports.updateUser = (req, res) => {
    let id = req.params.id;    
    var data = {        
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        user_name : req.body.user_name,
        email : req.body.email,
        active : req.body.status
    }
    console.log(req.body);
    userModel.findByIdAndUpdate(id, data)
    .then(data => {
        res.send({
            data: data,
        })
    }).catch(error => {

    })
}

exports.deleteUser = (req, res) => {
    let id = req.params.id;
    userModel.findByIdAndDelete(id)
    .then(data => {
        res.send({
            data: data,
        })
    }).catch(error => {

    })
}