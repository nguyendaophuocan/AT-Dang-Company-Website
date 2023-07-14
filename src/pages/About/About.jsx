import React, { useState, useEffect } from 'react';
import PageHelmet from '../../components/common/Helmet';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Footer from '../../components/footer/FooterHome';
import { Link } from 'react-router-dom';
import { useGetHomePageContentMutation } from '../../features/admin/adminApiSlice';
import { Spin } from 'antd';
import { FormattedMessage } from 'react-intl';
import { useGetHeaderMutation } from '../../features/header/headerApiSlice';
import ScrollToTop from '../../components/hoc/withScrollToTop';
import { FiChevronUp } from 'react-icons/fi';

const About = () => {
  const [dataAbout, setDataAbout] = useState([]);
  const [dataHeader, setDataHeader] = useState([]);

  const handleShopNow = () => {
    window.location.replace('https://collectibles.atdang.com');
  };
  const [getHomePageContent, { isLoading: isLoadingContent }] =
    useGetHomePageContentMutation();

  const [getHeader, { isLoading: isLoadingHeader }] = useGetHeaderMutation();

  const getAboutData = async () => {
    const result = await getHomePageContent().unwrap();
    setDataAbout(result);
  };

  const getHeaderData = async () => {
    const result = await getHeader('aboutus').unwrap();
    setDataHeader(result);
  };

  useEffect(() => {
    getAboutData();
    getHeaderData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment id='about'>
      <PageHelmet pageTitle='About' />
      <div
        className='rn-page-title-area pt--120 pb--190 bg_image bg_image--7 '
        data-black-overlay='3'
      >
        {isLoadingHeader ? (
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
                  <h2 className='title theme-gradient'>{dataHeader?.title}</h2>
                  <p>{dataHeader?.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className='rn-about-area ptb--120 bg_color--1'>
        <div className='rn-about-wrapper'>
          <div className='container'>
            <div className='row row--35 align-items-center'>
              <div className='inner-wrapper'>
                <div className='inner mb--90'>
                  {isLoadingContent ? (
                    <div style={{ textAlign: 'center' }} className='mt--100'>
                      <Spin size='large' />
                    </div>
                  ) : (
                    <>
                      {' '}
                      {dataAbout[5]?.enable && (
                        <div className='section-title'>
                          <h2 className='title'>{dataAbout[5]?.title}</h2>
                          <p className='description'>
                            {dataAbout[5]?.description}
                          </p>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
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
                  {dataAbout[6]?.enable && (
                    <div className='section-title'>
                      <h2 className='title'>{dataAbout[6]?.title}</h2>
                      <p className='description'>{dataAbout[6]?.description}</p>
                    </div>
                  )}
                </div>

                {dataAbout[6]?.enable && dataAbout[5]?.enable && (
                  <div className='row mt--30'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                      <div className='about-us-list'>
                        <br />
                        <button
                          className='rn-button-style--2 btn-primary-color'
                          onClick={handleShopNow}
                        >
                          <FormattedMessage id='FIND_OUT_MORE' />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='rn-finding-us-area rn-finding-us bg_color--1 mb--10'>
        {dataAbout[7]?.enable && (
          <div className='inner'>
            <div className='content-wrapper'>
              <div className='content'>
                <h4 className='theme-gradient'>{dataAbout[7]?.title}</h4>
                <p>{dataAbout[7]?.description}</p>
                <Link to='/contact' className='rn-btn btn-white'>
                  <FormattedMessage id='FIND_OUT_MORE' />
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

      <div className='rn-team-area bg_color--1 ptb--120'>
        <div className='container'>
          {dataAbout[8]?.enable && (
            <div className='row'>
              <div className='col-lg-12'>
                <div className='section-title service-style--3 text-center mb--25'>
                  <h2 className='title'>{dataAbout[8]?.title}</h2>
                  <p>{dataAbout[8]?.description}</p>
                </div>
              </div>
            </div>
          )}

          <div className='row'>
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
                  <h4 className='title'>Khanh Linh Dang</h4>
                  <p className='designation'>Partner</p>
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
          </div>
        </div>
      </div>

      <div className='backto-top'>
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      <Footer />
    </React.Fragment>
  );
};
export default About;
