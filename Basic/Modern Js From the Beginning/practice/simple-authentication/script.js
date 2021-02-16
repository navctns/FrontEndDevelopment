
//get username el, password el, confirm password el

const usernameEl = document.querySelector('#username');
console.log(usernameEl);
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');

const form = document.querySelector('#sign-up');

//checking functions
const isRequired = value => value === '' ? false:true;
const isBetween = (length,min,max) => length<min || length > max? false:true;

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    re.test(password);
    console.log(re.test(password));
    return re.test(password);
  }

//show error message
const showError = (input,message) => {
  //get the form field element
  const formField = input;
  //add the error class
  formField.classList.remove('input-success');
  formField.classList.add('input-error');

  //show the error message
  formFieldParent = formField.parentElement;
  const errorMsg = formFieldParent.querySelector('small');
  errorMsg.textContent = message;
}

//SHOW SUCCESS

const showSuccess = (input) => {
  //get the form field element

  const formField = input;

  //remove the error class
  formField.classList.remove('input-error');
  formField.classList.add('input-success');
  //hide the error message
  //show the error message
  formFieldParent = formField.parentElement;
  const errorMsg = formFieldParent.querySelector('small');
  errorMsg.textContent = '';
}

// CHECK USERNAME

const checkUsername = () => {

  let valid = false;
  const min = 3;
  const max = 25;
  const username = usernameEl.value.trim();

  // check whether username is empty
  if(!isRequired(username)){
    showError(usernameEl, 'Username cannot be blank');
  }
  else if(!isBetween(username.length,min,max)){
    showError(usernameEl, `Username must be between ${min} and ${max} characters`)
  }
  else {
    showSuccess(usernameEl);
    valid = true;
  }
  return valid;
}



// CHECK PASSWORD

const checkPassword = () => {

  let valid = false;
  const password = passwordEl.value.trim();
  console.log(password);
  if(!isRequired(password)){
    showError(passwordEl, 'Password cannot be blank');
  }
  else if(!isPasswordSecure(password)){
    showError(passwordEl, 'Password must has at least 8 characters that include at least 1 lower case character, 1 uppercase character 1 number and 1 special character in(!@#$%^&*)')
  }
  else {
    showSuccess(passwordEl);
    valid = true;
  }
  return valid;
}

//CHECK CONFIRM PASSWORD

const checkConfirmPassword = () => {

  let valid = false;
  //check confirm password
  const confirmPassword = confirmPasswordEl.value.trim();
  const password = passwordEl.value.trim();

  if(!isRequired(confirmPassword)){
    showError(confirmPasswordEl, "please enter the password again");
  } else if(password!==confirmPassword){
    showError(confirmPasswordEl, 'confirm password does not match');
  }
  else {
    showSuccess(confirmPasswordEl);
    valid = true;
  }
  return valid;
}

form.addEventListener('submit', function(e){
  //prevent the form from submitting
  e.preventDefault;
  console.log('submit');
  //validate forms

  let isUsernameValid = checkUsername(),
      isPasswordValid = checkPassword(),
      isConfirmPasswordValid = checkConfirmPassword();

});

//debounce, set a time interval for user to type , on pause validation starts

const debounce = (fn, delay=500) => {

  let timeoutId;

  return(...args) => {
    //cancel the previous timer
    if(timeoutId){
      clearTimeout(timeoutId);
    }

    //setup a new timer

    timeoutId = setTimeout(() => {
      fn.apply(null,args);
    }, delay);
  };
};


form.addEventListener ('input', debounce(function(e){

  switch(e.target.id){
    case 'username':
      checkUsername();
      break;
    case 'password':
      checkPassword();
      break;
    case 'confirm-password':
      checkConfirmPassword();
      break;
  }
}));
