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
    
       
    


    </div>



    </Fragment>
  )
}

export default Header
