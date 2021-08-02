
app = Vue.createApp({
  data(){
    return{
      showSpace:`          <div class="row">
                  <!-- Top Stories section 1 -->
                    <h1 class="text-center text-light mt-5 mb-3">Popular Stories</h1>

                      <div class="col-md-3 mb-3 story-cover">
                        <div class="card" >
                            <img src="img/story-cover-3.jpg" alt="">
                        </div>

                      </div>
                      <div class="col-md-3 mb-3 story-cover">
                        <div class="card" >
                            <img src="img/story-cover-1.jpeg" alt="">
                        </div>
                      </div>
                      <div class="col-md-3 mb-3 story-cover">
                        <div class="card" >
                            <img src="img/story-cover-2.jpg" alt="">
                        </div>
                      </div>
                      <div class="col-md-3 mb-3 story-cover">
                        <div class="card" >
                            <img src="img/story-cover-2.jpg" alt="">
                        </div>
                      </div>

                    </div>
                    <!-- CATEGORY ITEMS -->
                    <h3 class="text-center text-light category-section-heading mb-4">Stories by Category</h3>

                    <div class="row">
                      <div class="col-md-4 category-item d-flex justify-content-center">
                        <div class="card category">
                          <div class="card-body">
                            <h5 class="card-title text-center">Fantacy</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                            <img src="img/dragon.svg" alt="">
                            <!-- <a href="#" class="card-link">Card link</a> -->
                          </div>
                         </div>
                      </div>
                      <div class="col-md-4 d-flex justify-content-center">
                        <div class="card category">
                          <div class="card-body">
                            <h5 class="card-title text-center">Fictions</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                            <img src="img/bedtime.svg" alt="">
                            <!-- <a href="#" class="card-link">Card link</a> -->
                          </div>
                         </div>
                      </div>
                      <div class="col-md-4 d-flex justify-content-center">
                        <div class="card category">
                          <div class="card-body">
                            <h5 class="card-title text-center">Kids Stories</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Kids Stories</h6>
                            <img src="img/books.svg" alt="">
                            <!-- <a href="#" class="card-link">Card link</a> -->
                          </div>
                         </div>
                      </div>
                    </div>`,
      carouselEl:`
                <ol class="carousel-indicators">
                  <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
                  <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                  <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <!-- <img class="d-block w-100" src="img/carousel/carousel-1.jpg" alt="First slide"> -->
                    <div class="carousel-content d-flex align-items-center justify-content-center">
                      <a href="#popular-stories" class="btn btn-lg btn-dark mt-5 read-story">Read Stories</a>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="img/carousel/carousel-2.jpg" alt="Second slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="img/carousel/carousel-3.jpg" alt="Third slide">
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>`,
    }
  },
  methods:{
    getAllStories(){
      this.carouselEl = '';
      this.showSpace = `<div class="contianer p-3" id="popular-stories">
                <div class="row">
                  <!-- Top Stories section 1 -->
                    <h1 class="text-center text-light mt-5 mb-3">Popular Stories</h1>

                      <div class="col-md-3 mb-3 story-cover">
                        <div class="card" >
                            <img src="img/story-cover-3.jpg" alt="">
                        </div>

                      </div>
                      <div class="col-md-3 mb-3 story-cover">
                        <div class="card" >
                            <img src="img/story-cover-1.jpeg" alt="">
                        </div>
                      </div>
                      <div class="col-md-3 mb-3 story-cover">
                        <div class="card" >
                            <img src="img/story-cover-2.jpg" alt="">
                        </div>
                      </div>
                      <div class="col-md-3 mb-3 story-cover">
                        <div class="card" >
                            <img src="img/story-cover-2.jpg" alt="">
                        </div>
                      </div>
                      <div class="col-md-3 mb-3 story-cover">
                        <div class="card" >
                            <img src="img/story-cover-2.jpg" alt="">
                        </div>
                      </div>
                      <div class="col-md-3 mb-3 story-cover">
                        <div class="card" >
                            <img src="img/story-cover-2.jpg" alt="">
                        </div>
                      </div>
                      <div class="col-md-3 mb-3 story-cover">
                        <div class="card" >
                            <img src="img/story-cover-3.jpg" alt="">
                        </div>

                      </div>
                      <div class="col-md-3 mb-3 story-cover">
                        <div class="card" >
                            <img src="img/story-cover-3.jpg" alt="">
                        </div>

                      </div>
                      <div class="col-md-3 mb-3 story-cover">
                        <div class="card" >
                            <img src="img/story-cover-2.jpg" alt="">
                        </div>
                      </div>
                      <div class="col-md-3 mb-3 story-cover">
                        <div class="card" >
                            <img src="img/story-cover-2.jpg" alt="">
                        </div>
                      </div>
                      <div class="col-md-3 mb-3 story-cover">
                        <div class="card" >
                            <img src="img/story-cover-3.jpg" alt="">
                        </div>

                      </div>

                    </div>`
    }
  }
});

app.mount('#showcase');
