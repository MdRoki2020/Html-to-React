import React, { Fragment } from 'react'

const Home = () => {
  return (
    <Fragment>
      
      <section class="slider-area ">
        <div class="slider-active">
        <div class="single-slider slider-bg1 slider-height d-flex align-items-center">
        <div class="container">
        <div class="rowr">
        <div class="col-xxl-5 col-xl-6 col-lg-7 col-md-8  col-sm-10">
        <div class="hero-caption text-center">
        <span>Fashion Sale</span>
        <h1 data-animation="bounceIn" data-delay="0.2s">Minimal Menz Style</h1>
        <p data-animation="fadeInUp" data-delay="0.4s">Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
        <a href="#" class="btn_1 hero-btn" data-animation="fadeInUp" data-delay="0.7s">Shop Now</a>
        </div>
        </div>
        </div>
        </div>
        </div>

        <div class="single-slider slider-bg2 slider-height d-flex align-items-center">
        <div class="container">
        <div class="row justify-content-end">
        <div class="col-xxl-5 col-xl-6 col-lg-7 col-md-8 col-sm-10">
        <div class="hero-caption text-center">
        <span>Fashion Sale</span>
        <h1 data-animation="bounceIn" data-delay="0.2s">Minimal Menz Style</h1>
        <p data-animation="fadeInUp" data-delay="0.4s">Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
        <a href="#" class="btn_1 hero-btn" data-animation="fadeInUp" data-delay="0.7s">Shop Now</a>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>


        <section class="items-product1 pt-30">
        <div class="container">
        <div class="row">
        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
        <div class="single-items mb-20">
        <div class="items-img">
        <img src="assets/img/gallery/items1.jpg" alt/>
        </div>
        <div class="items-details">
        <h4><a href="pro-details.html">Men's Fashion</a></h4>
        <a href="pro-details.html" class="browse-btn">Shop Now</a>
        </div>
        </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
        <div class="single-items mb-20">
        <div class="items-img">
        <img src="assets/img/gallery/items2.jpg" alt/>
        </div>
        <div class="items-details">
        <h4><a href="pro-details.html">Women's Fashion</a></h4>
        <a href="pro-details.html" class="browse-btn">Shop Now</a>
        </div>
        </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
        <div class="single-items mb-20">
        <div class="items-img">
        <img src="assets/img/gallery/items3.jpg" alt/>
        </div>
        <div class="items-details">
        <h4><a href="pro-details.html">Baby Fashion</a></h4>
        <a href="pro-details.html" class="browse-btn">Shop Now</a>
        </div>
        </div>
        </div>
        </div>
        </div>
    </section>
    </Fragment>
  )
}

export default Home
