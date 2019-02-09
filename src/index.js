const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(
    "mongodb+srv://roboto:AGsb5F3OJxZjvQWH@omnistack-week-cekqy.mongodb.net/test?retryWrites=true",{
        useNewUrlParser: true
    }
)

const app = express();

app.get('/', (req, res)=>{
    return res.send('Hello World');
});

app.listen(3000, ()=>{
    console.log('Server started on port 3000 :)');
})