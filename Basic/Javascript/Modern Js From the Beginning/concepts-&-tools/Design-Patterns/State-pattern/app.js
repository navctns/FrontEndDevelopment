
//HOME STATE
const homeState = function(page){

  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
          <div class="jumbotron">
            <h1 class="display-4">Hello, world!</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4">
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </div>
      `;
}

//ABOUT STATE
const aboutState = function(page){

  document.querySelector('#heading').textContent = 'About Us';
  document.querySelector('#content').innerHTML = `
        <p>This is the about page</p>
      `;
}

//CONTACT STATE
const contactState = function(page){

  document.querySelector('#heading').textContent = 'Contact Us';
  document.querySelector('#content').innerHTML = `
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

  let currentState = new homeState(this);
  this.init = function(){
    this.change(new homeState);
  }
  this.change = function(state){
    currentState = state;
  }
};

//Init pageState
const page = new pageState();
page.init();

function toHomeState(){
  page.change(new homeState);
  event.preventDefault();
}

function toAboutState(){
  page.change(new aboutState);
  event.preventDefault();
}

function toContactState(){
  page.change(new contactState);
  event.preventDefault();
}
