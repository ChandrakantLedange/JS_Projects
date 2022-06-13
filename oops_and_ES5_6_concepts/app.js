//Person constructor
function Person(name,dob){
    this.name = name;
    // this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff)
        return Math.abs(ageDate.getUTCFullYear()- 1970)
    }
}

// const brad = new Person('Brad',30);
const john = new Person('john','11-12-1994');
console.log(john);
console.log(john.calculateAge());


// ** Built in Constructor **
//with new keyword
//string

const name1 = 'Ganesh';
const name2 = new String('Ganesh');//characters with index like key and valye (object)
name2.name3 = 'Ritesh';
console.log(name2)
console.log(typeof name1) //string
console.log(typeof name2) //object

//difference between == and === 
//== just compare value
//=== compare value and it's type

if(name2 === 'Ganesh'){
    console.log("YES");
}else{
    console.log("NO")
}

//Numbers

const num1 = 5;
const num2 = new Number(5);
console.log(num1);//5
console.log(num2);// object

//Boolean
const boolean1 = true;
const boolean2 = new Boolean(true);
console.log(boolean1);//true
console.log(boolean2);// object

//function
const getSum1 = function(x,y){
    return x+y;
}

const getSum2 = new Function('x','y', 'return 1+1');

console.log(getSum1(10,20));
console.log(getSum2()); //2

//object
const obj1 = {name:"smith"};

const obj2 = new Object({name:"kirtik"});

console.log(obj1);
console.log(obj2);

//Array
const arr1 = [1,2,3,4,5];
const arr2 = new Array(1,2,3,4,5);

console.log(arr1);
console.log(arr2);

//Regular Expression
const re1 = '/\w+/';
const re2 = new RegExp('\w+');

console.log(re1)
console.log(re2)