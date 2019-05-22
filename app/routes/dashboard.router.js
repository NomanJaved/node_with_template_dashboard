module.exports = (app) => {
    const dashboardContoller = require('../controller/dashboard.controller');

    app.get('/index', dashboardContoller.index);
    
    app.get('/register', dashboardContoller.register);
    app.post('/create', dashboardContoller.register);

    app.get('/login', dashboardContoller.login);
    app.post('/login', dashboardContoller.login);

    app.get('/profile', dashboardContoller.profile);
    app.post('/profile', multer, dashboardContoller.profile);

    app.get('/logout', dashboardContoller.logout);
    

}