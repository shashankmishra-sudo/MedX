const express=require("express");
const app=express();
const eventEmmiter=require('events');
const event=new eventEmmiter();


const path=require("path");
const port=process.env.port || 2000;
require("./DB/connectionToDb")
const precribe=require("./DB/prescriptions");


const static_path=path.join(__dirname,"./public");

app.use(express.static(static_path));  //To serve static files such as html, CSS, and JavaScript files 
app.use(express.json()); //To parse the incoming requests with JSON payloads
app.use(express.urlencoded({extended:false}));

app.get("/",(req, res)=>{

    res.send("Hello");
});

// To get the data of patient accounrding to enterd number in form of api
app.post("/search",(req, res)=>{

    let findPhoneNumber=req.body.FindUsingPhoneNumber;
    console.log("*********"+findPhoneNumber);
    res.sendFile(static_path+'/search.html')
    
   event.emit("FindpatientBynumber",findPhoneNumber); //"FindpatientBynumber" this function is defind below

   
});


// Save Deatils In DataBase
app.post("/",(req, res)=>{
try{

const Details=new precribe({
// Get the data from UI Input Box and map it with databse Key 

    name:req.body.name,
    EmailAddress:req.body.EmailAddress,
    PhoneNumber:req.body.PhoneNumber,
    Age:req.body.Age,
    gender:req.body.gender,
    Address1:req.body.Address1,
    Country:req.body.Country,
    city:req.body.city,
    Weight:req.body.Weight,
    BodyTemprature:req.body.BodyTemprature,
    Complaints:req.body.Complaints,
    Allergies:req.body.Allergies,
    MadicineName:req.body.MadicineName,
    Quantity:req.body.Quantity,
    consumptionTime:req.body.consumptionTime,
    startDate:req.body.startDate,
    endDate:req.body.endDate,
    remark:req.body.remark
    

})

const saved=Details.save();

res.sendFile(static_path+'/index.html')
}
catch (error){
res.status(400).send(error);
}
    
});


app.listen(port,()=>{

    console.log(`Server Is Running At Port ${port}`);
});

// Find patient details according to number and provide in "/getdata" API

event.on("FindpatientBynumber",(findPhoneNumber1)=>{


    let DatabaseSize=0;
    // To Find Number of document available in Database
    precribe.count().then((count) => {
        DatabaseSize=count;
    });
    
    
    
    precribe.find((err, result)=>{
        try{
            for(let i=0;i<DatabaseSize;i++)
            {
                if(result[i].PhoneNumber==findPhoneNumber1){
                    
                    app.get("/getdata",(req,res)=>{
                        res.send(result[i]);
                    })


                }
            }
        }
        catch(e)
        {
            console.log(e);
        }
    
        
    })
})

// 


