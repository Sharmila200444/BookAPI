const express=require('express');
const app=express();
const dotenv=require('dotenv');
const path=require('path');
dotenv.config({path:path.join(__dirname,'config','.env')})
const connectdb=require('./config/connect');

const authbook=require('./router/authbook')


app.use(express.json());
connectdb();
// app.use(express.urlencoded({ extended: true }));
app.use('/api/book',authbook);




app.listen(process.env.port,()=>{
    console.log(`sever is connected to ${process.env.port}`)
});