import React from 'react';
import "./Style/Footer.scss";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="contact-us-text">
          <div className="upper-title"> Contact Us</div>
          <div className="title">If you liked our work</div>
          <div className="subtitle">Don't hesitate and contact us!</div>
        </div>

        {/* Split the footer in two */}
        <div className="info-box">
          <div className="left-side">
            <div className="info-pers name">Profir Mihai</div>
            <div className="info-pers tel">+40 xxx xxx xxx</div>
            <div className="info-pers email">pxxxxxxxxx@gmail.com</div>

            <a href="https://www.github.com/proAmethyst" className="social-link">
              <div className="info-pers site">github.com/proAmethyst</div>
            </a>

            <a href="https://www.linkedin.com/in/mihai-profir-5b208b252/" className="social-link">
              <div className="info-pers site">linkedin.com/MihaiProfir</div>
            </a>

            <a href="https://instagram.com/profirmihai?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==" className="social-link">
              <div className="info-pers site">instagram.com/profirmihai</div>
            </a>
          </div>

          <div className="right-side">
            <div className="info-address">Address</div>
            <div className="info-address street">Str. Grig Grigoiescu</div>
            <div className="info-address number">Nr. 678</div>
            <div className="info-address city">Bucharest, s2</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;