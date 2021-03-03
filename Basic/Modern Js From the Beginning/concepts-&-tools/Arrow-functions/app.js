
// const sayHello = function(){
//   console.log('Hello');
// }

//USING ARROW FUNCTIONS
// const sayHello = () => {
//   console.log('Hello');
// }

//MORE SHORTER SYNTAX
//Single line function doesn't need braces
// const sayHello = () => console.log("Hello");
// sayHello();

//RETURN AN ITEM(One line return)
// const sayHello = () => 'Hello';
// console.log(sayHello());

//RETURN AN OBJECT LITERAL
// const sayHello = () => ({msg:'Hello'});
// console.log(sayHello());

//WITH ARGUMENT
// const sayHello = (name) => console.log(`Hello ${name}`);
// sayHello('Susy');

//Single Param not need parenthesis
// const sayHello = name => console.log(`Hello ${name} Good Evening`);
// sayHello('Job');

//For more than one parameters, need parenthesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName} Welcome to the Party`);
// sayHello('July','Sanches');

//USE ARROW FUNCTIONS AS CALLBACKS
const users = ["Nathan", "John", "William"];
// const nameLengths = users.map(function(name){
//   return name.length;
// });

//SHORT METHOD
// const nameLengths = users.map((name) => {
//   return name.length;
// });

//SHORTEST METHOD
const nameLengths = users.map((name) => name.length);

console.log(nameLengths);
