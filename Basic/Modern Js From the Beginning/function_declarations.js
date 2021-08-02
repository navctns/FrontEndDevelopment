

// Function function_declarations

function greet(){
  return 'Hello';
}
//function with arg
function greet(firstName, lastName){
  return 'Hello' + ' ' + firstName + ' ' + lastName;
}

//function with default
function greet(firstName, lastName){
  if(typeof firstName === 'undefined'){
    firstName = 'Maya';
  }
  if(typeof lastName == 'undefined'){
    lastName = 'Appukuttan';
  }

  return 'Hello' + ' ' + firstName + ' ' + lastName;
}

//default arguments with es6

function greet(firstName = 'Maya',lastName='Thomaskutty'){
  return 'Hello' + ' ' + firstName + ' ' + lastName;
}
console.log(greet());
// console.log(greet('Viswanath','Edappal'));

// FUNCTION EXPRESSIONS
//function as an expression

const square = function(x=3){
  return x*x;
};

console.log(square(40));

//IMMIDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

(function(){
  console.log('IIFEs Ran...');
})();

((name) => {
  console.log(`IIFEs Ran Again... with name ${name}`);
})('Vijay Sethupathy');

(function(name){
  console.log(`IIFEs Ran... with name ${name}`);
})('Ilayadalapathy Vijay');

// PROPERTY METHODS
// function inside an object called METHODS

const todo = {
  activity:[],
  editNum:0,
  add: function(activity){
    this.activity.push(activity);
    console.log(this.activity);
  },

  edit: function(){
    this.editNum += 1;
    console.log(`Edited ${this.editNum} times!`);
  },
  delete: function(){
    this.activity.pop();
    console.log(`Removed an activity Existing: ${this.activity}`);
  }

}

todo.add('Walking');
todo.add('Reading');
todo.edit();
todo.edit();
todo.delete();
