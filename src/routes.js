const CoursesController = require('./controllers/CoursesController');
const AuthenticationController = require('./controllers/AuthenticationController');

module.exports = (app) => {
    /******** COURSES *******/
    app.post('/api/register',
    AuthenticationController.register)

    app.post('/api/login',
    AuthenticationController.login)

    app.get('/api/logout',
    AuthenticationController.logout)

    /******** COURSES *******/
    app.get('/api/courses',
    CoursesController.index)

    app.post('/api/courses',
    CoursesController.post)

    app.put('/api/courses',
    CoursesController.put)

    app.delete('/api/courses',
    CoursesController.delete)
}