
class UI {

  constructor(){
    this.profile = document.getElementById('profile');
  }

  //SHOW PROFILE
  showProfile(user){

    this.profile.innerHTML = `
          <div class="card card-body mb-3">
            <div class="row">
              <div class="col-md-3">
                <img src=${user.avatar_url} alt="" class="img-fluid mb-2" />
                <a href=${user.html_url} target="blank" class="btn btn-info text-dark btn-block mb-4">View Profile</a>
              </div>
              <div class="col-md-9">
                <span class="badge badge-primary p-3 mb-3">Public Repos: ${user.public_repos}</span>
                <span class="badge badge-secondary p-3 mb-3">Public Gists: ${user.public_gists}</span>
                <span class="badge badge-success p-3 mb-3">Followers: ${user.followers}</span>
                <span class="badge badge-info p-3 mb-3">Following: ${user.following}</span>
                <br/><br/>
                <ul class="list-group">
                  <li class="list-group-item">Company: ${user.company}</li>
                  <li class="list-group-item">Website/Blog: ${user.blog}</li>
                  <li class="list-group-item">Location: ${user.location}</li>
                  <li class="list-group-item">Member Since: ${user.created_at}</li>
                </ul>
              </div>
            </div>
          </div>
          <h3 class="page-heading mb-3 text-center">Latest Repos</h3>
          <div class="container">
            <div id="repos" class="mb-5"></div>
          </div>
        `
  }

  // SHOW REPOS

  showRepos(repos){
    let output = '';
    repos.forEach(repo => {
      output += `
              <div class="card card-body mb-2">
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                  </div>
                  <div class="col-md-6">
                    <span class="badge badge-primary p-3 mb-3">Stars: ${repo.stargazers_count}</span>
                    <span class="badge badge-secondary p-3 mb-3">Watchers: ${repo.watchers_count}</span>
                    <span class="badge badge-success p-3 mb-3">Forks: ${repo.forks_count}</span>
                  </div>
                </div>
              </div>
            `
    });
    //Output to Repos
    document.getElementById('repos').innerHTML = output;
  }

  //CLEAR PROFILE
  clearProfile(){
    this.profile.innerHTML = '';
  }

  //SHOW ERROR ALERT
  showAlert(message, className){
    //Clear any remaining alerts
    this.clearAlert();
    //Create div
    const div = document.createElement('div');
    //Add class
    div.className = className;
    //Add text
    div.appendChild(document.createTextNode(message));
    //Get parent
    const container = document.querySelector('.searchContainer');
    //Get searchbox
    const search = document.querySelector('.search');
    //Inser ALERT
    container.insertBefore(div, search);
    //Timeout
    setTimeout(() => {
      this.clearAlert()
    },3000);
  }

  //CLEAR ALERT
  clearAlert(){
    const currentAlert = document.querySelector('.alert');
    if(currentAlert){
      currentAlert.remove();
    }
  }
}
