
//get username el, password el, confirm password el

const movieEl = document.querySelector('#movie-name');
console.log(movieEl);
const directorEl = document.querySelector('#director-name');
const ratingEl = document.querySelector('#rating-perc');
const reviewEl = document.querySelector('#review-text');
// console.log(reviewEl.value);

const form = document.querySelector('#add-movie-review');

//checking functions
const isRequired = value => value === '' ? false:true;
const isBetween = (length,min,max) => length<min || length > max? false:true;

const isNum = value => isNaN(value) === true ? false:true;

const checkPrecentageInput = () =>{
  let valid = false;
  // console.log(rating);
  rating = ratingEl.value.trim();
  if(isNum(rating)){
    if(rating<0 || rating>100){
      showError(ratingEl, 'Please add rating as a number between (1-100)');
    }
    else{
      console.log('success');
      showSuccess(ratingEl);
      valid = true;
    }
  }
  else if(isNum(rating) === false){
    showError(ratingEl, 'not a number');
  }

  return valid;
}

const checkReviewText = () => {

  let valid = false;
  const review = reviewEl.value.trim();
  if(review.length<50 || review.length>200){
    showError(reviewEl, 'Review text must be between 50-200 letters');
  }
  else {
    showSuccess(reviewEl);
    valid = true;
  }
  return valid;
}

const checkMovieName = () =>{

  const movie = movieEl.value.trim();
  valid = false;
  if(!isRequired(movie)){
    showError(movieEl, 'Field cannot be blank');
  }
  else{
    showSuccess(movieEl);
    valid = true;
  }
  return valid;
}

const checkDirectorName = () =>{

  const director = directorEl.value.trim();
  valid = false;
  if(!isRequired(director)){
    showError(directorEl, 'Field cannot be blank');
  }
  else{
    showSuccess(directorEl);
    valid = true;
  }
  return valid;
}



console.log(isNum('abc'));



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


form.addEventListener('submit', function(e){
  //prevent the form from submitting
  console.log('submit');
  //validate forms

  // let isUsernameValid = checkUsername(),
  //     isPasswordValid = checkPassword(),
  //     isConfirmPasswordValid = checkConfirmPassword();

  let isRatingValid = checkPrecentageInput(),
      isReviewTextValid = checkReviewText(),
      isMovieNameValid = checkMovieName(),
      isDirectorNameValid = checkDirectorName();

  let isFormValid = isRatingValid &&
            isReviewTextValid &&
            isMovieNameValid &&
            isDirectorNameValid;

  console.log(isRatingValid,isReviewTextValid, isMovieNameValid,isDirectorNameValid);
  console.log(isFormValid);
  if(isFormValid){
    console.log('form is valid');

    //object to be pushed to local storage
    const reviewObj = {
      'movie':movieEl.value.trim(),
      'director':directorEl.value.trim(),
      'rating':ratingEl.value.trim(),
      'reviewText':reviewEl.value.trim(),
    }

    //create an array or get it from local storage
    if(localStorage.getItem('reviews') === null){
      reviews = [];
    }else {
      reviews = JSON.parse(localStorage.getItem('reviews'));
    }

    reviews.push(reviewObj);

    //load array to localStorage
    localStorage.setItem('reviews', JSON.stringify(reviews));
     movieEl.value = '';
     directorEl.value = '';
     ratingEl.value = '';
     reviewEl.value = '';
    alert('Review Added');

  }
  e.preventDefault();

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

    case 'rating-perc':
      console.log('rating check');
      const rating = ratingEl.value.trim();
      checkPrecentageInput();
      break;

    case 'review-text':
      console.log(reviewEl.value);
      checkReviewText();
      break;

    case 'movie-name':
      checkMovieName();
      break;

    case 'director-name':
      checkDirectorName();
      break;
  }
}));
