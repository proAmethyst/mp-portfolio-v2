import React from 'react'
import "./Style/WorkPreview.scss";
import Carousel from '../Components/Carousel';

const WorkPreview = () => {
  return (
    <div>
      <div className="work">

        <div className="title-box">
          <div className="upper-title">A small collection</div>
          <div className="title">Part of our work</div>
        </div>

        {/* <Carousel gallery/> */}
        <Carousel />

      </div>
    </div>
  )
}

export default WorkPreview;