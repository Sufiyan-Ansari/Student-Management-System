//logic tycoon

const express = require('express');

const app = express();

app.set('view engine','ejs');

app.set('views','views');

const path = require('path');

app.use(express.static(path.join(__dirname,'bower_components')));

const port = process.env.PORT||3000;

app.get('/',(req,res,next)=>{
    res.render('Add-Student');
});

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})
