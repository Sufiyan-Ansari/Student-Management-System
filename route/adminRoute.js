const express = require('express');

const Router = express.Router();

const bodyparser = require('body-parser');

const adminController = require('../controller/adminController');

const PageNotFoundController = require('../controller/PageNotFound');

Router.use(bodyparser.urlencoded({extended:false}));

Router.get('/Add-New-Student',adminController.GetAddStudentAdmin);

Router.post('/Add-New-Student',adminController.PostAddStudentAdmin);



module.exports = Router;