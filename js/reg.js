var data = []; // array
var selectedRow = null;
// 1) FORM HANDELLING

// 1.1 ) form submission 
const onFormSubmit = () => {

    // let fullName = document.getElementById("fullName").value;
    // console.log("Full Name: " + fullName);
   
    // let email = document.getElementById("email").value;
    // console.log("Email: " + email);
   
    // let salary = document.getElementById("salary").value;
    // console.log("Salary: " + salary);
    
    // let city = document.getElementById("city").value;
    // console.log("City: " + city);
 
    // validate mathod---to print the validation of data
    if (validate()) {
     let formData = readFormData();
    //  data.push(formData);//will add the data to they array
    //  console.log(formData);
    if (selectedRow == null) {
     insertNewRecord(formData);
     restForm();}
     else  updateRecord(formData);
 }
 
    else{
     console.log("validation failed");
    }
 };
 
 // 1.2) validation of data
 const  validate = () =>  {
 
    
     let isValid = true;
      //full name validation - if empty it will show a warning msg 
     if (document.getElementById("fullName").value === "") {
        
         isValid = false;
         document.getElementById("fullNameValidationError").classList.remove("hide");
     }
 
     //full name validation - if not empty it will hide the warning msg 
     else { 
         isValid = true; 
         if(
             !document.getElementById("fullNameValidationError").classList.contains("hide")
         ) {
             document.getElementById("fullNameValidationError").classList.add("hide");
         }
     }
 
      //email validation
     if (document.getElementById("email").value === "") {
        
         isValid = false;
         document.getElementById("emailValidationError").classList.remove("hide");
     }
       //email validation - if not empty it will hide the warning msg 
       else { 
         isValid = true; 
         if(
             !document.getElementById("emailValidationError").classList.contains("hide")
         ) {
             document.getElementById("emailValidationError").classList.add("hide");
         }
     }
 
     //salary validation
     if (document.getElementById("salary").value === "") {
        
             isValid = false;
             document.getElementById("salaryValidationError").classList.remove("hide");
     }
    
     //salary validation - if not empty it will hide the warning msg 
     else { 
         isValid = true; 
         if(
             !document.getElementById("salaryValidationError").classList.contains("hide")
         ) {
             document.getElementById("salaryValidationError").classList.add("hide");
         }
     }
     //city validation
     if (document.getElementById("city").value === "") {
        
              isValid = false;
              document.getElementById("cityValidationError").classList.remove("hide");
 }
  //city validation - if not empty it will hide the warning msg 
  else { 
     isValid = true; 
     if(
         !document.getElementById("cityValidationError").classList.contains("hide")
     ) {
         document.getElementById("cityValidationError").classList.add("hide");
     }
 }
 
     return isValid;
 };
 
 const readFormData = () => {
      var formData = {};
      // to get the data from the all input fields
     formData.fullName = document.getElementById("fullName").value;
     formData.email = document.getElementById("email").value;
     formData.salary = document.getElementById("salary").value;
     formData.city = document.getElementById("city").value;
     return formData;

 };
 function restForm(){
        document.getElementById("fullName").value ="";
        document.getElementById("email").value ="";
        document.getElementById("salary").value ="";
        document.getElementById("city").value ="";
  };

  const insertNewRecord = (obj) => {
    data.push(obj);
    displayRecord();
  };


  // used to display the info
  // peint the array of json objects (data)
  const displayRecord = () => {
    var table = document.getElementById("employeeList");
    // getElementsByTagName will return an array.
    var tablebody = table.getElementsByTagName("tbody")[0];
    console.log(tablebody)
    var newRow = tablebody.insertRow(tablebody.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data[data.length -1].fullName;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data[data.length -1].email;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data[data.length -1].salary;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data[data.length -1].city;

    cell5 = newRow.insertCell(4);
    //creat button in js. // this ic refer to current tage 
    cell5.innerHTML = `<a class="btn btn-primary" onclick=" onEdit (this)" > Edit</a> <a class="btn btn-primary" onclick=" onDelete (this)" > Delete</a>`;
 
    data.forEach((e)=> console.log(e));  };

    //conformation  box message // td 
    const onDelete = (td) => {
        if (confirm (" are you sure you want to delete this record?")) {
            let row = td.parentElement.parentElement;
            //remove that row from the table, we can't remove the row directly, we need table element ref to remove it
            //because table will have a method / function called deleteRow() (predefined one)
            document.getElementById('employeeList'). deleteRow(row.rowIndex);
            console.log("record deleted");
        } else { 
            console.log("record not deleted");
        };
    }

    //edditing the infor // the infor should display in the form // when submit it should be update 
    const onEdit = (td) =>{
        selectedRow = td.parentElement.parentElement;
        document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;

        document.getElementById("email").value = selectedRow.cells[1].innerHTML;

        document.getElementById("salary").value = selectedRow.cells[2].innerHTML;

        document.getElementById("city").value = selectedRow.cells[3].innerHTML;

    };

    // update the data after editing
    const updateRecord = (formData) => {
        selectedRow.cells[0].innerHTML = formData.fullName;
        selectedRow.cells[1].innerHTML = formData.email;
        selectedRow.cells[2].innerHTML = formData.salary;
        selectedRow.cells[3].innerHTML = formData.city;
      };