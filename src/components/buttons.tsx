import React from 'react'
import {useSwiper} from 'swiper/react';

export const SwiperNavButtons = () => {
    const swiper = useSwiper ();
  return (
    <div >
    
      <div >
      <button className='owl-prev' onClick={() => swiper.slidePrev()}><i className="fa fa-angle-left" aria-hidden="true"></i></button>
      <button className='owl-next' onClick={() => swiper.slideNext()}><i className="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
      </div>
   
  
  );
};
