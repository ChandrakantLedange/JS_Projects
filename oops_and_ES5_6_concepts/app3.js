class Person {
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`
    }
}

class Customer extends Person{
    constructor(firstName,lastName,phone){
        super(firstName,lastName);
        this.phone = phone;
    }
    static getMembership(){
        return 500;
    }
}

const person1 = new Person('john','smith');
console.log(person1)
console.log(person1.greeting())

const cust1 = new Customer('waren', 'kith',9997778888);
console.log(cust1);
console.log(cust1.greeting());
console.log(Customer.getMembership());