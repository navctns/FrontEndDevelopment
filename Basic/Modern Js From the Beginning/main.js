
//Type Conversion

// let val;

//Number to String
// val = 5;
// val = String(5);
// val = String(4+4);
// val = String(true);
// val = String(new Date());
// val = String([1,2,3,4]);
//
// val = (5).toString();

//String to Number

// val = '5';
// val = Number('5');
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number('Hello');
// val = Number([1,2,3]);
// val = parseInt('100');
// val = parseInt('100.30');
// val = parseFloat('100.30');

// Type Coercion - js automatically convert types

// const val1 = 5;
// const val2 = 6;
// const sumVal = val1 + val2;
// console.log(sumVal); //Outputs an integer

// const val1 = String(5);
// const val2 = 6;
// const sumVal = val1 + val2;
// console.log(sumVal);

//Output
// console.log(val);
// console.log(typeof val);
// console.log(val.length);
// console.log(val.toFixed(2));

//Numbers & Math Object

// const num1 = 100;
// const num2 = 50;
// let val;
//
// //Simple math with number
//
// //Simple math with Numbers
//
// val = num1 + num2;
// val = num1 - num2;
// val = num1 * num2;
// val = num1/num2;
// val = num1 % num2;
// val = num1 % 16;
//
// //Math Object
// // val = Math.PI;
// // val = Math.E;
// // val = Math.round(2.8);
// // val = Math.ceil(2.4);
// // val = Math.floor(2.7);
// // val = Math.sqrt(64);
// // val = Math.abs(-3);
// // val = Math.pow(8,2);
// // val = Math.min(2,33,4,1);
// // val = Math.max(2,44,55,77,100);
// // val = Math.random();
// // val = Math.floor(Math.random() *20 +1);
//
// // STRING METHODS & CONCATINATION
//
// const firstName = "William";
// const lastName = "Shakespeare";
//
// val = firstName + lastName;
//
// val = firstName + ' ' + lastName;
//
// //Append
// // val = 'Brad';
// // val += 'Traversy';
// // let age = 37;
// // val = "Hello, My Name is " +firstName + " and i am " + age + " Years Old";
//
// //Escaping - the closing of string
// val = 'That\'s awesome, I can\'t wait';
//
// //Length
// val = firstName.length;
//
// //concat()
// val = firstName.concat(' ', lastName);
//
// //Change case
//
// val = firstName.toUpperCase();
// val = lastName.toLowerCase();
// // val = firstName + ' ' + lastName;
//
// //indexOf()
// val = firstName.indexOf('l');
// val = firstName.lastIndexOf('l');
//
// //chatAt() - char at an index
// val = firstName.charAt('3');
// val = firstName['3'];//same
//
// //get the last char
// // val = firstName.charAt(firstName.length - 1);
// // val = firstName[firstName.length -1];
// //
// // //Substring out of STRING
// // val = firstName.substring(0,4);
// // val = firstName.slice(-3); // last 3 chars
//
// //split() -- Split String to an array of sub string
//
// const str = "Hello there, my name is naveen";
// val = str.split(' ');
// const strItems = "abc,def,ghi,jkl";
// val = strItems.split(',');// split seperated by commas
//
// //replace() -- replace one with other inside string
// val = str.replace('naveen','naveen vijayan');
//
// //includes() - check whether a sub string inside a str
//
// val = str.includes('name');
// val = str.includes('awesome');
//
// console.log(val);


// Template Literals (ES6)

const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'Miami';

let html;

//Without template strings(es5)

html = '<ul>'+
        '<li>Name:' + name + '</li>' +
        '<li>Age:' + age + '</li>' +
        '<li>Job:' + job + '</li>' +
        '<li>City:' + city + '</li>' + '</ul';


// With Template Strings/Literals (ES6)

function hello(){
  return 'hello';
}

html = `<ul>
        <li>Name:${name}</li>
        <li>Age:${age}</li>
        <li>Job:${job}</li>
        <li>City:${city}</li>
        <li>${2+2}</li>
        <li>${age > 25 ? 'Over 25':'Under 25'}</li>
        <li>${hello()}</li>
      </ul>`
document.body.innerHTML = html;

// ARRAYS and ARRAY METHODS

const numbers = [2,4,6,77,54,12];
const numbers2 = new Array(22,43,56,7);
const fruits = ['Apple','Banana', 'Strawberry','Grapes'];
const mixedType = ['one',2,{'three':3,'four':4}, new Date()];
console.log(numbers);
console.log(numbers2);
console.log(fruits);
console.log(mixedType);

let val;

//Get Array length
val = numbers.length;


//Check whether it is an array

const number1 = 4;
val = Array.isArray(number1);//false
val = Array.isArray(numbers);//true

//Get single value from ARRAY

val = numbers[3];//by index

//Insert into ARRAY
numbers[3] = 8;
console.log(numbers);

//find index of an element
val = numbers.indexOf(54);
console.log(val);

//Mutate ARRAYS

//add on to end
numbers.push(140);
console.log(numbers);

//Add on to front

numbers.unshift(321);
console.log('unshift() :',numbers);

//Take off from end

numbers.pop();
console.log(numbers);

//Take off from front

numbers.shift();
console.log(numbers);

//splice out from any replace

// numbers.splice(1,1);
// numbers.splice(1,2);

//Reverse
// numbers.reverse();

//concatenate ARRAY

// val = numbers.concat(fruits);
console.log(val);
console.log(numbers);

//Sort

val = fruits.sort();

// Numbers Sort

// val = numbers.sort();//only sort based on first digit
// val = numbers.sort(function(x,y){
//   return x-y;
// });

//reverse Sort

// val = numbers.sort(function(x,y){
//   return y-x;
// });

// find()

// function under10(num){
//   return num <10;
// }
// val = numbers.find(under10);
//
// function over10(num){
//   return num >10;
// }
// val = numbers.find(over10);
// console.log(numbers);
// console.log(val);

const person = {

  firstName:'Steve',
  lastName:'Smith',
  age:30,
  email:'steve@aol.com',
  hobbies:['music','sports'],
  address : {
    city:'Edappal',
    state:'Kerala',
  },
  getBirthYear:function(){
    return 2021-this.age;
  },
}

// let val;
// val = person;
//
// console.log(person);
// console.log(person.firstName);
// console.log(person['lastName']);
// console.log(person.address.state);
// console.log(person.getBirthYear());

// Array of Objects

// const people = [
//   {name:'Ravi',age:24},
//   {name:'Maria',age:25},
// ]
//
// for (let i=0; i<people.length; i++){
//   console.log(people[i].name);
// }


// Dates and Times

// let val;
const today = new Date();

val = today;

let birthday = new Date(1994,3,19);
 birthday = new Date(1994,3,19,10,30);
 birthday = new Date('1994-3-19');
 birthday = new Date('March 19,1994 04:24');
birthday = new Date('1994/03/19');
console.log(birthday);

// Date object METHODS

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

let changeDate = new Date('1997/05/4');
changeDate.setMonth(02);
changeDate.setDate(19);
changeDate.setFullYear(1994);
changeDate.setHours(10);
changeDate.setMinutes(45);
changeDate.setSeconds(51);
changeDate.setMilliseconds(945);
console.log(changeDate);
// console.log(val);
