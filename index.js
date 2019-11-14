//logic tycoon

const express = require('express');

const app = express();

app.set('view engine','ejs');

app.set('views','views');

const path = require('path');

app.use(express.static(path.join(__dirname,'public')));

const port = process.env.PORT||3000;

const adminRouter = require('./route/adminRoute');

const PageNotFound = require('./controller/PageNotFound');

app.use('/admin',adminRouter);

app.use(PageNotFound.GetPageNotFound);


app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})
