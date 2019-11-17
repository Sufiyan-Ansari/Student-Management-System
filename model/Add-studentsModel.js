const getDb = require('../util/database').getDb;
module.exports = class Student
{
    constructor(student_name,fatherName,homeAddress,phoneNumber,homePhone)
    {
        this.student_name = student_name;
        this.fatherName = fatherName;
        this.Home_Address = homeAddress;
        this.phone_number = phoneNumber;
        this.Home_phone = homePhone;
        
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
}