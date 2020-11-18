window.addEventListener('DOMContentLoaded',(event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input',function(){
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(nameRegex.test(name.value)||name.value.length==0)
            textError.textContent="";
        else 
            textError.textContent="Name is invalid";
    });
    //add event listener to start date validation
    let day = document.getElementById("day");
    let month = document.getElementById("month");
    let year = document.getElementById("year");
    let dateError = document.querySelector(".date-error");    
    day.addEventListener('click',checkStartDate);
    month.addEventListener('click',checkStartDate);
    year.addEventListener('click',checkStartDate);
    function checkStartDate() {
        startDate = new Date(year.value+"-"+month.value+"-"+day.value);
        console.log(startDate);
        if(startDate.getMonth()<=(new Date()).getMonth()
        &&startDate.getDay()<=(new Date()).getDay()
        &&startDate.getFullYear()<=(new Date()).getFullYear())
         dateError.textContent="";
        else
       dateError.textContent = "Invalid Start date ";
    }
});
    //added event listener to salary to display appropriate value 
    function salaryInput(){
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input',function(){
    output.textContent = salary.value;
    });
}

function save(){
    var name= document.getElementById("name").value;

    const images = document.getElementsByName("profile");
    let profile=images[0];
    for(let i=0;i<images.length;i++){
        if(images[i].checked)
            profile=images[i].value;
    }

    let genders = document.getElementsByName("gender");
    for(let i=0;i<genders.length;i++){
        if(genders[i].checked)
            gender=genders[i].value;
    }

    let departments = new Array();
    const departmentsForm = document.getElementsByClassName("checkbox");
    for(let i=0;i<departmentsForm.length;i++){
        if(departmentsForm[i].checked)
            departments.push(departmentsForm[i].value);
    }

    var salary = document.getElementById("salary").value;
   const day = document.getElementById("day").value;
   const month = document.getElementById("month").value;
   const year = document.getElementById("year").value;
    var note = document.getElementById("notes").value;
    let startDate =new Date(year+"-"+month+"-"+day);

   const employeepayrollData = new EmployeePayrollData(name, salary, gender,startDate, departments, profile, note);

   alert("Thanks! Your form is submitted successfully!" + "\n "+employeepayrollData.toString());
   console.log(employeepayrollData);
  } 