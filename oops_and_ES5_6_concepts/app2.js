//Prototype
//Object.prototype

function Person(firstName,lastName,dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calculateAge = function(){
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff)
    //     return Math.abs(ageDate.getUTCFullYear()- 1970)
    // }
}

//Calculate age prototype method
Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff)
    return Math.abs(ageDate.getUTCFullYear()- 1970)
}

//Get Fullname
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}

//Get merried 
Person.prototype.getMarried= function(newLastName){
    this.lastName = newLastName;
}

const ganesh = new Person('Ganesh','Ledange','5-9-1999');
const mangesh = new Person('Mangesh','Dhone','1-11-1998');

console.log(ganesh.calculateAge());
console.log(mangesh.calculateAge());
console.log(mangesh.getFullName()); //Mangesh Dhone
console.log(mangesh)
console.log(mangesh.getMarried("Shinde"));
console.log(mangesh.getFullName()); //Mangesh Shinde
console.log(mangesh.hasOwnProperty('firstName')); //true
console.log(mangesh.hasOwnProperty('firstChild')); //false

// ** Prototypal inheritance
//Employee constructor
function Employee(rollNum,Name){
    this.rollNum = rollNum;
    this.Name = Name;
}

//greeting
Employee.prototype.greeting = function(){
    return `Hello there ${this.rollNum} ${this.Name}`;
}

const emp1 = new Employee(1001,'Harish');
console.log(emp1.greeting());

//inherit the person prototype methods
Customer.prototype = Object.create(Employee.prototype);

//customer constructor
function Customer(rollNum,Name,phone){
    Employee.call(this,rollNum,Name);//to access parent value
    this.phone = phone;
}

const cust1 = new Customer(2001,'Pnakaj',9997778888)
console.log(cust1);
console.log(cust1.greeting());