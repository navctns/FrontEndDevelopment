import {ui} from './ui';
 import {http} from './http';

 //Get Posts on DOM Load

 document.addEventListener('DOMContentLoaded', getPosts);

 //Listen for add post
 document.querySelector('.post-submit').addEventListener('click',submitPost);

 //Listen for Delete post
 document.querySelector('#posts').addEventListener('click',deletePost);

 //Listen for Edit state
 document.querySelector('#posts').addEventListener('click',enableEdit);

//GET POSTS
 function getPosts(){
   http.get("http://localhost:3000/posts")
    .then (data => ui.showPosts(data))
    .catch(err => console.log(err));
 }

 //SUBMIT POST
 function submitPost(e){
   const title = document.querySelector('#title').value;
   const body = document.querySelector('#body').value;
   const id = document.querySelector('#id').value;
   const data = {
     title,
     body
   }
   if(title === '' || body === ''){
     ui.showAlert('Please Fill in all fields','alert alert-danger');
   }else{
     if(id === ''){
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

     }else{
       //Edit post
       const id = document.querySelector('#id').value;
       console.log('post id',id);
       http.put(`http://localhost:3000/posts/${id}`, data)
        .then(data => {
          ui.showAlert('Post Updated', 'alert alert-success')
          // ui.clearFields();
          ui.changeFormState('add');
          getPosts();
        })
        .catch(err => console.log(err));
     }
   }



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

 //Enable Edit state
 function enableEdit(e){
   if(e.target.parentElement.classList.contains('edit')){
     const id = e.target.parentElement.dataset.id;
     const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
     const body = e.target.parentElement.previousElementSibling.textContent;

     // console.log(id,title,body);
     const data = {
       id,
       title,
       body
     }
     //Fill form with current
     ui.fillForm(data);
     // ui.changeToEditState();
   }
   e.preventDefault();
 }
