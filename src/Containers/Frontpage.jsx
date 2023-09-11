import React from 'react';
import './Style/Frontpage.scss';
import Header from './Header';
import About from './About';
import Abilities from './Abilities';
import WorkPreview from './WorkPreview';
import Footer from './Footer';

const Frontpage = () => {

  return (
    <div className="container">
      <Header />
      <About />
      <Abilities />
      <WorkPreview />
      <Footer />
    </div>
  )
}


export default Frontpage;