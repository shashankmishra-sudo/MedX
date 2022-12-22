

fetch('http://localhost:2000/getdata') //Fetch the api which is querried by user using Phone number
  .then((data) => {
    // console.log(data);
    return data.json();
  }).then((objectdata)=>{

    // Show the details in html table   
    document.getElementById("name").innerHTML=objectdata.name;
    document.getElementById("emailAddress").innerHTML=objectdata.EmailAddress;
    document.getElementById("phoneNumber").innerHTML=objectdata.PhoneNumber;
    document.getElementById("age").innerHTML=objectdata.age;
    document.getElementById("gender").innerHTML=objectdata.gender;
    document.getElementById("address").innerHTML=objectdata.Address1;
    document.getElementById("country").innerHTML=objectdata.Country;
    document.getElementById("city").innerHTML=objectdata.city;
    document.getElementById("weight").innerHTML=objectdata.Weight;
    document.getElementById("bodyTemperature").innerHTML=objectdata.BodyTemprature;
    document.getElementById("complains").innerHTML=objectdata.Complaints;
    document.getElementById("alergies").innerHTML=objectdata.Allergies;
   
let count=0;

   for (const iterator of objectdata.MadicineName) 
   {
    count++;
   }
   console.log(count)
var k=0;
for(var i=0; i<count;i++)
{
    const note = document.createElement("div");
    note.classList.add("node");
    note.id = "nodeId";
// If there is more the one suggested madicine in database, it will print all one by one
    note.innerHTML = `
    
    <div class="container"> 
      <table class="table table-bordered">
          <thead class="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Details</th>
              
            </tr>
          </thead>
          <tbody id="tbody-madicine">
  
            <tr>
              <th scope="row">Madicine Name</th>
              <td colspan="2" id="MadicineName">${objectdata.MadicineName[k]}</td>
              
            </tr>
  
            <tr>
              <th scope="row">Quantity</th>
              <td colspan="2" id="quantity">${objectdata.Quantity[k]}</td>
              
            </tr>
            <tr>
              <th scope="row">Consumption Time</th>
              <td colspan="2" id="consumptionTime">${objectdata.consumptionTime[k]}</td>
              
            </tr>
            <tr>
              <th scope="row">Start Date</th>
              <td colspan="2" id="startDate">${objectdata.startDate[k]}</td>
              
            </tr>
            <tr>
              <th scope="row">End Date</th>
              <td colspan="2" id="endDate">${objectdata.endDate[k]}</td>
              
            </tr>
            <tr>
              <th scope="row">Remark</th>
              <td colspan="2" id="Remark">${objectdata.remark[k]}</td>
              
            </tr>
  
  
  
          </tbody>

        </table>

    `;
    k++;
    
    main.appendChild(note);


}

// To print our HTML Page

const print=document.getElementById("addbtn");
print.addEventListener(
    "click",
    function () {
        window.print();
    }

)

  });