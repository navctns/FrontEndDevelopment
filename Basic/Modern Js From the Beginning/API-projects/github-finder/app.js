
//search input
const searchUser = document.getElementById('searchUser');
const github = new Github;
const ui = new UI;
//Search input Event Listener

searchUser.addEventListener('keyup', (e) =>{
  //Get input text
  const userText = e.target.value;
  if(userText !== ''){
    console.log(userText);
    github.getUser(userText)
      .then(data => {
        console.log('data',data);
        if(data.profile.message == 'Not Found'){
          console.log('show alert');
          //show alert
          ui.showAlert('User not found', 'alert alert-danger');
        }else{
          console.log('show profile');
          ui.showProfile(data.profile)
          ui.showRepos(data.repos, data.profile.login);
        }
      });
  }else{
    console.log('clear profile');
    ui.clearProfile();
  }
})
