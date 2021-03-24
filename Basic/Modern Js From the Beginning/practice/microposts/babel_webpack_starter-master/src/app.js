import {ui} from './ui';
 import {http} from './http';

 //Get Posts on DOM Load

 document.addEventListener('DOMContentLoaded', getPosts);

 //Listen for add post
 document.querySelector('.post-submit').addEventListener('click',submitPost);

 //Delete post
 document.querySelector('#posts').addEventListener('click',deletePost);

//GET POSTS
 function getPosts(){
   http.get("http://localhost:3000/posts")
    .then (data => ui.showPosts(data))
    .catch(err => console.log(err));
 }

 //SUBMIT POST
 function submitPost(){
   const title = document.querySelector('#title').value;
   const body = document.querySelector('#body').value;
   const data = {
     title,
     body
   }
   //Create post
   http.post("http://localhost:3000/posts",data)
    .then(data => {
      //Show alert after posting add
      ui.showAlert('Post Added', 'alert alert-success');
      //Clear Fields
      ui.clearFields();
      getPosts();

    })
    .catch(err => console.log(err));
 }

 //Delete Post
 function deletePost(e){
   if(e.target.parentElement.classList.contains('delete')){
     // console.log('delete post');
     //GET ID
     // const id = e.target.parentElement.getAttribute('data-id');
     const id = e.target.parentElement.dataset.id;

     // console.log(id);
     //Delete post
     http.delete(`http://localhost:3000/posts/${id}`)
      .then(data =>{
        ui.showAlert('Post Removed','alert alert-success');
        getPosts();
      })
      .catch(err => console.log(err));
   }
   e.preventDefault();
 }
