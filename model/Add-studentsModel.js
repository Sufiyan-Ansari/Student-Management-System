const getDb = require('../util/database').getDb;
const fs = require('fs');
module.exports = class Student
{
    constructor(student_name,fatherName,homeAddress,phoneNumber,homePhone,B_form)
    {
        this.student_name = student_name;
        this.fatherName = fatherName;
        this.Home_Address = homeAddress;
        this.phone_number = phoneNumber;
        this.Home_phone = homePhone;
        this.B_form = B_form;
        
    }
    save()
    {
        const db = getDb();
        db.collection('Students').insertOne(this)
        .then(result => 
            {
                console.log(result);
            }).catch(err => 
            {
                console.log(err);
            });

    }

    static fetchAll()
    {
        const db = getDb();
        return db.collection('Students')
        .find()
        .toArray()
        .then(student => {
            console.log(student);
            
            return student;
            fs.writeFileSync('test.json',JSON.stringify(student),(error)=>{
                if(error)
                {
                    console.log(error);
                }
            })
        })
        .catch(error => { console.log(error); })
    }
}