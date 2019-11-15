const Students = require('../model/Add-studentsModel');
exports.GetAddStudentAdmin = (req,res,next)=>{
    res.render('Add-Student',
    {
        pageTitle:'Add New Student ::'
    });
}

exports.PostAddStudentAdmin = (req,res,next)=>{
    const student = new Students(req.body);
    student.save();
}