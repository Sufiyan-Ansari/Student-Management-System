// const getDb = require('../util/database').getDb;
// const fs = require('fs');
// module.exports = class Student
// {
//     constructor(student_name,fatherName,homeAddress,phoneNumber,homePhone,B_form)
//     {
//         this.student_name = student_name;
//         this.fatherName = fatherName;
//         this.Home_Address = homeAddress;
//         this.phone_number = phoneNumber;
//         this.Home_phone = homePhone;
//         this.B_form = B_form;
        
//     }
//     save()
//     {
//         const db = getDb();
//         db.collection('Students').insertOne(this)
//         .then(result => 
//             {
//                 console.log(result);
//             }).catch(err => 
//             {
//                 console.log(err);
//             });

//     }

//     static fetchAll()
//     {
//         const db = getDb();
//         return db.collection('Students')
//         .find()
//         .toArray()
//         .then(student => {
//             console.log(student);
            
//             return student;
//             fs.writeFileSync('test.json',JSON.stringify(student),(error)=>{
//                 if(error)
//                 {
//                     console.log(error);
//                 }
//             })
//         })
//         .catch(error => { console.log(error); })
//     }
// }


///Using Mongoose

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    StudentName:
    {
        type:String,
        required:true
    },
    FatherName:
    {
        type:String,
        required:true
    },
    HomeAddress:
    {
        type:String,
        required:true
    },
    PhoneNumber:
    {
        type:Number,
        required:true
    },
    HomePhone:
    {
    type:Number,
    required:false
    },
    B_form:
    {
        type:Number,
        required:true
    }

});

module.exports = mongoose.model('Students',StudentSchema);