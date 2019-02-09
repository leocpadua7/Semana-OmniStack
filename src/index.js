const express = require('express');
const mongoose = require('mongoose');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(Server);

mongoose.connect(
    "mongodb+srv://roboto:AGsb5F3OJxZjvQWH@omnistack-week-cekqy.mongodb.net/test?retryWrites=true",{
        useNewUrlParser: true
    }
);

app.use((req,res,next)=>{
    req.io = io
    
    return next();
})

app.use(express.json());
app.use(require('./routes'));

app.listen(3000, ()=>{
    console.log('Server started on port 3000 :)');
})