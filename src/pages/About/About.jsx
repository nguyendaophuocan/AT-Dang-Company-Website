import React, { useState, useEffect } from 'react';
import PageHelmet from '../../components/common/Helmet';
import Testimonial from '../../elements/Testimonial';
import BrandTwo from '../../elements/BrandTwo';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from 'react-icons/fi';
import Footer from '../../components/footer/FooterOtherPage';
import { Link } from 'react-router-dom';
import { useGetHomePageContentMutation } from '../../features/admin/adminApiSlice';
import { Spin } from 'antd';

const About = () => {
  const [dataAbout, setDataAbout] = useState([]);

  const handleShopNow = () => {
    window.location.replace('https://collectibles.atdang.com');
  };
  const [getHomePageContent, { isLoading: isLoadingContent }] =
    useGetHomePageContentMutation();

  const getAboutData = async () => {
    const result = await getHomePageContent().unwrap();
    setDataAbout(result);
  };

  useEffect(() => {
    getAboutData();
  }, []);
  return (
    <React.Fragment id='about'>
      <PageHelmet pageTitle='About' />
      <div
        className='rn-page-title-area pt--120 pb--190 bg_image bg_image--7 '
        data-black-overlay='3'
      >
        {isLoadingContent ? (
          <div
            style={{ textAlign: 'center', height: '150px' }}
            className='mt--100'
          >
            <Spin size='large' />
          </div>
        ) : (
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='rn-page-title text-center pt--100'>
                  <h2 className='title theme-gradient'>
                    {dataAbout[6]?.title}
                  </h2>
                  <p>{dataAbout[6]?.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
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
              {isLoadingContent ? (
                <div
                  style={{ textAlign: 'center', height: '150px' }}
                  className='mt--100'
                >
                  <Spin size='large' />
                </div>
              ) : (
                <div className='col-lg-7'>
                  <div className='about-inner inner'>
                    {dataAbout[7]?.enable && (
                      <div className='section-title'>
                        <h2 className='title'>{dataAbout[7]?.title}</h2>
                        <p className='description'>
                          {dataAbout[7]?.description}
                        </p>
                      </div>
                    )}
                    {dataAbout[8]?.enable && (
                      <div className='row mt--30'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                          <div className='about-us-list'>
                            <h3 className='title'>{dataAbout[8]?.title}</h3>
                            <p>{dataAbout[8]?.description}</p>

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
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* End About Area  */}

      {/* Start Finding Us Area  */}
      <div className='rn-finding-us-area rn-finding-us bg_color--1 mb--80'>
        {dataAbout[9]?.enable && (
          <div className='inner'>
            <div className='content-wrapper'>
              <div className='content'>
                <h4 className='theme-gradient'>{dataAbout[9]?.title}</h4>
                <p>{dataAbout[9]?.description}</p>
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
        )}
      </div>
      {/* End Finding Us Area  */}

      {/* Start Team Area  */}
      <div className='rn-team-area bg_color--1 ptb--120'>
        <div className='container'>
          {dataAbout[10]?.enable && (
            <div className='row'>
              <div className='col-lg-12'>
                <div className='section-title service-style--3 text-center mb--25'>
                  <h2 className='title'>{dataAbout[10]?.title}</h2>
                  <p>{dataAbout[9]?.description}</p>
                </div>
              </div>
            </div>
          )}

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
