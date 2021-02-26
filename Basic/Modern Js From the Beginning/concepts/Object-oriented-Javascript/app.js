
const person = {

  name:'Jose',
  age:36,
};

// console.log(person);
// console.log(person.age);

//For multiple instance of a class we need constructor

//Person constructor

// constructor starts with capital
// function Person(name,dob){
//   //constructor for person object
//   this.name = name;
//   this.birthday = new Date(dob);
//
//   this.calculateAge = function(){
//
//     const diff = Date.now() - this.birthday.getTime();
//     console.log(diff);
//     const ageDate = new Date(diff);
//     console.log(ageDate);
//     return ageDate.getUTCFullYear() - 1970;
//   }
// }
//
// const jose = new Person('Jose','1981-10-09');
// console.log(jose);
// console.log(`Name:${jose.name}\n Age:${jose.birthday}`);
// console.log(jose.calculateAge());

//BUILT IN CONSTRUCTORS

//String

// const name1 = 'Jeff';
// console.log(name1);
// console.log(typeof name1);
// const name2 = new String('Jeff');
// console.log(name2);
// console.log(typeof name2);
//
// //Other CONSTRUCTORS
//
// //number
//
// const num1 = 5; //Primitive number
// console.log(num1);
// console.log(typeof num1);
// const num2 = new Number(5);
// console.log(num2);
// console.log(typeof num2);

//Boolean

// const bool1 = true;
// console.log(bool1);
// console.log(typeof bool1);
// const bool2 = new Boolean(true);
// console.log(bool2);
// console.log(typeof bool2);
//
// // Function
//
// const getSum1 = function(x,y){
//   return x + y ;
// }
// console.log(getSum1(1,3));
//
// const getSum2 = new Function('x','y','return x+y');
// console.log(getSum2(3,4));

// Object

// const john1 = {name : 'John'};
// console.log(john1);
// console.log(typeof john1);
// const john2 = new Object({name: 'Job'});
// console.log(john2);
// console.log(typeof john2);
//
// //Array
//
// const arr1 = [1,2,3,4];
// console.log(arr1);
// console.log(typeof arr1);
// const arr2 = new Array(2,4,6,8,10);
// console.log(arr2);
// console.log(typeof arr2);
//
// //Regular Expression
//
// const rel1 = /\w+/;
// console.log(rel1);
// console.log(typeof rel1);
// const rel2 = new RegExp('\\w+');//add an exra \ to avoid escape char
// console.log(rel2);
// console.log(typeof rel2);

//PROTOTYPES of Object
// can defing functions and other in prototype of an object and used , but it wont be its own property

// constructor starts with capital
// function Person(firstName,lastName,dob){
//   //constructor for person object
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.birthday = new Date(dob);
//
// }
//
// mary = new Person('Mary','Johnson','1990-04-24');
// console.log(mary);
//
// //calculate age add to prototype
//
// Person.prototype.calculateAge = function(){
//
//   const diff = Date.now() - this.birthday.getTime();
//   // console.log(diff);
//   const ageDate = new Date(diff);
//   // console.log(ageDate);
//   return ageDate.getUTCFullYear() - 1970;
// }
//
// //functin can be accessed as befor
// console.log(mary.calculateAge());
//
// //get Full name
//
// Person.prototype.getFullName = function(){
//   return `${this.firstName} ${this.lastName}`;
// }
//
// console.log(mary.getFullName());
//
// //Change last name
//
// Person.prototype.changeLastName = function(newLastName){
//   this.lastName = newLastName;
// }
//
// mary.changeLastName('Jackson');
//
// //Object methods from objects prop
// console.log(mary.hasOwnProperty('firstName'));
// console.log(mary.hasOwnProperty('getFullName'));


// PROTOTYPAL INHERITANCE

//Person Constructor

// function Person(firstName, lastName){
//   this.firstName = firstName;
//   this.lastName = lastName;
// };
//
// Person.prototype.greeting = function(){
//   return `Hello there ${this.firstName} ${this.lastName}`;
// };
//
// const person1 = new Person('Jack','Harrison');
// console.log(person1.greeting());
//
// //Customer Constructor
//
// function Customer(firstName, lastName, phone, membership){
//   Person.call(this,firstName,lastName);//calling other constructor
//   this.phone = phone;
//   this.membership = membership;
// }
//
// //Create a customer
//
//
//
// //Inherit the Person prototype methods
// Customer.prototype = Object.create(Person.prototype);
//
// const customer1 = new Customer('Maria','Johnson','444-555-44','Standard');
// console.log(customer1);
// //
//
// console.log(customer1.greeting()); //ERROR TypeError: customer1.greeting is not a function
//
// //Make customer prototype return Customer() constructor
//
// Customer.prototype.constructor = Customer;
// console.log(Customer);
//
// //Separate greeting for customer
//
// Customer.prototype.greeting = function(){
//   return `Hello there ${this.firstName} ${this.lastName} , Welcome to our Company`;
// }
//
// console.log(customer1.greeting());//Customer greeting
// console.log(person1.greeting());// Person greeting

//USING OBJECT CREATE

// const PersonPrototypes = {
//
//   greeting: function(){
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   },
//   changeLastName: function(newLastName){
//     this.lastName = newLastName;
//   }
// }
//
// const mary = Object.create(PersonPrototypes);
// mary.firstName = 'Mary';
// mary.lastName = 'Williams';
// mary.age = 30;
//
// console.log(mary);
// mary.changeLastName('Jackson');
// console.log(mary.greeting());
//
// //Other method
//
// const jude = Object.create(PersonPrototypes,{
//
//   firstName : {value:'Jude'},
//   lastName : {value:'Law'},
//   age:{value:49},
// });
//
// console.log(jude);
// console.log(jude.greeting());

// ES6 CLASSES
//Like in languages like python, java, php ...

// class Person {
//
//   constructor (firstName, lastName,dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
//   }
//
//   greeting(){
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   }
//
//   calculateAge(){
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }
//
//   changeLastName(newLastName){
//     this.lastName = newLastName;
//   }
//
//   //static method standalone to the class
//   static addNumbers(x,y){
//     return x + y;
//   }
//
//   }
//
//
//
//
// const mary = new Person('Mary','Williams','1980-11-13');
// console.log(mary);
// console.log(mary.greeting());
// console.log(mary.calculateAge());
// mary.changeLastName('Thompson');
// console.log(mary.greeting());
//
// // console.log(mary.addNumbers(1,2)); Error its a static function
//
// //calling a static function
// console.log(Person.addNumbers(1,2));

// SUBCLASSES

class Person {

  constructor(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greeting(){
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person{

  constructor(firstName,lastName,phone,membership){
    super(firstName,lastName);
    this.phone = phone;
    this.membership = membership;
  }

  //customer specific static function
  static getMembershipCost(){
    return 500;
  }
}

const john = new Customer('John','Doe', '445-555-222','Premium');
console.log(john);
console.log(john.greeting());
console.log(Customer.getMembershipCost());

//Customer specific methods can be also made
