
// Database Connection

const mongoose=require("mongoose");
mongoose.set('strictQuery',false);
const database=mongoose.connect("mongodb://127.0.0.1:27017/pescriptionDetails",{
    useNewUrlParser:true,
    useUnifiedTopology:true
    // useCreateIndex:true
}).then(()=>{console.log("Succusessfullly connected")}).catch((e)=>{
console.log(e)
})

