import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Style/Navbar.scss';

class Navbar extends Component {

  componentDidMount ()  {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount ()  {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 300) {
      document.querySelector(".navigation").className = "navigation scroll";
    } else {
      document.querySelector(".navigation").className = "navigation";
    }
  };

  render(){

  return (
    <div className="navigation">
      <div className="wrapper">
        <div className="buttons">
          <Link to="/" className='link-btn'>Home</Link>
          <Link to="/work" className='link-btn'>Work</Link>
          <Link to="/story" className='link-btn'>Story</Link>
        </div>
      </div>
    </div>
  )
}
}



export default Navbar;