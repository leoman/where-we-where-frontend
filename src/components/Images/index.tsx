import React from 'react';
import Slider from "react-slick";
import Image from './Image';
import { ImagesProps, Arrow } from '../../types';

const NextArrow = ({ className, style, onClick }: Arrow) => (
  <div
    className={className}
    style={{ ...style, display: "block" }}
    onClick={onClick}
  />
);

const PrevArrow = ({ className, style, onClick }: Arrow) => (
  <div
    className={className}
    style={{ ...style, display: "block" }}
    onClick={onClick}
  />
);

const Images = ({ images, onClick }: ImagesProps) => {
  const imagesLength = images.length;
  const slidesToShow = imagesLength > 5 ? 5: imagesLength
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className='images'>
      <div className='carousel'>
        <Slider {...settings}>
          {images.map((media) => <Image length={slidesToShow} key={media.id} media={media} onClick={onClick} />)}
        </Slider>
      </div>
    </div>
  )
}

export default Images;