import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function MySlider() {

  var settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    autoplaySpeed:1500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return <>
    <div className=' container my-5'>
      <Slider {...settings}>
        <div>
          <img className=' w-100' style={{'height':"300px"}} src={require('../../images/BannerImage-PopularcategoriestoSellOnline.webp')} alt="slider 1" />
        </div>
        <div>
        <img className=' w-100 ' style={{'height':"300px"}} src={require('../../images/dcfavcerv.png')} alt="slider 2" />
        </div>
        <div>
        <img className=' w-100' style={{'height':"300px"}} src={require('../../images/best-products-for-acne-scars-1647270480.jpg')} alt="slider 3" />
        </div>
        <div>
        <img className=' w-100' style={{'height':"300px"}} src={require('../../images/product-drop.jpg')} alt="slider 4" />
        </div>
        <div>
        <img className=' w-100' style={{'height':"300px"}} src={require('../../images/product-photography-angles.png')} alt="slider 5" />
        </div>
        <div>
        <img className=' w-100' style={{'height':"300px"}} src={require('../../images/trending-products_c8d0d15c-9afc-47e3-9ba2-f7bad0505b9b.webp')} alt="slider 6" />
        </div>
      </Slider>
    </div>
  </>
}
