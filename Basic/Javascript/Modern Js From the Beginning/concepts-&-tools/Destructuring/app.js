
//Destructuring Assignment
let a,b;
[a,b] = [100,200];
// console.log(a);
// console.log(b);

//Rest Pattern
[a,b,c,...rest] = [100,200,300,400,500,600];
// console.log(rest)

//WITH OBJECTS
({a,b} = {a:100, b:200, c:300, d:400});
// console.log(a,b);
//Rest Pattern with Object
({a,b,...lastItems} = {a:100, b:200, c:300, d:400, d:500, e:600});
// console.log(lastItems);

//Array Destructuring
const people = ['John', 'Beth', 'Mike'];
// const [person1, person2, person3] = people;
// console.log(person1,person2,person3);

//Parse array returned from function
function getPeople(){
  return ['John','Beth','Mike'];
}

let person1,person2,person3;
[person1,person2,person3] = getPeople();
// console.log(person1,person2,person3);

//Object Deconstructing

const person = {
  name:'John Doe',
  age:32,
  city:'Miami',
  gender:'male',
  sayHello:function(){
    console.log('Hello');
  }
}

//Old ES5
// const name = person.name,
//       age = person.age,
//       city = person.city,
//       gender = person.gender;

// console.log(name,age,gender,city)

//New ES6 Deconstructing
const {name,age,city,sayHello} = person;
console.log(name,age,city);

sayHello();
