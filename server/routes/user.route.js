const loginmiddleware = require ('../middleware/login.middleware');
const controller = require('../controllers/user.controller');

module.exports = (app) => {
    app.post('/createPost',function(req,res,next){
        console.log('middlware');
        loginmiddleware(req,res,next);
        console.log('middlware done');
    }
    ,function(req, res){
        console.log('createPost');
        controller.createPost(req, res);
        console.log('createPost done');
    });
};