const express = require('express');

const Router = express.Router();

const adminController = require('../controller/adminController');

Router.get('/Add-New-Student',adminController.GetAddStudentAdmin);

module.exports = Router;