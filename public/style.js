
const addMadicine = document.querySelector('#addbtn');
var count=0;

// To add multiple madicine section for suggesting to patient on UI though button click

addMadicine.addEventListener(
    "click",
    function () {
        addNewMecine() //This Function Is defined below
    }

)




const addNewMecine = () => {
    const note = document.createElement("div");
    note.classList.add("node");
    count++;

    note.id = "nodeId";

    note.innerHTML = `
    <div class="input-box address">
            
            
    <div class="column">
      <input type="text" placeholder="Madicine Name" name="MadicineName"  />
      <input type="number" placeholder="Quantity" name="Quantity"  />
    </div>



    <div class="gender-box">
        <h3>Consumption Time</h3>
        <div class="column">
                     
    
        <input type="text" placeholder="Consumption Time" name="consumptionTime"  />
      </div> 
      </div>

   
    
      
      
      
      <label>Duration (Start Date & End Date)</label>
      <div class="column">
       
        <input type="date" placeholder="Start Date" name="startDate"  />
        
        <input type="date" placeholder="End Date" name="endDate"  />
      </div>

      <div class="column">
                     
    
        <input type="text" placeholder="Remark" name="remark"  />
      </div>


  </div>
  <hr>
    `;
    main.appendChild(note);
}









