import React from 'react'

const Home = () => {
  return (
    <>

<div className="header_section">  
         <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <a className="navbar-brand"href="index.html"><img src="images/logo.png"/></a>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                     <li className="nav-item active">
                        <a className="nav-link" href="index.html">Home</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="about.html">About</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="what-we.html">What we do</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="blog.html">Blog</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="contact.html">Contact us</a>
                     </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0">
                     <div className="login_bt">
                        <ul>
                           <li><a href="#"><span className="user_icon"><i className="fa fa-user" aria-hidden="true"></i></span>Login....</a></li>
                        </ul>
                     </div>
                  </form>
               </div>
            </nav>
         </div>
         <div className="banner_section layout_padding">
            <div className="container-fluid">
               <div id="banner_slider" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                     <div className="carousel-item active">
                        <div className="row">
                           <div className="col-md-6">
                              <div className="banner_taital_main">
                                 <h1 className="banner_taital">We Provide Law Practice</h1>
                                 <p className="banner_text">during the Renaissance. The first line of Lorem</p>
                                 <div className="readmore_btn active"><a href="#">Read More</a></div>
                                 <div className="started_bt"><a href="#">Contact</a></div>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="banner_img"><img src="images/banner-img.png"/></div>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item"> 
                        <div className="row">
                           <div className="col-md-6">
                              <div className="banner_taital_main">
                                 <h1 className="banner_taital">We Provide Law Practice</h1>
                                 <p className="banner_text"> in 80 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem</p>
                                 <div className="readmore_btn active"><a href="#">Read More</a></div>
                                 <div className="started_bt"><a href="#">Contact </a></div>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="banner_img"><img src="images/banner-img.png"/></div>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item">
                        <div className="row">
                           <div className="col-md-6">
                              <div className="banner_taital_main">
                                 <h1 className="banner_taital">We Provide Law Practice</h1>
                                 <p className="banner_text">Cicero, written in 72 BD. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem</p>
                                 <div className="readmore_btn active"><a href="#">Read More</a></div>
                                 <div className="started_bt"><a href="#">Contact Us</a></div>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="banner_img"><img src="images/banner-img.png"/></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <a className="carousel-control-prev" href="#banner_slider" role="button" data-slide="prev">
                  <i className="fa fa-arrow-left"></i>
                  </a>
                  <a className="carousel-control-next" href="#banner_slider" role="button" data-slide="next">
                  <i className="fa fa-arrow-right"></i>
                  </a>
               </div>
            </div>
         </div>
      </div>

      <div className="container">
         <div className="box_section">
            <div className="online_box">
               <div className="online_box_left">
                  <div className="online_box_main">
                     <div className="box_left">
                        <div className="right_arrow"><i className="fa fa-arrow-right"></i></div>
                     </div>
                     <div className="box_right">
                        <p className="book_text">Books</p>
                        <h4 className="appoinment_text">Appoinment</h4>
                     </div>
                  </div>
               </div>
               <div className="online_box_left active">
                  <div className="online_box_main">
                     <div className="box_left">
                        <div className="right_arrow"><i className="fa fa-arrow-right"></i></div>
                     </div>
                     <div className="box_right">
                        <p className="book_text active">Get Free</p>
                        <h4 className="appoinment_text active"> Evalution</h4>
                     </div>
                  </div>
               </div>
               <div className="online_box_left">
                  <div className="online_box_main">
                     <div className="box_left">
                        <div className="right_arrow"><i className="fa fa-arrow-right"></i></div>
                     </div>
                     <div className="box_right">
                        <p className="book_text">Pay Invoice</p>
                        <h4 className="appoinment_text">Online</h4>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div className="services_section">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <h1 className="studies_taital">SERVICE OFFERINGS</h1>
               </div>
            </div>
         </div>
         <div className="services_section_2">
            <div id="main_slider" className="carousel slide" data-ride="carousel">
               <div className="carousel-inner">
                  <div className="carousel-item active">
                     <div className="container">
                        <div className="row">
                           <div className="col-md-4">
                              <div className="service_box">
                                 <div className="house_icon">
                                    <img src="images/icon-1.png" className="image_1"/>
                                    <img src="images/icon-4.png" className="image_2"/>
                                 </div>
                                 <h3 className="corporate_text">Corporate Law</h3>
                                 <p className="chunks_text">chunks as necessary, making this the first true generator on the Internet. It uses a dictionary </p>
                                 <div className="readmore_button"><a href="#">Read More</a></div>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="service_box active">
                                 <div className="house_icon">
                                    <img src="images/icon-5.png" className="image_1"/>
                                    <img src="images/icon-5.png" className="image_2"/>
                                 </div>
                                 <h3 className="corporate_text">Employments Law</h3>
                                 <p className="chunks_text"> first true generator on the Internet. It uses a dictionary </p>
                                 <div className="readmore_button active"><a href="#">Read More</a></div>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="service_box">
                                 <div className="house_icon">
                                    <img src="images/icon-3.png" className="image_1"/>
                                    <img src="images/icon-6.png" className="image_2"/>
                                 </div>
                                 <h3 className="corporate_text">International Law</h3>
                                 <p className="chunks_text">first true generator on the Internet. It uses a dictionary </p>
                                 <div className="readmore_button"><a href="#">Read More</a></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="container">
                        <div className="row">
                           <div className="col-md-4">
                              <div className="service_box">
                                 <div className="house_icon">
                                    <img src="images/icon-1.png" className="image_1"/>
                                    <img src="images/icon-4.png" className="image_2"/>
                                 </div>
                                 <h3 className="corporate_text">Corporate Law</h3>
                                 <p className="chunks_text">chunks as necessary, making this the first true generator on the Internet. It uses a dictionary </p>
                                 <div className="readmore_button"><a href="#">Read More</a></div>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="service_box active">
                                 <div className="house_icon">
                                    <img src="images/icon-5.png" className="image_1"/>
                                    <img src="images/icon-5.png" className="image_2"/>
                                 </div>
                                 <h3 className="corporate_text">Employments Law</h3>
                                 <p className="chunks_text">chunks as necessary, making this the first true generator on the Internet. It uses a dictionary </p>
                                 <div className="readmore_button active"><a href="#">Read More</a></div>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="service_box">
                                 <div className="house_icon">
                                    <img src="images/icon-3.png" className="image_1"/>
                                    <img src="images/icon-6.png" className="image_2"/>
                                 </div>
                                 <h3 className="corporate_text">International Law</h3>
                                 <p className="chunks_text">chunks as necessary, making this the first true generator on the Internet. It uses a dictionary </p>
                                 <div className="readmore_button"><a href="#">Read More</a></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="container">
                        <div className="row">
                           <div className="col-md-4">
                              <div className="service_box">
                                 <div className="house_icon">
                                    <img src="images/icon-1.png" className="image_1"/>
                                    <img src="images/icon-4.png" className="image_2"/>
                                 </div>
                                 <h3 className="corporate_text">Corporate Law</h3>
                                 <p className="chunks_text">chunks as necessary, making this the first true generator on the Internet. It uses a dictionary </p>
                                 <div className="readmore_button"><a href="#">Read More</a></div>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="service_box active">
                                 <div className="house_icon">
                                    <img src="images/icon-5.png" className="image_1"/>
                                    <img src="images/icon-5.png" className="image_2"/>
                                 </div>
                                 <h3 className="corporate_text">Employments Law</h3>
                                 <p className="chunks_text">chunks as necessary, making this the first true generator on the Internet. It uses a dictionary </p>
                                 <div className="readmore_button active"><a href="#">Read More</a></div>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="service_box">
                                 <div className="house_icon">
                                    <img src="images/icon-3.png" className="image_1"/>
                                    <img src="images/icon-6.png" className="image_2"/>
                                 </div>
                                 <h3 className="corporate_text">International Law</h3>
                                 <p className="chunks_text">chunks as necessary, making this the first true generator on the Internet. It uses a dictionary </p>
                                 <div className="readmore_button"><a href="#">Read More</a></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
               <i className="fa fa-arrow-left"></i>
               </a>
               <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
               <i className="fa fa-arrow-right"></i>
               </a>
            </div>
         </div>
      </div>

      <div className="studies_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <h1 className="studies_taital">Case Studies</h1>
               </div>
            </div>
            <div className="studies_section_2">
               <div className="row">
                  <div className="col-md-4">
                     <div className="hover01 column">
                        <figure><img src="images/service-img1.png"/></figure>
                     </div>
                     <div className="studies_box">
                        <h3 className="introduction_text">Master of Law, 2024</h3>
                     </div>
                     <div className="read_bt"><a href="#">Read More</a></div>
                  </div>
                  <div className="col-md-4">
                     <div className="hover01 column">
                        <figure><img src="images/service-img2.png"/></figure>
                     </div>
                     <div className="studies_box">
                        <h3 className="introduction_text">Master of Law, 2024</h3>
                     </div>
                     <div className="read_bt active"><a href="#">Read More</a></div>
                  </div>
                  <div className="col-md-4">
                     <div className="hover01 column">
                        <figure><img src="images/service-img3.png"/></figure>
                     </div>
                     <div className="studies_box">
                        <h3 className="introduction_text">Master of Law, 2024</h3>
                     </div>
                     <div className="read_bt"><a href="#">Read More</a></div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div className="about_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <div className="about_img"><img src="images/about-img.png"/></div>
               </div>
               <div className="col-md-6">
                  <div className="about_text_main">
                     <h1 className="about_taital">About Us</h1>
                     <p className="about_text"> hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet</p>
                     <div className="readmore_bt"><a href="#">Read More</a></div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div className="customer_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <h1 className="customer_taital">SATISFIED CLIENT Says</h1>
               </div>
            </div>
         </div>
         <div id="my_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <div className="customer_section_2">
                     <div className="container">
                        <div className="row">
                           <div className="col-md-12">
                              <div className="box_main">
                                 <div className="customer_main">
                                    <div className="customer_left">
                                       <div className="customer_img"><img src="images/customer-img.png"/></div>
                                    </div>
                                    <div className="customer_right">
                                       <h3 className="customer_name">Giolio Mark <span className="quick_icon"><img src="images/quick-icon.png"/></span></h3>
                                       <p className="enim_text">anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internetanything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="customer_section_2">
                     <div className="container">
                        <div className="row">
                           <div className="col-md-12">
                              <div className="box_main">
                                 <div className="customer_main">
                                    <div className="customer_left">
                                       <div className="customer_img"><img src="images/customer-img.png"/></div>
                                    </div>
                                    <div className="customer_right">
                                       <h3 className="customer_name">DenoMark <span className="quick_icon"><img src="images/quick-icon.png"/></span></h3>
                                       <p className="enim_text">anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internetanything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="customer_section_2">
                     <div className="container">
                        <div className="row">
                           <div className="col-md-12">
                              <div className="box_main">
                                 <div className="customer_main">
                                    <div className="customer_left">
                                       <div className="customer_img"><img src="images/customer-img.png"/></div>
                                    </div>
                                    <div className="customer_right">
                                       <h3 className="customer_name">DenoMark <span className="quick_icon"><img src="images/quick-icon.png"/></span></h3>
                                       <p className="enim_text">anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internetanything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <a className="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
            <i className="fa fa-arrow-left"></i>
            </a>
            <a className="carousel-control-next" href="#my_slider" role="button" data-slide="next">
            <i className="fa fa-arrow-right"></i>
            </a>
         </div>
      </div>

      <div className="news_section layout_padding">
         <div className="container">
            <h1 className="news_taital">Recent News</h1>
            <div className="news_section_2">
               <div className="news_box">
                  <div id="custom_slider" className="carousel slide" data-ride="carousel">
                     <div className="carousel-inner">
                        <div className="carousel-item active">
                           <div className="news_img"><img src="images/news-img.png"/></div>
                        </div>
                        <div className="carousel-item">
                           <div className="news_img"><img src="images/news-img.png"/></div>
                        </div>
                        <div className="carousel-item">
                           <div className="news_img"><img src="images/news-img.png"/></div>
                        </div>
                     </div>
                     <a className="carousel-control-next" href="#custom_slider" role="button" data-slide="next">
                     <i className="fa fa-arrow-right"></i>
                     </a>
                  </div>
                  <h2 className="does_taital"> Law Mean for You?</h2>
                  <p className="dummy_text"> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
               </div>
            </div>
         </div>
      </div>

      <div className="contact_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <h1 className="contact_taital">Free Consulation</h1>
               </div>
            </div>
            <div className="contact_section_2">
               <div className="row">
                  <div className="col-md-12">
                     <div className="mail_section map_form_container">
                        <form action="">
                           <input type="text" className="mail_text" placeholder="Name" name="Name"/>
                           <input type="text" className="mail_text" placeholder="Phone Number" name="Phone Number"/> 
                           <input type="text" className="mail_text" placeholder="Your Email" name="Your Email"/>
                           <textarea className="massage-bt" placeholder="Massage" rows="5" id="comment" name="Massage"></textarea>
                           <div className="send_bt active"><a href="#">Send Now</a></div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div className="footer_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="location_text">
                     <ul>
                        <li>
                           <a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i></a>
                        </li>
                        <li>
                           <a href="#"><i className="fa fa-phone" aria-hidden="true"></i></a>
                        </li>
                        <li>
                           <a href="#"><i className="fa fa-envelope" aria-hidden="true"></i></a>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="footer_logo">
                  <a href="indexz.html">
                     <img src="images/logo.png"/>
                     </a>
               </div>
               <div className="social_icon">
               <ul>
               <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
               <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
               <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
               </ul>
               </div>
            </div>
         </div>
      </div>

      <div className="copyright_section">
         <div className="container">
            <p className="copyright_text">2024 All Rights Reserved. Design by <a href="https://html.design">Roki</a></p>
         </div>
      </div>


    </>
  )
}

export default Home
