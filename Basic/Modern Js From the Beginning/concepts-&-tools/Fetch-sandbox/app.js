
document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

//GET TEXT
// function getText(){
//
//   fetch('test.txt')
//       .then(function(res){
//         // console.log(res);
//         return res.text();
//       })
//       .then(function(data){
//         console.log(data);
//         document.getElementById('output').innerHTML = data;
//       });
// }

//WITH ARROW FUNCTIONS
function getText(){

  fetch('test.txt')
      .then(res => res.text())
      .then(data => {
        console.log(data);
        document.getElementById('output').innerHTML = data;
      })
      .catch(err => console.log(err));
}

//GET JSON
// function getJson(){
//
//   fetch('posts.json')
//       .then(function(res){
//         // console.log(res);
//         return res.json();
//       })
//       .then(function(data){
//         console.log(data);
//         let output = '';
//         data.forEach(function(post){
//           output += `<li>${post.title}</li>`;
//         });
//         document.getElementById('output').innerHTML = output;
//       });
// }

//WITH ARROW FUNCTIONS
function getJson(){

  fetch('posts.json')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        let output = '';
        data.forEach(function(post){
          output += `<li>${post.title}</li>`;
        });
        document.getElementById('output').innerHTML = output;
      });
}

//GET FROM EXTERNAL API

// function getExternal(){
//
//   fetch('https://api.github.com/users')
//       .then(function(res){
//         return res.json();
//       })
//       .then(function(data){
//         data.forEach(function(user){
//           console.log(user);
//           output += `<li>${user.login}</li>`;
//         });
//         document.getElementById('output').innerHTML = output;
//       })
//       .catch(function(err){
//         console.log(err);
//       });
// }

//WITH ARROW FUNCTIONS

function getExternal(){

  fetch('https://api.github.com/users')
      .then(res => res.json())
      .then(data =>{
        data.forEach(user =>{
          console.log(user);
          output += `<li>${user.login}</li>`;
        });
        document.getElementById('output').innerHTML = output;
      })
      .catch(err => console.log(err));
}
