
reviews = JSON.parse(localStorage.getItem('reviews'));
console.log(reviews);

reviewTable = document.querySelector('.table');

tableBody = reviewTable.querySelector('tbody');
console.log(tableBody);

let tableContent = '';
reviews.forEach(function(item,index){
  // console.log(item,index);
   tableContent = tableContent +
    `<tr class="review-item">
      <th>${index+1}</th>
      <td id="movie-name">${item.movie}</td>
      <td id="director-name">${item.director}</td>
      <td>${item.rating}%</td>
      <td>${item.reviewText}</td>
      <td><a href="#" class="delete-item"><i class="far fa-edit"></i></a></td>
      <td><a href="#" class="delete-item" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-trash-alt"></i></a></td>
      <div id="alert_placeholder"></div>
    </tr>`
    console.log(tableContent);
});

tableBody.innerHTML = tableContent;

bootstrap_alert = function() {};
bootstrap_alert.warning = function(message){
  document.querySelector('#alert_placeholder').innerHTML = '<div class="alert alert-danger" role="alert"> This is a danger alert—check it out!</div>';
}

document.body.addEventListener('click',function(e){
  // console.log(e.target);
  if(e.target.parentElement.classList.contains('delete-item')){
    // if(confirm('Conifrm Dlete?')){
      console.log(e.target.parentElement);
      e.target.parentElement.parentElement.parentElement.remove();
      removeReviewItemFromLoalStorage(e.target.parentElement.parentElement.parentElement);
      console.log('found');
    // }

  }
  // e.preventDefault();
});

function removeReviewItemFromLoalStorage(reviewItem){

  let reviews;
  //create an array or get it from local storage
  if(localStorage.getItem('reviews') === null){
    reviews = [];
  }else {
    reviews = JSON.parse(localStorage.getItem('reviews'));
  }

  console.log(reviewItem.querySelector('#movie-name').textContent);
  reviews.forEach(function(review,index){
    if(review.movie === reviewItem.querySelector('#movie-name').textContent){
      console.log('matched');
      reviews.splice(index,1);
    }
  });

  localStorage.setItem('reviews', JSON.stringify(reviews));
}

clearBtn = document.querySelector('.clear-reviews')
clearBtn.addEventListener('click', clearAllReviews);

function clearAllReviews(){
  if(confirm('Conifrm Dlete all?')){
    if(tableBody.firstChild){
      tableBody.removeChild(tableBody.firstChild);
    }
    localStorage.clear();
  }

}

//filter reviews

filterEl = document.querySelector('#filter');
// console.log(filterEl);
filterEl.addEventListener('keyup', filterReviews);

//Filter Reviews
function filterReviews(e){

  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.review-item').forEach(function(review){

    movie = review.querySelector('#movie-name').textContent;
    director = review.querySelector('#director-name').textContent;
    // console.log(review);
    // console.log(review.querySelector('#movie-name').textContent);
    if((movie.toLowerCase().indexOf(text) != -1) || (director.toLowerCase().indexOf(text) != -1)){
      review.style.display = "block";
    }
    else{
      review.style.display = 'none';
    }
  });
}

console.log(tableContent);
