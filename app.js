const express = require('express');
const path = require('path');

const authUrlRouter = require('./routes/authUrl') 
const tokenRouter = require('./routes/getToken') 
const userInfoRouter = require('./routes/getUserInfo') 
const userFilesRouter = require('./routes/getUserFiles') 

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/authUrl', authUrlRouter);
app.use('/getToken', tokenRouter);
app.use('/userinfo', userInfoRouter);
app.use('/userfiles', userFilesRouter);

app.get('/',(req,res)=>{
    res.send("Hello world")
})

app.listen(3000)