// const { text } = require("express");
// Schema declaration for database

const mongoose=require("mongoose");
const detailsSchema=new mongoose.Schema({
name:{
    type:String,
    require:true
},
EmailAddress:{
    type:String,
    require:true,
    
},
PhoneNumber:{
    type:Number,
    require:true,
    
},
Age:{
    type:String,
    require:true
},
gender:{
    type:String,
    // require:true
},

Address1:{
    type:String,
    // require:true
},
// Address2:{
//     type:String,
//     // require:true
// },
Country:{
    type:String,
    // require:true
},
city:{
    type:String,
    // require:true
},
Weight:{
    type:String,
    // require:true
},
BodyTemprature:{
    type:String,
    // require:true
},
Complaints:{
    type:String,
    require:true
},
Allergies:{
    type:String,
    require:true
},
MadicineName:{
    type:[String],
    require:true
},
Quantity:{
    type:[Number],
    require:true
},
// consumptionTime1:{
//     type:String,
    
// },
consumptionTime:{
    type:[String],
    
},
// consumptionTime3:{
//     type:String,
    
// },

startDate:{
    type:[String],
    require:true
},
endDate:{
    type:[String],
    require:true
},
remark:{
    type:[String],
    require:true
}
})
// Now we need to create collections

const prescription=new mongoose.model("Prescription",detailsSchema);
module.exports=prescription;