const express = require('express');

const Router = express.Router();

const bodyparser = require('body-parser');

const adminController = require('../controller/adminController');

const PageNotFoundController = require('../controller/PageNotFound');

Router.use(bodyparser.urlencoded({extended:false}));

//console.log('Reached in admin Router');

Router.get('/add-students',adminController.GetAddStudentAdmin);

//console.log('Got Add-new-Student Page');

Router.post('/add-students',adminController.PostAddStudentAdmin);

Router.get('/students',adminController.GetStudentsAdmin);

Router.get('/student/:_id',adminController.GetStudedent),

/////////Login query

Router.get('/login',adminController.GeTLogin);


module.exports = Router;