//logic tycoon

const express = require('express');

const app = express();

app.set('view engine','ejs');

app.set('views','views');

const session = require('express-session');




const path = require('path');

const mongoose = require('mongoose');

app.use(express.static(path.join(__dirname,'public')));

app.use(session({secret:'Student Management System',resave:false,saveUninitialized:false}))

const port = process.env.PORT||3000;

const adminRouter = require('./route/adminRoute');

const PageNotFound = require('./controller/PageNotFound');

const mongoConnect = require('./util/database').mongoConnect;

app.use('/admin',adminRouter);

app.use(PageNotFound.GetPageNotFound);


// app.listen(port,()=>{
//     console.log(`Listening on port ${port}`);
// })

// mongoConnect(() => {
//     app.listen(3000);
// });
mongoose.connect('mongodb+srv://Sufiyan:o0dmignECqGhQkCa@student-o5coo.mongodb.net/Student?retryWrites=true&w=majority')
.then(result => {
    app.listen(port)
})
.catch(error => {
    console.log(error);
});

