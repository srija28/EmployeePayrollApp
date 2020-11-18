function salaryInput(){
const salary = document.querySelector('#salary');
 const output = document.querySelector('.salary-output');
 output.textContent = salary.value;
 salary.addEventListener('input', function(){
   output.textContent = salary.value;
 });
}

class EmployeePayrollData{
    constructor(...params){
        this.name = params[0];
        this.salary = params[1];
        this.gender=params[2];
        this.startDate = params[3];
        this.department = params[4];
        this.profile = params[5];
        this.notes = params[6];
    }
    get name(){
        return this._name;
    }
    set name(name){
            this._name = name;
       }
    get profile(){
        return this._profile;
    }
    set profile(profile){
        this._profile = profile;
    }
    get gender(){
        return this._gender;
    }
    set gender(gender){
            this._gender = gender;
        }
    get department(){
        return this._department;
    }
    set department(department){
        this._department = department;
    }
    get salary(){
        return this._salary;
    }
    set salary(salary){
            this._salary = salary;
    }

    get startDate(){
        return this._startDate;
    }
    set startDate(startDate){
        this._startDate=startDate;
    }
    get notes(){
        return this._notes;
    }
    set notes(notes){
        this._notes=notes;
    }
    toString(){
        const options = { year: 'numeric', month: 'long' , day: 'numeric'};
        const empDate = this.startDate === undefined ? "undefined":this.startDate.toLocaleDateString("en-US",options);
        return  "Name = "+this.name+", Salary = "+this.salary+" ,Gender = "+this.gender+" ,Start date = "+empDate+" ,Department = "+this.department+" ,Profile = "+this.profile+" ,Notes = "+this.notes;
    }
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
   var day = document.getElementById("day").value;
   var month = document.getElementById("month").value;
   var year = document.getElementById("year").value;
    var note = document.getElementById("notes").value;
    var startDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));

   const employeepayrollData = new EmployeePayrollData(name, salary, gender,startDate, departments, profile, note);

   alert("Thanks! Your form is submitted successfully!" + "\n "+employeepayrollData.toString());
   console.log("thanks for adding data!");
  } 