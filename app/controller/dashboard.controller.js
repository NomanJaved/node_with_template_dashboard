const dashboardModel = require('../model/dashboard.model');

exports.index = (req, res) => {
    res.render('index');
}

exports.register = (req, res) => {
    if(Object.keys(req.body).length === 0){
        res.render('register');
    }else{
        let data = req.body;
        console.log(data);
        let id = req.body.id;
        let password_repeat = req.body.password_repeat;
        let password = req.body.password;
        if(password !== password_repeat){
            // show flash message
        }else{}
        var data_var = {        
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            email : req.body.email,
            password : req.body.password,            
        }
        const register = new dashboardModel(data_var);        
        register.save().then(data => {
            res.redirect('/index'); 
        }).catch(error => {
            res.send({
                message: 'User registration failed.'
            })
        })

    }
}

exports.login = (req, res) => {
    if(Object.keys(req.body).length === 0){
        res.render('../view/login');
    }else{
        let data = req.body;
        console.log(data);
        let email = req.body.email;
        let password = req.body.password;

        dashboardModel.find({'email':email, 'password': password}).then(data => {
            console.log("data");
            console.log(data);
            if(Object.keys(data).length === 0){
                // record not exist...!
                res.redirect('/login');
            }else{
                // record exist in out database...!
                res.redirect('/index');
            }
        }).catch(error => {

        })
        

    }
}

exports.profile = (req, res) => {
    let data = req.body;
    console.log("req.file");
    console.log(req.files);
    if(Object.keys(data).length === 0){
        res.render('../view/profile');
    }else{

        console.log("data form");
        console.log(data)

    }
}

exports.logout = (req, res) => {
    console.log('hello logout');
    res.redirect('/login');
}