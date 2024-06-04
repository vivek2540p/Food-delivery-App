const express=require('express')
const app=express()
const cors=require('cors')
const bodyparser=require('body-parser')
app.use(bodyparser.json({ limit: '10mb' }))
app.use(cors())
const db=require('./db')

const PORT=process.env.PORT||8080;

app.listen(PORT,()=>{
    console.log(`server listining on port: ${PORT}`);
})

const signUP=require('./routes/signUp')
app.use('/signup',signUP)

const login=require('./routes/login')
app.use('/login',login)

const newProduct=require('./routes/newProduct')
app.use('/product',newProduct)

const payment=require('./routes/payment');
app.use('/payment',payment);