
//ES5 method
// const person = require('./mymoduleES5');
// console.log(person.name);

//ES6 Method
// import {person, sayHello} from './mymodule2';
// console.log(person);
// console.log(sayHello());

// import * as mod from './mymodule2';
// console.log(mod.person);
// console.log(mod.sayHello());

import greetings from './mymodule2';
console.log(greetings);

const greeting = 'Hello World';
console.log(greeting);

const getData = async (url) => {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
};

getData('https://jsonplaceholder.typicode.com/posts');
