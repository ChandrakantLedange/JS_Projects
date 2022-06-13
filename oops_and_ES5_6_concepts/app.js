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