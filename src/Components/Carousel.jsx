import React from 'react';
import './Style/flickity.css';
import Flickity from 'react-flickity-component';
import pic1 from '../Assets/1.1.png';
import pic2 from '../Assets/1.2.png';
import pic3 from '../Assets/2.1.png';
import pic4 from '../Assets/2.2.png';
import pic5 from '../Assets/3.1.png';
import pic6 from '../Assets/3.2.png';
import pic7 from '../Assets/4.png';
import pic8 from '../Assets/5.png';
import pic9 from '../Assets/6.png';

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
      <img alt='img1' src={pic1} />
      <img alt='img2' src={pic2} />
      <img alt='img3' src={pic3} />
      <img alt='img3' src={pic4} />
      <img alt='img3' src={pic5} />
      <img alt='img3' src={pic6} />
      <img alt='img3' src={pic7} />
      <img alt='img3' src={pic8} />
      <img alt='img3' src={pic9} />
    </Flickity>
  )
}

export default Carousel;