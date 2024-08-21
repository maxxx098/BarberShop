import React from "react";

import img1 from './img/sy.png';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import product1 from './img/remove1.png';
import product2 from './img/remove2.png';
import product3 from './img/remove3.png';
import product4 from './img/remove4.png';
import BackToTopButton from "./BackToTopButton";
import RegisterAndLogIn from "./RegisterAndLogIn";

function Products(){
    return(
        <body>
        <section className="hero-page" >
        <div class="page-header">
            <div class="container">
               
                    <div class="col-12">
                        <h1>PRODUCTS</h1>
                    </div>
                    <div class="col-12">
                    <div class="cta-btns">
          <a href="Appointment" class="btn btn-brand md-sm-2 my-3 "  data-aos="fade-right">Appointment</a>
          <a href="Appointment" class="btn btn-outline-brand ms-sm-2" data-aos="fade-right">Get in touch</a>
        </div>
                    </div>
                
            </div>
        </div>
        
            

        </section>
        
        
      
        
  
        
    <section >
    <div class="container">
        
                
                
    <div class="row">
          <div class="col-12 intro text-center">
            <h6>Products</h6>
            <h1>Discover More</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe beatae nam illum, quia minima placeat, dolorem architecto obcaecati at repudiandae nobis iste! Dolorum, incidunt  </p>
        </div>
        </div>
                <Swiper 
        className='myswiper'
        modules={[Pagination, EffectCoverflow, ]}
        
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true
        }}
        
       
        loop={true}
       

        
        breakpoints={{
            640: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 3
            },
            1024: {
                slidesPerView: 2
            },
            1560: {
                slidesPerView: 3
            },
        }}
        
        >
               
             
            {
                
                    <SwiperSlide  className="myswiper-slider">
                          <div class="col-lg-10 intro text-center ">
                <div class="team-member">
                  <img src={product1} alt=""/>
                 
                  <h5 class="mt-4">Soap</h5>
                  <a href="#about" class="link-more">Read more <i class="ri-arrow-right-line icon"></i></a> 
                </div>
              </div>
                    </SwiperSlide>
                    
               
            }
            {
                
                <SwiperSlide  className="myswiper-slider">
                      <div class="col-lg-10 intro text-center ">
            <div class="team-member">
              <img src={product3} alt=""/>
             
              <h5 class="mt-4">Oil Treatment</h5>
              <a href="#about" class="link-more">Read more <i class="ri-arrow-right-line icon"></i></a> 
            </div>
          </div>
                </SwiperSlide>
                
           
        }
        {
                
                <SwiperSlide  className="myswiper-slider">
                      <div class="col-lg-10 intro text-center ">
            <div class="team-member">
              <img src={product4} alt=""/>
             
              <h5 class="mt-4">Hair Wax</h5>
              <a href="#about" class="link-more">Read more <i class="ri-arrow-right-line icon"></i></a> 
            </div>
          </div>
                </SwiperSlide>
                
           
        }
        {
                
                <SwiperSlide  className="myswiper-slider">
                      <div class="col-lg-10 intro text-center ">
            <div class="team-member">
              <img src={img1} alt=""/>
             
              <h5 class="mt-4">Serum</h5>
              <a href="#about" class="link-more">Read more <i class="ri-arrow-right-line icon"></i></a> 
            </div>
          </div>
                </SwiperSlide>
                
           
        }
        </Swiper>
      
          </div>   
       </section>
       <div class="milestone">
  <div class="container text-center ">
    <div class="row">
      <div class="col-lg-3 col-sm-6 counter">
        <h1>3453</h1>
        <p>Customer served</p>
      </div>
      <div class="col-lg-3 col-sm-6 counter">
        <h1>6575</h1>
        <p>Awards won</p>
      </div>
      <div class="col-lg-3 col-sm-6 counter">
        <h1>8908</h1>
        <p>Totals hours</p>
      </div>
      <div class="col-lg-3 col-sm-6 counter">
        <h1>1991</h1>
        <p>Established in</p>
      </div>
    </div>
  </div>
