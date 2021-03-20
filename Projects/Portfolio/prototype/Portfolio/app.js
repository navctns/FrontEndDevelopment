//HOME STATE
const projectsState = function(page){

  // document.querySelector('#heading').textContent = null;
  document.querySelector('#content-block').innerHTML = `
      <div class="col s12 m3"">
        <div class="card blue-grey darken-1" style="background-image:url('https://source.unsplash.com/random')">
          <div class="card-content white-text">
            <span class="card-title">About Me</span>
            <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action center-align">
            </div>
          </div>
        </div>
        <div class="col s12 m3">
          <div class="card blue-grey darken-1" style="background-image:url('https://source.unsplash.com/random')">
            <div class="card-content white-text">
              <span class="card-title">About Me</span>
              <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
              </div>
              <div class="card-action center-align">
              </div>
            </div>
          </div>
          <div class="col s12 m3">
            <div class="card blue-grey darken-1" style="background-image:url('https://source.unsplash.com/random')">
              <div class="card-content white-text">
                <span class="card-title">About Me</span>
                <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                </div>
                <div class="card-action center-align">
                </div>
              </div>
            </div>
            <div class="col s12 m3">
              <div class="card blue-grey darken-1" style="background-image:url('https://source.unsplash.com/random')">
                <div class="card-content white-text">
                  <span class="card-title">About Me</span>
                  <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                  </div>
                  <div class="card-action center-align">
                  </div>
                </div>
              </div>
      `;
}

//ABOUT STATE
const experienceState = function(page){

  // document.querySelector('#heading').textContent = 'About Us';
  document.querySelector('#content-block').innerHTML = `
        <p>This is the about page</p>
      `;
}

//CONTACT STATE
const aboutState = function(page){

  // document.querySelector('#heading').textContent = 'Contact Us';
  document.querySelector('#content-block').innerHTML = `
          <form>
            <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
      `;
}

const pageState = function(){

  let currentState = new projectsState(this);
  this.init = function(){
    this.change(new projectsState);
  }
  this.change = function(state){
    currentState = state;
  }
};

//Init pageState
const page = new pageState();
page.init();

function toProjectsState(){
  page.change(new projectsState);
  event.preventDefault();
}

function toExperienceState(){
  page.change(new experienceState);
  event.preventDefault();
}

function toAboutState(){
  page.change(new aboutState);
  event.preventDefault();
}
