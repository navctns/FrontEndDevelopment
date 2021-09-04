
http = new EasyHTTP;

// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

//HTTP POST Request
const data = {
  name:'Michelle',
  username:'michel',
  email:'mitchel@gmail.com'
}
// http.post('https://jsonplaceholder.typicode.com/users',data)
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

//HTTP PUT Request

// http.put('https://jsonplaceholder.typicode.com/users/1',data)
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

//HTTP DELETE Request

http.delete('https://jsonplaceholder.typicode.com/users/1')
  .then(res => console.log(res))
  .catch(err => console.log(err));
