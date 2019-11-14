const express = require('express');

const Router = express.Router();

const adminController = require('../controller/adminController');

const PageNotFoundController = require('../controller/PageNotFound');

Router.get('/Add-New-Student',adminController.GetAddStudentAdmin);





module.exports = Router;