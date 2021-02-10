
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

const num1 = 100;
const num2 = 50;
let val;

//Simple math with number

//Simple math with Numbers

val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1/num2;
val = num1 % num2;
val = num1 % 16;

//Math Object
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.8);
// val = Math.ceil(2.4);
// val = Math.floor(2.7);
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.pow(8,2);
// val = Math.min(2,33,4,1);
// val = Math.max(2,44,55,77,100);
// val = Math.random();
// val = Math.floor(Math.random() *20 +1);

// STRING METHODS & CONCATINATION

const firstName = "William";
const lastName = "Shakespeare";

val = firstName + lastName;

val = firstName + ' ' + lastName;

//Append
// val = 'Brad';
// val += 'Traversy';
// let age = 37;
// val = "Hello, My Name is " +firstName + " and i am " + age + " Years Old";

//Escaping - the closing of string
val = 'That\'s awesome, I can\'t wait';

//Length
val = firstName.length;

//concat()
val = firstName.concat(' ', lastName);

//Change case

val = firstName.toUpperCase();
val = lastName.toLowerCase();
// val = firstName + ' ' + lastName;

//indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

//chatAt() - char at an index
val = firstName.charAt('3');
val = firstName['3'];//same

//get the last char
val = firstName.charAt(firstName.length - 1);
val = firstName[firstName.length -1];

//Substring out of STRING
val = firstName.substring(0,4);
val = firstName.slice(-3); // last 3 chars

//split() -- Split String to an array of sub string

const str = "Hello there, my name is naveen";
val = str.split(' ');
const strItems = "abc,def,ghi,jkl";
val = strItems.split(',');// split seperated by commas

//replace() -- replace one with other inside string
val = str.replace('naveen','naveen vijayan');

//includes() - check whether a sub string inside a str

val = str.includes('name');
val = str.includes('awesome');

console.log(val);


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
