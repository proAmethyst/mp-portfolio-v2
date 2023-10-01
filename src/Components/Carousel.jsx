import React from 'react';
import './Style/flickity.css';
import './Style/Carousel.scss';
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
      <div class="carousel-cell">
      <img alt='img-ex' src={pic1} />
      </div>
      <div class="carousel-cell">
      <img alt='img-ex' src={pic2} />
      </div>
      <div class="carousel-cell">
      <img alt='img-ex' src={pic3} />
      </div>
      <div class="carousel-cell">
      <img alt='img-ex' src={pic4} />
      </div>
      <div class="carousel-cell">
      <img alt='img-ex' src={pic5} />
      </div>
      <div class="carousel-cell">
      <img alt='img-ex' src={pic6} />
      </div>
      <div class="carousel-cell">
      <img alt='img-ex' src={pic7} />
      </div>
      <div class="carousel-cell">
      <img alt='img-ex' src={pic8} />
      </div>
      <div class="carousel-cell">
      <img alt='img-ex' src={pic9} />
      </div>
    </Flickity>
  )
}

export default Carousel;