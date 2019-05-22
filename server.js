const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const multer = require('multer');
var upload = multer({ dest: './app/public/assets/uploads/' })


const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.set('views', __dirname + '/app/view');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/app/public')));



const mongoose = require('mongoose');
const dbfile = require('./config/db.config');

mongoose.connect(dbfile.url, {
    useNewUrlParser: true,
}).then(data => {
    console.log('Database Connected Succesfully');
}).catch(error => {
    console.log('Error in connecting database');
})



// Routes ...!
require('./config/routes.config');
require('./app/routes/users.route')(app);
require('./app/routes/dashboard.router')(app);



app.listen('4000', (request, response) => {
    console.log("server is running on port 4000.");
})