import React from 'react';
import './Style/flickity.css';
import Flickity from 'react-flickity-component';
import test1 from '../Assets/test1.jpg';
import test2 from '../Assets/test2.png';
import test3 from '../Assets/test3.jpg';

const flickityOptions = {
    initialIndex: 2
}

function Carousel() {
  return (
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      <img alt='img1' src={test1} />
      <img alt='img2' src={test2} />
      <img alt='img3' src={test3} />
    </Flickity>
  )
}

export default Carousel;