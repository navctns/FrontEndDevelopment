//HOME STATE
const projectsState = function(page){

  document.querySelector('#content-heading').textContent = 'Projects';
  document.querySelector('#content-block').innerHTML = `
      <div class="col s12 m3 offset-m2">
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

  document.querySelector('#content-heading').textContent = 'Experience';
  document.querySelector('#content-block').innerHTML = `
        <div class="col s10 offset-s2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo eligendi at repellendus sequi id nihil optio ad exercitationem debitis. Expedita earum quas, inventore maxime animi velit perspiciatis quis molestiae provident tempora fuga error! Minima, modi iste et ipsam. Nostrum tenetur recusandae rem illo laudantium deleniti in dolorem, aliquam distinctio cum.
            </p>
        </div>
      `;
}

//CONTACT STATE
const aboutState = function(page){

  document.querySelector('#content-heading').textContent = 'About Me';
  document.querySelector('#content-block').innerHTML = `
      <div class="col s10 offset-s2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo eligendi at repellendus sequi id nihil optio ad exercitationem debitis. Expedita earum quas, inventore maxime animi velit perspiciatis quis molestiae provident tempora fuga error! Minima, modi iste et ipsam. Nostrum tenetur recusandae rem illo laudantium deleniti in dolorem, aliquam distinctio cum.
          </p>
      </div>
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