</div> 
<section id="about" >
    <div class="container">
    <div class="row">
          <div class="col-12 intro text-center">
            <h6>Our Products</h6>
            <h1>For Hair & Beard</h1>
           
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe beatae nam illum, quia minima placeat, dolorem architecto obcaecati at repudiandae nobis iste! Dolorum, incidunt  </p>
        
        </div>
        </div>
               
                
    
                <Swiper 
        className='myswiper'
        modules={[Pagination, EffectCoverflow, ]}
        
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true
        }}
        
       
        loop={true}
       

        
        breakpoints={{
            640: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1
            },
            1024: {
                slidesPerView: 1
            },
            1560: {
                slidesPerView: 1
            },
        }}
        
        >
               
             
            {
                
                    <SwiperSlide  className="myswiper-slider">

        <div class="container" id="hatdog">
            <div class="row align-items-center">
                <div class="col-lg-5 offset-lg-1" >
                    <img src={product1}   />
                </div>
                <div class="col-lg-4 " >
                    <h6  >Products</h6>
                    <h1 >Soap</h1>
                    <p >It looks pretty easy, and simple when observing, but in reality there’s whole a lot more to it. You have to invest the time to learn, and develop skills to become a great barber just like in any other profession.</p>
                    <p >It looks pretty easy, and simple when observing, but in reality there’s whole a lot more to it. You have to invest the time to learn, and develop skills to become a great barber just like in any other profession.</p>
                    <a  href="RegisterAndLogIn " class="btn btn-outline-brand ">APPOINT <i class="ri-arrow-right-line icon"></i></a>
                </div>
            </div>
         </div>   


                    </SwiperSlide>
                    
               
            }
            {
                
                <SwiperSlide  className="myswiper-slider" id="product2">
                      
        <div class="container" id="product2">
            <div class="row align-items-center">
                <div class="col-lg-5 offset-lg-1">
                    <img src={product3}  />
                </div>
                <div class="col-lg-4 " >
                    <h6  >Products</h6>
                    <h1 >Oil Treatment</h1>
                    <p >It looks pretty easy, and simple when observing, but in reality there’s whole a lot more to it. You have to invest the time to learn, and develop skills to become a great barber just like in any other profession.</p>
                    <p >It looks pretty easy, and simple when observing, but in reality there’s whole a lot more to it. You have to invest the time to learn, and develop skills to become a great barber just like in any other profession.</p>
                    <a  href="RegisterAndLogIn " class="btn btn-outline-brand " >APPOIN <i class="ri-arrow-right-line icon"></i></a>
                </div>
            </div>
         </div>   

   
                </SwiperSlide>
                
           
        }
        {
                
                <SwiperSlide  className="myswiper-slider" id="3">
                     
        <div class="container" id="3">
            <div class="row align-items-center">
                <div class="col-lg-5 offset-lg-1">
                    <img src={product4}  />
                </div>
                <div class="col-lg-4 " >
                    <h6  >Products</h6>
                    <h1 >Hair Wax</h1>
                    <p >It looks pretty easy, and simple when observing, but in reality there’s whole a lot more to it. You have to invest the time to learn, and develop skills to become a great barber just like in any other profession.</p>
                    <p >It looks pretty easy, and simple when observing, but in reality there’s whole a lot more to it. You have to invest the time to learn, and develop skills to become a great barber just like in any other profession.</p>
                    <a  href="RegisterAndLogIn " class="btn btn-outline-brand ">APPOINT <i class="ri-arrow-right-line icon"></i></a>
                </div>
            </div>
         </div>   

     
                </SwiperSlide>
                
           
        }
        {
                
                <SwiperSlide  className="myswiper-slider" id="4">
                      
        <div class="container" id="4">
            <div class="row align-items-center">
                <div class="col-lg-5 offset-lg-1">
                    <img src={img1}   />
                </div>
                <div class="col-lg-4 " >
                    <h6  >Products</h6>
                    <h1 >Hair & Beard Serum</h1>
                    <p >It looks pretty easy, and simple when observing, but in reality there’s whole a lot more to it. You have to invest the time to learn, and develop skills to become a great barber just like in any other profession.</p>
                    <p >It looks pretty easy, and simple when observing, but in reality there’s whole a lot more to it. You have to invest the time to learn, and develop skills to become a great barber just like in any other profession.</p>
                    <a  href="RegisterAndLogIn " class="btn btn-outline-brand ">APPOINT <i class="ri-arrow-right-line icon"></i></a>
                </div>
            </div>
         </div>   

  
                </SwiperSlide>
                
           
        }
        </Swiper>
      
          </div>   
       </section>
    <BackToTopButton/>
        </body>
    )
}
export default Products;