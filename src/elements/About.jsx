import React from 'react';
import PageHelmet from '../components/common/Helmet';
import CounterOne from '../elements/counters/CounterOne';
import Testimonial from '../elements/Testimonial';
import BrandTwo from '../elements/BrandTwo';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from 'react-icons/fi';
import Footer from '../components/footer/FooterOtherPage';

const About = () => {
  let title = 'About',
    description =
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going.';
  const handleShopNow = () => {
    window.location.replace('https://collectibles.atdang.com');
  };
  return (
    <React.Fragment id='about'>
      <PageHelmet pageTitle='About' />
      <div
        className='rn-page-title-area pt--120 pb--190 bg_image bg_image--7 '
        data-black-overlay='3'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='rn-page-title text-center pt--100'>
                <h2 className='title theme-gradient'>About</h2>
                <p>Description</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start About Area  */}
      <div className='rn-about-area ptb--120 bg_color--1'>
        <div className='rn-about-wrapper'>
          <div className='container'>
            <div className='row row--35 align-items-center'>
              <div className='col-lg-5'>
                <div className='thumbnail'>
                  <img
                    className='w-100'
                    src={require('../assets/images/about/about-3.jpg')}
                    alt='About Images'
                  />
                </div>
              </div>
              <div className='col-lg-7'>
                <div className='about-inner inner'>
                  <div className='section-title'>
                    <h2 className='title'>{title}</h2>
                    <p className='description'>{description}</p>
                  </div>
                  <div className='row mt--30'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                      <div className='about-us-list'>
                        <h3 className='title'>Our projects - What we do</h3>
                        <p>
                          Dang & Associates, Ltd. is a conglomerate operating in
                          Vietnam and the UK.
                        </p>
                        <button
                          className='rn-button-style--2 btn-primary-color'
                          onClick={handleShopNow}
                        >
                          Shop now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End About Area  */}

      {/* Start CounterUp Area */}
      <div className='rn-counterup-area pb--120 bg_color--1'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='section-title text-center'>
                <h3 className='fontWeight500'>Our Fun Facts</h3>
              </div>
            </div>
          </div>
          <CounterOne />
        </div>
      </div>
      {/* End CounterUp Area */}

      {/* Start Finding Us Area  */}
      <div className='rn-finding-us-area rn-finding-us bg_color--1'>
        <div className='inner'>
          <div className='content-wrapper'>
            <div className='content'>
              <h4 className='theme-gradient'>Find Your Work Now</h4>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that.
              </p>
              <a className='rn-btn btn-white' href='/about'>
                Get Started
              </a>
            </div>
          </div>
          <div className='thumbnail'>
            <div className='image'>
              <img
                src={require('../assets/images/about/finding-us-01.png')}
                alt='Finding Images'
              />
            </div>
          </div>
        </div>
      </div>
      {/* End Finding Us Area  */}

      {/* Start Team Area  */}
      <div className='rn-team-area bg_color--1 ptb--120'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='section-title service-style--3 text-center mb--25'>
                <h2 className='title'>Skilled Team</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            {/* Start Single Team  */}
            <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
              <div className='team'>
                <div className='thumbnail'>
                  <img
                    className='w-100'
                    src={require('../assets/images/team/team-01.jpg')}
                    alt='Blog Images'
                  />
                </div>
                <div className='content'>
                  <h4 className='title'>Jone Due</h4>
                  <p className='designation'>Sr. Web Developer</p>
                </div>
                <ul className='social-icon'>
                  <li>
                    <a href='https://www.facebook.com/'>
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href='http://linkedin.com/'>
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a href='https://twitter.com/'>
                      <FaTwitter />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* End Single Team  */}

            {/* Start Single Team  */}
            <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
              <div className='team'>
                <div className='thumbnail'>
                  <img
                    className='w-100'
                    src={require('../assets/images/team/team-02.jpg')}
                    alt='Blog Images'
                  />
                </div>
                <div className='content'>
                  <h4 className='title'>BM. Alamin</h4>
                  <p className='designation'>Sr. Web Developer</p>
                </div>
                <ul className='social-icon'>
                  <li>
                    <a href='https://www.facebook.com/'>
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href='http://linkedin.com/'>
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a href='https://twitter.com/'>
                      <FaTwitter />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* End Single Team  */}

            {/* Start Single Team  */}
            <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
              <div className='team'>
                <div className='thumbnail'>
                  <img
                    className='w-100'
                    src={require('../assets/images/team/team-03.jpg')}
                    alt='Blog Images'
                  />
                </div>
                <div className='content'>
                  <h4 className='title'>Jone Due</h4>
                  <p className='designation'>Sr. Web Developer</p>
                </div>
                <ul className='social-icon'>
                  <li>
                    <a href='https://www.facebook.com/'>
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href='http://linkedin.com/'>
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a href='https://twitter.com/'>
                      <FaTwitter />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* End Single Team  */}
          </div>
        </div>
      </div>
      {/* End Team Area  */}

      {/* Start Testimonial Area */}
      <div className='rn-testimonial-area bg_color--5 ptb--120'>
        <div className='container'>
          <Testimonial />
        </div>
      </div>
      {/* End Testimonial Area */}

      {/* Start Brand Area */}
      <div className='rn-brand-area brand-separation bg_color--5 ptb--120'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <BrandTwo />
            </div>
          </div>
        </div>
      </div>
      {/* End Brand Area */}

      {/* Start Back To Top */}
      <div className='backto-top'>
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

      <Footer />
    </React.Fragment>
  );
};
export default About;
