
reviews = JSON.parse(localStorage.getItem('reviews'));
console.log(reviews);

reviewPosts = document.querySelector('#review-posts');

reviewContents = ''

reviews.forEach(function(item){

  reviewContents +=
  `<div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-header">
              <h4>${item.movie}</h4>
              <h5>Director:${' '}${item.director}</h5>
              <h6>Rating:${item.rating}%</h6>
            </div>
            <div class="card-body">
              ${item.reviewText}
            </div>
          </div>
        </div>`
});

reviewPosts.innerHTML = reviewContents;
