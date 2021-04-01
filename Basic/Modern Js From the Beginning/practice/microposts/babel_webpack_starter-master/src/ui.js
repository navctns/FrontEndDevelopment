
class UI {
  constructor(){
    this.post = document.querySelector('#posts');
    this.titleInput = document.querySelector('#title');
    this.bodyInput = document.querySelector('#body');
    this.idInput = document.querySelector('#id');
    this.postSubmit = document.querySelector('.post-submit');
    this.formState = 'add';
  }

  //SHOW POSTS
  showPosts(posts){
    let output = '';
    posts.forEach(post => {
      output += `
          <div class="card mb-3">
            <div class="card-body">
              <h4 class="card-title">${post.title}</h4>
              <p class="card-text">${post.body}</p>
              <a href="#" class="edit card-link" data-id="${post.id}"><i class="fa fa-edit"></i></a>
              <a href="#" class="delete card-link" data-id="${post.id}"><i class="fa fa-trash-alt"></i></a>
            </div>
          </div>
      `
    });

    this.post.innerHTML = output;
  }

  //SHOW ALERT
  showAlert(message,className){
    // this.clearAlert();
    //create div
    const div = document.createElement('div');
    //Add classes
    div.className = className;
    //Add test
    div.appendChild(document.createTextNode(message));
    //Get the parent
    const container = document.querySelector('.postsContainer');
    //Get posts
    const posts = document.querySelector('#posts');
    //Insert Alert div
    container.insertBefore(div,posts);
    //Timeout
    setTimeout(() => {
      this.clearAlert();
    },3000);
  }

  //CLEAR ALERT
  clearAlert(){
    const currentAlert = document.querySelector('.alert');
    if(currentAlert){
      currentAlert.remove();
    }

  }

  //Clear Fields
  clearFields(){
    this.titleInput.value = '';
    this.bodyInput.value = '';
  }

  //Fill form with current data
  fillForm(data){
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;
    this.idInput.value = data.id;

    this.changeFormState('edit');
  }

  changeToEditState(){
    this.postSubmit.classList.add('update');
    this.postSubmit.innerHTML = 'Save Changes';
    console.log(this.postSubmit);
  }

  //Change form state
  changeFormState(type){
    if(type === 'edit'){
      this.postSubmit.textContent = 'Update Post';
      this.postSubmit.className = 'post-submit btn btn-warning btn-block';

      //Create Cancel Button
      const button = document.createElement('button');
      button.className = 'post-cancel btn btn-light btn-block';
      button.appendChild(document.createTextNode('Cancel Edit'));
      //Get Parent
      const cardForm = document.querySelector('.card-form');
      //Get Element to insert before
      const formEnd = document.querySelector('.form-end');
      //Insert cancel button
      cardForm.insertBefore(button,formEnd);

    }else{
      this.postSubmit.textContent = 'Post It';
      this.postSubmit.className = 'post-submit btn btn-primary';
      //Remove cancel button if it is there
      if(document.querySelector('.post-cancel')){
        document.querySelector('.post-cancel').remove();
      }
      //Clear id from Hidden
      this.clearIdInput();
      //clear text
      this.clearFields();
    }
  }
  clearIdInput(){
    this.idInput.value = '';
  }
  }

export const ui = new UI();
