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



module.exports = Router;