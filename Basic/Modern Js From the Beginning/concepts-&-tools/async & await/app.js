
// function myFunc(){
//   return 'Hello';
// }
//
// console.log(myFunc());


//async makes a function return a promise

// async function myFunc(){
//   return 'Hello';
// }

//with Promise inside
// async function myFunc(){
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'),1000);
//   });
//
//   const res = await promise;//makes a resolve
//
//   //proceeds only after resolve
//   return res;
//
// }



//ERROR & CATCH

// async function myFunc(){
//
//   const promise = new Promise((resolve,reject) => {
//     setTimeout(() => resolve('Hello'),1000);
//   });
//   const error = true;
//   if(!error){
//     const res = await promise;
//     return res;
//   }else{
//     await Promise.reject(new Error("Something went wrong"));
//   }
// }
//
// myFunc()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

//ASYNC and AWAIT ON FETCH

async function getUsers(){
  //await response of the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  //only proceed once its resolved
  const data = await response.json();

  //only proceed once SECOND promise is resolved
  return data;
}

getUsers().then(users => console.log(users));
