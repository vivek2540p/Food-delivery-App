const mongoose=require('mongoose')

const url="mongodb://localhost:27017/food"

mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})

const db=mongoose.connection
db.on("connected",()=>{
    console.log("Database connected");
})
db.on("disconnected",()=>{
    console.log("disconnected");
})
db.on("error",(error)=>{
    console.log(`Error in connection ${error}`);
})

module.exports=db