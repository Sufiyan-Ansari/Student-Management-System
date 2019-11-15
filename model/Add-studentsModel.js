const StudentArray = [];
module.exports = class Student
{
    constructor(studentName,fatherName,homeAddress,phoneNumber,homePhone)
    {
        this.studentName = studentName;
        this.fatherName = fatherName;
        this.Home_Address = homeAddress;
        this.phone_number = phoneNumber;
        this.Home_phone = homePhone;
        
    }
    save()
    {
        StudentArray.push(this);
        console.log(StudentArray);
    }
}