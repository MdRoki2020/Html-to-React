import React, { Fragment } from 'react'

const Header = () => {
  return (
    <Fragment>

<div id="main-wrapper" class="section">
    

    <div class="header-section section">
       
        <div class="header-top">
            <div class="container">
                <div class="row">
                    <div class="col">

                        <div class="header-top-wrapper">
                            <div class="row">

                                <div class="header-social col-md-4 col-12">
                                    <a href="#"><i class="fa fa-facebook"></i></a>
                                    <a href="#"><i class="fa fa-twitter"></i></a>
                                    <a href="#"><i class="fa fa-linkedin"></i></a>
                                    <a href="#"><i class="fa fa-instagram"></i></a>
                                    <a href="#"><i class="fa fa-pinterest-p"></i></a>
                                </div>

                                <div class="header-logo col-md-4 col-12">
                                    <a href="index.html" class="logo"><img src="img/logo.png" alt="logo"/></a>
                                </div>

                                <div class="account-menu col-md-4 col-12">
                                    <ul>
                                        <li><a href="#">My Account</a></li>
                                        <li><a href="wishlist.html">Wishlist</a></li>
                                        <li><a href="#" data-toggle="dropdown"><i class="fa fa-shopping-cart"></i><span class="num">2</span></a>
                                            
                                            <div class="mini-cart-brief dropdown-menu text-left">
                                                <div class="all-cart-product clearfix">
                                                    <div class="single-cart clearfix">
                                                        <div class="cart-image">
                                                            <a href="product-details.html"><img src="img/cart/1.jpg" alt=""/></a>
                                                        </div>
                                                        <div class="cart-info">
                                                            <h5><a href="product-details.html">Holiday Candle</a></h5>
                                                            <p>1 x £9.00</p>
                                                            <a href="#" class="cart-delete" title="Remove this item"><i class="fa fa-trash-o"></i></a>
                                                        </div>
                                                    </div>
                                                    <div class="single-cart clearfix">
                                                        <div class="cart-image">
                                                            <a href="product-details.html"><img src="img/cart/2.jpg" alt=""/></a>
                                                        </div>
                                                        <div class="cart-info">
                                                            <h5><a href="product-details.html">Christmas Tree</a></h5>
                                                            <p>1 x £9.00</p>
                                                            <a href="#" class="cart-delete" title="Remove this item"><i class="fa fa-trash-o"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="cart-totals">
                                                    <h5>Total <span>£12.00</span></h5>
                                                </div>
                                                <div class="cart-bottom  clearfix">
                                                    <a href="checkout.html">Check out</a>
                                                </div>
                                            </div>
                                            
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        
        <div class="header-bottom section">
            <div class="container">
                <div class="row">
                   
                    <div class="header-bottom-wrapper text-center col">

                        <div class="header-bottom-logo">
                            <a href="index.html" class="logo"><img src="img/logo.png" alt="logo"/></a>
                        </div>

                        <nav id="main-menu" class="main-menu">
                            <ul>
                                <li class="active"><a href="index.html">home</a></li>
                                <li><a href="shop.html">shop</a>
                                    <ul class="sub-menu">
                                        <li><a href="shop.html">shop page</a></li>
                                        <li><a href="product-details.html">product details</a></li>
                                    </ul>
                                </li>
                                <li><a href="about.html">about</a></li>
                                <li><a href="#">pages</a>
                                    <ul class="sub-menu">
                                        <li><a href="cart.html">cart</a></li>
                                        <li><a href="checkout.html">checkout</a></li>
                                        <li><a href="wishlist.html">wishlist</a></li>
										<li><a href="under-construction.html">Under Construction</a></li>
                                    </ul>
                                </li>
                                <li><a href="blog.html">blog</a>
                                    <ul class="sub-menu">
                                        <li><a href="blog.html">blog page</a></li>
                                        <li><a href="blog-details.html">blog details</a></li>
                                    </ul>
                                </li>
                                <li><a href="contact.html">contact</a></li>
                            </ul>
                        </nav>

                        <div class="header-search">
                            
                            <button class="search-toggle"><i class="ion-ios-search-strong"></i></button>
                            
                            <div class="header-search-form">
                                <form action="#">
                                    <input type="text" placeholder="Search..."/>
                                    <button><i class="ion-ios-search-strong"></i></button>
                                </form>
                            </div>
                            
                        </div>
                        
                        <div class="mobile-menu section d-md-none"></div>

                    </div>
                    
                </div>
            </div>
        </div>
        
    </div>
    
       
    <div class="hero-slider section fix">

        <div class="hero-item" style="background-image: url(img/hero/1.jpg)">

            <div class="hero-content text-center m-auto">

                <h2>Save 25%</h2>
                <h1>Christmas Sale</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.</p>
                <a href="#">LEARN MORE</a>

            </div>


        </div>

        <div class="hero-item" style="background-image: url(img/hero/2.jpg)">

            <div class="hero-content text-center m-auto">

                <h2>Save 25%</h2>
                <h1>Christmas Sale</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.</p>
                <a href="#">LEARN MORE</a>

            </div>


        </div>

    </div>
    
       
    <div class="banner-section section pt-120">
        <div class="container">
            <div class="row">
                
                <div class="col-lg-6 col-12 mb-30">
                    
                    <div class="single-banner">
                        <img src="img/banner/1.jpg" alt="banner"/>
                        <div class="banner-content right">
                            <h1 class="white"><span>Gifts</span>Christmas</h1>
                            <a href="#" class="button">Shop Now</a>
                        </div>
                    </div>
                    
                </div>
                
                <div class="col-lg-6 col-12 mb-30">
                    
                    <div class="single-banner">
                        <img src="img/banner/2.jpg" alt="banner"/>
                        <div class="banner-content left">
                            <h2 class="black"><span class="small">Save <span class="red">25%</span></span><span class="red">Offer</span> Christmas</h2>
                            <a href="#" class="link">Shop Now</a>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    </div>
    
       
    <div class="product-section section pt-70 pb-60">
        <div class="container">
           
            <div class="row">
                <div class="section-title text-center col mb-60">
                    <h1>Featured Products</h1>
                </div>
            </div>
            
            <div class="row">
                
                <div class="col-lg-4 col-md-6 col-12 mb-60">
                   
                    <div class="product">

                        <div class="image">
                            <a href="product-details.html" class="img"><img src="img/product/1.jpg" alt="Product"/></a>
                            <a href="#" class="wishlist"><i class="fa fa-heart-o"></i></a>
                            <span class="label">New</span>
                        </div>
                        
                        <div class="content">
                            
                            <div class="head fix">
                               
                                <div class="title-category float-left">
                                    <h5 class="title"><a href="product-details.html">Holiday Candle</a></h5>
                                    <a href="shop.html" class="category">Catalog</a>
                                </div>
                                <div class="price float-right">
                                    <span class="new">$38</span>
                                    <span class="old">$46</span>
                                </div>
                                
                            </div>
                            
                            <div class="action-button fix">
                                <a href="#">add to cart</a>
                            </div>
                            
                        </div>

                    </div>
                    
                </div>
                
                <div class="col-lg-4 col-md-6 col-12 mb-60">
                   
                    <div class="product">

                        <div class="image">
                            <a href="product-details.html" class="img"><img src="img/product/2.jpg" alt="Product"/></a>
                            <a href="#" class="wishlist"><i class="fa fa-heart-o"></i></a>
                            <span class="label">New</span> 
                        </div>
                        
                        <div class="content">
                            
                            <div class="head fix">
                               
                                <div class="title-category float-left">
                                    <h5 class="title"><a href="product-details.html">Christmas Tree</a></h5>
                                    <a href="shop.html" class="category">Catalog</a>
                                </div>
                                <div class="price float-right">
                                    <span class="new">$38</span>
                                    <span class="old">$46</span>
                                </div>
                                
                            </div>
                            
                            <div class="action-button fix">
                                <a href="#">add to cart</a>
                            </div>
                            
                        </div>

                    </div>
                    
                </div>
                
                <div class="col-lg-4 col-md-6 col-12 mb-60">
                   
                    <div class="product">

                        <div class="image">
                            <a href="product-details.html" class="img"><img src="img/product/3.jpg" alt="Product"/></a>
                            <a href="#" class="wishlist"><i class="fa fa-heart-o"></i></a>
                            <span class="label">New</span>
                        </div>
                        
                        <div class="content">
                            
                            <div class="head fix">
                               
                                <div class="title-category float-left">
                                    <h5 class="title"><a href="product-details.html">Santa Claus Doll</a></h5>
                                    <a href="shop.html" class="category">Catalog</a>
                                </div>
                                <div class="price float-right">
                                    <span class="new">$38</span>
                                    <span class="old">$46</span>
                                </div>
                                
                            </div>
                            
                            <div class="action-button fix">
                                <a href="#">add to cart</a>
                            </div>
                            
                        </div>

                    </div>
                    
                </div>
                
                <div class="col-lg-4 col-md-6 col-12 mb-60">
                   
                    <div class="product">

                        <div class="image">
                            <a href="product-details.html" class="img"><img src="img/product/4.jpg" alt="Product"/></a>
                            <a href="#" class="wishlist"><i class="fa fa-heart-o"></i></a>
                            <span class="label">New</span>
                        </div>
                        
                        <div class="content">
                            
                            <div class="head fix">
                               
                                <div class="title-category float-left">
                                    <h5 class="title"><a href="product-details.html">Holiday Cap</a></h5>
                                    <a href="shop.html" class="category">Catalog</a>
                                </div>
                                <div class="price float-right">
                                    <span class="new">$38</span>
                                    <span class="old">$46</span>
                                </div>
                                
                            </div>
                            
                            <div class="action-button fix">
                                <a href="#">add to cart</a>
                            </div>
                            
                        </div>

                    </div>
                    
                </div>
                
                <div class="col-lg-4 col-md-6 col-12 mb-60">
                   
                    <div class="product">

                        <div class="image">
                            <a href="product-details.html" class="img"><img src="img/product/5.jpg" alt="Product"/></a>
                            <a href="#" class="wishlist"><i class="fa fa-heart-o"></i></a>
                            <span class="label">New</span>
                        </div>
                        
                        <div class="content">
                            
                            <div class="head fix">
                               
                                <div class="title-category float-left">
                                    <h5 class="title"><a href="product-details.html">Holiday Doll</a></h5>
                                    <a href="shop.html" class="category">Catalog</a>
                                </div>
                                <div class="price float-right">
                                    <span class="new">$38</span>
                                    <span class="old">$46</span>
                                </div>
                                
                            </div>
                            
                            <div class="action-button fix">
                                <a href="#">add to cart</a>
                            </div>
                            
                        </div>

                    </div>
                    
                </div>
                
                <div class="col-lg-4 col-md-6 col-12 mb-60">
                   
                    <div class="product">

                        <div class="image">
                            <a href="product-details.html" class="img"><img src="img/product/6.jpg" alt="Product"/></a>
                            <a href="#" class="wishlist"><i class="fa fa-heart-o"></i></a>
                            <span class="label">New</span>
                        </div>
                        
                        <div class="content">
                            
                            <div class="head fix">
                               
                                <div class="title-category float-left">
                                    <h5 class="title"><a href="product-details.html">Holiday Candle</a></h5>
                                    <a href="shop.html" class="category">Catalog</a>
                                </div>
                                <div class="price float-right">
                                    <span class="new">$38</span>
                                    <span class="old">$46</span>
                                </div>
                                
                            </div>
                            
                            <div class="action-button fix">
                                <a href="#">add to cart</a>
                            </div>
                            
                        </div>

                    </div>
                    
                </div>
                
            </div>
            
        </div>
    </div>
    
       
    <div class="testimonial-section section bg-gray pt-100 pb-65" style="background-image: url(img/bg/testimonial.png)">
        <div class="container">
           
            <div class="row">
                <div class="section-title text-center col mb-60">
                    <h1>Customer Reviews</h1>
                </div>
            </div>
            
            <div class="row">
                <div class="col-lg-8 col-md-10 col-12 ml-auto mr-auto">
                    
                    <div class="testimonial-slider text-center">
                        
                        <div class="single-testimonial">
                            <img src="img/testimonial/1.jpg" alt="customer"/>
                            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
                            <h5>Betty Moore</h5>
                        </div>
                        
                        <div class="single-testimonial">
                            <img src="img/testimonial/1.jpg" alt="customer"/>
                            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
                            <h5>Betty Moore</h5>
                        </div>
                        
                        <div class="single-testimonial">
                            <img src="img/testimonial/1.jpg" alt="customer"/>
                            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
                            <h5>Betty Moore</h5>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            
        </div>
    </div>
    
       
    <div class="newsletter-section section pt-100 pb-120">
        <div class="container">
           
            <div class="row">
                <div class="section-title text-center col mb-55">
                    <h1>Newsletter</h1>
                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.</p>
                </div>
            </div>
            
            <div class="row">
                <div class="text-center col">
                    
                    <form action="http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="subscribe-form validate" target="_blank" novalidate>
                        <div id="mc_embed_signup_scroll">
                            <label for="mce-EMAIL" class="d-none">Subscribe to our mailing list</label>
                            <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="Your email address" required/>
                            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef" tabindex="-1" value=""/></div>
                            <button type="submit" name="subscribe" id="mc-embedded-subscribe" class="button">subscribe</button>
                        </div>
                    </form>
                    
                </div>
            </div>
            
        </div>
    </div>
    
       
    <div class="blog-section section bg-gray pt-100 pb-60">
        <div class="container">
           
            <div class="row">
                <div class="section-title text-center col mb-60">
                    <h1>Christmas Blog</h1>
                </div>
            </div>
            
            <div class="row">
                
                <div class="blog-item col-lg-4 col-md-6 col-12 mb-60">
                    
                    <a href="blog-details.html" class="image"><img src="img/blog/1.jpg" alt="blog"/></a>
                    
                    <div class="content fix">
                        
                        <span class="publish"><span>Published on:</span> 25 May 2017</span>
                        
                        <h4 class="title"><a href="blog-details.html">If you are going to use a passage.</a></h4>
                        
                        <p>If you are going to use a passage of Lorem Ipsum, yneed to be sure there isn't anything embarrassing hidden ithe middle text. All the Lorem Ipsum.</p>
                        
                        <a href="blog-details.html" class="read-more">Read More</a>
                        
                    </div>
                    
                </div>
                
                <div class="blog-item col-lg-4 col-md-6 col-12 mb-60">
                    
                    <a href="blog-details.html" class="image"><img src="img/blog/2.jpg" alt="blog"/></a>
                    
                    <div class="content fix">
                        
                        <span class="publish"><span>Published on:</span> 25 May 2017</span>
                        
                        <h4 class="title"><a href="blog-details.html">Ut enim ad minima veniam, quis.</a></h4>
                        
                        <p>If you are going to use a passage of Lorem Ipsum, yneed to be sure there isn't anything embarrassing hidden ithe middle text. All the Lorem Ipsum.</p>
                        
                        <a href="blog-details.html" class="read-more">Read More</a>
                        
                    </div>
                    
                </div>
                
                <div class="blog-item col-lg-4 col-md-6 col-12 mb-60">
                    
                    <a href="blog-details.html" class="image"><img src="img/blog/3.jpg" alt="blog"/></a>
                    
                    <div class="content fix">
                        
                        <span class="publish"><span>Published on:</span> 25 May 2017</span>
                        
                        <h4 class="title"><a href="blog-details.html">At vero eos et accusamus et iusto</a></h4>
                        
                        <p>If you are going to use a passage of Lorem Ipsum, yneed to be sure there isn't anything embarrassing hidden ithe middle text. All the Lorem Ipsum.</p>
                        
                        <a href="blog-details.html" class="read-more">Read More</a>
                        
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    </div>
    
       
    <div class="footer-section section bg-dark" style="background-image: url(img/bg/footer-bg.png)">
        <div class="container">
            
            <div class="row">
                <div class="col">

                    <div class="footer-top section pt-80 pb-50">
                        <div class="row">

                            <div class="footer-widget col-lg-4 col-md-6 col-12 mb-40">

                                <img class="footer-logo" src="img/footer-logo.png" alt="logo"/>
                                <p>Contrary to popular belief, Lorem Ipsum is nosimply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over Lorem Ipsum is nosimply random text.</p>

                            </div>

                            <div class="footer-widget col-lg-2 col-md-3 col-12 mb-40">

                                <h4 class="widget-title">Information</h4>

                                <ul>
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Team member</a></li>
                                    <li><a href="#">Clinet</a></li>
                                    <li><a href="#">Portfolio</a></li>
                                    <li><a href="#">Contact us</a></li>
                                </ul>  

                            </div>

                            <div class="footer-widget col-lg-2 col-md-3 col-12 mb-40">

                                <h4 class="widget-title">Categories</h4>

                                <ul>
                                    <li><a href="#">Costumes</a></li>
                                    <li><a href="#">Lights</a></li>
                                    <li><a href="#">Lights</a></li>
                                    <li><a href="#">Christmas Trees</a></li>
                                    <li><a href="#">Decorations</a></li>
                                </ul>  

                            </div>

                            <div class="footer-widget col-lg-4 col-md-6 col-12 mb-40">

                                <h4 class="widget-title">Contact Us</h4>

                                <ul>
                                    <li><span>Address:</span> ur address goes here,street Crossroad 123</li>
                                    <li><span>Phone:</span> +99 859 658 589 . +69 587 456 25</li>
                                    <li><span>Eax:</span> +55 784 7585 . + 985 698 586</li>
                                    <li><span>Email:</span> christ@email.com</li>
                                </ul>  

                            </div>

                        </div>
                    </div>
                    
                    <div class="footer-bottom section text-center">
                        <p><a href="templateshub.net">Templates Hub</a></p>
                    </div>

                </div>
            </div>
            
        </div>
    </div>
    

</div>

    </Fragment>
  )
}

export default Header
