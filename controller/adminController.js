const Student = require('../model/Add-studentsModel');
exports.GetAddStudentAdmin = (req,res,next)=>{
    res.render('Add-Student',
    {
        pageTitle:'Add New Student ::'
    });
}

exports.PostAddStudentAdmin = (req,res,next)=>{
    const Student_name = req.body.student_name;
    const Father_name = req.body.father_name;
    const home_address = req.body.home_address;
    const phone_number = req.body.phone_number;
    const home_phone = req.body.home_phone;
    const b_form = req.body.b_form;
    const student = new Student(Student_name,Father_name,home_address,phone_number,home_phone,b_form);
    student.save();
  //  console.log('Reached in admin Controller');
    
}