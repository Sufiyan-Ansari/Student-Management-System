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
    
    const student = new Student({StudentName:Student_name,
        FatherName:Father_name,
        HomeAddress:home_address,
        PhoneNumber:phone_number,
        HomePhone:home_phone,
        B_form:b_form
                                });
    student.save().then(
        result => {
            console.log('Student Added');
            res.redirect('/admin/Studentss');
        }
    );
  res.render('Add-Student',
  {
      pageTitle:'Add New Student ::'
  });
    
}

exports.GetStudentsAdmin = (req,res,next) =>{
    Student.find()
    .then(students => {
        console.log(students)
        res.render('students',
        {
            
            pageTitle:'Students ::',
            Stu : students
        });
    })
    .catch(error => {console.log(error);})
}


exports.GetStudedent = (req,res,next)=>
{
    const Student_id = req.params._id;
    Student.findById(Student_id)
    .then(student =>{
       // console.log(Student_id);
        res.render('student',{pageTitle:student.StudentName , SI : student});

    })
    .catch(error => {
        console.log(error);
    })
}

///Login Controller

exports.GeTLogin = (req,res,next)=>
{
    req.session.isLoggedIn = true;
    res.render('login', {
        PageTitle : 'Login :: '
    });
}