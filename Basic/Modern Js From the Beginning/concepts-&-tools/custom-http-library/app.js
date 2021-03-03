
const http = new easyHTTP;

// Get posts
// const posts = http.get('https://jsonplaceholder.typicode.com/posts');
// console.log(posts);
//
// http.get('https://jsonplaceholder.typicode.com/posts/1',
// function(err,posts){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log(posts);
//   }
// });

//POST Request

//create data
// const data = {
//   title:'Custom Post',
//   body:'This is a custom post'
// };
//
// //create post
// http.post('https://jsonplaceholder.typicode.com/posts', data,
//       function(err,post){
//         if(err){
//           console.log(err);
//         }
//         else{
//           console.log(post);
//         }
//       });

// PUT Request

// create data
const data = {
  title:'Custom Post PUT again',
  body:'This is a custom post'
};

// create post
http.put('https://jsonplaceholder.typicode.com/posts/1', data,
      function(err,post){
        if(err){
          console.log(err);
        }
        else{
          console.log(post);
        }
      });

// DELETE Request

// http.delete('https://jsonplaceholder.typicode.com/posts/1',
//       function(err,post){
//         if(err){
//           console.log(err);
//         }
//         else{
//           console.log(post);
//         }
//       });
