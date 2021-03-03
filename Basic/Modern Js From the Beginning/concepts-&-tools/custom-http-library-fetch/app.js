
const http = new EasyHTTP;

//GET USERS
// http.get('https://jsonplaceholder.typicode.com/users');

//asynchronous way
// const users = http.get("https://jsonplaceholder.typicode.com/users");
// console.log(users);

// http.get("https://jsonplaceholder.typicode.com/users")
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


//POST

//User Data
// const data = {
//   name:'John Doe',
//   username:'johndoe',
//   email: 'jdoe@gmail.com'
// };
//
// http.post("https://jsonplaceholder.typicode.com/users", data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// const dataNew = {
//   name:'John Ralph',
//   username:'johnralph',
//   email: 'johnrlf@gmail.com'
// };
//
// http.put("https://jsonplaceholder.typicode.com/users/1", dataNew)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

//Make an HTTP DELETE Request

http.delete('https://jsonplaceholder.typicode.com/users/1')
    .then(data => console.log(data))
    .catch(err => console.log(err));
