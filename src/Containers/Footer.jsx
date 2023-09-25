import React from 'react';
import "./Style/Footer.scss";
import { Link } from 'react-router-dom';

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

          <div className="contact">
            <div className='footer-title'>Contact:</div>
            <div className="c c1">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m0 0h24v24h-24z" fill="#fff" opacity="0"/>
                <path d="m17.4 22a15.42 15.42 0 0 1 -15.4-15.4 4.6 4.6 0 0 1 4.6-4.6 3.94 3.94 0 0 1 .77.07 3.79 3.79 0 0 1 .72.18 1 1 0 0 1 .65.75l1.37 6a1 1 0 0 1 -.26.92c-.13.14-.14.15-1.37.79a9.91 9.91 0 0 0 4.87 4.89c.65-1.24.66-1.25.8-1.38a1 1 0 0 1 .92-.26l6 1.37a1 1 0 0 1 .72.65 4.34 4.34 0 0 1 .19.73 4.77 4.77 0 0 1 .06.76 4.6 4.6 0 0 1 -4.64 4.53z" 
                  fill="#fff"/>
              </svg>
              <div className="phone">Phone: +40 7xx xxx xxx</div>
            </div>

            <div className="c c2">
              <svg height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="m20 18h-2v-8.75l-6 3.75-6-3.75v8.75h-2v-12h1.2l6.8 4.25 6.8-4.25h1.2m0-2h-16c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-12c0-1.11-.9-2-2-2z"
                fill="#fff"/>
              </svg>
              <div className="phone">Email: pxxxxxxxxxxxx@gmail.com</div>
            </div>
          </div>


          <div className="address">
            <div className="footer-title">Address:</div>
            <div className="a">
              <svg viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                <path d="m172.268 501.67c-145.298-210.639-172.268-232.257-172.268-309.67 0-106.039 85.961-192 192-192s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zm19.732-229.67c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                fill="#fff"/>
              </svg>
                <div className="address-data"> Str. Geo Adrian, Nr. 3 <br /> Bucharest, Sector 2</div>
            </div>
          </div>

          <div className="resources">
            <div className="footer-title">Resources:</div>
            <div className="icons">
              <svg height="20" viewBox="0 0 64 64" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="m32 58c8.3020695 0 19.4243786-2.2723561 24.6432969-5.9989305 5.8909054-4.2064075 3.3567031-10.2656327 3.3567031-17.0010695 0-12.7025492-19.9923782-26.94090196-28-26.94090196s-28 14.23835276-28 26.94090196c0 6.7354368-3.53420232 12.794662 2.35670307 17.0010695 5.21891833 3.7265744 17.34122743 5.9989305 25.64329693 5.9989305z" fill="#80d25b"/><circle cx="20.5" cy="38.5" fill="#fff" r="7.5"/><circle cx="42.5" cy="38.5" fill="#fff" r="7.5"/><path d="m25.11 11.406-1.722-2.941 3.35.057 1.89-1.363 2.737.858 2.872-1.023 2.316.794 3.56.902 1.206-1.32-.848 3.257-3.271 1.03-5.993.645z" fill="#22ba8e"/><circle cx="20.5" cy="38.5" fill="#0a3586" r="4.5"/><path d="m15 55h33l-4 5s-6.25-2-12.5-2-12.5 2-12.5 2z" fill="#ed9111"/><circle cx="42.5" cy="38.5" fill="#0a3586" r="4.5"/><g strokeLinecap="round" strokeWidth="2"><path d="m12.081896 49.8418621c-.5231723-1.5695171.2968221-2.3608839 1.8941926-1.9062735 0 0 .8194147.8313667 6.1585201.5644114 5.3391053-.2669553 11-2.5 11-2.5s6.3391053 2.2669553 11 2.5c4.6608946.2330447 6.1296436-.6342468 6.1296436-.6342468 1.585254-.4781423 2.4462078.4066925 1.923069 1.9761089l-1.0527126 3.1581379 1.5236392 2.6663687c1.3676563 2.3933985.3846639 3.5302948-2.2248276 2.6268995 0 0-7.2988116-3.2932682-17.2988116-3.2932682s-17.2988117 3.2932682-17.2988117 3.2932682c-2.5963946.9426019-3.5869653-.2431585-2.2248276-2.6268995l1.5236393-2.6663687z" fill="#ffaf40" stroke="#ed9111"/><path d="m17 26c-2.7614237 0-5 2.2385763-5 5" stroke="#22ba8e"/><path d="m51 26c-2.7614237 0-5 2.2385763-5 5" stroke="#22ba8e" transform="matrix(-1 0 0 1 97 0)"/></g></g>
              </svg>
              <a href="https://iconduck.com/" className="link-path">
                <div className="icon-text">Iconduck</div>
              </a>
            </div>

            <div className="photos">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m7.5 6.75v-6.75h9v6.75zm9 3.75h7.5v13.5h-24v-13.5h7.5v6.75h9z"
                fill='#fff'/>
              </svg>
              <div className="photos-text">Unsplash</div>
            </div>
          </div>
        </div>

        <div className="links-box">
          <div className="navigation-links">
            <Link to="/" className='link'>Home</Link>
            <Link to="/work" className='link'>Work</Link>
            <Link to="/story" className='link'>Story</Link>
          </div>

          <div className="social-links">
            <div className="social">
              <a href="https://www.github.com/proAmethyst" className="lnk">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="m0 0h24v24h-24z" opacity="0" transform="matrix(-1 0 0 -1 24 24)"/>
                  <path d="m12 1a10.89 10.89 0 0 0 -11 10.77 10.79 10.79 0 0 0 7.52 10.23c.55.1.75-.23.75-.52s0-.93 0-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0 -1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84 4.15 4.15 0 0 1 1.17 2.89c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95s.2.63.75.52a10.8 10.8 0 0 0 7.5-10.22 10.89 10.89 0 0 0 -11-10.77" 
                  fill="#fff"/>
                </svg>
              </a>
            </div>

            <div className="social">
              <a href="https://www.linkedin.com/in/mihai-profir-5b208b252/" className="lnk">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path fill="#fff" d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zM7.65 13.979H5.706V7.723H7.65v6.256zm-.984-7.024c-.614 0-1.011-.435-1.011-.973 0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973zm8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355-.537 0-.856.371-.997.728-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01 1.279 0 2.238.857 2.238 2.699v3.699z"/>
                </svg>
              </a>
            </div>

            <div className="social">
              <a href="https://instagram.com/profirmihai?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==" className="lnk">
                <svg data-name="Instagram w/circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.2 19.2">
                  <path fill="#fff" d="M13.498 6.651a1.656 1.656 0 0 0-.95-.949 2.766 2.766 0 0 0-.928-.172c-.527-.024-.685-.03-2.02-.03s-1.493.006-2.02.03a2.766 2.766 0 0 0-.929.172 1.656 1.656 0 0 0-.949.95 2.766 2.766 0 0 0-.172.928c-.024.527-.03.685-.03 2.02s.006 1.493.03 2.02a2.766 2.766 0 0 0 .172.929 1.656 1.656 0 0 0 .95.949 2.766 2.766 0 0 0 .928.172c.527.024.685.029 2.02.029s1.493-.005 2.02-.03a2.766 2.766 0 0 0 .929-.171 1.656 1.656 0 0 0 .949-.95 2.766 2.766 0 0 0 .172-.928c.024-.527.029-.685.029-2.02s-.005-1.493-.03-2.02a2.766 2.766 0 0 0-.171-.929zM9.6 12.168A2.568 2.568 0 1 1 12.168 9.6 2.568 2.568 0 0 1 9.6 12.168zm2.669-4.637a.6.6 0 1 1 .6-.6.6.6 0 0 1-.6.6zM11.267 9.6A1.667 1.667 0 1 1 9.6 7.933 1.667 1.667 0 0 1 11.267 9.6zM9.6 0a9.6 9.6 0 1 0 9.6 9.6A9.6 9.6 0 0 0 9.6 0zm4.97 11.661a3.67 3.67 0 0 1-.233 1.214 2.556 2.556 0 0 1-1.462 1.462 3.67 3.67 0 0 1-1.213.233c-.534.024-.704.03-2.062.03s-1.528-.006-2.062-.03a3.67 3.67 0 0 1-1.213-.233 2.556 2.556 0 0 1-1.462-1.462 3.67 3.67 0 0 1-.233-1.213c-.024-.534-.03-.704-.03-2.062s.006-1.528.03-2.062a3.67 3.67 0 0 1 .232-1.213 2.556 2.556 0 0 1 1.463-1.463 3.67 3.67 0 0 1 1.213-.232c.534-.024.704-.03 2.062-.03s1.528.006 2.062.03a3.67 3.67 0 0 1 1.213.232 2.556 2.556 0 0 1 1.462 1.463 3.67 3.67 0 0 1 .233 1.213c.024.534.03.704.03 2.062s-.006 1.528-.03 2.062z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="rights">&copy; Profir Mihai</div>
        </div>
      </div>
    </div>
  )
}

export default Footer;