
// try {
//   //Produce a reference error
//   myFunction();
// }catch(e){
//   console.log(e);
// }
// console.log('Program continues...');

//e PROPERTIES
// try {
//   //Produce a reference error
//   // myFunction();
//   //Produce a TypeError
//   // null.myFunction();
//
//   //EVAL - CORRECT
//   console.log(eval('"Hello World"'));
//   console.log(eval('2+3'));
//   //SYNTAX ERROR
//   eval('Hello World');
    //URI Error
    // decodeURIComponent('%');
//
// }catch(e){
//   // console.log(`${e.name}: ITS NULL`);//TyepError Response
//   console.log(e);
//   console.log('Name: ',e.name);
//   console.log('message: ',e.message);
//   console.log('Reference error: ', e instanceof ReferenceError);
//   console.log('Type error: ', e instanceof TypeError);
//
// }finally {
//   console.log('Finally runs regardless of results');
// }
// console.log('Program continues...');


//Global, Core and other Errors

//Custom error
const user = {email:'jdoe@gmail.com'};
try {
  if(!user.name){
    throw new SyntaxError('User has no name');
  }
}catch(e) {
  console.log(`User Error: ${e.message}`);
}

console.log('Custom Error');
