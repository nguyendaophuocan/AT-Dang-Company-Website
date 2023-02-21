import React from 'react';
import PageHelmet from '../../components/common/Helmet';
import Testimonial from '../../elements/Testimonial';
import BrandTwo from '../../elements/BrandTwo';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from 'react-icons/fi';
import Footer from '../../components/footer/FooterOtherPage';
import { Link } from 'react-router-dom';

const About = () => {
  let title = 'What we do',
    description =
      'Dang & Associates, Ltd. is a conglomerate operating in multiple industries, currently being market research, retailing, imports and exports. Headquartered in Ho Chi Minh City, it has offices in London to ensure smooth operations in and between the two countries Vietnam and United Kingdom.      ';
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
                <h2 className='title theme-gradient'>About Us</h2>
                <p>
                  Dang & Associates, Ltd. operates based on trust from the
                  ground up.
                </p>
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
                    src={require('../../assets/images/about/about-3.jpg')}
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
                        <h3 className='title'>Our projects</h3>
                        <p>
                          Dang’s Collectibles is the first commercialized
                          project of Dang & Associates, Ltd., which focuses on
                          importing foreign goods to Vietnam. About the
                          motivation to start this project, we very much
                          understand the struggles of Vietnamese customers when
                          purchasing imported goods, and the largest concerns
                          are the availability and authenticity of products and
                          the long waiting time for the products to arrive to
                          them. This project is dedicated to solving these
                          problems by providing a convenient online shopping
                          experience for imported goods. More importantly, we
                          guarantee to bring whatever authentic from the brands
                          to our customers' doorsteps at the fastest pace
                          possible.
                        </p>
                        <p>
                          Our selective retailing project is dedicated to the
                          class and modern lifestyle of yours – our customers.
                          We will collect and hand-deliver all the finest pieces
                          that you are looking for, from fashion and luxury,
                          watches and accessories, wines and spirits, and more.
                        </p>
                        <br />
                        <button
                          className='rn-button-style--2 btn-primary-color'
                          onClick={handleShopNow}
                        >
                          Find out more
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

      {/* Start Finding Us Area  */}
      <div className='rn-finding-us-area rn-finding-us bg_color--1'>
        <div className='inner'>
          <div className='content-wrapper'>
            <div className='content'>
              <h4 className='theme-gradient'>Dang’s Bespoke Market Research</h4>
              <p>
                Noticing the needs and potential of Vietnamese businesses in
                trading internationally, our Market Research business service is
                founded to support these local institutional clients in their
                global expansion decisions. With our professional team of market
                researchers, we will help businesses understand the new market,
                customers, competitors, and other multiple factors that might
                affect their operations when expanding. These insights can
                strategically aid businesses in defining their market entrance
                strategies to successfully thrive in the new environments. We
                currently cover European countries and United Kingdom markets,
                while offering bespoke services based on our clients’ requests
                and the industries that they wish to operate in.
              </p>
              <Link to='/contact' className='rn-btn btn-white'>
                Contact for more
              </Link>
            </div>
          </div>
          <div className='thumbnail'>
            <div className='image'>
              <img
                src={require('../../assets/images/about/finding-us-01.png')}
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
                <h2 className='title'>Who we are</h2>
                <p>Content</p>
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
                    src={require('../../assets/images/team/team-01.jpg')}
                    alt='Blog Images'
                  />
                </div>
                <div className='content'>
                  <h4 className='title'>Anh Tu Dang</h4>
                  <p className='designation'> Managing Partner</p>
                  <p className='designation'>
                    Anh Tu Dang is a graduate from University College London
                    (UCL), majoring in Economics. He founded the business in
                    2021 when realizing various business opportunities between
                    the two countries, Vietnam and United Kingdom. Talking about
                    Dang & Associates, Ltd., he said: “...” (input company
                    vision)
                  </p>
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
                    src={require('../../assets/images/team/team-02.jpg')}
                    alt='Blog Images'
                  />
                </div>
                <div className='content'>
                  <h4 className='title'>Ngoc Vinh Quang Hoang</h4>
                  <p className='designation'>Partner</p>
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
                    src={require('../../assets/images/team/team-03.jpg')}
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
