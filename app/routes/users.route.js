module.exports = (app) => {
    
    // require controller
    const userController = require('../controller/users.controller')

    app.get('/users', userController.getUsers);
    app.get('/user/:id', userController.getSingleUser);
    app.post('/createUser', userController.createUser);
    app.put('/updateUser/:id', userController.updateUser);


}