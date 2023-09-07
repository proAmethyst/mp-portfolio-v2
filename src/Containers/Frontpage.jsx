import React, { useEffect, useRef, useState } from 'react';
import './Style/Frontpage.scss';
import gh from '../Assets/GitHub.png';
import lki from '../Assets/LinkedIn.png';
import insta from '../Assets/Instagram.png';
import me from '../Assets/this-is-me.jpeg';
import Carousel from '../Components/Carousel';

const Frontpage = () => {


  const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        },
        { rootMargin: "-300px" }
        );
        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [isIntersecting]);

    useEffect(() => {
        if (isIntersecting) {
            ref.current.querySelectorAll("div").forEach((el) => {
                el.classList.add("flip-horizontal-top");
            });
        } else {
            ref.current.querySelectorAll("div").forEach((el) => {
                el.classList.remove("flip-horizontal-top");
        });
        }
    }, [isIntersecting]);

  return (
    <div className="container">

      {/* Homepage */}
      <div className="home">
        <div className="buffer1"></div>
        <div className="text-box">
          <div className="main-title-1">
              I'm Profir Mihai
          </div>
          <div className="main-title-2">
              web developer
          </div>
          <div className="subtitle">
            and this is my portfolio
          </div>
        </div>
        
        <div className="buffer2"></div>

        <div className="social-box">
          <div className="social-media">

            <div className='gh-box'>
              <a href="https://www.google.com" className="lnk">
                <img alt='gh' src={gh}/>
              </a>
            </div>
            <div className='lki-box'>
              <a href="https://www.google.com" className="lnk">
                <img alt='lki' src={lki}/>
              </a>
            </div>
            <div className='insta-box'>
              <a href="https://www.google.com" className="lnk">
                <img alt='insta' src={insta}/>
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* About */}
      <div className="about">
        <div className="avatar-box">
          <div className="design-square">
            <div className="avatar">
              <img src={me} alt="me" />
            </div>
          </div>
        </div>

        <div className="text-box">
          <hr />
          <div className="title-box">
              About Me
          </div>

          <div className="content-box">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.
              Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. 
              Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. 
              Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.
              <br />
              <br />
              Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. 
              In iaculis arcu eros, eget tempus orci facilisis id. Praesent lorem orci, mattis non efficitur id, ultricies vel nibh. 
              Sed volutpat lacus vitae gravida viverra. Fusce vel tempor elit. Proin tempus,.
          </div>

          <div className="button-box">
              <button className="see-more">
                  See More
                  <svg fill="none" 
                        height="48" 
                        viewBox="0 0 48 48" 
                        width="48" xmlns="http://www.w3.org/2000/svg">
                          <path d="m21 19 5.25 5-5.25 5" 
                                stroke="rgba(255, 255, 255, 0.80)" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                                strokeWidth="2"/>
                  </svg>
              </button>
          </div>
        </div>
      </div>

      {/* Abilities */}
      <div className="abilities">

        <div className="title-box">
          <div className="upper-subtitle">
            Work and Abilities
          </div>
          <div className="title">
            What we know?
          </div>
          <div className="under-subtitle">
            This is what we know the best. You can find more of what we know on "work" page.
          </div>
        </div>

        <div ref={ref} className="skills-box">

          <div className="wrapper-test">
            <div className="skill-1 skill">
              <svg viewBox="0 0 512 512" 
                  xmlns="http://www.w3.org/2000/svg"
                  height="78"
                  className="rotate1">
                <path d="m136.6 138.79a64.003 64.003 0 0 0 -43.31 41.35l-93.29 279.86 14.69 14.69 150.11-150.11c-2.99-6.26-4.8-13.18-4.8-20.58 0-26.51 21.49-48 48-48s48 21.49 48 48-21.49 48-48 48c-7.4 0-14.32-1.81-20.58-4.8l-150.11 150.11 14.69 14.69 279.86-93.29a64.003 64.003 0 0 0 41.35-43.31l42.79-151.4-128-128zm361.34-64.62-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.75 18.75-49.15 0-67.91z"
                      fill="#ffffff"/>
              </svg>
              <div className="skill-text">Web Design</div>
            </div>
            <div className="short-description">Begginer</div>
          </div>

          <div className="wrapper-test">
            <div className="skill-2 skill">
              <svg viewBox="0 0 256 256" 
                  xmlns="http://www.w3.org/2000/svg"
                  height="78"
                  className="rotate2">
                <path d="m71.68213 97.21875-36.9375 30.78125 36.9375 30.78125a12 12 0 0 1 -15.36426 18.4375l-48-40a12.00005 12.00005 0 0 1 0-18.4375l48-40a12 12 0 1 1 15.36426 18.4375zm176 21.5625-48-40a12 12 0 1 0 -15.36426 18.4375l36.9375 30.78125-36.9375 30.78125a12 12 0 0 0 15.36426 18.4375l48-40a12.00005 12.00005 0 0 0 0-18.4375zm-83.58106-90.05859a12.0021 12.0021 0 0 0 -15.37841 7.17675l-64 176a11.99972 11.99972 0 1 0 22.55468 8.20118l64-176a11.99923 11.99923 0 0 0 -7.17627-15.37793z"
                      fill="#ffffff"/>
                </svg>

              <div className="skill-text">Web Development</div>
            </div>
            <div className="short-description">Begginer</div>
          </div>


          <div className="wrapper-test">
            <div className="skill-3 skill">
              <svg height="100" 
                    viewBox="0 0 24 24" 
                    width="100"
                    className="rotate3" 
                    xmlns="http://www.w3.org/2000/svg">
                <path d="m12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35-.98-1-2.09-2.15-4.59-2.15m-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35-.98-1-2.09-2.15-4.59-2.15z"
                      fill="#ffffff"
                    />
              </svg>
            <div className="skill-text">Stylish</div>
            </div>
            <div className="short-description">Begginer</div>
          </div>


          <div className="wrapper-test">
            <div className="skill-4 skill">
              <svg height="88"
                    viewBox="0 0 32 32"
                    width="88"
                    xmlns="http://www.w3.org/2000/svg">
                  <path d="m16 13.146c-1.573 0-2.854 1.281-2.854 2.854s1.281 2.854 2.854 2.854 2.854-1.281 2.854-2.854-1.281-2.854-2.854-2.854zm-7.99 8.526-.63-.156c-4.688-1.188-7.38-3.198-7.38-5.521s2.693-4.333 7.38-5.521l.63-.156.177.625c.474 1.635 1.083 3.229 1.818 4.771l.135.281-.135.286c-.734 1.536-1.344 3.13-1.818 4.771zm-.921-9.74c-3.563 1-5.75 2.536-5.75 4.063s2.188 3.057 5.75 4.063c.438-1.391.964-2.745 1.578-4.063-.615-1.318-1.141-2.672-1.578-4.063zm16.901 9.74-.177-.625c-.474-1.635-1.083-3.229-1.818-4.766l-.135-.286.135-.286c.734-1.536 1.344-3.13 1.818-4.771l.177-.62.63.156c4.688 1.188 7.38 3.198 7.38 5.521s-2.693 4.333-7.38 5.521zm-.657-5.677c.641 1.385 1.172 2.745 1.578 4.063 3.568-1.005 5.75-2.536 5.75-4.063s-2.188-3.057-5.75-4.063c-.438 1.385-.964 2.745-1.578 4.063zm-16.255-4.068-.177-.625c-1.318-4.646-.917-7.979 1.099-9.141 1.979-1.141 5.151.208 8.479 3.625l.453.464-.453.464c-1.182 1.229-2.26 2.552-3.229 3.958l-.182.255-.313.026c-1.703.135-3.391.406-5.047.813zm2.531-8.838c-.359 0-.677.073-.943.229-1.323.766-1.557 3.422-.646 7.005 1.422-.318 2.859-.542 4.313-.672.833-1.188 1.75-2.323 2.734-3.391-2.078-2.026-4.047-3.172-5.458-3.172zm12.787 27.145c-.005 0-.005 0 0 0-1.901 0-4.344-1.427-6.875-4.031l-.453-.464.453-.464c1.182-1.229 2.26-2.552 3.229-3.958l.177-.255.313-.031c1.703-.13 3.391-.401 5.052-.813l.63-.156.177.625c1.318 4.646.917 7.974-1.099 9.135-.49.281-1.042.422-1.604.411zm-5.464-4.505c2.078 2.026 4.047 3.172 5.458 3.172h.005c.354 0 .672-.078.938-.229 1.323-.766 1.563-3.422.646-7.005-1.422.318-2.865.542-4.313.667-.833 1.193-1.75 2.323-2.734 3.396zm7.99-13.802-.63-.161c-1.661-.406-3.349-.677-5.052-.813l-.313-.026-.177-.255c-.969-1.406-2.047-2.729-3.229-3.958l-.453-.464.453-.464c3.328-3.417 6.5-4.766 8.479-3.625 2.016 1.161 2.417 4.495 1.099 9.141zm-5.255-2.276c1.521.141 2.969.365 4.313.672.917-3.583.677-6.24-.646-7.005-1.318-.76-3.797.406-6.401 2.943.984 1.073 1.896 2.203 2.734 3.391zm-10.058 20.583c-.563.01-1.12-.13-1.609-.411-2.016-1.161-2.417-4.49-1.099-9.135l.177-.625.63.156c1.542.391 3.24.661 5.047.813l.313.031.177.255c.969 1.406 2.047 2.729 3.229 3.958l.453.464-.453.464c-2.526 2.604-4.969 4.031-6.865 4.031zm-1.588-8.567c-.917 3.583-.677 6.24.646 7.005 1.318.75 3.792-.406 6.401-2.943-.984-1.073-1.901-2.203-2.734-3.396-1.453-.125-2.891-.349-4.313-.667zm7.979.838c-1.099 0-2.224-.047-3.354-.141l-.313-.026-.182-.26c-.635-.917-1.24-1.859-1.797-2.828-.563-.969-1.078-1.958-1.557-2.969l-.135-.286.135-.286c.479-1.01.995-2 1.557-2.969.552-.953 1.156-1.906 1.797-2.828l.182-.26.313-.026c2.234-.188 4.479-.188 6.708 0l.313.026.182.26c1.276 1.833 2.401 3.776 3.354 5.797l.135.286-.135.286c-.953 2.021-2.073 3.964-3.354 5.797l-.182.26-.313.026c-1.125.094-2.255.141-3.354.141zm-2.927-1.448c1.969.151 3.885.151 5.859 0 1.099-1.609 2.078-3.302 2.927-5.063-.844-1.76-1.823-3.453-2.932-5.063-1.948-.151-3.906-.151-5.854 0-1.109 1.609-2.089 3.302-2.932 5.063.849 1.76 1.828 3.453 2.932 5.063z"
                        fill="#ffffff"
                  />
              </svg>
              <div className="skill-text">Web App</div>
            </div>
            <div className="short-description">Begginer</div>
          </div>
        </div>



        <div className="button-box">
          <div className="btn-text">
            You can find more here
          </div>
          <button className="find-more">
            Find More
            <svg fill="none" 
                        height="48" 
                        viewBox="0 0 48 48" 
                        width="48" xmlns="http://www.w3.org/2000/svg">
                          <path d="m21 19 5.25 5-5.25 5" 
                                stroke="rgba(255, 255, 255, 0.80)" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                                strokeWidth="2"/>
            </svg>

          </button>
        </div>

      </div>

      {/* Work */}
      <div className="work">
        <div className="title-box">
          <div className="upper-title">A small collection</div>
          <div className="title">Part of our work</div>
        </div>
          {/* <Carousel /> */}
          <Carousel />
      </div>


      {/* Footer */}
      <div className="footer">
        <div className="contact-us-text">
          <div className="upper-title"> Contact Us</div>
          <div className="title">If you liked our work</div>
          <div className="subtitle">Don't hesitate and contact us!</div>
        </div>

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


export default Frontpage;