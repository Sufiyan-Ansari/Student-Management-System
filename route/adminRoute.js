const express = require('express');

const Router = express.Router();

const adminController = require('../controller/adminController');

Router.get('/',adminController.GetAddStudentAdmin);

module.exports = Router;