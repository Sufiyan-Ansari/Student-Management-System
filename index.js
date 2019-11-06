//logic tycoon

const express = require('express');

const app = express();

app.set('view engine','ejs');

app.set('views','views');

const path = require('path');

app.use(express.static(path.join(__dirname,'public')));

const port = process.env.PORT||3000;

const adminRouter = require('./route/adminRoute');

app.use('/admin',adminRouter);

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})
